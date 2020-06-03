// $(document).on("scroll", function () {
//   const windowHeight = $(window).height();
//   const scrollValue = $(this).scrollTop();

//   //Pierwsza sekcja
//   const $project1 = $(".portfolio .project");
//   const project1FromTop = $project1.offset().top;
//   const project1Height = $project1.outerHeight();

//   const $art3 = $(".art3");
//   const art3FromTop = $art3.offset().top;
//   const art3Height = $art3.outerHeight();

//   const $art4 = $(".art4");
//   const art4FromTop = $art4.offset().top;
//   const art4Height = $art4.outerHeight();

//   if (scrollValue > project1FromTop + project1Height - windowHeight) {
//     $project1.addClass("active");
//   }

function look() {
  let sectionFeatures = document.querySelector("section.features");
  sectionFeatures.scrollIntoView();
}

function aboutMe() {
  let sectionAboutMe = document.querySelector("section.aboutMe");
  sectionAboutMe.scrollIntoView();
}

function upSite() {
  const header = document.querySelector("header");
  header.scrollIntoView();
}

// let number = 1;
// const btn = document.querySelector("button.arrow");
// const aboutMe = document.querySelector(".aboutMe");

// btn.addEventListener("click", function() {
//   const li = document.createElement("li");
//   li.textContent = number;

//   list.appendChild(li)
//   // number = number + 2;
//   if (number % 3 == 0) {
//     li.classList.add("big")
//   }
//   number += 2;
// })

// if (scrollValue > art3FromTop + art3Height - windowHeight) {
//     $art3.addClass('active');
// }

// if (scrollValue > art4FromTop + art4Height - windowHeight) {
//     $art4.addClass('active');
// }

// //Druga sekcja

// const $op1 = $('.op1');
// const $op2 = $('.op2');

// const op1FromTop = $op1.offset().top;
// const op2FromTop = $op2.offset().top;

// const op1Height = $op1.height();
// const op2Height = $op2.height();

// if (scrollValue > op1FromTop + op1Height / 2 - windowHeight) {
//     $op1.addClass('active');
//     console.log('załączeni animacji op1');
// }

// if (scrollValue > op2FromTop + op2Height / 2 - windowHeight) {
//     $op2.addClass('active');
// }

//Czyściciel
//   if (scrollValue < 100) {
//     $("article").removeClass("active");
//   }
// });
