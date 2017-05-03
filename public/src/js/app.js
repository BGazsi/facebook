document.addEventListener('DOMContentLoaded', function(event) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/public/dist/js/sw.js').then(function(reg) {
            if ('sync' in reg) {
                var form = document.querySelector('.js-background-sync');
                var postContent = form.querySelector('#desc');

                form.addEventListener('submit', function(event) {
                    debugger;
                    event.preventDefault();
                    var post = {
                        desc: postContent.value
                    };

                    store.outbox('readwrite').then(function(outbox) {
                        return outbox.put(post);
                    }).then(function() {
                        bodyField.value = '';
                        if (postContent.getAttribute('type') !== 'hidden') {
                            postContent.value = '';
                        }
                        return reg.sync.register('post');
                    }).catch(function(err) {
                        // something went wrong with the database or the sync registration, log and submit the form
                        console.error(err);
                        form.submit();
                    });
                });
            }
        }).catch(function(err) {
            console.error(err); // the Service Worker didn't install correctly
        });
    }
});