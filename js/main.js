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
  const submit = document.getElementById("submit");
  const modalWindow = document.querySelector(".popup__container");
  const order = document.getElementById("order");
  const accepted = document.getElementById("accepted");
  const acceptedClose = document.getElementById("accepted-close");

  function addClass() {
    popup.classList.add("active");
    document.body.classList.add("no-scroll");
  }
  function removeClass() {
    popup.classList.remove("active");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      accepted.classList.remove("active");
      order.classList.add("active");
    }, 1000);
  }
  //===== открываем popup =============================
  openBtn.addEventListener("click", () => addClass());
  openPopup.addEventListener("click", () => addClass());

  //===== закрываем popup =============================
  //-- кнопкой закрыть
  close.addEventListener("click", () => removeClass());
  acceptedClose.addEventListener("click", () => removeClass());

  //-- нажатием на кнопку "Escape"
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") removeClass();
  });
  //-- кликом на экран вокруг модального окна
  window.addEventListener("click", (e) => {
    //console.log(e.target);
    if (e.target === modalWindow) removeClass();
  });

  //===== отправляем форму заказа =====================
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // валидация формы перед отправкой
    let isValid = true;

    const form = document.getElementById('form');
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");

    // функция обнуляет предыдущие ошибки
    function cleadErrors() {
      const errors = document.querySelectorAll('.error-text');
      errors.forEach(element => {
        element.remove();
      });
    }

    // функция добавляет элемент с текстом ошибки к инпуту
    function errorForm (message, input) {
      const errorElement = document.createElement("div");
      errorElement.className = "error-text";
      errorElement.textContent = message;
      errorElement.style.color = "red";
      input.parentElement.appendChild(errorElement);
      isValid = false;
    };


    // обнуляем предыдущие ошибки
    cleadErrors();
    // проверяем поля ввода на ошибки
    if (!name.value.trim()) errorForm("введите имя", name);
    if (!/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(email.value.trim()))
      errorForm("введите корректный email", email);
    if (!address.value.trim()) errorForm("введите адрес", address);

    // закрываем попап
    if (isValid) {
      order.classList.remove("active");
      accepted.classList.add("active");
      form.reset();
    }
  });
}
