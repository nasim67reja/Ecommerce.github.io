"use strict";

// /////////// Tab component

const tabBox = document.querySelector(".operation-tab-box");
const tabImage = document.querySelectorAll(".product-image-small");
const contentImage = document.querySelectorAll(".product-image");

tabBox.addEventListener("click", function (e) {
  const clicked = e.target.closest(".product-image-small");
  if (!clicked) return;

  //   remove active class
  tabImage.forEach((el) => el.classList.remove("active-small"));
  contentImage.forEach((el) => el.classList.remove("active"));

  //add active class
  clicked.classList.add("active-small");
  document
    .querySelector(`.operation-content-${clicked.dataset.tab}`)
    .classList.add("active");
});
