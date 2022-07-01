// Funciones para correr en la página de bigBox / vidanatural
// https://www.bigbox.com.ar/experiencias/vidanatural/

function loadComments() {
  const e = document.querySelector(".seeMoreReviews");
  for (let index = 0; index < 100; index++) {
    e.click();
  }
  console.log("Comments loaded");
}

function getComments() {
  const lista = [];
  const divs = document.querySelectorAll(".Review");
  divs.forEach((element) => {
    const ps = element.querySelectorAll("p");
    if (ps[1].textContent.match(".*Nilda.*") != null) {
      const date = element.querySelector(".reviewDate").textContent;
      const name = ps[0].textContent;
      const review = ps[1].textContent;
      lista.push({ date, name, review });
    }
  });
  return lista;
}
