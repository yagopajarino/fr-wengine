import s1 from "../static/serv1.jpeg";
import s2 from "../static/serv2.jpeg";
import s3 from "../static/serv3.jpeg";
import s4 from "../static/serv4.jpeg";
import s5 from "../static/serv5.jpeg";
import s6 from "../static/serv6.jpeg";
import s7 from "../static/serv7.jpeg";
import s8 from "../static/serv8.jpeg";
import s9 from "../static/serv9.jpeg";

// Handles servicios section images
export default function imgServicios() {
  const servicios = document.querySelectorAll(".servTile > img");
  const servImgs = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
  for (let index = 0; index < servicios.length; index++) {
    const element = servicios[index];
    const servImg = servImgs[index];
    element.src = servImg;
  }
}
