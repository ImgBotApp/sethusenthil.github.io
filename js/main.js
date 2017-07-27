Push.create("👋 Hi! Whats up?", {
    body: "You will only be notified when its nessery!",
    icon: 'media/notifi.png',
    timeout: 8000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
