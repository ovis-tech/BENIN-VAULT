// ========== artifact.js (drop-in) ==========

// --- DATA ---
const artifacts = [
  {
    id: '',
    src: 'ivory mask-1152x1440.jpg',
    name: '',
    english: 'ivory mask',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Benin Bronze Plaques.jpg',
    name: '',
    english: 'Benin Bronze Plaques',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Birds of Prophecy.avif',
    name: 'Ahianmwẹ-Ọrọ',
    english: 'Birds of Prophecy',
    pronunciation: '',
  },
  {
    id: '',
    src: '1f5b36e585da0845d707aac9f116177c8b4ffe36-4170x3128.avif',
    name: 'Igho',
    english: 'Manilla or Bracelet',
    pronunciation: '',
  },
  {
    id: '',
    src: '2ee0ec7c20ab08eedd3fc7cf7c406432293e7cfc-2901x3456.avif',
    name: 'Uhunmwu-Ẹkuẹ',
    english: 'Pendant Mask',
    pronunciation: '',
  },
  {
    id: '',
    src: '02fdca1ebd041648265c65177a40173bad266996-2000x3000.avif',
    name: 'Uhunmwu-Elao',
    english: 'Commemorative Head',
    pronunciation: '',
  },
  {
    id: '',
    src: '3abcd6919f9032fb6041e070cb4e45522eb4b342-3000x2000.avif',
    name: 'Ikoro',
    english: 'Armcuff',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Altar of the Hand Ikegobo.jpeg',
    name: 'Ikegobo',
    english: 'Altar of the Hand',
    pronunciation: '',
  },
  {
    id: '',
    src: '3c3558d976276c6c5ff150dbb2155e98fa680d7e-1000x665.avif',
    name: 'Oroka',
    english: 'Finger Ring',
    pronunciation: '',
  },
  {
    id: '',
    src: '4befa979866c4fc7ecbd6cf411afda657adc081d-2858x4345.avif',
    name: 'Uko',
    english: 'Flask',
    pronunciation: '',
  },
  {
    id: '',
    src: '4ef56ed1ef0f9fd8e0ad4d3859786d3fc2dd391a-1600x1797.avif',
    name: 'Ama',
    english: 'Relief Plaque',
    pronunciation: '',
  },
  {
    id: '',
    src: '5a4f4e3a2dc2ef568f12a28c832b0f9570824a16-3336x3912.avif',
    name: 'Ẹroro',
    english: 'Bell',
    pronunciation: '',
  },
  {
    id: '',
    src: 'ukhurhe-rattle staff.jpeg',
    name: 'Ukhurhẹ',
    english: 'Rattle staff',
    pronunciation: '',
  },
  {
    id: '',
    src: '7d4b59902ef091ff2b11b658e7480d3dc7af2297-1139x1715.avif',
    name: 'okpia',
    english: 'male figure',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Bronze head of queen ida.jpg',
    name: '',
    english: 'Bronze head of queen ida',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Leopard Figures.jpg',
    name: 'Ẹkpẹn',
    english: 'Leopard Figures',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Benin Bronze Boxes Ebo.avif',
    name: 'Ebo',
    english: 'Benin Bronze Boxes',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Benin Court Jesters or Dwarfs Figures.jpg',
    name: '',
    english: 'Benin Court Dwarfs Figures',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Benin Royal Altars.jpg',
    name: '',
    english: 'Benin Royal Altars',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Bronze Canoe Scenes.jpg',
    name: '',
    english: 'Bronze Canoe Scenes',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Bronze Horseman Figure.jpeg',
    name: '',
    english: 'Bronze Horseman Figure',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Ceremonial Bronze Trumpets.webp',
    name: '',
    english: 'Ceremonial Bronze Trumpets',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Coral Beaded Crowns and Regalia.jpg',
    name: '',
    english: 'Coral Beaded Crown',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Ivory Horn Okelé.jpeg',
    name: 'Okelé',
    english: 'Ivory Horn',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Portuguese Soldier Figures.jpg',
    name: '',
    english: 'Portuguese Soldier Figures',
    pronunciation: '',
  },
  {
    id: '',
    src: 'Royal Swords Ada and Eben.webp',
    name: 'Ada and Eben',
    english: 'Royal Swords',
    pronunciation: '',
  },
]

// ---- RENDER LISTING ----
const cardContainer = document.getElementById('card-container')

function renderArtifacts(list) {
  if (!cardContainer) return

  if (!list || list.length === 0) {
    cardContainer.innerHTML = `
      <p style="font-size:2rem;color:black;text-align:center;padding:50px 0;">
        No artifacts found.
      </p>`
    return
  }

  cardContainer.innerHTML = list
    .map((artifact, index) => {
      const hasName = Boolean(artifact.name && artifact.name.trim())
      const displayName = hasName ? artifact.name.trim() : ''
      const altText = hasName ? displayName : artifact.english || 'Artifact'

      return `
        <div class="card">
          <div class="image">
            <a href="artifact-detail.html?index=${index}">
              <img 
                src="image/artifact/${artifact.src}" 
                alt="${altText}"
                loading="lazy"
                onerror="this.onerror=null;this.src='image/artifact/default.jpg';"
              />
            </a>
          </div>
          <h2>${displayName}</h2>
          <h3>${artifact.english}</h3>
          <div class="click">
            <button class="but2" onclick="pronounce('${artifact.english.replace(
              /'/g,
              "\\'"
            )}')">🔊 Pronounce</button>
          </div>
        </div>
      `
    })
    .join('')
}

// ---- PRONOUNCE (exposed for onclick) ----
window.pronounce = function (name) {
  try {
    const utterance = new SpeechSynthesisUtterance(name)
    speechSynthesis.speak(utterance)
  } catch (e) {
    console.warn('Speech synthesis not available:', e)
  }
}

// ---- OPTIONAL SEARCH (only attaches if present) ----
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
if (searchForm && searchInput) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const q = searchInput.value.toLowerCase().trim()
    const filtered = artifacts.filter((a) => {
      const n = (a.name || '').toLowerCase()
      const en = (a.english || '').toLowerCase()
      return n.includes(q) || en.includes(q)
    })
    renderArtifacts(filtered)
  })
}

// ---- INITIALIZE ----
document.addEventListener('DOMContentLoaded', () => {
  renderArtifacts(artifacts)
})
// ========== /artifact.js ==========