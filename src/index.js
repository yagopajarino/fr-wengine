import "./style/style.css";
import "./style/header.css";
import "./style/quienesSomos.css";
import "./style/servicios.css";
import "./style/promociones.css";
import "./style/contacto.css";
import "./style/efectos.css";
import imgLogo from "./imgHandlers/img_logo";
import imgServicios from "./imgHandlers/img_servicios";
import imgPromociones from "./imgHandlers/img_promociones";
import imgRedes from "./imgHandlers/img_redes";
import imgIcon from "./imgHandlers/img_icon";
import imgQuienSomos from "./imgHandlers/img_quieneSomos";
import imgArrow from "./imgHandlers/img_arrow";
import showComments from "./comments/showComments";
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

console.log(showComments());
