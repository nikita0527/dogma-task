document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('.mobile-menu');
    var toogleButton = document.querySelector('.navbar-toggle');
    toogleButton.addEventListener('click', function() {
        menu.classList.toggle('offcanvas-menu');
        toogleButton.classList.toggle('active');
        document.body.classList.toggle('offcanvas-open');
    });
});