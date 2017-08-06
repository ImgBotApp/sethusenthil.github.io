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
console.log("%cHmmm so you are lookin' into my code?!", "color:#4285F4; font-size:30px; font-family:'Product Sans', Arial, sans-serif;");
console.log("%cIf you are really intrested HMU @ https://bit.ly/sethunum", "color:#4285F4; font-size:15px; font-family:'Product Sans', Arial, sans-serif;");
