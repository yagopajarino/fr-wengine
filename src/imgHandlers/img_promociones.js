import p1 from "../static/p1.jpeg";
import p2 from "../static/p2.jpeg";
import p3 from "../static/p3.jpeg";

export default function imgPromociones() {
  const promociones = document.querySelectorAll(".promTile > img");
  const promImg = [p1, p2, p3];
  for (let index = 0; index < promociones.length; index++) {
    const element = promociones[index];
    const img = promImg[index];
    element.src = img;
  }
}
