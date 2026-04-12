document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {

    const item = button.closest(".accordion-item");
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach(i => {
      i.classList.remove("active");
    });

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
    const slideWidth = reviews[0].offsetWidth + 20;
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

  setInterval(nextSlide, 9000);

  // 🔥 NEU: Scroll Animation für Bild
 const image = document.querySelector(".ablauf .image-wrapper");

if (image) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        image.classList.add("active");
      } else {
        image.classList.remove("active"); // 🔥 reset wenn raus
      }

    });
  }, { threshold: 0.3 });

  observer.observe(image);
}

});

document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector(".lazy-map");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        map.src = map.dataset.src;
        observer.unobserve(map);
      }
    });
  });

  if (map) observer.observe(map);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".gallery-grid");
  const items = document.querySelectorAll(".gallery-item");
  const prev = document.querySelector(".gallery-prev");
  const next = document.querySelector(".gallery-next");

  let index = 0;

  function showSlide(i) {
    const width = items[0].offsetWidth + 20;
    container.style.transform = `translateX(${-i * width}px)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % items.length;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    showSlide(index);
  });

  showSlide(index);
});