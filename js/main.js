Push.create("Hello world!", {
    body: "How's it hangin'?",
    icon: 'media/favicon.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
