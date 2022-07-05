/* eslint-disable no-param-reassign */
import comments from "./comments.json";

function getComments() {
  const res = [];
  comments.forEach((element) => {
    const data = {};
    data.nombre = element.name;
    data.comentario = element.review.replaceAll('"', "").trim();
    res.push(data);
  });
  return res;
}

function cambiarTextos(coms, i, p, sp) {
  setTimeout(() => {
    p.textContent = coms[i].comentario;
    sp.textContent = coms[i].nombre;
    p.style.opacity = 1;
    sp.style.opacity = 1;
  }, 2000);
}

export { getComments, cambiarTextos };
