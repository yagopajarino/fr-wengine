/* eslint-disable no-plusplus */
import "./style.css"
import i1 from "./logo.png"
import i2 from "./quienes-somos-wengine.png"
import s1 from "./serv1.jpeg"
import s2 from "./serv2.jpeg"
import s3 from "./serv3.jpeg"
import s4 from "./serv4.jpeg"
import s5 from "./serv5.jpeg"
import s6 from "./serv6.jpeg"
import s7 from "./serv7.jpeg"
import s8 from "./serv8.jpeg"
import s9 from "./serv9.jpeg"
import p1 from "./p1.jpeg"
import p2 from "./p2.jpeg"
import p3 from "./p3.jpeg"
import r1 from "./logoFB.png"
import r2 from "./logoIG.png"
import r3 from "./logoWPP.png"
import icon from "./iconoW.png"

// aplica imagenes
const logo = document.querySelector("#logoImg")
logo.src = i1

const quienesSomos = document.querySelector("#qsImg")
quienesSomos.src = i2

const servicios = document.querySelectorAll(".servImg")
const servImgs = [s1,s2,s3,s4,s5,s6,s7,s8,s9]
for (let index = 0; index < servicios.length; index++) {
    const element = servicios[index];
    const servImg = servImgs[index]
    element.src = servImg
}

const promociones = document.querySelectorAll(".promImg")
const promImg = [p1,p2,p3]
for (let index = 0; index < promociones.length; index++) {
    const element = promociones[index];
    const img = promImg[index]
    element.src = img
}

const redes = document.querySelectorAll(".redesLogo")
const redesImg = [r1,r2,r3]
for (let index = 0; index < redes.length; index++) {
    const element = redes[index];
    const img = redesImg[index]
    element.src = img
}

const iconLink = document.querySelector("#iconLink")
iconLink.href = icon
// ---------------------

function myFunction() {
    const div = document.querySelector(".linksContainer")
    const anchors = document.querySelectorAll(".navLink")
    if (div.className === "linksContainer") {
        div.className += " active";
        anchors.forEach(anchor => {
            anchor.style.display = "block"
        });
    } else {
        div.className = "linksContainer";
        anchors.forEach(anchor => {
            anchor.style.display = "none"
        });
    }
  }

const dropBtn = document.querySelector("#arrowCont")
dropBtn.addEventListener("click", myFunction)

const links = document.querySelectorAll(".navLink")
links.forEach(link => {
    link.addEventListener("click", myFunction)
});