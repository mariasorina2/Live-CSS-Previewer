const inputCSS = document.getElementById("input-css")
const riquadro = document.getElementById("riquadro-anteprima")
const bottoneRipristina = document.getElementById("ripristina-css")
const bottoneTema = document.getElementById("tema-toggle")

const stileSalvato = localStorage.getItem("cssUtente")
if (stileSalvato) {
    inputCSS.value = stileSalvato
    riquadro.setAttribute("style", stileSalvato)
}

inputCSS.addEventListener("input", () => {
    const stile = inputCSS.value
    riquadro.setAttribute("style", stile)
    localStorage.setItem("cssUtente", stile)
})

bottoneRipristina.addEventListener("click", () => {
    inputCSS.value = ""
    riquadro.removeAttribute("style")
    localStorage.removeItem("cssUtente")
})

bottoneTema.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})


