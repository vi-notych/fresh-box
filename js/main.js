import { useDynamicAdapt } from "./dynamicAdapt.js";

useDynamicAdapt();

function init() {
  mobileMenu();
}
document.addEventListener("DOMContentLoaded", init);

/**
 * BurgerMenu
 */
function mobileMenu() {
  const btn = document.querySelector(".header__button");
  const mobileMenu = document.querySelector(".header__menu");
  const body = document.querySelector("body");
  btn.addEventListener("click", () => {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    btn.classList.toggle('active');
  });
}
