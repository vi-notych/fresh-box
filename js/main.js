import { useDynamicAdapt } from "./dynamicAdapt.js";

useDynamicAdapt();

function init() {
  mobileMenu();
  openClosePopup();
}
document.addEventListener("DOMContentLoaded", init);


function mobileMenu() {
  const btn = document.querySelector(".header__button");
  const mobileMenu = document.querySelector(".header__menu");
  const menuList = document.querySelector(".menu__list");
  btn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    btn.classList.toggle("active");
    bodydocument.body.classList.toggle("none-scroll");
  });
  menuList.addEventListener("click", (e) => {
    //console.log(e.target);
    mobileMenu.classList.remove("active");
    btn.classList.remove("active");
    document.body.classList.remove("none-scroll");
  });
}

function openClosePopup() {
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("open-btn");
  const openPopup = document.getElementById("open-popup");
  const close = document.getElementById("close");
  const submit = document.getElementById('submit');
  const modalWindow = document.querySelector(".popup__container");
  function addClass() {
    popup.classList.add("active");
    document.body.classList.add("no-scroll");
  }
  function removeClass() {
    popup.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
  //===== открываем popup =============================
  openBtn.addEventListener("click", () => addClass());
  openPopup.addEventListener("click", () => addClass());

  //===== закрываем popup =============================
  close.addEventListener("click", () => removeClass());
  submit.addEventListener("click", (e) => {
    //console.log(e.target);
    removeClass();
  });
  //-- нажатием на кнопку "Escape"
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") removeClass();
  });
  //-- кликом на экран вокруг модального окна
  window.addEventListener("click", (e) => {
    if (e.target === modalWindow) removeClass();
  });
}
