importScripts('idb.js');
importScripts('store.js');

self.addEventListener('sync', function(event) {
    event.waitUntil(
        store.outbox('readonly').then(function(outbox) {
            return outbox.getAll();
        }).then(function(posts) {
            return Promise.all(posts.map(function (post) {
                    return fetch('/new-post', {
                        method: 'POST',
                        body: JSON.stringify({desc: post.desc}),
                        headers: {
                            'Accept': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                            'Content-Type': 'application/json'
                        }
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        if (data.result === 'success') {
                            return store.outbox('readwrite').then(function (outbox) {
                                return outbox.delete(post.id);
                            });
                        }
                    })
                }).catch(function (err) {
                    console.error(err);
                })
            )
        })
    )
});