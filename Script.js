// Tableau contenant les informations et les flux officiels des radios
const radioStations = [
    {
        name: "Espace FM",
        streamUrl: "https://adwomedia.co/m_espacefm"
    },
    {
        name: "RTG Radio",
        streamUrl: "https://stream.zeno.fm/f06u6382w0hvv"
    },
    {
        name: "Sabari FM",
        streamUrl: "https://stream.zeno.fm/6m83gq62w0hvv"
    }
];

// Variable pour suivre la radio actuellement lue
let currentAudio = null;
let currentButton = null;

// Attendre que la page soit complètement chargée
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner toutes les cartes de radio dans la page
    const stationCards = document.querySelectorAll('.s-card, [class*="card"]'); 
    
    stationCards.forEach(card => {
        // Trouver le nom de la radio dans la carte
        const nameElement = card.querySelector('h3, .radio-title, h2');
        if (!nameElement) return;
        
        const stationName = nameElement.textContent.trim();
        
        // Associer les données du flux audio
        const stationData = radioStations.find(s => stationName.toLowerCase().includes(s.name.toLowerCase()));
        
        if (stationData) {
            // Trouver le bouton Play (le rond rouge avec le triangle blanc)
            const playBtn = card.querySelector('.play-btn, button, img[src*="play"]');
            
            if (playBtn) {
                playBtn.style.cursor = "pointer";
                
                // Écouter le clic sur le bouton
                playBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    togglePlay(stationData.streamUrl, playBtn);
                });
            }
        }
    });
});

// Fonction pour gérer la lecture et la pause
function togglePlay(url, button) {
    // Si une musique tourne déjà
    if (currentAudio) {
        currentAudio.pause();
        // Remettre l'icône du bouton précédent en mode "Play" (triangle)
        if (currentButton) {
            currentButton.innerHTML = '▶'; // Modifiez ici si vous utilisez des icônes spécifiques
        }
        
        // Si on a cliqué sur la même radio, on l'arrête simplement
        if (currentAudio.src === url) {
            currentAudio = null;
            currentButton = null;
            return;
        }
    }

    // Lancer la nouvelle radio
    currentAudio = new Audio(url);
    currentAudio.play()
        .then(() => {
            currentButton = button;
            button.innerHTML = '⏸'; // Change le bouton en mode "Pause"
            console.log("Lecture en cours...");
        })
        .catch(error => {
            console.error("Erreur de lecture du flux : ", error);
            alert("Le flux de cette radio est indisponible pour le moment.");
        });
}
