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
// --- POPUP PROJET --- //
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");

const projectsData = {
  agario: {
    title: "AGARIO | Projet Kotlin",
    description: "Jeu développé en Kotlin lors du Master 1. Projet en équipe avec serveur local et gestion des entités en réseau.",
    video: "https://videos.pexels.com/video-files/852348/852348-hd_1920_1080_25fps.mp4",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/512px-IntelliJ_IDEA_Icon.svg.png"
    ]
  },
  godot: {
    title: "Gestion multi-agents | Projet Godot",
    description: "Simulation d'interaction entre agents réalisée sous Godot Engine, illustrant les comportements collaboratifs.",
    video: "https://videos.pexels.com/video-files/3195396/3195396-hd_1920_1080_25fps.mp4",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg"
    ]
  },
  crypto: {
    title: "Visualisation des transferts crypto",
    description: "Application web de suivi et visualisation de transactions blockchain avec interface simplifiée.",
    video: "https://videos.pexels.com/video-files/3184287/3184287-hd_1920_1080_25fps.mp4",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    ]
  }
};

// Ouvre le popup au clic sur une carte
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    // empêche le lien "Voir le projet" de naviguer
    e.preventDefault();

    const key = card.dataset.project;
    const p = projectsData[key];
    if (!p) return;

    document.getElementById("modal-title").textContent = p.title;
    document.getElementById("modal-description").textContent = p.description;

    const techContainer = document.getElementById("modal-techs");
    techContainer.innerHTML = "";
    p.techs.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      techContainer.appendChild(img);
    });

    const video = document.getElementById("modal-video");
    video.querySelector("source").src = p.video;
    video.load();

    modal.style.display = "flex";
  });
});

// Fermer
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.getElementById("modal-video").pause();
});

// Fermer si clic à l’extérieur
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.getElementById("modal-video").pause();
  }
});
