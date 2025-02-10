const fs = require('fs');
const lunr = require('lunr');

const data = JSON.parse(fs.readFileSync('./docs/offline-search-index.json'));

const idx = lunr(function () {
    this.ref('ref');
    this.field('title', { boost: 5 });
    this.field('categories', { boost: 3 });
    this.field('tags', { boost: 3 });
    this.field('description', { boost: 2 });
    this.field('body');

    data.forEach((doc) => {let docToAdd;
        if (doc
            && doc.ref !== undefined
            && !doc.ref.includes('/_shared/')
        ) {
            this.add(doc);
        }
    });
});

fs.writeFileSync('./assets/json/lunr-index.json', JSON.stringify(idx));