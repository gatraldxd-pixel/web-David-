const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = formData.get("name").trim();
  const service = formData.get("service");
  const message = formData.get("message").trim();
  const text = `Hola, soy ${name}. Me interesa: ${service}. ${message}`;
  const feedback = document.querySelector("#form-feedback");

  if (!name || !service || !message) {
    feedback.textContent = "Completa los campos para preparar tu mensaje.";
    feedback.classList.add("error");
    return;
  }

  feedback.classList.remove("error");
  feedback.textContent = "Abriendo WhatsApp para que elijas a quién enviar tu mensaje...";
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
