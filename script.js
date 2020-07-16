function look() {
  const sectionFeatures = document.querySelector("section.features");
  sectionFeatures.scrollIntoView({ behavior: "smooth", block: "center" });
}

function aboutMe() {
  const sectionAboutMe = document.querySelector("section.aboutMe");
  sectionAboutMe.scrollIntoView({ behavior: "smooth", block: "center" });
}

function upSite() {
  const header = document.querySelector("header");
  header.scrollIntoView({ behavior: "smooth", block: "center" });
}
