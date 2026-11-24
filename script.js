const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Eigene Funktion für langsameres, weiches Scrollen
function scrollToTopSlow(duration) {
  const startPosition = window.scrollY;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // Sanftes Abbremsen kurz vor dem Ziel
    // Ease-In-Out (kubisch): Langsam starten UND langsam abbremsen
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition * (1 - ease));

    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Angepasster Klick-Listener
backToTopBtn.addEventListener("click", () => {
  // 1500 = 1,5 Sekunden Dauer (für langsamer z. B. 2500 eintragen)
  scrollToTopSlow(2200);
});