const burgerIcon = document.getElementById("burger");
const navBar = document.getElementById("mainNav");

burgerIcon.onclick = function () {
  navBar.classList.toggle("active");
};
