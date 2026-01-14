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
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
    ]
  },
  godot: {
    title: "Gestion multi-agents | Projet Godot",
    description: "Simulation d'interaction entre agents réalisée sous Godot Engine, illustrant les comportements collaboratifs.",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg"
    ]
  },
  crypto: {
    title: "Visualisation des transferts crypto",
    description: "Application web de suivi et visualisation de transactions blockchain avec interface simplifiée.",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    ]
  },
  compression: {
    title: "Compression d'une image",
    description: "Logiciel C, permettant la compression d'une image plus ou moins forte.",
    techs: [
      "https://humancoders-formations.s3.eu-west-1.amazonaws.com/uploads/course/logo/1825/formation-langage-c-les-bases.png"
    ]
  },
  IA: {
    title: "Réseau de neurones pytorch | Gite de naviagtion",
    description: "Entrainement d'un modèle de réseau de neurones en pytorch pour prédire la gite d'un voilier à partir de données de navigation stockées dans une base TimeScaleDB.",
    techs: [
      "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
      "https://a.storyblok.com/f/192697/1920x1080/ac1dc4864a/docker-post.png"
    ]
  }
};

// Ouvre le popup au clic sur une carte
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    // Si le clic est sur le lien "Voir le projet", ne pas ouvrir le modal
    if (e.target.closest('.project-link')) {
      // Laisser le comportement par défaut (ouvrir le lien)
      return;
    }

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
