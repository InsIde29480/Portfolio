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

// Données des projets
const projectsData = {
  agario: {
    title: "AGARIO | Projet Kotlin",
    description: "Jeu développé en Kotlin lors du Master 1. Projet en équipe avec serveur local et gestion des entités en réseau.",
    video: "https://videos.pexels.com/video-files/852348/852348-hd_1920_1080_25fps.mp4",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/512px-IntelliJ_IDEA_Icon.svg.png"
    ]
  },
  godot: {
    title: "Gestion multi-agents | Projet Godot",
    description: "Simulation d'interaction entre agents réalisée sous Godot Engine, illustrant les comportements collaboratifs.",
    video: "https://videos.pexels.com/video-files/3195396/3195396-hd_1920_1080_25fps.mp4",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    ]
  },
  crypto: {
    title: "Visualisation des transferts crypto",
    description: "Application web de suivi et visualisation de transactions blockchain avec interface simplifiée.",
    video: "https://videos.pexels.com/video-files/3184287/3184287-hd_1920_1080_25fps.mp4",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    ]
  }
};

// Ouvre la modal
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const alt = card.querySelector("img").alt.toLowerCase();

    const projectKey =
      alt.includes("agario") ? "agario" :
      alt.includes("godot") ? "godot" :
      alt.includes("crypto") ? "crypto" : null;

    if (projectKey && projectsData[projectKey]) {
      const p = projectsData[projectKey];
      document.getElementById("modal-title").textContent = p.title;
      document.getElementById("modal-description").textContent = p.description;

      // Ajout des icônes
      const techContainer = document.getElementById("modal-techs");
      techContainer.innerHTML = "";
      p.techs.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "tech-icon";
        techContainer.appendChild(img);
      });

      // Vidéo
      const video = document.getElementById("modal-video");
      video.querySelector("source").src = p.video;
      video.load();

      modal.style.display = "flex";
    }
  });
});

// Fermeture
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.getElementById("modal-video").pause();
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.getElementById("modal-video").pause();
  }
});
