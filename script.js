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

function removeOvarlay() {
  ovarlayCart.classList.remove("d-block");
  ovarlayCart.classList.remove("height");
}
//  product number functionality

const number = document.querySelector(".number-box");
const quantity = document.querySelector("#quanity");
let productQuantity;

//
number.addEventListener("click", function (e) {
  removeOvarlay();

  productQuantity = Number(quantity.textContent);
  if (!e.target.alt) return;
  else if (e.target.alt === "icon-plus") {
    productQuantity++;
    quantity.textContent = productQuantity;
  } else if (
    e.target.alt === "icon-minus" &&
    Number(quantity.textContent) > 0
  ) {
    productQuantity--;
    quantity.textContent = productQuantity;
  }
});

// Add to cart button functionality

const btn = document.querySelectorAll(".btn");
const prodcutNumber = document.querySelector(".product-number");
const emptyContent = document.querySelector(".cart-content-empty");
const fullContent = document.querySelector(".cart-content-full");

const cartQuantity = document.querySelector("#quantity");
const cartTotal = document.querySelector("#total");

function generalStyle() {
  prodcutNumber.textContent = productQuantity;
  prodcutNumber.classList.remove("d-block");
  emptyContent.classList.add("show");
  fullContent.classList.remove("show");
}
// Add to cart button functionality
//
btn.forEach((el) => {
  el.addEventListener("click", function (e) {
    // prodcutNumber.textContent = productQuantity;

    generalStyle();
    if (productQuantity > 0) {
      prodcutNumber.classList.add("d-block");
      emptyContent.classList.remove("show");
      fullContent.classList.add("show");
      cartQuantity.textContent = productQuantity;
      cartTotal.textContent = `$${productQuantity * 125}`;

      // delete icon functionality
      document
        .querySelector(".delete-icon")
        .addEventListener("click", function (e) {
          quantity.textContent = 0;
          productQuantity = 0;
          generalStyle();
        });
    }
    removeOvarlay();
  });
});

// cart icon functionality

const cartIcon = document.querySelector(".h-logo");
const ovarlayCart = document.querySelector(".ovarlay-cart");

cartIcon.addEventListener("click", function (e) {
  ovarlayCart.classList.toggle("d-block");
  ovarlayCart.classList.toggle("height");
});

// ///////////////////////////////////////////////
// *******************  Slider *****************//
// ///////////////////////

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".ovarlay-operation-tab-box");

let curSlide = 0;
const maxslide = slides.length;
//
const activeImg = function (slide) {
  document
    .querySelectorAll(".slider-dot")
    .forEach((el) => el.classList.remove("slider-dot-active"));

  document
    .querySelector(`.slider-dot[data-tab="${slide}"]`)
    .classList.add("slider-dot-active");
};
activeImg(0);
//
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);

const nextSlide = function (slide) {
  if (curSlide === maxslide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeImg(curSlide);
};

const prevSlide = function (slide) {
  if (curSlide === 0) {
    curSlide = maxslide - 1;
  } else curSlide--;

  goToSlide(curSlide);
  activeImg(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  else if (e.key === "ArrowLeft") prevSlide();
});

//  dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const slide = e.target.dataset.slide;
//       // const { slides } = e.target.dataset; // another usecase of object distructing
//       goToSlide(slide);
//       curSlide = parseInt(slide, 10);
//       activateDot(slide);
//     }
//   });
// };

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("slider-dot")) {
    const slide = e.target.dataset.tab;
    goToSlide(slide);
    curSlide = parseInt(slide, 10);
    activeImg(slide);
  }
});
