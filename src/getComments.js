// Funciones para correr en la página de bigBox / vidanatural

function loadComments() {
    let e = document.querySelector(".seeMoreReviews")
    for (let index = 0; index < 100; index++) {
        e.click()
    }
    console.log("Comments loaded")
}

function getComments() {
    let lista = []
    let divs = document.querySelectorAll(".Review")
    divs.forEach(element => {
        let date = element.querySelector(".reviewDate").textContent
        let ps = element.querySelectorAll("p")
        let name = ps[0].textContent
        let review = ps[1].textContent
        lista.push({"date":date, "name":name, "review":review})
    });
    return lista    
}

