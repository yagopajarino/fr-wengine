/* eslint-disable no-param-reassign */

function showArrow(mybutton) {
  const pxDelta = document.querySelector("header").offsetHeight - 1;
  if (
    document.body.scrollTop > pxDelta ||
    document.documentElement.scrollTop > pxDelta
  ) {
    mybutton.style.bottom = "20px";
  } else {
    mybutton.style.bottom = "-100px";
  }
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export { showArrow, goToTop };
