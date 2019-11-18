let perfil = document.querySelectorAll(".perfil")

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