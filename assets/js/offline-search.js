
/**
 * This script is used for the offline search feature.
 * It calls the worker.js to generate the index and search the index.
 * 
 * Adapted from code by Matt Walters https://www.mattwalters.net/posts/hugo-and-lunr/
 */

(function ($) {
    'use strict';

    $(document).ready(function () {
        const $searchInput = $('.td-search-input');

        $searchInput.data('html', true);
        $searchInput.data('placement', 'bottom');
        $searchInput.data(
            'template',
            '<div class="popover offline-search-result" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        );

        let worker = null;

        if (window.Worker) {
            worker = new Worker('/js/worker.js');
            const url = '/lunr-index.json';

            worker.postMessage({
                type: 'init',
                lunrIndexUrl: url,
                rawIndexUrl: $searchInput.data('offline-search-index-json-src')
            });

            worker.onerror = function (error) {
                console.error('Error in worker:', error);
            };
        }

        let currentTarget = null;

        worker.onmessage = function (event) {
            if (event.data.type === 'search') {
                const docs = event.data.docs;
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

                if (docs === undefined || docs.size === 0) {
                    $searchResultBody.append(
                        $('<p>').text(`No results found for query "${event.data.query}"`)
                    );
                } else {
                    docs.forEach((doc, key) => {
                        if (doc === undefined) {
                            return;
                        }

                        const href =
                            $searchInput.data('offline-search-base-href') +
                            key.replace(/^\//, '');

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
                            $('<small>').addClass('d-block text-muted').text(key)
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
            $targetSearchInput.popover('dispose');
            currentTarget = $targetSearchInput;

            const searchQuery = $targetSearchInput.val();
            if (searchQuery === '') {
                return;
            }

            worker.postMessage({
                type: 'search',
                currentPath: window.location.pathname,
                query: searchQuery,
                maxResults: $targetSearchInput.data('offline-search-max-results')
            });
        };

        // Renders the search results when the input changes.
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
