// Backgrounds sampled from the image edges to blend square padding.
const imageBackgrounds = {
  "./images/ear-eeg-pcb_1.png": "linear-gradient(to bottom, #ffffff 0%, #ffffff 21.88%, #ffffff 78.12%, #ffffff 100%)",
  "./images/ear-eeg-pcb_2.png": "linear-gradient(to bottom, #c8c8c8 0%, #c8c8c8 12.5%, #c8c8c8 25%, #c8c8c8 37.5%, #c8c8c8 50%, #c8c8c8 62.5%, #c8c8c8 75%, #c8c8c8 87.5%, #c8c8c8 100%)",
  "./images/etactile-pcb_1.png": "linear-gradient(to bottom, #535353 0%, #535353 17.11%, #5a585a 82.89%, #5a585a 100%)",
  "./images/etactile-pcb_2.png": "linear-gradient(to bottom, #c5cad0 0%, #c5cad0 11.14%, #7e8b97 88.86%, #7e8b97 100%)",
  "./images/etactile-pcb_3.png": "linear-gradient(to bottom, #ffffff 0%, #ffffff 11.15%, #dfdfdf 88.85%, #dfdfdf 100%)",
  "./images/etactile-pcb_4.png": "linear-gradient(to bottom, #c5cad0 0%, #c5cad0 11.13%, #7e8b97 88.87%, #7e8b97 100%)",
  "./images/flex-electrode-pcb_1.png": "linear-gradient(to bottom, #ffffff 0%, #ffffff 21.88%, #ffffff 78.12%, #ffffff 100%)",
  "./images/flex-electrode-pcb_2.png": "linear-gradient(to bottom, #fefefe 0%, #fefefe 11.11%, #fefefe 88.89%, #fefefe 100%)",
  "./images/maternal-fetal-pcb_1.png": "linear-gradient(to bottom, #ffffff 0%, #ffffff 21.88%, #ffffff 78.12%, #ffffff 100%)",
  "./images/steersafe-eog-pcb_1.png": "linear-gradient(to bottom, #ffffff 0%, #ffffff 21.88%, #ffffff 78.12%, #ffffff 100%)",
  "./images/steersafe-eog-pcb_2.png": "linear-gradient(to bottom, #ffffff 0%, #ffffff 15.19%, #dfdfdf 84.81%, #dfdfdf 100%)",
  "./images/steersafe-eog-pcb_3.png": "linear-gradient(to bottom, #ffffff 0%, #ffffff 15.19%, #dfdfdf 84.81%, #dfdfdf 100%)"
};

/**
 * PCB Design Gallery - Interactive Application Logic
 * Sajitha Madugalle Portfolio
 */

// Comprehensive Project Data
const pcbProjects = [
  {
    id: "ear-eeg-pcb",
    title: "Electrode-Skin Impedance-Based Artifact Removal System for Ear-EEG",
    timeline: "Feb 2025 - Jun 2026",
    institution: "University of Moratuwa, Sri Lanka",
    category: ["wearable", "multilayer"],
    layerCount: "6-Layer Rigid PCB",
    image: "./images/ear-eeg-pcb_1.png",
    images: ["./images/ear-eeg-pcb_1.png", "./images/ear-eeg-pcb_2.png"],
    badge: {
      type: "paper",
      text: "IEEE BioCAS 2026 Accepted",
      class: "badge-emerald",
    },
    summary:
      "A dry-contact ear-worn EEG system featuring continuous electrode-skin impedance monitoring for real-time motion artifact reduction, lead-off detection, and ultra-low noise AFE layout.",
    bullets: [
      "Developed a dry-contact ear-EEG system with continuous electrode-skin impedance monitoring for motion artifact reduction and real-time lead-off detection.",
      "Designed and tested analog front-end (AFE) circuits for low-noise signal acquisition, impedance measurement, and signal conditioning.",
      "Designed a compact 6-layer PCB for an ear-worn system, with attention to signal integrity and low-noise analog circuit layout.",
      "Integrated embedded data acquisition, signal processing, and wireless communication into a battery-powered wearable system.",
      "The work resulted in a paper accepted at IEEE BioCAS 2026.",
    ],
    tools: ["Altium Designer", "SPICE Simulation", "SPI", "BLE", "TI ADS129x", "Nordic nRF52"],
    specs: {
      stackup: "6-Layer FR4",
      signalType: "Low-Noise Bio-Potential AFE",
      power: "Battery-Powered LiPo + LDOs",
      wireless: "Bluetooth Low Energy (BLE)",
    },
    repoUrl: null,
  },
  {
    id: "maternal-fetal-pcb",
    title: "Maternal and Fetal Multimodal Physiological Monitoring System",
    timeline: "Ongoing",
    institution: "Biomedical Engineering Laboratory",
    category: ["wearable", "multilayer"],
    layerCount: "6-Layer Mixed-Signal PCB",
    image: "./images/maternal-fetal-pcb_1.png",
    images: ["./images/maternal-fetal-pcb_1.png"],
    badge: {
      type: "nda",
      text: "Project Under NDA",
      class: "badge-nda",
    },
    summary:
      "A wireless multimodal monitoring system integrating fetal ECG, maternal ECG, uterine electromyography (EHG), and optical fNIRS sensing on a single space-constrained mixed-signal board.",
    bullets: [
      "Developing a battery-powered wireless monitoring system that integrates fetal ECG, maternal ECG, EHG, and fNIRS sensing.",
      "Contributed to design a 6-layer PCB with mixed-signal circuitry for low-noise physiological signal acquisition.",
      "Worked on wearable hardware design, battery-powered operation, and wireless connectivity.",
      "Implemented strict analog/digital isolation barriers and RF shielding to preserve microvolt-level bio-signals in the presence of optical switching.",
    ],
    tools: ["Altium Designer", "SPI", "I2C", "BLE", "STM32L4"],
    specs: {
      stackup: "6-Layer Mixed-Signal PCB",
      modalities: "fECG, mECG, EHG & fNIRS",
      power: "Rechargeable Lithium Polymer",
    },
    repoUrl: null,
  },
  {
    id: "etactile-pcb",
    title: "eTactile Kit Development - The University of Sydney",
    timeline: "2025",
    institution: "The University of Sydney",
    category: ["wearable", "high-voltage"],
    layerCount: "4-Layer PCB",
    image: "./images/etactile-pcb_1.png",
    images: ["./images/etactile-pcb_1.png", "./images/etactile-pcb_2.png", "./images/etactile-pcb_3.png", "./images/etactile-pcb_4.png"],
    badge: {
      type: "highlight",
      text: "300V–400V Stimulator",
      class: "badge-gold",
    },
    summary:
      "A compact electrotactile stimulation system for wearable tactile feedback featuring custom multi-stage boost converters producing 300–400V with active current limiting.",
    bullets: [
      "Contributed to the development of a compact electrotactile stimulation system for wearable tactile feedback applications.",
      "Designed a compact 4-layer PCB with multiple power supply stages, supporting low-voltage to high-voltage converters for on-skin stimulation.",
      "Worked on high-voltage generation up to 300–400 V and controlled-current stimulation circuitry.",
      "Developed flexible PCB electrode interfaces for wearable applications.",
      "Contributed to circuit miniaturization and embedded firmware integration.",
    ],
    tools: ["Altium Designer", "High-Voltage Circuit Design", "Embedded Firmware", "IoT"],
    specs: {
      stackup: "4-Layer PCB",
      voltageGen: "300V – 400V Controlled Boost",
      stimulation: "Controlled-current stimulation",
    },
    repoUrl: null,
  },
  {
    id: "flex-electrode-pcb",
    title: "Flexible PCB Design for Wearable Electrode Interfaces",
    timeline: "2024 – 2026",
    institution: "Wearable Bioelectronics Group",
    category: ["wearable", "flex"],
    layerCount: "2 & 4-Layer Flex Polyimide",
    image: "./images/flex-electrode-pcb_1.png",
    images: ["./images/flex-electrode-pcb_1.png", "./images/flex-electrode-pcb_2.png"],
    badge: {
      type: "highlight",
      text: "Ultra-Thin Polyimide",
      class: "badge-gold",
    },
    summary:
      "Custom 2-layer and 4-layer flexible polyimide circuits featuring serpentine strain-relief traces, high-density electrode arrays, and miniature ZIF/FPC interconnections for on-skin sensing.",
    bullets: [
      "Designed 2-layer and 4-layer flexible PCBs for biosensing and electrical stimulation applications.",
      "Developed dense electrode arrays, custom connector interfaces, and compact interconnections for wearable systems.",
      "Prototyped and tested flexible PCB designs in wearable sensing and stimulation applications.",
      "Implemented serpentine trace geometries to maximize mechanical compliance and cyclic bend endurance during skin deformation.",
    ],
    tools: ["Altium Designer", "Polyimide Substrate", "Biosensing"],
    specs: {
      stackup: "2-Layer & 4-Layer Polyimide Flex",
      "Electrode Finish": "Electroless Nickel Immersion Gold (ENIG)",
      compliance: "Conformal On-Skin Mounting",
    },
    repoUrl: null,
  },
  {
    id: "steersafe-eog-pcb",
    title: "Electrooculography (EOG)-Based Drowsiness Detection System",
    timeline: "2024",
    institution: "PulseX Solutions",
    category: ["wearable", "multilayer"],
    layerCount: "6-Layer Wearable PCB",
    image: "./images/steersafe-eog-pcb_1.png",
    images: ["./images/steersafe-eog-pcb_1.png", "./images/steersafe-eog-pcb_2.png", "./images/steersafe-eog-pcb_3.png"],
    badge: {
      type: "award",
      text: "IEEE Challenge Sphere Winner",
      class: "badge-gold",
    },
    summary:
      "“Steer Safe” — A wearable drowsiness detection system that analyzes eye-movement bio-potentials in real-time to alert drowsy drivers, awarded 1st Place in Circuit Challenge 2024.",
    bullets: [
      "Developed “Steer Safe,” a wearable drowsiness detection system using eye-movement signals to detect driver fatigue and provide real-time alerts.",
      "Designed a compact 6-layer PCB with dense component placement and routing for a space-constrained wearable application.",
      "Integrated EOG signal acquisition, embedded processing, and wireless communication for real-time drowsiness detection.",
      "Implemented sensor and peripheral interfaces using I2C and SPI communication protocols.",
      "Winner – IEEE Sri Lanka Section Challenge Sphere, Circuit Challenge 2024.",
    ],
    tools: ["Altium Designer", "STM32WB", "TI ADS1292R", "Bosch IMU", "I2C", "SPI", "BLE"],
    specs: {
      stackup: "6-Layer PCB",
      sensorAFE: "Dual-Channel EOG Differential Amp",
      mcuWireless: "STM32WB Dual-Core BLE 5.2",
      award: "Circuit Challenge Winner 2024",
    },
    repoUrl: "https://github.com/orgs/PulseX-Solutions/repositories",
  },
];

// Current State
let currentFilter = "all";
let currentSearchTerm = "";
let currentModalIndex = 0;

// DOM Elements
const pcbGrid = document.getElementById("pcb-grid");
const projectNavMenu = document.getElementById("project-nav-menu");
const galleryCount = document.getElementById("gallery-count");
const filterPills = document.getElementById("filter-pills");
const noResultsNotice = document.getElementById("no-results");
const resetFilterBtn = document.getElementById("reset-filter-btn");

// Modal Elements
const pcbModal = document.getElementById("pcb-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalPrevBtn = document.getElementById("modal-prev-btn");
const modalNextBtn = document.getElementById("modal-next-btn");
const modalContent = document.getElementById("modal-content");

// Theme Toggle Element
const themeToggleBtn = document.getElementById("theme-toggle");

/**
 * Filter projects based on category pill and search query
 */
function getFilteredProjects() {
  return pcbProjects.filter((item) => {
    const matchesFilter =
      currentFilter === "all" || item.category.includes(currentFilter);

    if (!matchesFilter) return false;

    if (!currentSearchTerm) return true;

    const query = currentSearchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.institution.toLowerCase().includes(query) ||
      item.layerCount.toLowerCase().includes(query) ||
      item.tools.some((t) => t.toLowerCase().includes(query));

    return matchesSearch;
  });
}

/**
 * Render the 3-Column Full Screen PCB Grid
 */
function renderGrid() {
  const filtered = getFilteredProjects();

  galleryCount.textContent = `Showing ${filtered.length} of ${pcbProjects.length} PCB designs`;

  if (filtered.length === 0) {
    pcbGrid.innerHTML = "";
    noResultsNotice.style.display = "block";
    return;
  }

  noResultsNotice.style.display = "none";

  pcbGrid.innerHTML = filtered
    .map((project) => {
      const globalIndex = pcbProjects.findIndex((p) => p.id === project.id);
      return `
      <article class="pcb-card" id="card-${project.id}" data-project-id="${project.id}" onclick="openModalById('${project.id}')">
        <!-- 1:1 Aspect Ratio Image Container -->
        <div class="card-image-wrap" style="background: ${imageBackgrounds[project.image]}">
          <img 
            src="${project.image}" 
            alt="${project.title} - PCB Design" 
            class="card-image"
            loading="lazy"
          />
          <div class="card-badges-overlay">
            <span class="card-layer-badge">${project.layerCount}</span>
            ${
              project.badge
                ? `<span class="card-highlight-badge ${project.badge.class}">${project.badge.text}</span>`
                : ""
            }
          </div>
          <div class="card-hover-action">
            <span class="btn-inspect-overlay">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Inspect PCB & Details
            </span>
          </div>
        </div>

        <!-- Description Block Directly Under Image -->
        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-institution" title="${project.institution}">${project.institution}</span>
            <span class="card-timeline">${project.timeline}</span>
          </div>

          <h3 class="card-title">${project.title}</h3>

          <p class="card-description">${project.summary}</p>

          <div class="card-tags">
            ${project.tools
              .slice(0, 4)
              .map((tool) => `<span class="tag-pill">${tool}</span>`)
              .join("")}
            ${project.tools.length > 4 ? `<span class="tag-pill">+${project.tools.length - 4}</span>` : ""}
          </div>

          <div class="card-footer-cta">
            <span>View Additional Details</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

/**
 * Render Left Sidebar Project Navigation Menu
 */
function renderSidebarNav() {
  projectNavMenu.innerHTML = pcbProjects
    .map((project, idx) => {
      const isActive = idx === currentModalIndex ? "active" : "";
      return `
      <button 
        class="nav-project-item ${isActive}" 
        id="nav-${project.id}"
        onclick="handleNavClick('${project.id}')"
        title="${project.title}"
      >
        <div class="nav-item-top">
          <span class="nav-item-badge">${project.layerCount.split(" ")[0]}</span>
          <span class="nav-item-year">${project.timeline.split(" ").pop()}</span>
        </div>
        <span class="nav-item-title">${project.title}</span>
      </button>
    `;
    })
    .join("");
}

/**
 * Handle navigation item click from sidebar
 */
window.handleNavClick = function (projectId) {
  const cardElement = document.getElementById(`card-${projectId}`);
  if (cardElement) {
    cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
    // Highlight effect
    cardElement.style.boxShadow = "0 0 0 3px var(--accent-cyan)";
    setTimeout(() => {
      cardElement.style.boxShadow = "";
    }, 1500);
  }
  openModalById(projectId);
};

/**
 * Open Modal Popup with Additional Details
 */
window.openModalById = function (projectId) {
  const index = pcbProjects.findIndex((p) => p.id === projectId);
  if (index !== -1) {
    openModalByIndex(index);
  }
};

function openModalByIndex(index) {
  currentModalIndex = index;
  const project = pcbProjects[index];

  // Update active sidebar nav item
  document.querySelectorAll(".nav-project-item").forEach((el, idx) => {
    el.classList.toggle("active", idx === index);
  });

  const initialImageIndex = project.images.length > 1 ? 1 : 0;

  // Render modal content
  modalContent.innerHTML = `
    <!-- Left Column: 1:1 Image & Hardware Specs -->
    <div class="modal-image-col">
      <div class="modal-main-image-wrap" style="background: ${imageBackgrounds[project.images[initialImageIndex]]}">
        <img 
          src="${project.images[initialImageIndex]}" 
          alt="${project.title} — image ${initialImageIndex + 1}" 
          class="modal-main-image"
        />
      </div>

      ${project.images.length > 1 ? `
        <div class="modal-image-thumbnails" aria-label="Project images">
          ${project.images.map((src, imageIndex) => `
            <button type="button" class="modal-image-thumbnail" style="background: ${imageBackgrounds[src]}" data-image-index="${imageIndex}"
              aria-label="View image ${imageIndex + 1}" aria-pressed="${imageIndex === initialImageIndex}">
              <img src="${src}" alt="${project.title} — image ${imageIndex + 1}" />
            </button>
          `).join("")}
        </div>
      ` : ""}

      <div class="modal-image-caption">
        <span>Project images</span>
        <span class="nav-item-badge">${project.layerCount}</span>
      </div>

      <div class="modal-quick-specs">
        ${Object.entries(project.specs)
          .map(
            ([key, val]) => `
          <div class="spec-tile">
            <div class="spec-tile-label">${key}</div>
            <div class="spec-tile-value">${val}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <!-- Right Column: Full Details & Bullet Points -->
    <div class="modal-details-col">
      <div class="modal-header-meta">
        <span class="modal-tag">${project.layerCount}</span>
        <span class="modal-timeline">${project.timeline}</span>
      </div>

      <h2 class="modal-title">${project.title}</h2>
      <div class="modal-affiliation">${project.institution}</div>

      <!-- Highlight / Alert Banner -->
      ${
        project.badge.type === "nda"
          ? `<div class="modal-alert-banner banner-nda">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <div><strong>Project Protected under NDA:</strong> Hardware schematics and specific proprietary subcircuits are confidential. High-level architecture and subsystem integration shown.</div>
            </div>`
          : project.badge.type === "award"
          ? `<div class="modal-alert-banner banner-award">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <div><strong>Competition Winner:</strong> ${project.badge.text}</div>
            </div>`
          : project.badge.type === "paper"
          ? `<div class="modal-alert-banner banner-paper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <div><strong>Peer-Reviewed Research:</strong> ${project.badge.text}</div>
            </div>`
          : ""
      }

      <div class="modal-section-title">Hardware Engineering & Design Details</div>
      <ul class="modal-bullets-list">
        ${project.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>

      <div class="modal-tech-group">
        <div class="modal-section-title">Tools, Protocols & Stackups</div>
        <div class="modal-tech-pills">
          ${project.tools
            .map((tool) => `<span class="tech-chip">${tool}</span>`)
            .join("")}
        </div>
      </div>

      <div class="modal-action-row">
        ${
          project.repoUrl
            ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>View PulseX Repositories</span>
              </a>`
            : `<button class="btn-primary" onclick="copyProjectShareLink('${project.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span id="copy-btn-text">Share Design Link</span>
              </button>`
        }
        <button class="btn-secondary" onclick="closeModal()">Close Details</button>
      </div>
    </div>
  `;

  modalContent.querySelectorAll(".modal-image-thumbnail").forEach((button) => {
    button.addEventListener("click", () => {
      const imageIndex = Number(button.dataset.imageIndex);
      const mainImage = modalContent.querySelector(".modal-main-image");
      mainImage.src = project.images[imageIndex];
      mainImage.parentElement.style.background = imageBackgrounds[project.images[imageIndex]];
      mainImage.alt = `${project.title} — image ${imageIndex + 1}`;
      modalContent.querySelectorAll(".modal-image-thumbnail").forEach((thumbnail) => {
        thumbnail.setAttribute("aria-pressed", String(thumbnail === button));
      });
    });
  });

  // Show modal
  pcbModal.classList.add("active");
  pcbModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * Close Modal
 */
function closeModal() {
  pcbModal.classList.remove("active");
  pcbModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/**
 * Copy Share Link
 */
window.copyProjectShareLink = function (projectId) {
  const url = `${window.location.origin}${window.location.pathname}#${projectId}`;
  navigator.clipboard.writeText(url).then(() => {
    const copyBtnText = document.getElementById("copy-btn-text");
    if (copyBtnText) {
      copyBtnText.textContent = "Copied to Clipboard!";
      setTimeout(() => {
        copyBtnText.textContent = "Share Design Link";
      }, 2000);
    }
  });
};

/**
 * Navigate to next/previous project in modal
 */
function navigateModal(direction) {
  let nextIndex = currentModalIndex + direction;
  if (nextIndex < 0) nextIndex = pcbProjects.length - 1;
  if (nextIndex >= pcbProjects.length) nextIndex = 0;
  openModalByIndex(nextIndex);
}

// Event Listeners
modalCloseBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
modalPrevBtn.addEventListener("click", () => navigateModal(-1));
modalNextBtn.addEventListener("click", () => navigateModal(1));

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (!pcbModal.classList.contains("active")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") navigateModal(-1);
  if (e.key === "ArrowRight") navigateModal(1);
});

// Filter Pill Clicks
filterPills.addEventListener("click", (e) => {
  const pill = e.target.closest(".pill");
  if (!pill) return;

  filterPills.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
  pill.classList.add("active");

  currentFilter = pill.dataset.filter;
  renderGrid();
});

resetFilterBtn.addEventListener("click", () => {
  currentFilter = "all";
  currentSearchTerm = "";
  filterPills.querySelectorAll(".pill").forEach((p) => {
    p.classList.toggle("active", p.dataset.filter === "all");
  });
  renderGrid();
});

// Theme Toggle
themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("pcb-gallery-theme", nextTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem("pcb-gallery-theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Check URL Hash on initial load
window.addEventListener("DOMContentLoaded", () => {
  renderSidebarNav();
  renderGrid();

  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const matched = pcbProjects.find((p) => p.id === hash);
    if (matched) {
      setTimeout(() => openModalById(matched.id), 300);
    }
  }
});
