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

//  product number functionality

const number = document.querySelector(".number-box");

const quantity = document.querySelector("#quanity");

number.addEventListener("click", function (e) {
  if (!e.target.alt) return;
  else if (e.target.alt === "icon-plus") {
    quantity.textContent = Number(quantity.textContent) + 1;
  } else if (
    e.target.alt === "icon-minus" &&
    Number(quantity.textContent) > 0
  ) {
    quantity.textContent = Number(quantity.textContent) - 1;
  }
});

// Add to cart button functionality

const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  console.log(quantity.textContent);
});
