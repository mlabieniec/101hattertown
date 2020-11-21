(function() {

    document.querySelector("#gallery").addEventListener("click", function(event) {
        if (event.target.matches("img")) {
            window.open(event.target.src, "_blank");
        }
    });

})();