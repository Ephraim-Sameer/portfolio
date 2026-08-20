/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });


  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

      });

    });

}



/* =========================================================
   IMAGE MODAL
========================================================= */

const imageModal =
  document.getElementById("imageModal");

const modalImage =
  document.getElementById("modalImage");

const modalClose =
  document.getElementById("modalClose");


const modalTriggers =
  document.querySelectorAll(".modal-trigger");


modalTriggers.forEach((image) => {

  image.addEventListener("click", () => {

    if (!imageModal || !modalImage) {
      return;
    }

    modalImage.src = image.src;

    modalImage.alt =
      image.alt || "Portfolio image";

    imageModal.classList.add("active");

    imageModal.setAttribute(
      "aria-hidden",
      "false"
    );

  });

});



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeImageModal() {

  if (!imageModal) {
    return;
  }

  imageModal.classList.remove("active");

  imageModal.setAttribute(
    "aria-hidden",
    "true"
  );

}


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeImageModal
  );

}


if (imageModal) {

  imageModal.addEventListener(
    "click",
    (event) => {

      if (event.target === imageModal) {

        closeImageModal();

      }

    }
  );

}


document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeImageModal();

    }

  }
);



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  document.querySelectorAll("main section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-links a");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        navigationLinks.forEach((link) => {

          link.classList.remove("active");

          const target =
            link.getAttribute("href");

          if (
            target === `#${entry.target.id}`
          ) {

            link.classList.add("active");

          }

        });

      });

    },
    {
      threshold: 0.25
    }
  );


sections.forEach((section) => {

  observer.observe(section);

});



/* =========================================================
   SIMPLE REVEAL ANIMATION
========================================================= */

const revealTargets = document.querySelectorAll(
  ".experience-item, .work-story, .badge-card, .education-row, .skill-category"
);


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (
          !entry.isIntersecting
        ) {
          return;
        }

        entry.target.classList.add(
          "is-visible"
        );

        revealObserver.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.08
    }
  );


revealTargets.forEach((element) => {

  element.classList.add("reveal");

  revealObserver.observe(element);

});
