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
document.addEventListener('DOMContentLoaded', function () {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    const cardInner = card.querySelector('.card-inner');

    card.addEventListener('click', function (e) {
      e.stopPropagation(); // klik "yuxarıya" getməsin

      // Əgər bu kart artıq açıqdırsa → bağla
      if (cardInner.classList.contains('flipped')) {
        cardInner.classList.remove('flipped');
      } else {
        // Bütün digər kartları bağla
        document.querySelectorAll('.card-inner.flipped').forEach(openCard => {
          openCard.classList.remove('flipped');
        });

        // Bu kartı aç
        cardInner.classList.add('flipped');
      }
    });
  });

  // Boş yerə kliklədikdə bütün açıq kartları bağla
  document.addEventListener('click', function () {
    document.querySelectorAll('.card-inner.flipped').forEach(openCard => {
      openCard.classList.remove('flipped');
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  // Tab dəyişdirmə funksionallığı
  const tabButtons = document.querySelectorAll('.tab-btn');
  const faqCategories = document.querySelectorAll('.faq-category');

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Aktiv tabı dəyiş
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const categoryId = this.dataset.category;

      // Kateqoriyaları göstər/gizlə
      faqCategories.forEach(category => {
        category.classList.remove('active');

        if (categoryId === 'all' || category.id === categoryId) {
          setTimeout(() => {
            category.classList.add('active');
          }, 50);
        }
      });
    });
  });

  // FAQ açıb bağlama
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const questionBox = card.querySelector('.question-box');

    questionBox.addEventListener('click', function () {
      // Digər bütün FAQ-ları bağla
      faqCards.forEach(item => {
        if (item !== card) {
          item.classList.remove('active');
        }
      });

      // Kliklənən FAQ-u aç/bağla
      card.classList.toggle('active');
    });
  });

  // Faydalı/Faydalı olmadı düymələri
  // Helpful Buttons Functionality
  const helpfulButtons = document.querySelectorAll('.helpful-btn');

  helpfulButtons.forEach(button => {
    button.addEventListener('click', function () {
      // If already selected, do nothing
      if (this.classList.contains('selected')) return;

      // Remove selection from all buttons
      helpfulButtons.forEach(btn => {
        btn.classList.remove('selected', 'disabled');
      });

      // Add selected class to clicked button
      this.classList.add('selected');

      // Disable all buttons after selection
      helpfulButtons.forEach(btn => {
        if (!btn.classList.contains('selected')) {
          btn.classList.add('disabled');
        }
      });

      // Get feedback data
      const faqId = this.closest('.faq-card').dataset.id;
      const isHelpful = this.classList.contains('helpful-yes');

      // Send feedback to server (example)
      console.log(`FAQ ID: ${faqId} - ${isHelpful ? 'Helpful' : 'Not Helpful'}`);
    });
  });

  // Əvvəldən birinci kateqoriyanı göstər
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
});

document.addEven