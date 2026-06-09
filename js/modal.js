const modal = document.querySelector("#infoModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const modalClose = document.querySelector(".modal__close");

function closeModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-opened");
}

document.querySelectorAll(".modal-open").forEach((button) => {
  button.addEventListener("click", () => {
    if (!modal || !modalTitle || !modalText) return;

    modalTitle.textContent = button.dataset.modalTitle || "Detalhes do alerta";
    modalText.textContent = button.dataset.modalText || "Informacoes indisponiveis no momento.";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-opened");
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
