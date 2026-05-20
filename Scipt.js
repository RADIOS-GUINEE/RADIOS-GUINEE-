const radioStations = [
    { name: "Espace FM", streamUrl: "https://adwomedia.co/m_espacefm" },
    { name: "RTG Radio", streamUrl: "https://stream.zeno.fm/f06u6382w0hvv" },
    { name: "Sabari FM", streamUrl: "https://stream.zeno.fm/6m83gq62w0hvv" }
];

let currentAudio = null;
let currentButton = null;

document.addEventListener("DOMContentLoaded", () => {
    const stationCards = document.querySelectorAll('.s-card, [class*="card"]'); 
    
    stationCards.forEach(card => {
        const nameElement = card.querySelector('h3, .radio-title, h2');
        if (!nameElement) return;
        
        const stationName = nameElement.textContent.trim();
        const stationData = radioStations.find(s => stationName.toLowerCase().includes(s.name.toLowerCase()));
        
        if (stationData) {
            const playBtn = card.querySelector('.play-btn, button, img[src*="play"]');
            if (playBtn) {
                playBtn.style.cursor = "pointer";
                playBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    togglePlay(stationData.streamUrl, playBtn);
                });
            }
        }
    });
});

function togglePlay(url, button) {
    if (currentAudio) {
        currentAudio.pause();
        if (currentButton) { currentButton.innerHTML = '▶'; }
        if (currentAudio.src === url) {
            currentAudio = null;
            currentButton = null;
            return;
        }
    }

    currentAudio = new Audio(url);
    currentAudio.play()
        .then(() => {
            currentButton = button;
            button.innerHTML = '⏸';
        })
        .catch(error => {
            alert("Le flux de cette radio est indisponible pour le moment.");
        });
}
