let search = document.querySelector(".search__input")
let results = document.querySelector(".content__results")
let card = document.querySelectorAll(".container__card")

search.addEventListener("input", e => {
    let dato = search.value
    if (dato.length > 0) {
        results.classList.remove("ocultar")
    } else {
        results.classList.add("ocultar")
        results.innerHTML = ""
    }
    console.log(dato)
    buscarDatos(dato)
})

function buscarDatos(value) {
    card.forEach(ele => {
        let encontrado = false
        let title = ele.querySelectorAll(".card__title")
        title.forEach(title_dato => {
            if (new RegExp(value.toLowerCase()).test(title_dato.textContent.toLowerCase())) {
                encontrado = true
            }
        })
        resultados(encontrado, ele)
    })
}

function resultados(valor1, valor2) {
    console.log(valor2)
    if (valor1) {
        valor2.classList.remove("ocultar")
    } else {
        valor2.classList.add("ocultar")
        mostrarResultados()
    }
    if(search.value.length>0){
        mostrarResultados()
    }
}

function crearHtml(data) {
    let img = data.querySelector(".card__img").src
    let titulo = data.querySelector(".card__title").textContent
    return `<figure class="content__resultados">
                <img class="results__img" src="${img}">
                <h1 class="card__title card__title-width">${titulo}</h1>
            </figure>
             `
}

function mostrarResultados() {
    results.innerHTML = ""
    let div = Array.from(card).filter(clases => !clases.classList.contains("ocultar")).map(crearHtml).join(" ")
    console.log(div)
    results.insertAdjacentHTML("beforeend", div)
}