let url = document.location.href
let perfil;

let body = document.querySelector(".fondo")
let encabezado = document.querySelector(".header")
let title = document.querySelector(".titleProfile")
let ornamento = document.querySelector(".ornament")
let icon = document.querySelector(".icon")
let back = document.querySelector(".back")
let boton = document.querySelector(".btn")
let descripcion = document.querySelector(".descripcion")

if (url.includes("?")) {

    perfil = url.split("?")
    perfil = perfil[1]


    switch (perfil) {

        case "colegios":
            body.style.backgroundColor = "#B4612B"
            body.style.color = "#44240F"
            title.textContent = "Colegios"

            encabezado.style.borderColor = "#44240F"
            ornamento.src = "./../../data/img/ornamento4.png"
            icon.src = "./../../data/img/colIcon.png"
            descripcion.textContent = "¿Que tanto conoces sobre la cultura Calima?. Atrevete a vivir el reto del gran Cacique, donde coonocerás las palabras más icónicas de la cultura Calima a través de un juego de charadas."

            boton.addEventListener("click", function () {

                body.classList.add("slideOutLeft");

                let cambio = setTimeout(function () {

                    document.location.href = "https://alegonzalez01.github.io/Colegios/"

                }, 1000)

            })

            break;

        case "extranjeros":
            body.style.backgroundColor = "#A7CBCD"
            body.style.color = "#475A5B"
            title.textContent = "Extranjeros"
            descripcion.textContent = "Learn more information about the most spectacular pieces of the Calima Culture and check out what was happening in other parts of the world meanwhile Calima culture developed their pieces."

            encabezado.style.borderColor = "#44240F"
            ornamento.src = "./../../data/img/ornamento3.png"
            icon.src = "./../../data/img/extIcon.png"


            boton.addEventListener("click", function () {

                body.classList.add("slideOutLeft");

                let cambio = setTimeout(function () {
                    document.location.href = "https://victorlifting.github.io/Extrangeros-PI/"


                }, 1000)

            })

            break;

        case "ninos":
            body.style.backgroundColor = "#D08D49"
            body.style.color = "#65411D"
            title.textContent = "Niños"
            encabezado.style.borderColor = "#65411D"
            ornamento.src = "./../../data/img/ornamento2.png"
            descripcion.textContent="¿Sabes cuales son los animales más representativos de la cultura Calima? Descúbrelos a través de adivinanzas místicas las cuales te darán las pistas necesarias para armar el rompecabezas que te revelará los secretos."
            icon.src = "./../../data/img/ninIcon.png"

            boton.addEventListener("click", function () {

                body.classList.add("slideOutLeft");

                let cambio = setTimeout(function () {

                    document.location.href = "https://isabella1722.github.io/JuegoFamilia/"

                }, 1000)
            })

            break;


        case "universitarios":
            body.style.backgroundColor = "#696A9F"
            body.style.color = "#2F304A"
            title.textContent = "Universitarios"
            encabezado.style.borderColor = "#2F304A"
            ornamento.src = "./../../data/img/ornamento1.png"
            icon.src = "./../../data/img/uniIcon.png"
            descripcion.textContent="¿Necesitas información práctica de la cultura Calima para desarrollar algún trabajo? aquí encontrarás infografías con datos sencillos de leer, escanea los códigos QR de las obras de tu interés para encontrar información relacionada."


            boton.addEventListener("click", function () {

                body.classList.add("slideOutLeft");

                let cambio = setTimeout(function () {

                    document.location.href = "https://metalprime.github.io/-Universitarios--PI/"

                }, 1000)

            })

            break;



        case "discapacidad":
            body.style.backgroundColor = "#8E7F58"
            body.style.color = "#3E3724"
            title.innerHTML = "Discapacidad <br> Visual"
            encabezado.style.borderColor = "#3E3724"
            ornamento.src = "./../../data/img/ornamento5.png"
            icon.src = "./../../data/img/disIcon.png"
            descripcion.textContent="Recorre la exposición del museo guiado por un texto en Braille y quédate inmerso en  las montañas calimas a través de una narración sonora que te llevará a tiempos pasados."


            boton.addEventListener("click", function () {

                body.classList.add("slideOutLeft");

                let cambio = setTimeout(function () {

                    document.location.href = "https://luisa1509.github.io/Invidentes-Museo/"

                }, 1000)

            })

            break;
    }




    back.addEventListener("click", function () {

        body.classList.add("slideOutRight");

        cambiarPantalla = setTimeout(function () {
            document.location.href = "./quienEres.html"

        }, 1000)

    })





} else {
    document.location.href = "./quienEres.html"
}