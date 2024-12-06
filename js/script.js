// figma progress circular bar
let figmaProgress = document.querySelector(".figma"),
  figmaValue = document.querySelector(".figma-progress");

let figmaStartValue = 0,
  figmaEndValue = 95,
  figmaspeed = 30;

let progressfigma = setInterval(() => {
  figmaStartValue++;

  figmaValue.textContent = `${figmaStartValue}%`;
  figmaProgress.style.background = `conic-gradient(#fca61f ${
    figmaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (figmaStartValue == figmaEndValue) {
    clearInterval(progressfigma);
  }
}, figmaspeed);

// javasript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// htmlcss progress circular bar
let htmlcssProgress = document.querySelector(".htmlcss"),
  htmlcssValue = document.querySelector(".htmlcss-progress");

let htmlcssStartValue = 0,
  htmlcssEndValue = 80,
  hsspeed = 30;

let progresshtmlcss = setInterval(() => {
  htmlcssStartValue++;

  htmlcssValue.textContent = `${htmlcssStartValue}%`;
  htmlcssProgress.style.background = `conic-gradient(#20c997 ${
    htmlcssStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlcssStartValue == htmlcssEndValue) {
    clearInterval(progresshtmlcss);
  }
}, hsspeed);

// canva progress circular bar
let canvaProgress = document.querySelector(".canva"),
  canvaValue = document.querySelector(".canva-progress");

let canvaStartValue = 0,
  canvaEndValue = 100,
  cnvspeed = 30;

let progresscanva = setInterval(() => {
  canvaStartValue++;

  canvaValue.textContent = `${canvaStartValue}%`;
  canvaProgress.style.background = `conic-gradient(#3f396d ${
    canvaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (canvaStartValue == canvaEndValue) {
    clearInterval(progresscanva);
  }
}, cnvspeed);

// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// adding funtionality to back to top button

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
