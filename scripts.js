const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const mascarahidden = document.querySelector(".cliqueiMascara")


function mostrarForm() {
    form.style.left = "20%"
    form.style.transform = "translatX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translatX(0)"

}