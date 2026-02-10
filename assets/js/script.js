// App Data based on the original site
const apps = [
  {
    id: "1",
    name: "VU REVENDA",
    version: "12.0",
    size: "25 MB",
    pin: "75849",
    downloads: "649.553",
    icon: "https://a.imagem.app/3SmQft.png",
    category: "Revenda IPTV",
    downloadUrl: "https://wb.storeapps.site/act/download-file.php?pin=75849",
    rating: 4.8,
    description: "Plataforma inovadora para revenda de IPTV. Oferece testes automáticos temporários, velocidade direta ao cliente e suporte completo.",
    screenshots: ["https://a.imagem.app/3SmQft.png"],
    features: ["Testes automáticos", "Suporte 24/7", "Interface intuitiva", "Atualizações constantes"]
  },
  {
    id: "2",
    name: "IBO REVENDA",
    version: "5.0 BETA",
    size: "23 MB",
    pin: "17531",
    downloads: "8.730.228",
    icon: "https://a.imagem.app/BnDrGC.jpeg",
    category: "Revenda IPTV",
    downloadUrl: "https://wb.storeapps.site/act/download-file.php?pin=17531",
    rating: 4.6,
    description: "Aplicativo de revenda com interface personalizável, foco em segurança e privacidade dos dados do usuário.",
    screenshots: ["https://a.imagem.app/BnDrGC.jpeg"],
    features: ["Personalização total", "Segurança robusta", "Navegação simples", "Privacidade garantida"]
  },
  {
    id: "3",
    name: "Zone X",
    version: "2.0",
    size: "25 MB",
    pin: "45836",
    downloads: "9.381.951",
    icon: "https://a.imagem.app/BEjLOb.jpeg",
    category: "Player IPTV",
    downloadUrl: "https://wb.storeapps.site/act/download-file.php?pin=45836",
    rating: 4.7,
    description: "Reprodutor de mídia completo com suporte a múltiplos formatos, interface moderna e listas de reprodução personalizadas.",
    screenshots: ["https://a.imagem.app/BEjEr1.png", "https://a.imagem.app/BEjIPW.png", "https://a.imagem.app/BEjRht.png"],
    features: ["Múltuplos formatos", "Interface moderna", "Legendas externas", "Equalizador de áudio"]
  },
  {
    id: "4",
    name: "UNI REVENDA",
    version: "2.3",
    size: "21 MB",
    pin: "64767",
    downloads: "9.468.503",
    icon: "https://a.imagem.app/BMDFCC.jpeg",
    category: "Revenda IPTV",
    downloadUrl: "https://wb.storeapps.site/act/download-file.php?pin=64767",
    rating: 4.9,
    description: "Sistema de revenda com suporte humanizado, conteúdos em HD/FULL HD/4K e compatibilidade com todos os dispositivos.",
    screenshots: ["https://a.imagem.app/BMDql9.png"],
    features: ["Qualidade 4K", "Guia de programação", "Suporte humanizado", "Todos dispositivos"]
  },
  {
    id:"5",
    name:"WebPlayer",
    version:"1.0",
    size:"-",
    pin:"-",
    downloads: "Link Web",
    icon: "assets/images/genial-logo.jpg",
    category: "Player IPTV Web",
    downloadUrl: "http://webgeni.net",
    rating: 4.5,
    description: "Seja bem-vindo ao GenialPlay! Acesse nosso player diretamente pelo navegador.",
    screenshots: ["assets/images/genial-logo.jpg"],
    features: ["Qualidade 4K", "Guia de programação", "Acesso via Navegador"]
  }
];

// DOM Elements
const header = document.getElementById("header");
const appsContainer = document.getElementById("apps-container");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const yearSpan = document.getElementById("year");

// Set Year
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Header Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Render Apps
function renderApps() {
  if (!appsContainer) return;
  appsContainer.innerHTML = apps
    .map((app) => `
    <div class="app-card" onclick="openModal('${app.id}')">
      <img src="${app.icon}" alt="${app.name}" class="app-icon">
      
      <div class="app-info">
        <h3>${app.name}</h3>
        <p class="app-category">${app.category}</p>
        <p class="app-description">${app.description}</p>
        <div class="app-tags">
          ${app.features.slice(0, 2).map(f => `<span class="tag">${f}</span>`).join("")}
        </div>
      </div>

      <div class="app-meta">
        <div class="rating">
          <ion-icon name="star"></ion-icon>
          ${app.rating}
        </div>
        <button class="btn btn-primary" onclick="event.stopPropagation(); window.open('${app.downloadUrl}', '_blank')">
          <ion-icon name="${app.id === '5' ? 'globe-outline' : 'download-outline'}"></ion-icon> 
          ${app.id === '5' ? 'Acessar Web' : 'Baixar'}
        </button>
      </div>
    </div>
  `).join("");
}

// Modal Logic
function openModal(appId) {
  const app = apps.find((a) => a.id === appId);
  if (!app) return;

  modalBody.innerHTML = `
    <div class="modal-content" onclick="event.stopPropagation()">
      <div class="modal-header-new">
        <img src="${app.icon}" alt="${app.name}" class="modal-header-icon">
        <div>
          <h2 class="modal-title">${app.name}</h2>
          <p class="modal-subtitle">${app.category} • v${app.version}</p>
        </div>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>

      <div class="modal-body-scroll">
          <div class="modal-screenshots">
              ${app.screenshots.map(src => `<img src="${src}" class="screenshot-img" alt="Screenshot">`).join('')}
          </div>

          <div class="modal-section">
              <h4 class="modal-section-title">Sobre</h4>
              <p class="modal-description">${app.description}</p>
          </div>

          <div class="modal-section">
              <h4 class="modal-section-title">Recursos</h4>
              <div class="modal-features-grid">
                  ${app.features.map(f => `
                  <div class="modal-feature-item">
                      <ion-icon name="checkmark-circle" class="modal-feature-icon"></ion-icon>
                      ${f}
                  </div>
                  `).join('')}
              </div>
          </div>

          <div class="modal-stats-grid">
              <div class="stat-box">
                  <span class="stat-label"><ion-icon name="server-outline"></ion-icon> Tamanho</span>
                  <span class="stat-value">${app.size}</span>
              </div>
              <div class="stat-box">
                  <span class="stat-label"><ion-icon name="key-outline"></ion-icon> PIN</span>
                  <span class="stat-value modal-pin-value">${app.pin}</span>
              </div>
              <div class="stat-box">
                  <span class="stat-label"><ion-icon name="cloud-download-outline"></ion-icon> Downloads</span>
                  <span class="stat-value">${app.downloads}</span>
              </div>
              <div class="stat-box">
                  <span class="stat-label"><ion-icon name="star-outline"></ion-icon> Nota</span>
                  <span class="stat-value modal-rating-value">${app.rating}</span>
              </div>
          </div>

          <button class="modal-action-btn" onclick="window.open('${app.downloadUrl}', '_blank')">
              <ion-icon name="${app.id === '5' ? 'globe-outline' : 'download'}"></ion-icon>
              <span>${app.id === '5' ? 'Acessar Agora' : 'Instalar Agora'}</span>
          </button>
      </div>
    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Initialize
renderApps();
