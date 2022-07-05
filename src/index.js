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
import { getComments, cambiarTextos } from "./comments/getComments";
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

const comments = getComments();
const container = document.querySelector(".comGrid");
const p = document.createElement("p");
p.textContent = comments[0].comentario;
const sp = document.createElement("span");
sp.textContent = comments[0].nombre;
container.appendChild(p);
container.appendChild(sp);
container.style.height = container.clientHeight;

const WORDS_PER_MILISECOND = (50 / 60) * 1000;
let i = 1;

setInterval(() => {
  p.style.opacity = 0;
  sp.style.opacity = 0;
  cambiarTextos(comments, i, p, sp);
  i = (i + 1) % comments.length;
}, WORDS_PER_MILISECOND * comments[i].comentario.split(" ").length + 2000);
