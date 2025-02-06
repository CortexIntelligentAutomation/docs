// Adapted from code by Matt Walters https://www.mattwalters.net/posts/hugo-and-lunr/

(function ($) {
    'use strict';

    $(document).ready(function () {
        const $searchInput = $('.td-search-input');

        //
        // Options for popover
        //

        $searchInput.data('html', true);
        $searchInput.data('placement', 'bottom');
        $searchInput.data(
            'template',
            '<div class="popover offline-search-result" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        );

        //
        // Lunr
        //

        let idx = null; // Lunr index
        const resultDetails = new Map(); // Will hold the data for the search results (titles and summaries)
        let worker = null;


        if (window.Worker) {
            worker = new Worker('/js/worker.js');
            const url = '/json/lunr-index.json';

            worker.postMessage({ type: 'init', url: url });

            worker.onerror = function (error) {
                console.error('Error in worker:', error);
            };
        }
        
        $.ajax($searchInput.data('offline-search-index-json-src')).then(
            (data) => {
                data.forEach((doc) => {
                    resultDetails.set(doc.ref, {
                        version: doc.version,
                        title: doc.title,
                        excerpt: doc.excerpt,
                    });
                });
            }
        );

        let currentTarget = null;

        worker.onmessage = function (event) {
            if (event.data.type === 'search') {
                const results = event.data.results
                console.log('Search results:', results);
                const $html = $('<div>');

                $html.append(
                    $('<div>')
                        .css({
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '1em',
                        })
                        .append(
                            $('<span>')
                                .text('Search results')
                                .css({ fontWeight: 'bold' })
                        )
                        .append(
                            $('<i>')
                                .addClass('fas fa-times search-result-close-button')
                                .css({
                                    cursor: 'pointer',
                                })
                        )
                );

                const $searchResultBody = $('<div>').css({
                    maxHeight: `calc(100vh - ${currentTarget.offset().top -
                        $(window).scrollTop() +
                        180
                        }px)`,
                    overflowY: 'auto',
                });
                $html.append($searchResultBody);

                if (results.length === 0) {
                    currentTarget.append(
                        $('<p>').text(`No results found for query "${searchQuery}"`)
                    );
                } else {
                    results.forEach((r) => {
                        const doc = resultDetails.get(r.ref);

                        const href =
                            $searchInput.data('offline-search-base-href') +
                            r.ref.replace(/^\//, '');

                        const $entry = $('<div>').addClass('mt-4').addClass('search-result');

                        $entry.append(
                            $('<a>')
                                .addClass('d-block')
                                .css({
                                    fontSize: '1.2rem',
                                })
                                .attr('href', href)
                                .text(doc.title)
                        );

                        $entry.append(
                            $('<small>').addClass('d-block text-muted').text(r.ref)
                        );

                        $entry.append($('<p>').text(doc.excerpt));

                        $searchResultBody.append($entry);
                    });
                }

                currentTarget.on('shown.bs.popover', () => {
                    $('.search-result-close-button').on('click', () => {
                        currentTarget.val('');
                        currentTarget.trigger('change');
                    });
                });

                currentTarget
                    .data('content', $html[0].outerHTML)
                    .popover('show');
            }
        }

        const render = ($targetSearchInput) => {
            // Dispose the previous result
            $targetSearchInput.popover('dispose');
            currentTarget = $targetSearchInput;

            //
            // Search
            //


            const searchQuery = $targetSearchInput.val();
            if (searchQuery === '') {
                return;
            }

            worker.postMessage({ type: 'search', query: searchQuery, maxResults: $targetSearchInput.data('offline-search-max-results') });

            // const results = idx
            //     .query((q) => {
            //         const tokens = lunr.tokenizer(searchQuery.toLowerCase());
            //         tokens.forEach((token) => {
            //             const queryString = token.toString();
            //             q.term(queryString, {
            //                 boost: 100,
            //             });
            //             q.term(queryString, {
            //                 wildcard:
            //                     lunr.Query.wildcard.LEADING |
            //                     lunr.Query.wildcard.TRAILING,
            //                 boost: 10,
            //             });
            //             q.term(queryString, {
            //                 editDistance: 2,
            //             });
            //         });
            //     })
            //     .slice(
            //         0,
            //         $targetSearchInput.data('offline-search-max-results')
            //     );

            //
            // Make result html
            //


        };

        //
        // Register handler
        //

        $searchInput.on('change', (event) => {
            render($(event.target));

            // Hide keyboard on mobile browser
            $searchInput.blur();
        });

        // Prevent reloading page by enter key on sidebar search.
        $searchInput.closest('form').on('submit', () => {
            return false;
        });
    });
})(jQuery);
