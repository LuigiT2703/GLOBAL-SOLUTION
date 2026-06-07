const contactForm = document.querySelector("#contactForm");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = [
      { input: document.querySelector("#name"), message: "Informe seu nome." },
      { input: document.querySelector("#email"), message: "Informe um e-mail valido.", validate: isValidEmail },
      { input: document.querySelector("#message"), message: "Escreva uma mensagem." }
    ];

    let isValid = true;

    fields.forEach((field) => {
      const value = field.input.value.trim();
      const error = field.input.parentElement.querySelector(".error-message");
      const valid = field.validate ? field.validate(value) : value.length > 0;

      if (!valid) {
        error.textContent = field.message;
        isValid = false;
      } else {
        error.textContent = "";
      }
    });

    const status = document.querySelector("#formStatus");

    if (isValid) {
      status.textContent = "Mensagem validada com sucesso. Envio simulado para a entrega academica.";
      contactForm.reset();
    } else {
      status.textContent = "";
    }
  });
}
