document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".dropbtn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("show");
    });
  });

  const form = document.getElementById("leadForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const phone = phone.value;
      const email = email.value;
      window.open(`https://wa.me/919068142293?text=Hello Provident Hub`, "_blank");
      form.reset();
    });
  }
});

function toggleInfo(card) {
  document.querySelectorAll(".service-card").forEach(c => c.classList.remove("active"));
  card.classList.toggle("active");
}