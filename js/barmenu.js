var btn = document.getElementById('button-menu');
var menu = document.getElementById('menu');
var cerrar = document.getElementById('button-close');

btn.addEventListener('click', mostrarMenu);
cerrar.addEventListener('click', cerrarMenu);

function mostrarMenu() {
    menu.classList.remove('menu');
    menu.classList.add('menu-active');

    btn.classList.remove('button-menu');
    btn.classList.add('button-close');

    cerrar.classList.remove('button-close');
    cerrar.classList.add('button-active');
}
function cerrarMenu() {
    menu.classList.remove('menu-active');
    menu.classList.add('menu');

    btn.classList.remove('button-close');
    btn.classList.add('button-menu');

    cerrar.classList.remove('button-active');
    cerrar.classList.add('button-close');
}
