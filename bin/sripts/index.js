let contenido = document.querySelector(".content")

let stopZoom = setTimeout(function () {
    contenido.classList.remove("zoomIn")
}, 1000)


let CLICKMEPLEASE = setInterval(function () {

    alert = parseInt(Math.random() * 7)

    if (contenido.classList.contains("bounce")) contenido.classList.remove("bounce")
    if (contenido.classList.contains("flash")) contenido.classList.remove("flash")
    if (contenido.classList.contains("pulse")) contenido.classList.remove("pulse")
    if (contenido.classList.contains("rubberBand")) contenido.classList.remove("rubberBand")
    if (contenido.classList.contains("shake")) contenido.classList.remove("shake")
    if (contenido.classList.contains("tada")) contenido.classList.remove("tada")
    if (contenido.classList.contains("heartBeat")) contenido.classList.remove("heartBeat")
   
   
    if (alert == 0) contenido.classList.add("bounce")
    if (alert == 1) contenido.classList.add("flash")
    if (alert == 2) contenido.classList.add("pulse")
    if (alert == 3) contenido.classList.add("rubberBand")
    if (alert == 4) contenido.classList.add("shake")
    if (alert == 5) contenido.classList.add("tada")
    if (alert == 6) contenido.classList.add("heartBeat")
   
  

}, 10000)