document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menyusu üçün
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
  } else {
    console.error("Hamburger və ya nav elementi tapılmadı!");
  }

  // Hero background şəkli
  const heroSection = document.querySelector('.hero-with-bg');
  if (heroSection) {
    const bg = heroSection.getAttribute('data-bg');
    if (bg) {
      heroSection.style.backgroundImage = `url(${bg})`;
    }
  }

  // FAQ kateqoriya dəyişdirilməsi
  const dropdown = document.getElementById("categoryDropdown");
  const categories = document.querySelectorAll(".faq-category");

  if (dropdown) {
    dropdown.addEventListener("change", function () {
      const selectedId = "category-" + this.value;
      categories.forEach(cat => {
        if (cat.id === selectedId) {
          cat.classList.remove("hidden");
        } else {
          cat.classList.add("hidden");
        }
      });
    });
  }

  // Sualları açıb-bağlamaq
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      item.classList.toggle("active");
      const icon = q.querySelector(".toggle-icon");
      if (icon) {
        icon.textContent = item.classList.contains("active") ? "−" : "+";
      }
    });
  });
});
