// MENU MODAL PART ---------------------

const menuBox = document.querySelector('.header__nav-box');
const menuBtn = document.querySelector('.header__menu-btn');
const iconMenuBtn = document.querySelector('.bx-menu-alt-right')

menuBtn.addEventListener('click', () => {
  menuBox.classList.toggle('menuBox')
  iconMenuBtn.classList.toggle('bx-x')
})

// RANGE PART -------------------- 

window.onload = function () {
  sliderOne();
  sliderTwo();
}

let elSliderOne = document.querySelector("#category__slider-one");
let elSliderTwo = document.querySelector("#category__slider-two");
let valOne = document.querySelector(".val-one");
let valTwo = document.querySelector(".val-two");
let minGap = 0;
let sliderTrack = document.querySelector(".category__slider-track");
let sliderMaxValue = document.querySelector("#category__slider-one").max;

function sliderOne() {
  if (+(elSliderTwo.value) - +(elSliderOne.value) <= minGap) {
    elSliderOne.value = +(elSliderTwo.value) - minGap;
  }
  valOne.textContent = elSliderOne.value;
  fillColor();
}

function sliderTwo() {
  if (+(elSliderTwo.value) - +(elSliderOne.value) <= minGap) {
    elSliderTwo.value = +(elSliderOne.value) + minGap;
  }
  valTwo.textContent = elSliderTwo.value;
  fillColor();
}

function fillColor() {
  percent1 = (elSliderOne.value / sliderMaxValue) * 100;
  percent2 = (elSliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, rgba(70, 163, 88, 0.2) ${percent1}%, #46a358 ${percent1}%, #46a358 ${percent2}%, rgba(70, 163, 88, 0.2) ${percent2}%)`
}

const slidList = document.querySelector('.hero__list');
const sildItem = document.querySelectorAll('.hero__item');
const slidBtns = document.querySelectorAll('.hero__slider-btn');
let count = 2
let time = 3000

slidBtns.forEach((btn, inx) => {
  slidBtns[1].classList.add('hero__slider-btn-act')
  btn.addEventListener('click', () => {
    if (inx + 1 == 1) {
      slidBtns[0].classList.add('hero__slider-btn-act')
      slidBtns[1].classList.remove('hero__slider-btn-act')
      slidBtns[2].classList.remove('hero__slider-btn-act')
    }
    if (inx + 1 == 2) {
      slidBtns[1].classList.add('hero__slider-btn-act')
      slidBtns[0].classList.remove('hero__slider-btn-act')
      slidBtns[2].classList.remove('hero__slider-btn-act')
    }
    if (inx + 1 == 3) {
      slidBtns[2].classList.add('hero__slider-btn-act')
      slidBtns[0].classList.remove('hero__slider-btn-act')
      slidBtns[1].classList.remove('hero__slider-btn-act')
    }
    time = 3000
    count = inx + 1
    let id = inx + 1
    slidList.style.transform = `translateX(-${id * 101 - 101}%)`;
  })
})

setInterval(() => {
  slidList.style.transform = `translateX(-${count <= 3 ? count * 1210 - 1210 : count = 1}px)`;
  if (count == 1) {
    slidBtns[0].classList.add('hero__slider-btn-act')
    slidBtns[1].classList.remove('hero__slider-btn-act')
    slidBtns[2].classList.remove('hero__slider-btn-act')
  }
  if (count == 2) {
    slidBtns[1].classList.add('hero__slider-btn-act')
    slidBtns[0].classList.remove('hero__slider-btn-act')
    slidBtns[2].classList.remove('hero__slider-btn-act')
  }
  if (count == 3) {
    slidBtns[2].classList.add('hero__slider-btn-act')
    slidBtns[0].classList.remove('hero__slider-btn-act')
    slidBtns[1].classList.remove('hero__slider-btn-act')
  }
  count++
}, time)
