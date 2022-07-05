import comments from "./comments.json";

export default function getCommentsDivs() {
  const divs = [];
  comments.forEach((element) => {
    const div = document.createElement("div");
    div.className = "comment";
    const nombre = document.createElement("span");
    const comentario = document.createElement("p");
    nombre.textContent = element.name;
    comentario.textContent = element.review.replaceAll('"', "").trim();
    div.appendChild(comentario);
    div.appendChild(nombre);
    divs.push(div);
  });
  return divs;
}
