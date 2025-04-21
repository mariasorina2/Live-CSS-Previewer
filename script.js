const inputCSS = document.getElementById("input-css")
const riquadro = document.getElementById("riquadro-anteprima")
const bottoneRipristina = document.getElementById("ripristina-css")
const bottoneTema = document.getElementById("tema-toggle")

const cssSalvato = localStorage.getItem("cssUtente")
if (cssSalvato) {
    inputCSS.value = cssSalvato
    riquadro.style = cssSalvato
}

inputCSS.addEventListener("input", () => {
    const css = inputCSS.value
    riquadro.style = css
    localStorage.setItem("cssUtente", css)
})

bottoneRipristina.addEventListener("click", () => {
    inputCSS.value = ""
    riquadro.removeAttribute("style")
    localStorage.removeItem("cssUtente")
})

bottoneTema.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})
