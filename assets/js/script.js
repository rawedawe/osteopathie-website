document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {

    const item = button.parentElement;
    const isActive = item.classList.contains("active");

    // alle schließen
    document.querySelectorAll(".accordion-item")
      .forEach(i => i.classList.remove("active"));

    // nur öffnen wenn vorher geschlossen
    if (!isActive) {
      item.classList.add("active");
    }

  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".reviews-grid");
  const reviews = document.querySelectorAll(".review");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  const total = reviews.length;
  let slidesToShow = 1;

  function updateSlidesToShow() {
    if (window.innerWidth >= 1024) slidesToShow = 3;
    else if (window.innerWidth >= 768) slidesToShow = 2;
    else slidesToShow = 1;
  }

  function showSlide(i) {
    const slideWidth = reviews[0].offsetWidth + 20; // inkl. Gap
    container.style.transform = `translateX(${-i * slideWidth}px)`;
  }

  function nextSlide() {
    index = (index + 1) % (total - slidesToShow + 1);
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + (total - slidesToShow + 1)) % (total - slidesToShow + 1);
    showSlide(index);
  }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  window.addEventListener("resize", () => {
    updateSlidesToShow();
    showSlide(index);
  });

  updateSlidesToShow();
  showSlide(index);

  // Autoplay alle 5 Sekunden
  setInterval(nextSlide, 9000);
});