$(".burger").on("click", function () {
  $(".fas, nav").toggleClass("off");
});

function myFunction(imgs) {
  const expandImg = document.getElementById("expandedImg");
  const imgText = document.getElementById("imgtext");
  const background = document.getElementById("row");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
  background.classList.toggle("blur");
}

function closeImg() {
  const span = document.querySelector("span");
  const background = document.getElementById("row");
  span.parentElement.style.display = "none";
  background.classList.toggle("blur");
}
