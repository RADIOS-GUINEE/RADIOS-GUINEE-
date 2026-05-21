<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
<meta name="theme-color" content="#CC0000"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="description" content="Radios Guinée - Écoutez les meilleures radios guinéennes en direct"/>
<title>RADIOS GUINÉE</title>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"/>
<style>
:root {
  --rouge:#CC0000; --jaune:#FFD700; --vert:#009A44;
  --noir:#0A0A0A; --gris-fonce:#1A1A1A; --gris-moyen:#242424;
  --gris-clair:#333; --texte:#F0F0F0; --texte-doux:#999;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{font-family:'Nunito',sans-serif;background:var(--noir);color:var(--texte);min-height:100vh;overflow-x:hidden}

/* HEADER */
.header{background:linear-gradient(135deg,#8B0000,#CC0000,#8B0000);position:sticky;top:0;z-index:100;box-shadow:0 4px 20px rgba(204,0,0,0.4)}
.header-top{display:flex;align-items:center;justify-content:space-between;padding:12px 16px 8px}
.logo-area{display:flex;align-items:center;gap:10px}
.logo-flag{display:flex;flex-direction:column;width:28px;height:20px;border-radius:3px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.4)}
.flag-r{background:#CC0000;flex:1}.flag-y{background:#FFD700;flex:1}.flag-g{background:#009A44;flex:1}
.app-title{font-family:'Oswald',sans-serif;font-size:22px;font-weight:700;color:#fff;letter-spacing:2px}
.app-subtitle{font-size:10px;color:rgba(255,255,255,0.7);letter-spacing:1px;text-transform:uppercase}
.lang-btn{background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:#fff;padding:6px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer}

.search-bar{padding:0 16px 12px}
.search-input{width:100%;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.2);border-radius:25px;padding:10px 16px 10px 40px;color:#fff;font-size:14px;font-family:'Nunito',sans-serif;outline:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='rgba(255,255,255,0.5)' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.44 1.406a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:14px center}
.search-input::placeholder{color:rgba(255,255,255,0.5)}

/* PUB */
.pub-banner{background:linear-gradient(90deg,#1a1a1a,#2a2a2a);border-bottom:1px solid #333;padding:8px 16px;text-align:center;font-size:12px;color:var(--texte-doux);display:flex;align-items:center;justify-content:center;gap:8px}
.pub-label{background:var(--jaune);color:#000;font-size:9px;font-weight:700;padding:2px 6px;border-radius:3px;letter-spacing:1px}

/* CATEGORIES */
.categories{padding:14px 16px 6px;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none}
.categories::-webkit-scrollbar{display:none}
.cat-btn{background:var(--gris-moyen);border:1px solid #333;color:var(--texte-doux);padding:7px 16px;border-radius:20px;font-size:12px;font-weight:600;white-space:nowrap;cursor:pointer;font-family:'Nunito',sans-serif}
.cat-btn.active{background:var(--rouge);border-color:var(--rouge);color:#fff;box-shadow:0 2px 12px rgba(204,0,0,0.4)}

/* LOADING */
.loading-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;gap:16px}
.spinner{width:48px;height:48px;border:4px solid #333;border-top:4px solid var(--rouge);border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-text-main{font-family:'Oswald',sans-serif;font-size:16px;color:var(--texte-doux);letter-spacing:1px}

/* SECTION */
.section-title{font-family:'Oswald',sans-serif;font-size:15px;font-weight:600;color:var(--texte-doux);padding:14px 16px 8px;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.section-title::after{content:'';flex:1;height:1px;background:#333}
.station-count{font-size:11px;color:var(--rouge);background:rgba(204,0,0,0.1);padding:2px 8px;border-radius:10px}

/* RADIO LIST */
.radio-list{padding:0 16px;display:flex;flex-direction:column;gap:10px;padding-bottom:160px}

.radio-card{background:var(--gris-moyen);border-radius:14px;padding:14px;display:flex;align-items:center;gap:14px;cursor:pointer;transition:all 0.2s;border:1px solid transparent;position:relative;overflow:hidden}
.radio-card.playing{background:linear-gradient(135deg,#1a0a0a,#2a1010);border-color:rgba(204,0,0,0.4);box-shadow:0 4px 20px rgba(204,0,0,0.2)}
.radio-card:active{transform:scale(0.98)}

.radio-logo-wrap{width:54px;height:54px;border-radius:12px;flex-shrink:0;overflow:hidden;background:var(--gris-clair);display:flex;align-items:center;justify-content:center}
.radio-logo-wrap img{width:100%;height:100%;object-fit:cover;border-radius:12px}
.logo-placeholder{width:54px;height:54px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-family:'Oswald',sans-serif;font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:1.2;flex-shrink:0;padding:4px}

.radio-info{flex:1;min-width:0}
.radio-name{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;color:var(--texte);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.radio-desc{font-size:12px;color:var(--texte-doux);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.radio-tags{display:flex;gap:4px;margin-top:5px;flex-wrap:wrap}
.radio-tag{background:rgba(255,255,255,0.06);padding:2px 8px;border-radius:8px;font-size:10px;color:var(--texte-doux)}
.radio-tag.main{background:rgba(204,0,0,0.15);color:#ff6666}

.radio-actions{display:flex;flex-direction:column;align-items:center;gap:8px}
.play-btn{width:42px;height:42px;border-radius:50%;background:var(--rouge);border:none;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;box-shadow:0 2px 10px rgba(204,0,0,0.4);flex-shrink:0}
.play-btn.playing{background:var(--jaune);color:#000}
.play-btn:active{transform:scale(0.9)}
.fav-btn{background:none;border:none;color:var(--texte-doux);font-size:18px;cursor:pointer;transition:all 0.2s;line-height:1}
.fav-btn.active{color:#ff4444}

/* LIVE DOT */
.live-dot{display:inline-flex;align-items:center;gap:4px;font-size:10px;color:#4CAF50;font-weight:700}
.live-dot::before{content:'';width:6px;height:6px;border-radius:50%;background:#4CAF50;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.8)}}

/* PLAYER BAR */
.player-bar{position:fixed;bottom:60px;left:0;right:0;background:linear-gradient(135deg,#1a0505,#2d0808);border-top:2px solid var(--rouge);padding:12px 16px;z-index:200;display:none;box-shadow:0 -8px 30px rgba(204,0,0,0.3)}
.player-bar.visible{display:block}
.player-info{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.player-logo{width:44px;height:44px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;overflow:hidden}
.player-logo img{width:100%;height:100%;object-fit:cover;border-radius:10px}
.player-name{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.player-controls{display:flex;align-items:center;gap:8px}
.main-play-btn{width:48px;height:48px;border-radius:50%;background:var(--rouge);border:none;color:#fff;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(204,0,0,0.5);transition:all 0.2s;margin:0 8px;flex-shrink:0}
.main-play-btn:active{transform:scale(0.9)}
.volume-slider{flex:1;-webkit-appearance:none;height:4px;border-radius:2px;background:#444;outline:none}
.volume-slider::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--rouge);cursor:pointer}
.loading-anim{font-size:11px;color:var(--jaune);animation:blink 1s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
.error-text{font-size:11px;color:#ff6666}

/* BOTTOM NAV */
.bottom-nav{position:fixed;bottom:0;left:0;right:0;background:var(--gris-fonce);border-top:1px solid #333;display:flex;z-index:300}
.nav-item{flex:1;display:flex;flex-direction:column;align-items:center;padding:10px 0 8px;cursor:pointer;gap:3px}
.nav-icon{font-size:20px;line-height:1}
.nav-label{font-size:10px;color:var(--texte-doux);font-weight:600}
.nav-item.active .nav-label{color:var(--rouge)}

/* MODAL LANGUE */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:500;display:none;align-items:flex-end;justify-content:center}
.modal-overlay.open{display:flex}
.modal-sheet{background:var(--gris-fonce);border-radius:20px 20px 0 0;padding:20px;width:100%;max-width:480px;animation:slideUp 0.3s ease}
@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
.modal-title{font-family:'Oswald',sans-serif;font-size:18px;text-align:center;margin-bottom:16px}
.lang-option{display:flex;align-items:center;gap:14px;padding:14px;background:var(--gris-moyen);border-radius:12px;margin-bottom:10px;cursor:pointer;border:2px solid transparent}
.lang-option.selected{border-color:var(--rouge)}
.lang-flag{font-size:28px}
.lang-name{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600}
.lang-native{font-size:12px;color:var(--texte-doux);margin-top:2px}

/* TABS */
.tab-content{display:none}
.tab-content.active{display:block}
.empty-state{text-align:center;padding:60px 20px;color:var(--texte-doux)}
.empty-icon{font-size:48px;margin-bottom:12px}

/* ABOUT */
.about-section{padding:20px 16px;padding-bottom:120px}
.about-card{background:var(--gris-moyen);border-radius:14px;padding:16px;margin-bottom:12px}
.about-card h3{font-family:'Oswald',sans-serif;font-size:15px;color:var(--rouge);margin-bottom:8px;letter-spacing:1px}
.about-card p{font-size:13px;color:var(--texte-doux);line-height:1.6}

/* PUB MID */
.pub-mid{margin:4px 16px 10px;background:linear-gradient(135deg,#1a1a00,#2a2800);border:1px solid #444400;border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px}
.pub-mid-icon{font-size:28px}
.pub-mid-text{font-size:12px;color:#cccc00;flex:1}
.pub-mid-cta{background:var(--jaune);color:#000;padding:6px 12px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap}

[dir="rtl"] .search-input{background-position:calc(100% - 14px) center;padding:10px 40px 10px 16px}

/* ERROR CARD */
.error-card{background:#1a0a0a;border:1px solid #440000;border-radius:12px;padding:16px;margin:16px;text-align:center;color:#ff6666;font-size:13px}
.retry-btn{margin-top:10px;background:var(--rouge);color:#fff;border:none;padding:8px 20px;border-radius:20px;font-size:13px;cursor:pointer;font-family:'Nunito',sans-serif}
</style>
</head>
<body>

<header class="header">
  <div class="header-top">
    <div class="logo-area">
      <div class="logo-flag"><div class="flag-r"></div><div class="flag-y"></div><div class="flag-g"></div></div>
      <div>
        <div class="app-title">RADIOS GUINÉE</div>
        <div class="app-subtitle" id="app-subtitle">Écoutez en direct</div>
      </div>
    </div>
    <button class="lang-btn" onclick="openLangModal()" id="lang-display">🇫🇷 FR</button>
  </div>
  <div class="search-bar">
    <input type="search" class="search-input" id="searchInput" placeholder="Rechercher une radio..." oninput="filterRadios(this.value)"/>
  </div>
</header>

<div class="pub-banner">
  <span class="pub-label">PUB</span>
  <span id="pub-text">📢 Votre publicité ici — Contactez-nous pour annoncer</span>
</div>

<div class="categories" id="categories">
  <button class="cat-btn active" onclick="filterCategory('all',this)">Toutes</button>
  <button class="cat-btn" onclick="filterCategory('generaliste',this)">Généraliste</button>
  <button class="cat-btn" onclick="filterCategory('musique',this)">Musique</button>
  <button class="cat-btn" onclick="filterCategory('info',this)">Info</button>
  <button class="cat-btn" onclick="filterCategory('religion',this)">Religion</button>
  <button class="cat-btn" onclick="filterCategory('regional',this)">Régionale</button>
</div>

<div id="tab-home" class="tab-content active">
  <div id="main-content"></div>
</div>

<div id="tab-favs" class="tab-content">
  <div class="section-title">❤️ <span id="fav-title">Mes Favoris</span></div>
  <div class="radio-list" id="fav-list">
    <div class="empty-state"><div class="empty-icon">💔</div><div id="empty-fav-text">Aucun favori ajouté</div></div>
  </div>
</div>

<div id="tab-podcasts" class="tab-content">
  <div class="section-title">🎙️ <span id="podcast-title">Podcasts</span></div>
  <div class="pub-mid">
    <div class="pub-mid-icon">📱</div>
    <div class="pub-mid-text" id="pub-mid-text">Annoncez votre produit ici !</div>
    <div class="pub-mid-cta" id="pub-cta">Contacter</div>
  </div>
  <div class="radio-list">
    <div class="empty-state"><div class="empty-icon">🎙️</div><div id="empty-pod-text">Podcasts bientôt disponibles</div></div>
  </div>
</div>

<div id="tab-about" class="tab-content">
  <div class="about-section">
    <div class="about-card"><h3 id="about-title">À PROPOS</h3><p id="about-text">RADIOS GUINÉE regroupe les meilleures stations de radio guinéennes. Écoutez en direct où que vous soyez.</p></div>
    <div class="about-card"><h3 id="pub-contact-title">PUBLICITÉ</h3><p id="pub-contact-text">Vous souhaitez annoncer votre produit ou service ? Contactez-nous pour des espaces publicitaires dans l'application.</p></div>
    <div class="about-card"><h3>LANGUES</h3><p>Français • English • العربية • ߒߞߏ</p></div>
    <div class="about-card" style="background:linear-gradient(135deg,#1a0a0a,#2d0808);border:1px solid rgba(204,0,0,0.3)">
      <h3 style="color:var(--jaune)">VERSION</h3>
      <p>RADIOS GUINÉE v2.0 — 2025<br/>Propulsé par Radio Browser API 🌍<br/>Développé avec ❤️ pour la Guinée</p>
    </div>
  </div>
</div>

<!-- PLAYER -->
<div class="player-bar" id="playerBar">
  <div class="player-info">
    <div class="player-logo" id="playerLogo" style="background:#CC0000;font-family:'Oswald',sans-serif;"></div>
    <div style="flex:1;min-width:0">
      <div class="player-name" id="playerName">—</div>
      <div style="margin-top:2px">
        <span class="live-dot" id="liveStatus">EN DIRECT</span>
        <span class="loading-anim" id="loadingText" style="display:none">Connexion...</span>
        <span class="error-text" id="errorText" style="display:none">⚠️ Indisponible</span>
      </div>
    </div>
    <button onclick="closePlayer()" style="background:none;border:none;color:#999;font-size:20px;cursor:pointer">✕</button>
  </div>
  <div class="player-controls">
    <span style="font-size:18px">🔈</span>
    <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="80" oninput="setVolume(this.value)"/>
    <span style="font-size:18px">🔊</span>
    <button class="main-play-btn" id="mainPlayBtn" onclick="togglePlay()">⏸️</button>
  </div>
</div>

<nav class="bottom-nav">
  <div class="nav-item active" onclick="switchTab('home',this)">
    <span class="nav-icon">📻</span>
    <span class="nav-label" id="nav-home">Radios</span>
  </div>
  <div class="nav-item" onclick="switchTab('favs',this)">
    <span class="nav-icon">❤️</span>
    <span class="nav-label" id="nav-favs">Favoris</span>
  </div>
  <div class="nav-item" onclick="switchTab('podcasts',this)">
    <span class="nav-icon">🎙️</span>
    <span class="nav-label" id="nav-podcasts">Podcasts</span>
  </div>
  <div class="nav-item" onclick="switchTab('about',this)">
    <span class="nav-icon">ℹ️</span>
    <span class="nav-label" id="nav-about">À propos</span>
  </div>
</nav>

<!-- LANG MODAL -->
<div class="modal-overlay" id="langModal" onclick="closeLangModal(event)">
  <div class="modal-sheet">
    <div class="modal-title" id="lang-modal-title">Choisir la langue</div>
    <div class="lang-option" onclick="setLanguage('fr')" id="lang-fr"><span class="lang-flag">🇫🇷</span><div><div class="lang-name">Français</div><div class="lang-native">Langue française</div></div></div>
    <div class="lang-option" onclick="setLanguage('en')" id="lang-en"><span class="lang-flag">🇬🇧</span><div><div class="lang-name">English</div><div class="lang-native">English language</div></div></div>
    <div class="lang-option" onclick="setLanguage('ar')" id="lang-ar"><span class="lang-flag">🌙</span><div><div class="lang-name">العربية</div><div class="lang-native">اللغة العربية</div></div></div>
    <div class="lang-option" onclick="setLanguage('nko')" id="lang-nko"><span class="lang-flag">✨</span><div><div class="lang-name">ߒߞߏ</div><div class="lang-native">ߒߞߏ ߞߊ߲</div></div></div>
  </div>
</div>

<audio id="audioPlayer" preload="none"></audio>

<script>
// =====================
// TRADUCTIONS
// =====================
const i18n = {
  fr:{dir:"ltr",subtitle:"Écoutez en direct",search:"Rechercher une radio...",navHome:"Radios",navFavs:"Favoris",navPodcasts:"Podcasts",navAbout:"À propos",langModal:"Choisir la langue",favTitle:"Mes Favoris",emptyFav:"Aucun favori ajouté",podcastTitle:"Podcasts",emptyPod:"Podcasts bientôt disponibles",aboutTitle:"À PROPOS",aboutText:"RADIOS GUINÉE regroupe les meilleures stations de radio guinéennes. Écoutez en direct où que vous soyez.",pubContactTitle:"PUBLICITÉ",pubContactText:"Vous souhaitez annoncer ? Contactez-nous pour des espaces publicitaires.",pubText:"📢 Votre publicité ici — Contactez-nous",pubMidText:"Annoncez votre produit ici !",pubCta:"Contacter",live:"EN DIRECT",connecting:"Connexion...",unavailable:"⚠️ Indisponible",loading:"⏳ Chargement des radios...",error:"Impossible de charger les radios",retry:"Réessayer",catAll:"Toutes",catGen:"Généraliste",catMus:"Musique",catInfo:"Info",catRel:"Religion",catReg:"Régionale",stationsFound:"radios trouvées"},
  en:{dir:"ltr",subtitle:"Listen live",search:"Search a radio...",navHome:"Radios",navFavs:"Favorites",navPodcasts:"Podcasts",navAbout:"About",langModal:"Choose language",favTitle:"My Favorites",emptyFav:"No favorites added",podcastTitle:"Podcasts",emptyPod:"Podcasts coming soon",aboutTitle:"ABOUT",aboutText:"RADIOS GUINÉE brings together the best Guinean radio stations. Listen live wherever you are.",pubContactTitle:"ADVERTISING",pubContactText:"Want to advertise? Contact us for advertising spaces.",pubText:"📢 Your ad here — Contact us",pubMidText:"Advertise your product here!",pubCta:"Contact",live:"LIVE",connecting:"Connecting...",unavailable:"⚠️ Unavailable",loading:"⏳ Loading radios...",error:"Unable to load radios",retry:"Retry",catAll:"All",catGen:"General",catMus:"Music",catInfo:"News",catRel:"Religion",catReg:"Regional",stationsFound:"stations found"},
  ar:{dir:"rtl",subtitle:"استمع مباشرة",search:"ابحث عن محطة...",navHome:"الإذاعات",navFavs:"المفضلة",navPodcasts:"البودكاست",navAbout:"حول",langModal:"اختر اللغة",favTitle:"المفضلة",emptyFav:"لا توجد محطات",podcastTitle:"البودكاست",emptyPod:"قريبًا",aboutTitle:"حول",aboutText:"راديوز غينيا يجمع أفضل المحطات الغينية.",pubContactTitle:"الإعلانات",pubContactText:"تواصل معنا للإعلان.",pubText:"📢 إعلانك هنا",pubMidText:"أعلن عن منتجك!",pubCta:"تواصل",live:"مباشر",connecting:"جارٍ الاتصال...",unavailable:"⚠️ غير متاح",loading:"⏳ جارٍ التحميل...",error:"تعذر تحميل المحطات",retry:"إعادة المحاولة",catAll:"الكل",catGen:"عام",catMus:"موسيقى",catInfo:"أخبار",catRel:"دين",catReg:"محلي",stationsFound:"محطة"},
  nko:{dir:"rtl",subtitle:"ߘߍ߬ߡߊ߬ ߞߊ߲ߠߊ",search:"ߙߊߘߌߦߐ ߦߋ߫...",navHome:"ߙߊߘߌߦߐ",navFavs:"ߒ ߠߊ߫",navPodcasts:"ߝߐߟߌ",navAbout:"ߒߠߋ",langModal:"ߞߊ߲ ߟߊ߫",favTitle:"ߒ ߠߊ߫ ߙߊߘߌߦߐ",emptyFav:"ߙߊߘߌߦߐ ߛߌ߫ ߕߴߛߋ߫",podcastTitle:"ߝߐߟߌ",emptyPod:"ߝߐߟߌ ߘߌ߫ ߛߋ߫",aboutTitle:"ߒߠߋ",aboutText:"RADIOS GUINÉE ߞߊ߬ ߙߊߘߌߦߐ ߓߘߍ߬ ߘߊ߫.",pubContactTitle:"ߞߊ߬ߙߊ߲",pubContactText:"ߌ ߦߋ߫ ߞߊ߬ ߌ ߟߊ߫ ߞߊ߬ߙߊ߲ ߘߊ߫?",pubText:"📢 ߌ ߟߊ߫ ߞߊ߬ߙߊ߲ ߦߋ߫ ߟߊ",pubMidText:"ߌ ߟߊ߫ ߞߊ߬ߙߊ߲ ߘߊ߫!",pubCta:"ߘߊ߬ߡߊ",live:"ߞߊ߲ߠߊ",connecting:"ߟߊ߬ߘߌ߬ߟߌ...",unavailable:"⚠️ ߕߴߛߋ߫",loading:"⏳ ߟߊ߬ߘߌ߬ߟߌ...",error:"ߙߊߘߌߦߐ ߕߊ߫ ߛߋ߫",retry:"ߊ߬ ߟߊ߫ ߦߋ߫",catAll:"ߒߞߏ",catGen:"ߝߊ߬ߙߊ߲",catMus:"ߘߣߊ߬ߡߊ",catInfo:"ߞߐߜߍ",catRel:"ߌߛߌ߬ߟߊ߬ߡߊ",catReg:"ߝߊ߬ߛߏ",stationsFound:"ߙߊߘߌߦߐ"}
};

// =====================
// STATE
// =====================
let currentLang = localStorage.getItem('rg_lang') || 'fr';
let currentRadio = null;
let isPlaying = false;
let favorites = JSON.parse(localStorage.getItem('rg_favs') || '[]');
let currentCategory = 'all';
let currentSearch = '';
let allStations = [];
let filteredStations = [];

const audio = document.getElementById('audioPlayer');

// =====================
// COULEURS PAR CATEGORIE
// =====================
function getColor(tags) {
  const t = (tags||'').toLowerCase();
  if(t.includes('music') || t.includes('musique')) return '#9900CC';
  if(t.includes('news') || t.includes('info') || t.includes('talk')) return '#0066CC';
  if(t.includes('islam') || t.includes('religion') || t.includes('coran')) return '#009966';
  if(t.includes('sport')) return '#CC6600';
  return '#CC0000';
}

function getCategory(tags, name) {
  const t = (tags||'').toLowerCase();
  const n = (name||'').toLowerCase();
  if(t.includes('music') || t.includes('musique') || n.includes('music')) return 'musique';
  if(t.includes('news') || t.includes('info') || t.includes('talk') || n.includes('info')) return 'info';
  if(t.includes('islam') || t.includes('religion') || t.includes('coran') || n.includes('bonheur') || n.includes('religieu')) return 'religion';
  if(n.includes('fouta') || n.includes('regional') || n.includes('kindia') || n.includes('mamou') || n.includes('kankan') || n.includes('nzerekore')) return 'regional';
  return 'generaliste';
}

// =====================
// CHARGER LES RADIOS
// =====================
async function loadStations() {
  showLoading();
  const servers = [
    'https://de1.api.radio-browser.info',
    'https://fr1.api.radio-browser.info',
    'https://nl1.api.radio-browser.info'
  ];
  
  for(const server of servers) {
    try {
      const url = `${server}/json/stations/bycountrycodeexact/GN?limit=100&hidebroken=true&order=clickcount&reverse=true`;
      const res = await fetch(url, {headers:{'User-Agent':'RadiosGuinee/2.0'}});
      if(!res.ok) continue;
      const data = await res.json();
      if(data && data.length > 0) {
        allStations = data.map(s => ({
          id: s.stationuuid,
          name: s.name.trim(),
          stream: s.url_resolved || s.url,
          logo: s.favicon,
          tags: s.tags,
          category: getCategory(s.tags, s.name),
          color: getColor(s.tags),
          bitrate: s.bitrate,
          votes: s.votes
        })).filter(s => s.stream && s.name);
        
        filteredStations = [...allStations];
        renderStations();
        return;
      }
    } catch(e) { continue; }
  }
  showError();
}

function showLoading() {
  document.getElementById('main-content').innerHTML = `
    <div class="loading-screen">
      <div class="spinner"></div>
      <div class="loading-text-main" id="loading-msg">${i18n[currentLang].loading}</div>
    </div>`;
}

function showError() {
  const t = i18n[currentLang];
  document.getElementById('main-content').innerHTML = `
    <div class="error-card">
      <div style="font-size:36px;margin-bottom:8px">📡</div>
      <div>${t.error}</div>
      <button class="retry-btn" onclick="loadStations()">${t.retry}</button>
    </div>`;
}

// =====================
// RENDER
// =====================
function renderStations() {
  const t = i18n[currentLang];
  let list = allStations.filter(s => {
    const matchCat = currentCategory === 'all' || s.category === currentCategory;
    const matchSearch = !currentSearch || s.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  if(!list.length) {
    document.getElementById('main-content').innerHTML = `
      <div class="empty-state"><div class="empty-icon">📻</div><div>${t.emptyFav}</div></div>`;
    return;
  }

  const html = `
    <div class="section-title">📻 ${t.navHome} <span class="station-count">${list.length} ${t.stationsFound}</span></div>
    <div class="radio-list" id="radio-list">
      ${list.map(s => renderCard(s)).join('')}
    </div>`;
  document.getElementById('main-content').innerHTML = html;
}

function renderCard(s) {
  const isActive = currentRadio && currentRadio.id === s.id;
  const isFav = favorites.includes(s.id);
  const logoHtml = s.logo 
    ? `<div class="radio-logo-wrap"><img src="${s.logo}" onerror="this.parentElement.innerHTML='<div style=\\'font-family:Oswald,sans-serif;font-size:11px;font-weight:700;color:#fff;text-align:center;padding:4px;\\'>${s.name.substring(0,8)}</div>';this.parentElement.style.background=\'${s.color}\'" alt="${s.name}"/></div>`
    : `<div class="logo-placeholder" style="background:${s.color}">${s.name.substring(0,10)}</div>`;

  const tags = (s.tags||'').split(',').slice(0,2).filter(Boolean);

  return `
    <div class="radio-card ${isActive?'playing':''}" id="card-${s.id}" onclick="playStation('${s.id}')">
      ${logoHtml}
      <div class="radio-info">
        <div class="radio-name">${s.name}</div>
        <div class="radio-tags">
          <span class="radio-tag main">${getCatLabel(s.category)}</span>
          ${s.bitrate ? `<span class="radio-tag">${s.bitrate}kbps</span>` : ''}
        </div>
      </div>
      <div class="radio-actions">
        <button class="play-btn ${isActive&&isPlaying?'playing':''}" onclick="event.stopPropagation();playStation('${s.id}')">
          ${isActive&&isPlaying?'⏸':'▶'}
        </button>
        <button class="fav-btn ${isFav?'active':''}" onclick="event.stopPropagation();toggleFav('${s.id}')">
          ${isFav?'❤️':'🤍'}
        </button>
      </div>
    </div>`;
}

function getCatLabel(cat) {
  const t = i18n[currentLang];
  return {all:t.catAll,generaliste:t.catGen,musique:t.catMus,info:t.catInfo,religion:t.catRel,regional:t.catReg}[cat]||cat;
}

// =====================
// PLAY
// =====================
function playStation(id) {
  const station = allStations.find(s => s.id === id);
  if(!station) return;

  if(currentRadio && currentRadio.id === id) { togglePlay(); return; }

  currentRadio = station;
  isPlaying = true;

  // Player UI
  document.getElementById('playerBar').classList.add('visible');
  document.getElementById('playerName').textContent = station.name;
  document.getElementById('mainPlayBtn').textContent = '⏸️';
  document.getElementById('liveStatus').style.display = 'none';
  document.getElementById('loadingText').style.display = 'inline';
  document.getElementById('errorText').style.display = 'none';

  // Logo player
  const pl = document.getElementById('playerLogo');
  if(station.logo) {
    pl.innerHTML = `<img src="${station.logo}" onerror="this.parentElement.innerHTML='📻';this.parentElement.style.fontSize='24px'" style="width:44px;height:44px;object-fit:cover;border-radius:10px" alt="${station.name}"/>`;
    pl.style.background = 'transparent';
  } else {
    pl.textContent = station.name.substring(0,6);
    pl.style.background = station.color;
    pl.style.fontSize = '11px';
    pl.style.fontFamily = 'Oswald,sans-serif';
  }

  audio.src = station.stream;
  audio.volume = document.getElementById('volumeSlider').value / 100;
  
  const playPromise = audio.play();
  if(playPromise) {
    playPromise.then(() => {
      document.getElementById('loadingText').style.display = 'none';
      document.getElementById('liveStatus').style.display = 'inline-flex';
      document.getElementById('liveStatus').textContent = i18n[currentLang].live;
    }).catch(() => {
      document.getElementById('loadingText').style.display = 'none';
      document.getElementById('errorText').style.display = 'inline';
      isPlaying = false;
      document.getElementById('mainPlayBtn').textContent = '▶️';
    });
  }

  renderStations();
  renderFavs();
}

function togglePlay() {
  if(!currentRadio) return;
  if(isPlaying) {
    audio.pause();
    isPlaying = false;
    document.getElementById('mainPlayBtn').textContent = '▶️';
  } else {
    audio.play();
    isPlaying = true;
    document.getElementById('mainPlayBtn').textContent = '⏸️';
  }
  renderStations();
  renderFavs();
}

function closePlayer() {
  audio.pause(); audio.src = '';
  currentRadio = null; isPlaying = false;
  document.getElementById('playerBar').classList.remove('visible');
  renderStations(); renderFavs();
}

function setVolume(v) { audio.volume = v/100; }

// =====================
// FAVORIS
// =====================
function toggleFav(id) {
  favorites = favorites.includes(id) ? favorites.filter(f=>f!==id) : [...favorites, id];
  localStorage.setItem('rg_favs', JSON.stringify(favorites));
  renderStations(); renderFavs();
}

function renderFavs() {
  const favStations = allStations.filter(s => favorites.includes(s.id));
  const container = document.getElementById('fav-list');
  if(!favStations.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">💔</div><div>${i18n[currentLang].emptyFav}</div></div>`;
    return;
  }
  container.innerHTML = favStations.map(s => renderCard(s)).join('');
}

// =====================
// FILTRES
// =====================
function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderStations();
}

function filterRadios(val) {
  currentSearch = val;
  renderStations();
}

// =====================
// TABS
// =====================
function switchTab(tab, navEl) {
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('tab-'+tab).classList.add('active');
  navEl.classList.add('active');
  if(tab==='favs') renderFavs();
}

// =====================
// LANGUE
// =====================
function openLangModal() { document.getElementById('langModal').classList.add('open'); }
function closeLangModal(e) { if(e.target===document.getElementById('langModal')) document.getElementById('langModal').classList.remove('open'); }

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('rg_lang', lang);
  document.getElementById('langModal').classList.remove('open');
  applyLanguage();
  if(allStations.length) renderStations();
  renderFavs();
}

function applyLanguage() {
  const t = i18n[currentLang];
  document.documentElement.dir = t.dir;
  document.documentElement.lang = currentLang;
  const flags = {fr:'🇫🇷 FR',en:'🇬🇧 EN',ar:'🌙 AR',nko:'✨ NKO'};
  document.getElementById('lang-display').textContent = flags[currentLang];
  document.getElementById('app-subtitle').textContent = t.subtitle;
  document.getElementById('searchInput').placeholder = t.search;
  document.getElementById('nav-home').textContent = t.navHome;
  document.getElementById('nav-favs').textContent = t.navFavs;
  document.getElementById('nav-podcasts').textContent = t.navPodcasts;
  document.getElementById('nav-about').textContent = t.navAbout;
  document.getElementById('lang-modal-title').textContent = t.langModal;
  document.getElementById('fav-title').textContent = t.favTitle;
  document.getElementById('podcast-title').textContent = t.podcastTitle;
  document.getElementById('empty-pod-text').textContent = t.emptyPod;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
  document.getElementById('pub-contact-title').textContent = t.pubContactTitle;
  document.getElementById('pub-contact-text').textContent = t.pubContactText;
  document.getElementById('pub-text').textContent = t.pubText;
  document.getElementById('pub-mid-text').textContent = t.pubMidText;
  document.getElementById('pub-cta').textContent = t.pubCta;
  document.getElementById('liveStatus').textContent = t.live;
  const catKeys = ['catAll','catGen','catMus','catInfo','catRel','catReg'];
  document.querySelectorAll('.cat-btn').forEach((btn,i)=>{ if(catKeys[i]) btn.textContent = t[catKeys[i]]; });
  ['fr','en','ar','nko'].forEach(l=>{ document.getElementById('lang-'+l).classList.toggle('selected',l===currentLang); });
}

// =====================
// INIT
// =====================
window.onload = function() {
  applyLanguage();
  loadStations();
};
</script>
</body>
</html>
