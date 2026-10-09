/* Activity 3 JavaScript: form validation, gallery, project filter,
   expandable project details, theme switch and mobile navigation. */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Validate form fields locally and show a safe, on-page preview.
  const form = document.getElementById("contact-form");
  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    message: document.getElementById("message")
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const feedback = document.getElementById("form-feedback");
  const preview = document.getElementById("form-preview");

  function showFieldError(key, message) {
    document.getElementById(`${key}-error`).textContent = message;
    fields[key].setAttribute("aria-invalid", message ? "true" : "false");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    preview.hidden = true;
    const values = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      message: fields.message.value.trim()
    };
    const errors = {
      name: values.name ? "" : "Please enter your name. Spaces alone are not accepted.",
      email: emailPattern.test(values.email) ? "" : "Please enter a valid email address.",
      message: values.message ? "" : "Please enter a message. Spaces alone are not accepted."
    };
    Object.keys(errors).forEach((key) => showFieldError(key, errors[key]));

    if (Object.values(errors).some(Boolean)) {
      feedback.textContent = "Please correct the highlighted fields and try again.";
      const firstInvalid = Object.keys(errors).find((key) => errors[key]);
      fields[firstInvalid].focus();
      return;
    }

    // textContent treats user input as text instead of interpreting it as HTML.
    document.getElementById("preview-name").textContent = values.name;
    document.getElementById("preview-email").textContent = values.email;
    document.getElementById("preview-message").textContent = values.message;
    feedback.textContent = "Success: your data was validated in this browser.";
    preview.hidden = false;
  });

  Object.keys(fields).forEach((key) => {
    fields[key].addEventListener("input", () => {
      if (fields[key].getAttribute("aria-invalid") === "true") {
        showFieldError(key, "");
      }
    });
  });

  // Gallery viewer cycles correctly between the first and last images.
  const photos = [
    { src: "images/photo1.jpg", alt: "Personal photograph, image 1", caption: "Personal photograph 1" },
    { src: "images/photo2.jpg", alt: "Personal photograph, image 2", caption: "Personal photograph 2" },
    { src: "images/photo3.jpg", alt: "Personal photograph, image 3", caption: "Personal photograph 3" }
  ];
  let photoIndex = 0;
  const galleryImage = document.getElementById("gallery-image");
  const galleryCaption = document.getElementById("gallery-caption");
  const galleryCount = document.getElementById("gallery-count");
  function showPhoto(index) {
    photoIndex = (index + photos.length) % photos.length;
    galleryImage.src = photos[photoIndex].src;
    galleryImage.alt = photos[photoIndex].alt;
    galleryCaption.textContent = photos[photoIndex].caption;
    galleryCount.textContent = `Photo ${photoIndex + 1} of ${photos.length}`;
  }
  document.getElementById("gallery-previous").addEventListener("click", () => showPhoto(photoIndex - 1));
  document.getElementById("gallery-next").addEventListener("click", () => showPhoto(photoIndex + 1));

  // Filter the three example project/skill cards and offer a reset.
  const search = document.getElementById("project-search");
  const resetSearch = document.getElementById("reset-search");
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const filterStatus = document.getElementById("filter-status");
  const noProjects = document.getElementById("no-projects");
  function filterProjects() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    projectCards.forEach((card) => {
      const matches = card.dataset.search.includes(query) || card.textContent.toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    noProjects.hidden = visible !== 0;
    filterStatus.textContent = query
      ? `${visible} of ${projectCards.length} projects and skills match “${search.value.trim()}”.`
      : `Showing all ${projectCards.length} projects and skills.`;
  }
  search.addEventListener("input", filterProjects);
  resetSearch.addEventListener("click", () => {
    search.value = "";
    filterProjects();
    search.focus();
  });

  // Each project detail button updates both the content and its accessible state.
  document.querySelectorAll(".details-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const details = document.getElementById(button.getAttribute("aria-controls"));
      const opening = details.hidden;
      details.hidden = !opening;
      button.setAttribute("aria-expanded", String(opening));
      button.textContent = opening ? "Hide details" : "Show details";
    });
  });

  // Switch between readable light and dark themes.
  const themeButton = document.getElementById("theme-toggle");
  themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.textContent = isDark ? "Use light theme" : "Use dark theme";
  });

  // Compact navigation opens and closes on narrow screens.
  const navButton = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  navButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navButton.setAttribute("aria-expanded", String(isOpen));
    navButton.textContent = isOpen ? "Close menu" : "Menu";
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navButton.setAttribute("aria-expanded", "false");
      navButton.textContent = "Menu";
    });
  });
});
