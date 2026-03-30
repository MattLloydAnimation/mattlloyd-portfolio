document.addEventListener("DOMContentLoaded", function () {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".gallery-item img");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  // If no gallery exists on this page, stop immediately
  if (!lightbox || !lightboxImg || images.length === 0) return;

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;
    const fullSrc = images[currentIndex].dataset.full;
if (!fullSrc) return;
lightboxImg.src = fullSrc;
    lightbox.classList.add("active");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    const fullSrc = images[currentIndex].dataset.full;
if (!fullSrc) return;
lightboxImg.src = fullSrc;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const fullSrc = images[currentIndex].dataset.full;
if (!fullSrc) return;
lightboxImg.src = fullSrc;
  }

  images.forEach(function (img, index) {
    img.addEventListener("click", function () {
      showImage(index);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      showPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      showNext();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Escape") lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

});