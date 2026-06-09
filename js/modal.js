const modal = document.querySelector("#infoModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalClose = document.querySelector(".modal__close");

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".modal-open").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalTitle || !modalText) return;

    modalTitle.textContent = button.dataset.modalTitle;
    modalText.textContent = button.dataset.modalText;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}