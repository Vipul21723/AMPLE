self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'logo.png',  // Path to your notification icon
        badge: 'page.png' // Path to your notification badge
    };

    event.waitUntil(
        self.registration.showNotification('New PDF Available', options)
    );
});
