if (typeof importScripts === 'function') {
    importScripts('https://unpkg.com/lunr@2.3.8/lunr.min.js');
}

let idx;
const resultDetails = new Map(); // Will hold the data for the search results (titles and summaries)
let indexReadyPromise;

// Initialize the index
self.onmessage = async function (event) {
    if (event.data.type === 'init') {
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
        try {
            await indexReadyPromise;
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
                })
                .slice(0, event.data.maxResults);

            const docs = new Map();
            results.forEach((result) => {
                if (resultDetails.get(result.ref) === undefined) {
                    return;
                }

                docs.set(result.ref, resultDetails.get(result.ref));
            });

            self.postMessage({ type: 'search', status: 'success', docs: docs });
        } catch (error) {
            self.postMessage({ type: 'search', status: 'error', message: 'Index not ready' });
        }
    }
};