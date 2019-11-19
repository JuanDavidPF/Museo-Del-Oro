let url = document.location.href
let perfil;
let fondo = document.querySelector(".body")
let body = document.querySelector(".fondo")
let encabezado = document.querySelector(".header")
let title = document.querySelector(".titleProfile")
let ornamento = document.querySelector(".ornament")
let icon = document.querySelector(".icon")
let back = document.querySelector(".back")

if (url.includes("?")) {

    perfil = url.split("?")
    perfil = perfil[1]


    switch (perfil) {

        case "colegios":
            body.style.backgroundColor = "#B4612B"
            fondo.style.backgroundColor = "#B4612B"
            body.style.color = "#44240F"
            title.textContent = "Colegios"
            encabezado.style.borderColor = "#44240F"
            ornamento.src = "./../../data/img/ornamento4.png"
            icon.src = "./../../data/img/colIcon.png"
            break;

        case "extranjeros":
            body.style.backgroundColor = "#A7CBCD"
            body.style.color = "#475A5B"
            title.textContent = "Extranjeros"
            encabezado.style.borderColor = "#44240F"
            ornamento.src = "./../../data/img/ornamento3.png"
            icon.src = "./../../data/img/extIcon.png"
            break;

        case "ninos":
            body.style.backgroundColor = "#D08D49"
            body.style.color = "#65411D"
            title.textContent = "Niños"
            encabezado.style.borderColor = "#65411D"
            ornamento.src = "./../../data/img/ornamento2.png"
            icon.src = "./../../data/img/ninIcon.png"

            break;


        case "universitarios":
            body.style.backgroundColor = "#696A9F"
            body.style.color = "#2F304A"
            title.textContent = "Universitarios"
            encabezado.style.borderColor = "#2F304A"
            ornamento.src = "./../../data/img/ornamento1.png"
            icon.src = "./../../data/img/uniIcon.png"

            break;

        case "discapacidad":
            body.style.backgroundColor = "#8E7F58"
            body.style.color = "#3E3724"
            title.innerHTML = "Discapacidad <br> Visual"
            encabezado.style.borderColor = "#3E3724"
            ornamento.src = "./../../data/img/ornamento5.png"
            icon.src = "./../../data/img/disIcon.png"

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