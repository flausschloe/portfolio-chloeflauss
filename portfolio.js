// Données des projets
const projectsData = [
  {
    title: "Journée des droits des femmes",
    category: "Vidéo",
    mainCategory: "video-photo",
    image: "images/videocapture.jpg",
    description: "Réalisée lors de mon alternance à l'État-Major de la Zone de Défense Est, cette vidéo a été produite à l'occasion de la Journée internationale des droits des femmes. Elle visait à mettre en lumière les femmes engagées au sein de l'armée, à valoriser la diversité de leurs parcours et à souligner leur rôle essentiel dans le fonctionnement de l'institution militaire.",
    meta: [
      { label: "Année", value: "2026" },
      { label: "Client", value: "État-Major Zone de Défense Est" },
      { label: "Format", value: "Vidéo réseaux sociaux" },
      { label: "Sujet", value: "Femmes engagées dans l'armée" },
    ],
    tags: ["Vidéo", "Montage", "Réseaux sociaux", "Institutionnel"],
    gallery: [
  {
    image: "images/videocapture.jpg",
    link: "https://www.instagram.com/reel/DVnh7BGDAa-/?igsh=MWgwNTU4MjZib2lweg==" 
  }
],
  },
  {
    title: "Salon du Livre Militaire",
    category: "Événementiel",
    mainCategory: "gestion",
    image: "images/SDLaffiche.jpg",
    description: "Sur ce projet, j'occupais le rôle de chargée de projet et de conceptrice des différents outils de communication : affiches, publications pour les réseaux sociaux, marque-pages, ainsi que la rédaction des contenus du site internet. J'assurais également la prise de contact avec les intervenants et partenaires externes, la gestion de la visibilité de l'événement sur les pages de la mairie et de la Ville de Metz, et les relations avec les médias afin de promouvoir le projet auprès du grand public.",
    meta: [
      { label: "Année", value: "2026" },
      { label: "Rôle", value: "Chargée de projet & conceptrice" },
      { label: "Lieu", value: "Cercle Mess, Metz" },
      { label: "Date", value: "11 avril 2026" },
    ],
    tags: ["Événementiel", "Affiches", "Réseaux sociaux", "Relations presse"],
    gallery: [
      "images/exposant.jpg",
      "images/Invitation.jpg",
      "images/marquepage.jpeg",
      "images/organisateur.jpg",
    ],
  },
  {
    title: "Carte de Vœux 2026",
    category: "Print & Digital",
    mainCategory: "graphique",
    image: "images/Gemini.png",
    description: "À la demande du général gouverneur de Metz, Pierre Meyer, j'ai réalisé une carte de vœux pour la nouvelle année, déclinée en formats numérique et papier, mettant en scène les monuments emblématiques de la ville.",
    meta: [
      { label: "Année", value: "2026" },
      { label: "Client", value: "Général gouverneur de Metz" },
      { label: "Format", value: "Numérique & papier" },
      { label: "Technique", value: "Illustration vectorielle" },
    ],
    tags: ["Illustration", "Print", "Digital", "Institutionnel"],
    gallery: [
      "images/13.jpg",
      "images/14.jpg",
      "images/15.jpg",
      "images/16.jpg",
      "images/17.png",
    ],
  },
  {
    title: "Franchissement de l'Yonne",
    category: "Photographie",
    mainCategory: "video-photo",
    image: "images/1.jpeg",
    description: "Photographies réalisées lors d'un franchissement de zone humide dans le département de l'Yonne, documentant un exercice militaire au cœur d'un paysage naturel.",
    meta: [
      { label: "Année", value: "2026" },
      { label: "Lieu", value: "Département de l'Yonne" },
      { label: "Date", value: "26 avril" },
      { label: "Sujet", value: "Exercice militaire de franchissement" },
    ],
    tags: ["Photographie", "Reportage", "Extérieur", "Armée"],
    gallery: [
      "images/1.jpeg",
      "images/2.jpeg",
      "images/3.jpeg",
      "images/4.jpeg",
    ],
  },
   {
    title: "Logos Sweat de Promotion",
    category: "Identité visuelle",
    mainCategory: "graphique",
    image: "images/2.svg",
    description: "À l'occasion de mes deux années de master à l'Université de Lorraine, j'ai participé à la création des sweats de promotion. Nous avons conçu plusieurs propositions de logos mettant en avant les monuments emblématiques de Metz, dans le but de représenter l'identité de la ville et de notre formation à travers un visuel fédérateur.",
    meta: [
      { label: "Année", value: "2025" },
      { label: "Formation", value: "Master AMINJ, Metz" },
      { label: "Format", value: "Logo avant / dos" },
      { label: "Outil", value: "Suite Adobe" },
    ],
    tags: ["Identité visuelle", "Logo", "Illustration", "Étudiant"],
    gallery: [
      "images/1.svg",
      "images/2.svg",
      "images/3.svg",
      "images/4.svg",
      "images/5.svg",
      "images/6.svg",
    ],
  },
  {
    title: "Festival des Paysages",
    category: "Édition",
    mainCategory: "graphique",
    image: "images/GAP1.jpeg",
    description: "Réalisé dans le cadre de mon stage à la Communauté de Communes de l'Alsace Bossue, ce projet consistait en la conception d'un magazine présentant l'ensemble des activités organisées par la Grange aux Paysages de Lorentzen pour son 17e Festival des Paysages.",
    meta: [
      { label: "Année", value: "2024" },
      { label: "Client", value: "Grange aux Paysages, Lorentzen" },
      { label: "Format", value: "Magazine de programmation" },
      { label: "Diffusion", value: "Alsace Bossue" },
    ],
    tags: ["Édition", "Mise en page", "Magazine", "Tourisme"],
    gallery: [
      "images/GAP1.jpeg",
      "images/GAP2.pdf",
    ],
  },
  {
    title: "Été en Alsace Bossue",
    category: "Édition",
    mainCategory: "graphique",
    image: "images/été.jpeg",
    description: "Réalisation de l'intégralité du magazine des activités estivales proposées sur le territoire de la Communauté de Communes d'Alsace Bossue, mis à disposition dans différents lieux touristiques. J'ai également décliné la première de couverture en affiches aux formats A3, A4 et A5 afin d'élargir sa diffusion dans les commerces et lors d'événements locaux.",
    meta: [
      { label: "Année", value: "2024" },
      { label: "Client", value: "CC Alsace Bossue" },
      { label: "Formats", value: "Magazine + affiches A3/A4/A5" },
      { label: "Diffusion", value: "Lieux touristiques & commerces" },
    ],
    tags: ["Édition", "Affiches", "Tourisme", "Mise en page"],
    gallery: [
    ],
  },
  {
    title: "Balade en barque",
    category: "Édition",
    mainCategory: "graphique",
    image: "images/Barque1.jpeg",
    description: "Dans le cadre de mon stage à la Communauté de communes, j'ai participé à la refonte du prospectus des Balades en barques. J'ai contribué à la réalisation des prises de vue en collaboration avec le chargé de communication de la mairie, puis assuré la conception et la mise en page du document. Ce travail comprenait l'application de la charte graphique existante ainsi que l'intégration de nouveaux visuels et éléments de contenu afin de moderniser le support de communication.",
    meta: [
      { label: "Année", value: "2025" },
      { label: "Client", value: "Grange aux paysages" },
      { label: "formats", value: "Brochure touristiques" },
      { label: "Diffusion", value: "Lieux touristiques & commerces" },
    ],
    tags: ["Édition", "Affiches", "Tourisme", "Mise en page"],
    gallery: [
      "images/Barque1.jpeg",
      "images/Barque2.jpeg",
      "images/Barque21.jpeg",
      "images/Barque3.jpeg",
    ],
  },
  {
    title: "Orion",
    category: "Vidéo",
    mainCategory: "video-photo",
    image: "images/Logo-ORION26.jpg",
    description: "Réalisée lors de mon alternance à l'État-Major de la Zone de Défense Est, j'ai conçu deux vidéos pour mettre en avant l'exercice militaire Orion 26. Vidéo 1 : expliquer ce qu'est cet exercice et les objectifs qu'il poursuit. Vidéo 2 : mise en avant de la phase 4, la dernière phase de l'exercice, et ce qu'elle implique.",
    meta: [
      { label: "Année", value: "2026" },
      { label: "Client", value: "État-Major Zone de Défense Est" },
      { label: "Format", value: "Vidéo réseaux sociaux" },
      { label: "Sujet", value: "Exercice Orion" },
    ],
    tags: ["Vidéo", "Montage", "Réseaux sociaux", "Institutionnel"],
    gallery: [
  {
    image: "images/video-orion1.PNG",
    link: "https://www.instagram.com/reel/DUnwWs-jbNh/?igsh=cmVxZHBwaWRlcGhj"
  },
  {
    image: "images/video-orion4.PNG",
    link: "https://www.instagram.com/reel/DXL4GeGjZHN/?igsh=MTR0bTd6am9sdGY2dg=="
  }
]
  },

  {
  title: "Série Matos – Drones FPV",
  category: "Vidéo",
  mainCategory: "video-photo",
  image: "images/fpv.jpg", // Image de couverture du projet
  description:
    "Réalisée lors de mon alternance à l'État-Major de la Zone de Défense Est, cette vidéo s'inscrit dans la série « Matos », destinée à présenter les équipements utilisés par les armées. Pour ce projet consacré aux drones FPV (First Person View), j'ai participé à la réalisation de la vidéo en assurant l'enregistrement de la voix off, afin d'expliquer le fonctionnement et les caractéristiques de cet équipement.",
  meta: [
    { label: "Année", value: "2026" },
    { label: "Client", value: "État-Major Zone de Défense Est" },
    { label: "Format", value: "Vidéo réseaux sociaux" },
    { label: "Rôle", value: "Voix off" },
  ],
  tags: ["Vidéo", "Voix off", "Réseaux sociaux", "Institutionnel"],
  gallery: [
    {
      image: "images/fpv.jpg", // Capture de la vidéo
      link: "https://www.instagram.com/reel/TON_LIEN_ICI/"
    }
  ],
},

{
  title: "Lollapalooza Paris",
  category: "Revue de presse",
  mainCategory: "rédaction",
  image: "images/bts.JPEG", // Image de couverture du projet
  description:
    "Dans le cadre de mon master 1 création de projet numérique, dans le cours de écrire pour le numérique, j'ai du, sur un sujet choisi au choix, créer un dossier de presse numérique rassembalnt vidéo, revue de presse et dossier de presse mettat en avant une thématique",
  meta: [
    { label: "Année", value: "2025" },
    { label: "Client", value: "Master 1 CPN" },
    { label: "Format", value: "revue de presse" },
    { label: "Rôle", value: "revue de presse" },
  ],
  tags: ["revue de presse", "rédaction", "master 1", "référencement"],
  gallery: [
  {
    image: "images/apercu-article.png", // une capture d'écran/vignette du PDF
    link: "images/Article-skz.pdf"
  }
],
},
];

// ── LIGHTBOX ───────────────────────────────────────────

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;
  renderLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  renderLightbox();
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  renderLightbox();
}

function renderLightbox() {
  const img = document.getElementById("lightboxImg");
  const item = lightboxImages[lightboxIndex];
  img.src = typeof item === "string" ? item : item.image;
  document.getElementById("lightboxCounter").textContent =
    `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

// ── MODAL ──────────────────────────────────────────────

function openModal(index) {
  const data = projectsData[index];
  const modal = document.getElementById("projectModal");

  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalImage").alt = data.title;
  document.getElementById("modalCategory").textContent = data.category;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDesc").textContent = data.description;

  document.getElementById("modalMeta").innerHTML = data.meta
    .map(m => `
      <div class="meta-item">
        <span class="meta-label">${m.label}</span>
        <span class="meta-value">${m.value}</span>
      </div>`)
    .join("");

  document.getElementById("modalTags").innerHTML = data.tags
    .map(t => `<span class="tag">${t}</span>`)
    .join("");

  // Galerie
  const galleryEl = document.getElementById("modalGallery");
  if (data.gallery && data.gallery.length > 0) {
    galleryEl.innerHTML = `
      <div class="modal-gallery-title">Galerie</div>
      <div class="modal-gallery-grid">
      ${data.gallery.map((item, i) => {
  const image = typeof item === "string" ? item : item.image;

  return `
    <div class="modal-gallery-thumb" data-index="${i}">
      <img src="${image}" alt="Image ${i + 1}" loading="lazy" />
      <div class="gallery-thumb-overlay">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="white"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5
            6.5 6.5 0 1 0 9.5 16
            c1.61 0 3.09-.59 4.23-1.57
            l.27.28v.79l5 4.99L20.49 19l-4.99-5z"/>
        </svg>
      </div>
    </div>
  `;
}).join("")}
      </div>
    `;

    galleryEl.querySelectorAll(".modal-gallery-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const index = parseInt(thumb.dataset.index);
    const item = data.gallery[index];

    // Si l'élément possède un lien Instagram
    if (typeof item === "object" && item.link) {
      window.open(item.link, "_blank");
    } else {
      // Sinon on ouvre la lightbox comme avant
      openLightbox(data.gallery, index);
    }
  });
});

    galleryEl.style.display = "block";
  } else {
    galleryEl.style.display = "none";
    galleryEl.innerHTML = "";
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").classList.contains("open")) {
    if (e.key === "ArrowLeft") lightboxPrev();
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "Escape") closeLightbox();
  } else {
    if (e.key === "Escape") closeModal();
  }
});

// Lightbox events
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", lightboxPrev);
document.getElementById("lightboxNext").addEventListener("click", lightboxNext);
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
});

// ── COVERFLOW ──────────────────────────────────────────

class PhotoCoverflow {
  constructor() {
    this.allItems = Array.from(document.querySelectorAll(".coverflow-item"));
    this.indicatorsWrap = document.getElementById("indicators");
    this.currentIndex = 0;
    this.currentFilter = "all";
    this.visibleItems = this.allItems;
    this.isPlaying = false;
    this.autoPlayInterval = null;
    this.autoPlaySpeed = 4000;
    this.init();
  }

  init() {
    this.applyFilter("all", { skipAnimation: true });
    this.bindEvents();
  }

  bindEvents() {
    document.getElementById("prevBtn").addEventListener("click", () => this.prev());
    document.getElementById("nextBtn").addEventListener("click", () => this.next());
    document.getElementById("playPauseBtn").addEventListener("click", () => this.toggleAutoPlay());

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.applyFilter(btn.dataset.filter);
      });
    });

    this.allItems.forEach((item) => {
      item.addEventListener("click", () => {
        const visibleIndex = this.visibleItems.indexOf(item);
        if (visibleIndex === -1) return;
        const originalIndex = parseInt(item.dataset.index, 10);
        if (visibleIndex === this.currentIndex) {
          openModal(originalIndex);
        } else {
          this.goTo(visibleIndex);
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (document.getElementById("projectModal").classList.contains("open")) return;
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
      if (e.key === " ") { e.preventDefault(); this.toggleAutoPlay(); }
    });

    let startX = 0, startY = 0;
    const container = document.getElementById("coverflowContainer");

    container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener("touchend", (e) => {
      if (!startX || !startY) return;
      const diffX = startX - e.changedTouches[0].clientX;
      const diffY = startY - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        diffX > 0 ? this.next() : this.prev();
      }
      startX = 0; startY = 0;
    }, { passive: true });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.updateCoverflow(), 100);
    });
  }

  applyFilter(filter, options = {}) {
    this.currentFilter = filter;
    this.visibleItems = this.allItems.filter(
      (item) => filter === "all" || item.dataset.category === filter
    );

    // Show/hide items outside the current filter
    this.allItems.forEach((item) => {
      const isVisible = this.visibleItems.includes(item);
      item.classList.toggle("filtered-out", !isVisible);
      item.style.display = isVisible ? "" : "none";
    });

    this.currentIndex = 0;
    this.rebuildIndicators();
    this.updateCoverflow(options);
  }

  rebuildIndicators() {
    this.indicatorsWrap.innerHTML = this.visibleItems
      .map((_, i) => `<div class="indicator${i === 0 ? " active" : ""}" data-index="${i}"></div>`)
      .join("");

    this.indicatorsWrap.querySelectorAll(".indicator").forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goTo(index));
    });
  }

  updateCoverflow() {
    const isSmallMobile = window.innerWidth <= 480;
    const isMobile = window.innerWidth <= 768;
    const viewportHeight = window.innerHeight;
    const total = this.visibleItems.length;

    let baseSpacing = 220;
    if (viewportHeight > 900) baseSpacing = 250;
    else if (viewportHeight < 768) baseSpacing = 180;
    if (isSmallMobile) baseSpacing = Math.min(baseSpacing * 0.7, 140);
    else if (isMobile) baseSpacing = Math.min(baseSpacing * 0.8, 170);

    this.visibleItems.forEach((item, index) => {
      let offset = index - this.currentIndex;
      if (total > 0) {
        if (offset > total / 2) offset -= total;
        else if (offset < -total / 2) offset += total;
      }

      let translateX = offset * baseSpacing;
      let translateZ = 0, rotateY = 0, scale = 1, opacity = 1;

      if (offset === 0) {
        translateZ = 100; scale = 1.1;
        item.classList.add("is-center");
        item.style.cursor = "pointer";
      } else {
        item.classList.remove("is-center");
        if (Math.abs(offset) === 1) {
          translateZ = 0; rotateY = offset * -40; scale = 0.85; opacity = 0.7;
        } else if (Math.abs(offset) === 2) {
          translateZ = -100; rotateY = offset * -50; scale = 0.7; opacity = 0.5;
        } else if (Math.abs(offset) === 3) {
          translateZ = -150; rotateY = offset * -60; scale = 0.6; opacity = 0.3;
        } else {
          translateZ = -200; rotateY = offset * -70; scale = 0.5; opacity = 0.2;
        }
        item.style.cursor = "pointer";
      }

      item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      item.style.opacity = opacity;
      item.style.zIndex = total - Math.abs(offset);
    });

    this.indicatorsWrap.querySelectorAll(".indicator").forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentIndex);
    });
  }

  toggleAutoPlay() {
    const btn = document.getElementById("playPauseBtn");
    if (this.isPlaying) {
      this.stopAutoPlay();
      btn.innerHTML = "▶";
      btn.classList.remove("playing");
    } else {
      this.startAutoPlay();
      btn.innerHTML = "❚❚";
      btn.classList.add("playing");
    }
  }

  startAutoPlay() {
    this.isPlaying = true;
    this.autoPlayInterval = setInterval(() => this.next(), this.autoPlaySpeed);
  }

  stopAutoPlay() {
    this.isPlaying = false;
    if (this.autoPlayInterval) { clearInterval(this.autoPlayInterval); this.autoPlayInterval = null; }
  }

  prev() {
    const total = this.visibleItems.length;
    if (total === 0) return;
    this.currentIndex = (this.currentIndex - 1 + total) % total;
    this.updateCoverflow();
  }

  next() {
    const total = this.visibleItems.length;
    if (total === 0) return;
    this.currentIndex = (this.currentIndex + 1) % total;
    this.updateCoverflow();
  }

  goTo(index) {
    this.currentIndex = index;
    this.updateCoverflow();
  }
}

// ── INIT ───────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  new PhotoCoverflow();

  setTimeout(() => {
    document.getElementById("loadingScreen").classList.add("hidden");
  }, 1000);

  // Header scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      if (window.pageYOffset >= section.offsetTop - 200) current = section.getAttribute("id");
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) link.classList.add("active");
    });
  });

  // Reveal + skill bars
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    revealElements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight - 150) {
        element.classList.add("active");
        element.querySelectorAll(".skill-fill").forEach((bar) => {
          const w = bar.getAttribute("style").match(/\d+/)[0];
          bar.style.width = w + "%";
        });
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  revealOnScroll();
});
