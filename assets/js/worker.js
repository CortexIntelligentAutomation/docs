/**
 * This worker is responsible for loading the lunr index, searching the index and returning the results.
 * 
 * It has 2 action types, 'init' and 'search'.
 * 
 * 'init' action is used to load the lunr index and the raw index data.
 * 'search' action is used to search the lunr index with the provided query.
 */

if (typeof importScripts === 'function') {
    importScripts('https://unpkg.com/lunr@2.3.8/lunr.min.js');
}

let idx;
const versionRegex = new RegExp("^\/docs\/([0-9\.]*|latest)\/");
const resultDetails = new Map();
let indexReadyPromise;

self.onmessage = async function (event) {
    if (event.data.type === 'init') {
        // Initialize the lunr index and the raw index data.
        indexReadyPromise = new Promise(async (resolve, reject) => {
            try {
                const rawIndex = await fetch(event.data.rawIndexUrl);
                let json = await rawIndex.json();
                json.forEach((doc) => {
                    resultDetails.set(doc.ref, {
                        version: doc.version,
                        title: doc.title,
                        excerpt: doc.excerpt,
                    });
                });

                const lunrIndex = await fetch(event.data.lunrIndexUrl);
                json = await lunrIndex.json();
                idx = lunr.Index.load(json);
                resolve();
                self.postMessage({ type: 'init', status: 'success' });
            } catch (error) {
                reject(error);
                self.postMessage({ type: 'init', status: 'error', message: error.message });
            }
        });
    } else if (event.data.type === 'search') {
        // Search the lunr index with the provided query.
        try {
            await indexReadyPromise;
            const regexResults = versionRegex.exec(event.data.currentPath);
            const version = regexResults
                ? regexResults[0]
                : undefined;

            const results = idx
                .query((q) => {
                    const tokens = lunr.tokenizer(event.data.query.toLowerCase());
                    tokens.forEach((token) => {
                        const queryString = token.toString();
                        q.term(queryString, {
                            boost: 100,
                        });
                        q.term(queryString, {
                            wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
                            boost: 10,
                        });
                        q.term(queryString, {
                            editDistance: 2,
                        });
                    });
                });

            const docs = new Map();
            let count = 0;

            for (const result of results) {
                if (count >= event.data.maxResults) {
                    break;
                }

                if (resultDetails.get(result.ref) === undefined) {
                    continue;
                }

                if (version === undefined) {
                    docs.set(result.ref, resultDetails.get(result.ref));
                } else if (result.ref.startsWith(version)) {
                    docs.set(result.ref, resultDetails.get(result.ref));
                } else {
                    continue;
                }

                count++;
            }

            self.postMessage({ type: 'search', status: 'success', query: event.data.query , docs: docs });
        } catch (error) {
            self.postMessage({ type: 'search', status: 'error', message: 'Index not ready' });
        }
    }
};