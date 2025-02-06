importScripts('https://unpkg.com/lunr@2.3.8/lunr.min.js');

let idx;
let indexReadyPromise;

// Initialize the index
self.onmessage = async function(event) {
    if (event.data.type === 'init') {
        indexReadyPromise = new Promise(async (resolve, reject) => {
            try {
                console.log(event.data);
                const response = await fetch(event.data.url);
                const data = await response.json();
                idx = lunr.Index.load(data);
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

            self.postMessage({ type: 'search', results: results });
        } catch (error) {
            self.postMessage({ type: 'search', status: 'error', message: 'Index not ready' });
        }
    }
};