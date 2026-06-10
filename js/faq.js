document.querySelectorAll("[data-accordion] .faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");

    if (item) {
      item.classList.toggle("is-open");
    }
  });
});


