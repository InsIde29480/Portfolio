// Effet parallax doux sur le header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const scrollY = window.scrollY;
  header.style.backgroundPositionY = `${scrollY * 0.4}px`;
});

// Apparition progressive des sections
const sections = document.querySelectorAll("section");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => {
  appearOnScroll.observe(section);
});
