const fs = require('fs');
const lunr = require('lunr');

const args = process.argv.slice(2);

// Arguments should only be provided from a pipeline build.
const isFromPipeline = args[0] !== undefined;

const source = isFromPipeline
    ? args[0]
    : "./docs";

const destination = isFromPipeline
    ? `${args[0]}`
    : "./docs";

const data = JSON.parse(fs.readFileSync(`${source}/offline-search-index.json`));

const idx = lunr(function () {
    this.ref('ref');
    this.field('title', { boost: 5 });
    this.field('categories', { boost: 3 });
    this.field('tags', { boost: 3 });
    this.field('description', { boost: 2 });
    this.field('body');

    data.forEach((doc) => {
        if (doc
            && doc.ref !== undefined
            && !doc.ref.includes('/_shared/')
        ) {
            this.add(doc);
        }
    });
});

if (!isFromPipeline) {
    fs.writeFileSync(`./content/static/lunr-index.json`, JSON.stringify(idx));
}

fs.writeFileSync(`${destination}/lunr-index.json`, JSON.stringify(idx));

// check if file got created
if (!fs.existsSync(`${destination}/lunr-index.json`)) {
    console.error('Failed to create lunr index, hugo must be build using `hugo` command before running this script.');
    process.exit(1);
}