(() => {
  const gallery = document.querySelector("[data-research-gallery]");
  if (!gallery) return;

  const slides = [...gallery.querySelectorAll("[data-gallery-slide]")];
  const controls = gallery.querySelector("[data-gallery-controls]");
  const counter = gallery.querySelector("[data-gallery-counter]");
  const toggle = gallery.querySelector("[data-gallery-toggle]");
  const stage = gallery.querySelector("[data-gallery-stage]");
  let current = 0;
  let playing = true;
  let timer;

  const render = () => {
    slides.forEach((slide, index) => {
      slide.hidden = index !== current;
    });
    counter.textContent = `${current + 1}/${slides.length}`;
    toggle.querySelector("[data-gallery-pause-icon]").toggleAttribute("hidden", !playing);
    toggle.querySelector("[data-gallery-play-icon]").toggleAttribute("hidden", playing);
    toggle.setAttribute("aria-label", playing ? "Pause automatic gallery rotation" : "Start automatic gallery rotation");
    toggle.title = toggle.getAttribute("aria-label");
    stage.setAttribute("aria-live", playing ? "off" : "polite");
  };

  const schedule = () => {
    clearTimeout(timer);
    if (!playing || document.hidden || gallery.matches(":hover") || gallery.contains(document.activeElement)) return;
    timer = setTimeout(() => {
      current = (current + 1) % slides.length;
      render();
      schedule();
    }, 6000);
  };

  const move = (direction) => {
    playing = false;
    current = (current + direction + slides.length) % slides.length;
    render();
    schedule();
  };

  gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => move(-1));
  gallery.querySelector("[data-gallery-next]").addEventListener("click", () => move(1));
  toggle.addEventListener("click", () => {
    playing = !playing;
    render();
    schedule();
  });
  gallery.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  });
  gallery.addEventListener("mouseenter", () => clearTimeout(timer));
  gallery.addEventListener("mouseleave", schedule);
  gallery.addEventListener("focusin", () => clearTimeout(timer));
  gallery.addEventListener("focusout", () => setTimeout(schedule, 0));
  document.addEventListener("visibilitychange", schedule);
  controls.hidden = false;
  render();
  schedule();
})();
