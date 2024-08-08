let ng = document.querySelectorAll('.v');
ng.forEach(function(negro) {
    negro.addEventListener('click', function() {
        negro.classList.toggle('black')
        console.log("hola");
    });
});
let bl = document.querySelectorAll('.blancas');
bl.forEach(function(shadow) {
    shadow.addEventListener('click', function() {
        shadow.classList.toggle('shadow');
        console.log("hola");
    });
});

