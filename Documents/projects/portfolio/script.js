const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

yearEl.textContent = new Date().getFullYear();

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when clicking a link (mobile)
navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("show");
});

// Contact form demo (no backend)
// You can replace with EmailJS / Formspree / backend API later
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "✅ Message saved (demo). Connect it to EmailJS/Formspree to receive emails.";
  form.reset();
});// Basic JavaScript placeholder

console.log('Portfolio script loaded');
