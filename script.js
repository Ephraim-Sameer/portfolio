/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });


  document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

    });

  });

}



/* =========================================================
   GALLERY IMAGE MODAL
========================================================= */

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");


document.querySelectorAll(".gallery-item img").forEach((image) => {

  image.addEventListener("click", () => {

    modalImage.src = image.src;

    modalImage.alt = image.alt;

    imageModal.classList.add("active");

    imageModal.setAttribute("aria-hidden", "false");

  });

});


if (closeModal) {

  closeModal.addEventListener("click", () => {

    imageModal.classList.remove("active");

    imageModal.setAttribute("aria-hidden", "true");

  });

}


imageModal.addEventListener("click", (event) => {

  if (event.target === imageModal) {

    imageModal.classList.remove("active");

    imageModal.setAttribute("aria-hidden", "true");

  }

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    imageModal.classList.remove("active");

    imageModal.setAttribute("aria-hidden", "true");

  }

});
