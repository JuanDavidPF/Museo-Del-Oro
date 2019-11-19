let perfil = document.querySelectorAll(".perfil")
let back = document.querySelector(".back")
let go = document.querySelectorAll(".go")
let header = document.querySelector(".encabezado")
let main = document.querySelector(".container")



back.addEventListener("click", function () {

    header.classList.add("slideOutUp")
    main.classList.add("slideOutDown")

    cambiarPantalla = setTimeout(function () {
        document.location.href = "./../../index.html?loaded"

    }, 1000)
})


for (let index = 0; index < perfil.length; index++) {

    perfil[index].addEventListener("click", function () {



        for (let j = 0; j < perfil.length; j++) {

            if (perfil[j] == perfil[index]) {
                perfil[j].style.transition = "border-width 0.3s ease-in-out"
                perfil[j].style.borderWidth = "7px"

            } else {
                perfil[j].style.borderWidth = "0"
            }
        }
    })
}


for (let i = 0; i < go.length; i++) {

    go[i].addEventListener("click", function () {


        if (i == 0) tipoPerfil = "colegios"
        if (i == 1) tipoPerfil = "extranjeros"
        if (i == 2) tipoPerfil = "ninos"
        if (i == 3) tipoPerfil = "universitarios"
        if (i == 4) tipoPerfil = "discapacidad"


        header.classList.add("slideOutUp")
        main.classList.add("slideOutLeft")

        cambiarPantalla = setTimeout(function () {
            document.location.href = "./descripcion.html?" + tipoPerfil
            
        }, 1000)

    })

}