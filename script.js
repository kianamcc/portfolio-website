/* NAV */
const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const projectsButton = document.getElementById("projectsButton");
const contactButton = document.getElementById("contactButton");

const homeContent = document.getElementById("homeContent");
const aboutContent = document.getElementById("aboutContent");
const projectsContent = document.getElementById("projectsContent");
const contactContent = document.getElementById("contactContent");

/* MOBILE NAV */
const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburgerClose");
const mobileNavLinks = document.getElementById("mobileNavLinks");

const mobileNavHome = document.getElementById("mobileNavHome");
const mobileNavAbout = document.getElementById("mobileNavAbout");
const mobileNavProjects = document.getElementById("mobileNavProjects");
const mobileNavContact = document.getElementById("mobileNavContact");

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

  mobileNavHome.classList.remove("mobile-nav-active");
  mobileNavAbout.classList.remove("mobile-nav-active");
  mobileNavProjects.classList.remove("mobile-nav-active");
  mobileNavContact.classList.remove("mobile-nav-active");
};

const toggleHamburger = () => {
  if (mobileNavLinks.classList.contains("mobile-nav-links-active")) {
    mobileNavLinks.classList.remove("mobile-nav-links-active");
    hamburgerClose.classList.remove("active");
    hamburger.classList.remove("inactive");
  } else {
    mobileNavLinks.classList.add("mobile-nav-links-active");
    hamburgerClose.classList.add("active");
    hamburger.classList.add("inactive");
  }
};

/* EVENT LISTENERS */
homeButton.addEventListener("click", () => {
  hideAllContent();
  homeContent.classList.add("active");
  homeButton.classList.add("nav-active");
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

mobileNavHome.addEventListener("click", () => {
  hideAllContent();
  toggleHamburger();
  homeContent.classList.add("active");
  mobileNavLinks.classList.remove("mobile-nav-links-active");
  mobileNavHome.classList.add("mobile-nav-active");
});

mobileNavAbout.addEventListener("click", () => {
  hideAllContent();
  toggleHamburger();
  aboutContent.classList.add("active");
  mobileNavLinks.classList.remove("mobile-nav-links-active");
  mobileNavAbout.classList.add("mobile-nav-active");
});

mobileNavProjects.addEventListener("click", () => {
  hideAllContent();
  toggleHamburger();
  projectsContent.classList.add("active");
  mobileNavLinks.classList.remove("mobile-nav-links-active");
  mobileNavProjects.classList.add("mobile-nav-active");
});

mobileNavContact.addEventListener("click", () => {
  hideAllContent();
  toggleHamburger();
  contactContent.classList.add("active");
  mobileNavLinks.classList.remove("mobile-nav-links-active");
  mobileNavContact.classList.add("mobile-nav-active");
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

hamburger.addEventListener("click", () => {
  toggleHamburger();
});

hamburgerClose.addEventListener("click", () => {
  toggleHamburger();
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
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

/* jQuery */
// $(function () {
//   $(".draggable").draggable();
// });
