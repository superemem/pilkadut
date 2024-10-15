// File: /src/accordion.js

document.addEventListener("DOMContentLoaded", function () {
  const accordionToggles = document.querySelectorAll(".hs-accordion-toggle");

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const parent = this.closest(".hs-accordion");
      const content = document.getElementById(
        this.getAttribute("aria-controls")
      );

      // Toggle active class on parent
      parent.classList.toggle("active");

      // Toggle content visibility
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.add("hidden");
      } else {
        content.classList.remove("hidden");
        content.style.maxHeight = content.scrollHeight + "px";
      }

      // Close other accordions
      accordionToggles.forEach((otherToggle) => {
        if (otherToggle !== this) {
          const otherParent = otherToggle.closest(".hs-accordion");
          const otherContent = document.getElementById(
            otherToggle.getAttribute("aria-controls")
          );
          otherParent.classList.remove("active");
          otherContent.style.maxHeight = null;
          otherContent.classList.add("hidden");
        }
      });
    });
  });
});
