import "./style/style.css";
import "./style/header.css";
import "./style/quienesSomos.css";
import "./style/servicios.css";
import "./style/promociones.css";
import "./style/contacto.css";
import "./style/efectos.css";
import "./style/comments.css";
import imgLogo from "./imgHandlers/img_logo";
import imgServicios from "./imgHandlers/img_servicios";
import imgPromociones from "./imgHandlers/img_promociones";
import imgRedes from "./imgHandlers/img_redes";
import imgIcon from "./imgHandlers/img_icon";
import imgQuienSomos from "./imgHandlers/img_quieneSomos";
import imgArrow from "./imgHandlers/img_arrow";
import getCommentsDivs from "./comments/getCommentsDivs";
import dropdownMenu from "./components/dropdown";
import { showArrow, goToTop } from "./components/scrolling";

// Aplicar imagenes

imgLogo();
imgServicios();
imgPromociones();
imgRedes();
imgIcon();
imgQuienSomos();
imgArrow();

const dropBtn = document.querySelector("#hamburgerCont");
dropBtn.addEventListener("click", dropdownMenu);

const mybutton = document.querySelector("#arrowDiv");
mybutton.addEventListener("click", goToTop);
window.onscroll = () => {
  showArrow(mybutton);
};

const comments = getCommentsDivs();
const commentsContainer = document.querySelector(".comGrid");
// const p = document.createElement("p");
// p.textContent = "Esto se anima";
// commentsContainer.appendChild(p);
commentsContainer.appendChild(comments[0]);
const WORDS_PER_MILISECOND = (50 / 60) * 1000;
let i = 1;
setInterval(() => {
  const child = commentsContainer.querySelector(".comment");
  if (child) {
    commentsContainer.removeChild(child);
  }
  commentsContainer.appendChild(comments[i]);
  i = (i + 1) % comments.length;
  // if (p.textContent == "Esto se anima") {
  //   p.textContent = "Hola que tal";
  // } else {
  //   p.textContent = "Esto se anima";
  // }
}, WORDS_PER_MILISECOND * comments[i].querySelector("p").textContent.split(" ").length);
