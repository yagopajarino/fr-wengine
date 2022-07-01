import i1 from "../static/logo.png";

// Loads the logo img at the top-left side navbar
export default function imgLogo() {
  const logo = document.querySelector("#logoImg");
  logo.src = i1;
}
