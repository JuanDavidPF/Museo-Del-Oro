let contenido = document.querySelector(".content")
let cortina = document.querySelector(".courtain")
let empezar = document.querySelector(".btn_empezar")

let header = document.querySelector(".header")
let footer = document.querySelector(".footer")
let footerLeft = document.querySelector(".footerLeft")
let footerRight = document.querySelector(".footerRight")
let headerLeft = document.querySelector(".headerLeft")
let headerRight = document.querySelector(".headerRight")



if (document.location.href.includes("loaded")) {

    let animarPantalla = setTimeout(function () {
        cortina.classList.add("slideOutUp")
        contenido.classList.add("zoomIn")
        header.classList.add("slideInDown")
        footer.classList.add("slideInUp")
        footerLeft.classList.add("slideInLeft")
        headerLeft.classList.add("slideInLeft")
        footerRight.classList.add("slideInRight")
        headerRight.classList.add("slideInRight")

    }, 800)
}






let animarPantalla = setTimeout(function () {
    cortina.classList.add("slideOutUp")
    contenido.classList.add("zoomIn")
    header.classList.add("slideInDown")
    footer.classList.add("slideInUp")
    footerLeft.classList.add("slideInLeft")
    headerLeft.classList.add("slideInLeft")
    footerRight.classList.add("slideInRight")
    headerRight.classList.add("slideInRight")
}, 2500)




let CLICKMEPLEASE = setInterval(function () {

    alert = parseInt(Math.random() * 7)

    if (empezar.classList.contains("zoomIn")) empezar.classList.remove("zoomIn")
    if (empezar.classList.contains("bounce"))empezar.classList.remove("bounce")
    if (empezar.classList.contains("flash")) empezar.classList.remove("flash")
    if (empezar.classList.contains("pulse")) empezar.classList.remove("pulse")
    if (empezar.classList.contains("rubberBand")) empezar.classList.remove("rubberBand")
    if (empezar.classList.contains("shake")) empezar.classList.remove("shake")
    if (empezar.classList.contains("tada")) empezar.classList.remove("tada")
    if (empezar.classList.contains("heartBeat")) empezar.classList.remove("heartBeat")


    if (alert == 0) empezar.classList.add("bounce")
    if (alert == 1) empezar.classList.add("flash")
    if (alert == 2) empezar.classList.add("pulse")
    if (alert == 3) empezar.classList.add("rubberBand")
    if (alert == 4) empezar.classList.add("shake")
    if (alert == 5) empezar.classList.add("tada")
    if (alert == 6) empezar.classList.add("heartBeat")

}, 10000)

empezar.addEventListener("click", function () {

    contenido.classList.add("zoomOut")
    header.classList.add("slideOutUp")
    footer.classList.add("slideOutDown")
    footerLeft.classList.add("slideOutLeft")
    headerLeft.classList.add("slideOutLeft")
    footerRight.classList.add("slideOutRight")
    headerRight.classList.add("slideOutRight")

    pasarPagina = setTimeout(function () {

        document.location.href = "./bin/views/quienEres.html"

    }, 500)

})