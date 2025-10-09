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

// Effet parallax doux sur les rayons lumineux du header
const header = document.querySelector("header");
const rays = header; // Les rayons sont gérés par le pseudo-élément ::after

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 10; // mouvement horizontal limité
  const y = (e.clientY / innerHeight - 0.5) * 10; // mouvement vertical limité

  // Mise à jour dynamique de la position du gradient des rayons
  header.style.setProperty("--ray-x", `${50 + x}%`);
  header.style.setProperty("--ray-y", `${-20 + y}%`);
});
