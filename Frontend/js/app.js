// js/app.js

const datosSoftStop = [
    {
        titulo: "RESET",
        subtitulo: "HAZ UNA PAUSA. VUELVE A TI",
        descripcion: "Cuando te sientas saturado, desconectado o simplemente necesites un momento para respirar, Reset te ofrece un espacio breve para detenerte y volver al presente. A través de prácticas cortas de mindfulness, recuperas un poco de calma, estés donde estés."
    },
    {
        titulo: "UNSTUCK",
        subtitulo: "LIBERA TUS IDEAS",
        descripcion: "Encuentra nuevos enfoques y perspectivas cuando sientas que no puedes avanzar. Estrategias guiadas para reactivar tu creatividad."
    },
    {
        titulo: "THINK",
        subtitulo: "ENFOCA TU MENTE",
        descripcion: "Herramientas de concentración profunda para esos momentos donde necesitas máxima productividad y cero distracciones."
    },
    {
        titulo: "JOURNEY",
        subtitulo: "SIGUE TU PROGRESO",
        descripcion: "Visualiza todo lo que has logrado. Registra tu avance, tus estados de ánimo y celebra cada pequeño paso en tu proceso."
    },
    {
        titulo: "CHECK-IN",
        subtitulo: "ESCUCHA TU CUERPO",
        descripcion: "Un escaneo rápido antes de empezar. Ajusta tu sesión de trabajo de acuerdo a tu nivel de energía actual."
    }
];

let indiceActual = 0;
const tarjetas = document.querySelectorAll('.TarjetaCarrusel');
const puntos = document.querySelectorAll('.Punto');
const contenedorTextos = document.querySelector('.ContenedorTextosFuncion');

function actualizarVista() {
    const total = tarjetas.length;

    tarjetas.forEach((tarjeta, i) => {
        tarjeta.classList.remove('activa', 'prev', 'next', 'oculta');
        
        if (i === indiceActual) {
            tarjeta.classList.add('activa');
        } else if (i === (indiceActual - 1 + total) % total) {
            tarjeta.classList.add('prev');
        } else if (i === (indiceActual + 1) % total) {
            tarjeta.classList.add('next');
        } else {
            tarjeta.classList.add('oculta');
        }
    });

    puntos.forEach((punto, i) => {
        punto.classList.toggle('activo', i === indiceActual);
    });

    contenedorTextos.style.opacity = 0; 
    
    setTimeout(() => {
        document.getElementById('TituloFuncion').textContent = datosSoftStop[indiceActual].titulo;
        document.getElementById('SubtituloFuncion').textContent = datosSoftStop[indiceActual].subtitulo;
        document.getElementById('DescripcionFuncion').textContent = datosSoftStop[indiceActual].descripcion;
        
        contenedorTextos.style.opacity = 1; 
    }, 400);
}

document.querySelector('.BtnPrev').addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + tarjetas.length) % tarjetas.length;
    actualizarVista();
});

document.querySelector('.BtnNext').addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % tarjetas.length;
    actualizarVista();
});

tarjetas.forEach((tarjeta, i) => tarjeta.addEventListener('click', () => { indiceActual = i; actualizarVista(); }));
puntos.forEach((punto, i) => punto.addEventListener('click', () => { indiceActual = i; actualizarVista(); }));

actualizarVista();