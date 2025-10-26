function animateCounter(id, target, duration) {
  const element = document.getElementById(id);
  let start = 0;
  const increment = target / (duration / 50);

  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  animateCounter("counter", 327, 1500); // ← aggiorna qui il numero
});

