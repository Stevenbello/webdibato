//                                          REFERENCIAS 
// Botones para navegar dentro de una misma pagina
// $('#btn-acerca-de').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: acercaDe - 40
//     }, 500);
// });


// Para poner y quitar clases con JS
// $("body").toggleClass("no_scroll");

// $("body").addClass("no_scroll");
// $("body").removeClass("no_scroll");

//                                          REFERENCIAS 


/* 
                                VARIABLES 
*/

const bars_search = document.getElementById("ctn_barra_navegacion");
const box_search = document.getElementById("resultado_navegacion");
const formulario_navegacion = document.getElementById("formulario_navegacion");

const boton = document.querySelector('#btn_navegacion');
const resultado = document.querySelector('#panel');



/*
                                Menu desplegable
*/

function abrirNav() {
    document.getElementById("navegacion_desplegable").style.width = "100%";
    document.getElementById("navegacion_desplegable").style.position = "absolute";
    $('body').css({ 'overflow': 'hidden' }); $(document).bind('scroll', function () { window.scrollTo(0, 0); });
}


function cerrarNav() {
    document.getElementById("navegacion_desplegable").style.width = "0%";
    $(document).unbind('scroll'); $('body').css({ 'overflow': 'visible' });
}


/*
                                Menu sticky
*/

function menuSticky() {
    //javascript for navigation bar effect on scroll
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    //javascript for responsive navigation sidebar menu
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
    });
}


/*
                                Cuadro de busqueda
*/

function mostrarBuscador() {
    // const bars_search = document.getElementById("ctn_barra_navegacion");
    // const formulario_navegacion = document.getElementById("formulario_navegacion");
    // const box_search = document.getElementById("resultado_navegacion");

    bars_search.style.position = "absolute";

    if (formulario_navegacion.value === "") {
        box_search.style.display = "none";
    }
}


function busqueda() {
    $("#icon_search").click(function () {
        $("#formulario_navegacion").toggleClass("active").focus;
        $("#btn_navegacion").toggleClass("active");
        $("#panel").toggleClass("active");
        $("#resultado_navegacion").toggleClass("active");
        $(this).toggleClass("animate");
        $("#formulario_navegacion").val("");
        $("html").toggleClass("no_scroll");
        mostrar_buscador();
    });
}


function ingresarTexto() {
    // Lista de paginas *arreglo de objetos* desde una API / BD
    const paginas = [
        { nombre: 'Cotizar' },
        { nombre: 'Nosotros' },
        { nombre: 'Catalogo' },
        { nombre: 'Contacto' },
        { nombre: 'Recetario' },
        { nombre: 'Promociones' },
        { nombre: 'Consideraciones' }
    ]

    // Guardar ID en variable para usar en JS
    // const formulario_navegacion = document.querySelector('#formulario_navegacion');
    // const boton = document.querySelector('#btn_navegacion');
    // const resultado = document.querySelector('#panel');

    // Funcion para acceder al texto que ingresa el usuario
    const filtrar = () => {   // La funcion de flecha * => * pinta en consola lo que el usuario ha escrito 
        resultado.innerHTML = '';
        // console.log(formulario.value);

        const texto = formulario_navegacion.value.toLowerCase();   // Guardar texto usuario y convertirlo en minuscula

        if (texto !== '') {
            for (let pagina of paginas) {    // Recorrido de los paginas // producto toma cada objeto de paginas
                let nombre_pagina = pagina.nombre.toLowerCase();

                if (nombre_pagina.indexOf(texto) !== -1) {   // Busca el texto ingresado dentro de nombre, si la encuentra retorna * diferente de -1 * !== -1

                    // ${...} = informacion dinamica
                    resultado.innerHTML += ` <li><a href="#">${pagina.nombre}</a></li> `
                }
            }

            // Si no se encontro un resulftado
            if (resultado.innerHTML === '') {
                resultado.innerHTML += ` <li> Producto no encontrado...</li> `
            }
        }
    }

    // boton con un evento que ejecuta la funcion filtrar
    boton.addEventListener('click', filtrar);

    // Cada que se ingresa texto se ejecuta filtrar
    formulario_navegacion.addEventListener('keyup', filtrar);

    filtrar();
}


/*
                                Efectos para responsive desing
*/

function efectos() {
    if ($(window).width() > 800) {
        document.getElementById('id-imagen-cuadrada-1').classList.add('imagen-cuadrada');
        document.getElementById('id-imagen-cuadrada-2').classList.add('imagen-cuadrada');
        document.getElementById('id-imagen-cuadrada-3').classList.add('imagen-cuadrada');
        document.getElementById('id-imagen-cuadrada-4').classList.add('imagen-cuadrada');
        document.getElementById('id-imagen-cuadrada-5').classList.add('imagen-cuadrada');
        document.getElementById('id-imagen-cuadrada-6').classList.add('imagen-cuadrada');

        document.getElementById('id-imagen-rectangular-1').classList.add('imagen-rectangular');
        document.getElementById('id-imagen-rectangular-2').classList.add('imagen-rectangular');
        document.getElementById('id-imagen-rectangular-3').classList.add('imagen-rectangular');

        document.getElementById('id-caja-texto-1').classList.add('caja-texto');
        document.getElementById('id-caja-texto-doble-1').classList.add('caja-texto-doble');

        document.getElementById('id-info-1').classList.add('info');
        document.getElementById('id-info-2').classList.add('info');

        document.getElementById('id-imagen-1').classList.add('imagen-derecha');
        document.getElementById('id-imagen-2').classList.add('imagen-izquierda');
        document.getElementById('id-imagen-3').classList.add('imagen-derecha');
        document.getElementById('id-imagen-4').classList.add('imagen-siguenos');
    }

    if ($(window).width() < 800) {
        document.getElementById('id-imagen-1').classList.add('imagen-menor800px');
        document.getElementById('id-imagen-2').classList.add('imagen-menor800px');
        document.getElementById('id-imagen-3').classList.add('imagen-menor800px');
        document.getElementById('id-imagen-4').classList.add('imagen-menor800px');
        document.getElementById('id-imagen-5').classList.add('imagen-menor800px');
    }
}


/*
                                Animaciones imagenes y texto
*/

function animacionesImagenesTextos() {
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 1000,
        delay: 400
    });

    // Secciones
    ScrollReveal().reveal('.titulo-section, .titulo-section-1, .titulo-section-1-2, .titulo-secundario, .titulo-section-news', { delay: 200, origin: 'top' });

    // Menu-Redes
    ScrollReveal().reveal('.item-redes', { delay: 200, origin: 'top' });

    // Imagenes
    ScrollReveal().reveal('.imagen-derecha, .imagen-siguenos', { delay: 300, origin: 'right' });
    ScrollReveal().reveal('.imagen-izquierda', { delay: 300, origin: 'left' });

    // Logo y Iconos redes sociales
    ScrollReveal().reveal('.icono-logo', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.media-info li', { distance: '400px', delay: 200, origin: 'left' });

    // Textos
    ScrollReveal().reveal('.caja-texto', { delay: 200, origin: 'top', interval: 100 });

    // Footer
    ScrollReveal().reveal('.nosotros', { distance: '200px', delay: 400, origin: 'left', interval: 400 });
    ScrollReveal().reveal('.links', { distance: '100px', delay: 400, origin: 'left', interval: 400 });
    ScrollReveal().reveal('.newsletter', { distance: '200px', delay: 400, origin: 'left', interval: 400 });
    ScrollReveal().reveal('.metodos-de-pago, .dibato', { distance: '50px', delay: 400, origin: 'bottom', interval: 400 });
}


/*
                                Funcion que activa todas cuando carga la pagina
*/

function allFunction() {
    menuSticky();
    busqueda();
    mostrarBuscador();
    ingresarTexto();
    efectos();
    animacionesImagenesTextos();
    abrirNav();
    cerrarNav();
}

window.onload = allFunction;
