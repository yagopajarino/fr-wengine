/* eslint-disable no-param-reassign */
export default function dropdownMenu() {
  const div = document.querySelector(".linksContainer");
  const anchors = div.querySelectorAll("a");
  if (div.className === "linksContainer") {
    div.className += " active";
    anchors.forEach((anchor) => {
      anchor.style.display = "block";
    });
  } else {
    div.className = "linksContainer";
    anchors.forEach((anchor) => {
      anchor.style.display = "none";
    });
  }
}
