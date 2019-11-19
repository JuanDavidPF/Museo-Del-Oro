let url = document.location.href
let perfil;
let body = document.querySelector(".fondo")
let encabezado = document.querySelector(".header")
let title = document.querySelector(".titleProfile")

if (url.includes("?")) {

    perfil = url.split("?")
    perfil = perfil[1]


    switch (perfil) {

        case "colegios":
            body.style.backgroundColor = "#B4612B"
            body.style.color = "#44240F"
            title.textContent = "Colegios"
            encabezado.style.borderColor = "#44240F"

            break;

        case "extranjeros":
            body.style.backgroundColor = "#A7CBCD"
            body.style.color = "#475A5B"
            title.textContent = "Extranjeros"
            encabezado.style.borderColor = "#44240F"
            break;

        case "ninos":
            body.style.backgroundColor = "#D08D49"
            body.style.color = "#65411D"
            title.textContent = "Niños"
            encabezado.style.borderColor = "#65411D"
            break;


        case "universitarios":
            body.style.backgroundColor = "#696A9F"
            body.style.color = "#2F304A"
            title.textContent = "Universitarios"
            encabezado.style.borderColor = "#2F304A"
            break;

        case "discapacidad":
            body.style.backgroundColor = "#8E7F58"
            body.style.color = "#3E3724"
            title.textContent = "Discapacidad Visual"
            encabezado.style.borderColor = "#3E3724"
            break;




    }












} else {
    document.location.href = "./quienEres.html"
}