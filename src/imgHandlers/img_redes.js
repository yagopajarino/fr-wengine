import r1 from "../static/logoFB.png";
import r2 from "../static/logoIG.png";
import r3 from "../static/logoWPP.png";

export default function imgRedes() {
  const redes = document.querySelectorAll(".redesLogo");
  const redesImg = [r1, r2, r3];
  for (let index = 0; index < redes.length; index++) {
    const element = redes[index];
    const img = redesImg[index];
    element.src = img;
  }
}
