/* NAV */
const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const projectsButton = document.getElementById("projectsButton");
const contactButton = document.getElementById("contactButton");

const homeContent = document.getElementById("homeContent");
const aboutContent = document.getElementById("aboutContent");
const projectsContent = document.getElementById("projectsContent");
const contactContent = document.getElementById("contactContent");

/* MODAL */
const resumeButton = document.getElementById("resumeButton");
const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modalCloseButton");
const modalNoButton = document.getElementById("modalNoButton");
const modalYesButton = document.getElementById("modalYesButton");

/* FUNCTIONS */
const hideAllContent = () => {
  homeContent.classList.remove("active");
  aboutContent.classList.remove("active");
  projectsContent.classList.remove("active");
  contactContent.classList.remove("active");

  homeButton.classList.remove("nav-active");
  aboutButton.classList.remove("nav-active");
  projectsButton.classList.remove("nav-active");
  contactButton.classList.remove("nav-active");
};

/* EVENT LISTENERS */
homeButton.addEventListener("click", () => {
  hideAllContent();
  homeContent.classList.add("active");
  homeButton.classList.add("nav-active"); // todo add active color to active tab button
});

aboutButton.addEventListener("click", () => {
  hideAllContent();
  aboutContent.classList.add("active");
  aboutButton.classList.add("nav-active");
});

projectsButton.addEventListener("click", () => {
  hideAllContent();
  projectsContent.classList.add("active");
  projectsButton.classList.add("nav-active");
});

contactButton.addEventListener("click", () => {
  hideAllContent();
  contactContent.classList.add("active");
  contactButton.classList.add("nav-active");
});

resumeButton.addEventListener("click", () => {
  modal.classList.add("active");
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.remove("active");
});

modalNoButton.addEventListener("click", () => {
  modal.classList.remove("active");
});

modalYesButton.addEventListener("click", () => {
  modal.classList.remove("active");
});

(function () {
  emailjs.init("aMVkzXndoCy2H8xMz");
})();

window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_rxcxqaw", "template_mbfnh0j", this).then(
        function () {
          console.log("SUCCESS!");
          document.getElementById("contactForm").reset();
          // show div of success
        },
        function (error) {
          console.log("FAILED...", error);
          // show div of error
        }
      );
    });
};

/* jQuery */
$(function () {
  $(".draggable").draggable();
});
