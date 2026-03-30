document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
  nav.classList.toggle("active");

  const isOpen = nav.classList.contains("active");
  toggle.setAttribute("aria-expanded", isOpen);
});

  document.querySelectorAll(".video-embed").forEach(container => {

    container.addEventListener("click", () => {

      const videoURL = container.dataset.video;

      const iframe = document.createElement("iframe");
      iframe.src = videoURL + "?autoplay=1";
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;

      container.innerHTML = "";
      container.appendChild(iframe);

    });

  });

});

