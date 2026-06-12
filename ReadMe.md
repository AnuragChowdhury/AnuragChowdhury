<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>ANURAG.SYS // Data Scientist · ML Engineer</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --red:#C0392B;--orange:#E74C3C;--gold:#FF6B35;--dim:#8a0000;
  --bg:#050505;--panel:#0a0a0a;--border:#1a1a1a;
  --text:#e0e0e0;--muted:#666;--bright:#fff;
  --glow:0 0 8px rgba(255,107,53,0.6);
}
body{background:var(--bg);color:var(--text);font-family:'Courier New',monospace;overflow-x:hidden;min-height:100vh;}

/* SCANLINES overlay */
body::before{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.15) 2px,rgba(0,0,0,0.15) 4px);pointer-events:none;z-index:9999;}

/* HUD CORNER DECORATIONS */
.hud-corner{position:fixed;width:60px;height:60px;border-color:var(--orange);border-style:solid;opacity:0.5;z-index:100;}
.hud-corner.tl{top:10px;left:10px;border-width:2px 0 0 2px;}
.hud-corner.tr{top:10px;right:10px;border-width:2px 2px 0 0;}
.hud-corner.bl{bottom:10px;left:10px;border-width:0 0 2px 2px;}
.hud-corner.br{bottom:10px;right:10px;border-width:0 2px 2px 0;}

/* AUDIO CONTROL */
#audio-bar{position:fixed;top:14px;right:80px;z-index:200;display:flex;align-items:center;gap:8px;}
#audio-btn{background:rgba(192,57,43,0.2);border:1px solid var(--orange);color:var(--gold);font-family:'Courier New',monospace;font-size:11px;padding:4px 10px;cursor:pointer;letter-spacing:1px;transition:all .2s;}
#audio-btn:hover{background:var(--orange);color:#000;}
#eq-vis{display:flex;gap:2px;align-items:flex-end;height:20px;}
.eq-bar{width:3px;background:var(--gold);animation:eq 0.5s infinite alternate;opacity:0;}
.eq-bar:nth-child(1){animation-delay:0s;}
.eq-bar:nth-child(2){animation-delay:0.1s;}
.eq-bar:nth-child(3){animation-delay:0.2s;}
.eq-bar:nth-child(4){animation-delay:0.05s;}
.eq-bar:nth-child(5){animation-delay:0.15s;}
@keyframes eq{from{height:3px}to{height:18px}}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;height:50px;background:rgba(5,5,5,0.95);border-bottom:1px solid var(--orange);display:flex;align-items:center;justify-content:space-between;padding:0 20px;z-index:500;}
.nav-logo{color:var(--gold);font-size:13px;letter-spacing:3px;font-weight:700;}
.nav-links{display:flex;gap:4px;}
.nav-link{background:none;border:1px solid #222;color:var(--muted);font-family:'Courier New',monospace;font-size:11px;padding:4px 12px;cursor:pointer;letter-spacing:1px;transition:all .2s;}
.nav-link:hover,.nav-link.active{border-color:var(--orange);color:var(--gold);background:rgba(255,107,53,0.08);}

/* SECTIONS */
.section{display:none;padding:70px 20px 40px;max-width:1100px;margin:0 auto;}
.section.visible{display:block;}

/* ASCII HEADER */
.ascii-header{font-size:10px;line-height:1.2;color:var(--orange);text-align:center;margin-bottom:30px;animation:glitch 4s infinite;}
@keyframes glitch{0%,90%,100%{filter:none;transform:none}93%{filter:hue-rotate(90deg);transform:translate(1px,-1px)}96%{filter:hue-rotate(-90deg);transform:translate(-1px,1px)}}

.hud-title{font-size:11px;letter-spacing:4px;color:var(--orange);border-bottom:1px solid var(--dim);padding-bottom:8px;margin-bottom:20px;display:flex;align-items:center;gap:8px;}
.hud-title::before{content:'◈';color:var(--red);}

/* PROFILE HERO */
.hero{display:grid;grid-template-columns:200px 1fr;gap:24px;margin-bottom:24px;}
.avatar-ring{width:160px;height:160px;border-radius:50%;border:3px solid var(--orange);position:relative;overflow:hidden;box-shadow:var(--glow);flex-shrink:0;}
.avatar-ring img{width:100%;height:100%;object-fit:cover;filter:sepia(20%) hue-rotate(-10deg);}
.avatar-ring::after{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(transparent 0deg, rgba(255,107,53,0.3) 60deg, transparent 120deg);animation:spin 4s linear infinite;}
@keyframes spin{to{transform:rotate(360deg)}}
.arc-reactor{position:absolute;bottom:8px;right:8px;width:30px;height:30px;background:radial-gradient(circle,#fff 0%,#00aaff 40%,#003366 100%);border-radius:50%;box-shadow:0 0 12px #00aaff,0 0 24px rgba(0,170,255,0.5);animation:pulse-arc 2s ease-in-out infinite;}
@keyframes pulse-arc{0%,100%{box-shadow:0 0 8px #00aaff,0 0 16px rgba(0,170,255,0.4)}50%{box-shadow:0 0 20px #00aaff,0 0 40px rgba(0,170,255,0.7)}}
.bio-panel{border:1px solid var(--border);background:var(--panel);padding:16px;}
.bio-name{font-size:22px;color:var(--bright);letter-spacing:2px;font-weight:700;margin-bottom:4px;}
.bio-role{font-size:12px;color:var(--gold);letter-spacing:2px;margin-bottom:12px;}
.bio-row{font-size:12px;color:var(--muted);margin-bottom:4px;}
.bio-row span{color:var(--text);}
.stat-bars{margin-top:14px;}
.stat-row{display:flex;align-items:center;gap:8px;margin-bottom:7px;}
.stat-label{font-size:10px;color:var(--muted);letter-spacing:1px;width:90px;flex-shrink:0;}
.stat-bar{flex:1;height:4px;background:#111;position:relative;overflow:hidden;}
.stat-fill{height:100%;background:linear-gradient(90deg,var(--red),var(--gold));transform:scaleX(0);transform-origin:left;transition:transform 1.5s ease;}
.stat-fill.loaded{transform:scaleX(1);}
.stat-pct{font-size:10px;color:var(--gold);width:36px;text-align:right;}

/* CARDS */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;margin-bottom:24px;}
.card{border:1px solid var(--border);background:var(--panel);padding:16px;transition:border-color .2s,box-shadow .2s;}
.card:hover{border-color:var(--orange);box-shadow:var(--glow);}
.card-title{font-size:13px;color:var(--gold);letter-spacing:2px;margin-bottom:10px;display:flex;align-items:center;gap:6px;}
.card-body{font-size:12px;color:var(--muted);line-height:1.8;}
.card-body strong{color:var(--text);}
.card-metric{font-size:24px;color:var(--orange);font-weight:700;margin:6px 0;}
.badge{display:inline-block;background:rgba(192,57,43,0.2);border:1px solid var(--dim);color:var(--gold);font-size:10px;padding:2px 7px;margin:2px;letter-spacing:1px;}
.btn{display:inline-block;background:none;border:1px solid var(--orange);color:var(--gold);font-family:'Courier New',monospace;font-size:10px;padding:5px 14px;cursor:pointer;letter-spacing:2px;text-decoration:none;margin:3px;transition:all .2s;}
.btn:hover{background:var(--orange);color:#000;}
.btn.red{border-color:var(--red);}

/* TIMELINE */
.timeline{position:relative;padding-left:28px;}
.timeline::before{content:'';position:absolute;left:8px;top:0;bottom:0;width:1px;background:var(--dim);}
.tl-item{position:relative;margin-bottom:22px;}
.tl-dot{position:absolute;left:-24px;top:4px;width:10px;height:10px;border-radius:50%;background:var(--orange);box-shadow:0 0 6px var(--orange);}
.tl-date{font-size:10px;color:var(--orange);letter-spacing:2px;margin-bottom:3px;}
.tl-title{font-size:13px;color:var(--bright);font-weight:700;}
.tl-org{font-size:11px;color:var(--gold);margin-bottom:6px;}
.tl-body{font-size:12px;color:var(--muted);line-height:1.8;}

/* CHART AREA */
.chart-container{border:1px solid var(--border);background:var(--panel);padding:16px;margin-bottom:12px;}
canvas{display:block;width:100% !important;}

/* SKILLS RADAR */
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;}
.skill-chip{background:rgba(192,57,43,0.1);border:1px solid var(--dim);padding:8px 12px;text-align:center;font-size:11px;letter-spacing:1px;color:var(--text);transition:all .2s;}
.skill-chip:hover{border-color:var(--orange);color:var(--gold);transform:scale(1.05);}

/* CERTS */
.cert-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;}
.cert-card{border:1px solid var(--dim);background:rgba(192,57,43,0.05);padding:12px;text-decoration:none;transition:all .2s;display:block;}
.cert-card:hover{border-color:var(--orange);box-shadow:var(--glow);}
.cert-issuer{font-size:10px;color:var(--orange);letter-spacing:2px;}
.cert-name{font-size:12px;color:var(--text);margin-top:3px;}

/* GAME */
#game-canvas{background:#050505;border:1px solid var(--orange);display:block;margin:0 auto;cursor:crosshair;}
.game-hud{display:flex;justify-content:space-between;font-size:12px;color:var(--gold);margin-bottom:8px;letter-spacing:2px;}
#game-msg{text-align:center;font-size:13px;color:var(--orange);margin-top:8px;letter-spacing:2px;height:20px;}
.game-controls{text-align:center;margin-top:10px;font-size:11px;color:var(--muted);}

/* SCROLL REVEAL */
.reveal{opacity:0;transform:translateY(20px);transition:all 0.6s ease;}
.reveal.shown{opacity:1;transform:translateY(0);}

/* BLINK cursor */
.blink{animation:blink 1s step-end infinite;}
@keyframes blink{50%{opacity:0}}

/* MARQUEE */
.marquee-wrap{overflow:hidden;border-top:1px solid var(--dim);border-bottom:1px solid var(--dim);padding:6px 0;margin-bottom:24px;}
.marquee{display:flex;gap:40px;animation:marquee 25s linear infinite;white-space:nowrap;font-size:11px;color:var(--muted);letter-spacing:2px;}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* SCANLINE flash */
@keyframes scanline{0%{top:-5%}100%{top:105%}}
.scan-fx{position:fixed;left:0;right:0;height:2px;background:rgba(255,107,53,0.15);animation:scanline 4s linear infinite;pointer-events:none;z-index:998;}
</style>
</head>
<body>

<!-- HUD chrome -->
<div class="hud-corner tl"></div>
<div class="hud-corner tr"></div>
<div class="hud-corner bl"></div>
<div class="hud-corner br"></div>
<div class="scan-fx"></div>

<!-- NAV -->
<nav>
  <div class="nav-logo">⚡ ANURAG.SYS // v2026</div>
  <div class="nav-links">
    <button class="nav-link active" onclick="show('home')">HOME</button>
    <button class="nav-link" onclick="show('exp')">EXPERIENCE</button>
    <button class="nav-link" onclick="show('projects')">PROJECTS</button>
    <button class="nav-link" onclick="show('skills')">SKILLS</button>
    <button class="nav-link" onclick="show('stats')">STATS</button>
    <button class="nav-link" onclick="show('game')">🔫 SHOOTER</button>
    <button class="nav-link" onclick="show('arcade')">🕹️ ARCADE</button>
  </div>
  <div id="audio-bar">
    <div id="eq-vis">
      <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
      <div class="eq-bar"></div><div class="eq-bar"></div>
    </div>
    <button id="audio-btn" onclick="toggleAudio()">♪ AUDIO ON</button>
  </div>
</nav>

<!-- AUDIO ENGINE -->
<audio id="bg-audio" loop>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
</audio>

<!-- ======= HOME ======= -->
<section id="home" class="section visible">
  <!-- ═══ PIXEL LED HERO BANNER ═══ -->
  <div style="margin-bottom:28px;position:relative;">

    <!-- Top scan line -->
    <div style="height:2px;background:linear-gradient(90deg,transparent,#C0392B,#FF6B35,#C0392B,transparent);margin-bottom:6px;animation:glow-bar 2s ease-in-out infinite alternate;"></div>

    <!-- Main pixel SVG banner -->
    <svg viewBox="0 0 900 110" width="100%" xmlns="http://www.w3.org/2000/svg" style="display:block;filter:drop-shadow(0 0 10px rgba(255,107,53,0.6));">
      <defs>
        <style>
          .px { rx:1; ry:1; }
          @keyframes led-pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
          .led-a { animation: led-pulse 1.8s ease-in-out infinite; }
          .led-b { animation: led-pulse 1.8s ease-in-out infinite 0.3s; }
          .led-c { animation: led-pulse 1.8s ease-in-out infinite 0.6s; }
          .led-d { animation: led-pulse 1.8s ease-in-out infinite 0.9s; }
          .led-e { animation: led-pulse 1.8s ease-in-out infinite 1.2s; }
          .led-f { animation: led-pulse 1.8s ease-in-out infinite 1.5s; }
        </style>
        <!-- Scanline gradient overlay -->
        <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stop-color="#C0392B" stop-opacity="0.08"/>
          <stop offset="50%"  stop-color="#FF6B35" stop-opacity="0.04"/>
          <stop offset="100%" stop-color="#C0392B" stop-opacity="0.08"/>
        </linearGradient>
      </defs>

      <!-- Background panel -->
      <rect width="900" height="110" fill="#050505" rx="6"/>
      <rect width="900" height="110" fill="url(#scan)" rx="6"/>

      <!-- Corner brackets -->
      <path d="M8,8 L8,24 M8,8 L24,8"   stroke="#C0392B" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M892,8 L892,24 M892,8 L876,8" stroke="#C0392B" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M8,102 L8,86 M8,102 L24,102"  stroke="#C0392B" stroke-width="2" fill="none" opacity="0.8"/>
      <path d="M892,102 L892,86 M892,102 L876,102" stroke="#C0392B" stroke-width="2" fill="none" opacity="0.8"/>

      <!-- ── "ANURAG" in pixel grid blocks ── -->
      <!-- A -->
      <g fill="#FF6B35" class="led-a">
        <rect class="px" x="40"  y="20" width="6" height="6"/>
        <rect class="px" x="46"  y="20" width="6" height="6"/>
        <rect class="px" x="52"  y="20" width="6" height="6"/>
        <rect class="px" x="34"  y="26" width="6" height="6"/>
        <rect class="px" x="58"  y="26" width="6" height="6"/>
        <rect class="px" x="34"  y="32" width="6" height="6"/>
        <rect class="px" x="40"  y="32" width="6" height="6"/>
        <rect class="px" x="46"  y="32" width="6" height="6"/>
        <rect class="px" x="52"  y="32" width="6" height="6"/>
        <rect class="px" x="58"  y="32" width="6" height="6"/>
        <rect class="px" x="34"  y="38" width="6" height="6"/>
        <rect class="px" x="58"  y="38" width="6" height="6"/>
        <rect class="px" x="34"  y="44" width="6" height="6"/>
        <rect class="px" x="58"  y="44" width="6" height="6"/>
      </g>
      <!-- N -->
      <g fill="#FF6B35" class="led-b">
        <rect class="px" x="72" y="20" width="6" height="6"/>
        <rect class="px" x="96" y="20" width="6" height="6"/>
        <rect class="px" x="72" y="26" width="6" height="6"/>
        <rect class="px" x="78" y="26" width="6" height="6"/>
        <rect class="px" x="96" y="26" width="6" height="6"/>
        <rect class="px" x="72" y="32" width="6" height="6"/>
        <rect class="px" x="84" y="32" width="6" height="6"/>
        <rect class="px" x="96" y="32" width="6" height="6"/>
        <rect class="px" x="72" y="38" width="6" height="6"/>
        <rect class="px" x="90" y="38" width="6" height="6"/>
        <rect class="px" x="96" y="38" width="6" height="6"/>
        <rect class="px" x="72" y="44" width="6" height="6"/>
        <rect class="px" x="96" y="44" width="6" height="6"/>
      </g>
      <!-- U -->
      <g fill="#FF6B35" class="led-c">
        <rect class="px" x="110" y="20" width="6" height="6"/>
        <rect class="px" x="134" y="20" width="6" height="6"/>
        <rect class="px" x="110" y="26" width="6" height="6"/>
        <rect class="px" x="134" y="26" width="6" height="6"/>
        <rect class="px" x="110" y="32" width="6" height="6"/>
        <rect class="px" x="134" y="32" width="6" height="6"/>
        <rect class="px" x="110" y="38" width="6" height="6"/>
        <rect class="px" x="134" y="38" width="6" height="6"/>
        <rect class="px" x="110" y="44" width="6" height="6"/>
        <rect class="px" x="116" y="44" width="6" height="6"/>
        <rect class="px" x="122" y="44" width="6" height="6"/>
        <rect class="px" x="128" y="44" width="6" height="6"/>
        <rect class="px" x="134" y="44" width="6" height="6"/>
      </g>
      <!-- R -->
      <g fill="#FF6B35" class="led-d">
        <rect class="px" x="148" y="20" width="6" height="6"/>
        <rect class="px" x="154" y="20" width="6" height="6"/>
        <rect class="px" x="160" y="20" width="6" height="6"/>
        <rect class="px" x="148" y="26" width="6" height="6"/>
        <rect class="px" x="166" y="26" width="6" height="6"/>
        <rect class="px" x="148" y="32" width="6" height="6"/>
        <rect class="px" x="154" y="32" width="6" height="6"/>
        <rect class="px" x="160" y="32" width="6" height="6"/>
        <rect class="px" x="148" y="38" width="6" height="6"/>
        <rect class="px" x="157" y="38" width="6" height="6"/>
        <rect class="px" x="148" y="44" width="6" height="6"/>
        <rect class="px" x="163" y="44" width="6" height="6"/>
      </g>
      <!-- A -->
      <g fill="#FF6B35" class="led-e">
        <rect class="px" x="188" y="20" width="6" height="6"/>
        <rect class="px" x="194" y="20" width="6" height="6"/>
        <rect class="px" x="200" y="20" width="6" height="6"/>
        <rect class="px" x="182" y="26" width="6" height="6"/>
        <rect class="px" x="206" y="26" width="6" height="6"/>
        <rect class="px" x="182" y="32" width="6" height="6"/>
        <rect class="px" x="188" y="32" width="6" height="6"/>
        <rect class="px" x="194" y="32" width="6" height="6"/>
        <rect class="px" x="200" y="32" width="6" height="6"/>
        <rect class="px" x="206" y="32" width="6" height="6"/>
        <rect class="px" x="182" y="38" width="6" height="6"/>
        <rect class="px" x="206" y="38" width="6" height="6"/>
        <rect class="px" x="182" y="44" width="6" height="6"/>
        <rect class="px" x="206" y="44" width="6" height="6"/>
      </g>
      <!-- G -->
      <g fill="#FF6B35" class="led-f">
        <rect class="px" x="222" y="20" width="6" height="6"/>
        <rect class="px" x="228" y="20" width="6" height="6"/>
        <rect class="px" x="234" y="20" width="6" height="6"/>
        <rect class="px" x="240" y="20" width="6" height="6"/>
        <rect class="px" x="216" y="26" width="6" height="6"/>
        <rect class="px" x="216" y="32" width="6" height="6"/>
        <rect class="px" x="232" y="32" width="6" height="6"/>
        <rect class="px" x="240" y="32" width="6" height="6"/>
        <rect class="px" x="216" y="38" width="6" height="6"/>
        <rect class="px" x="240" y="38" width="6" height="6"/>
        <rect class="px" x="216" y="44" width="6" height="6"/>
        <rect class="px" x="222" y="44" width="6" height="6"/>
        <rect class="px" x="228" y="44" width="6" height="6"/>
        <rect class="px" x="234" y="44" width="6" height="6"/>
        <rect class="px" x="240" y="44" width="6" height="6"/>
      </g>

      <!-- Separator dots -->
      <circle cx="272" cy="32" r="4" fill="#C0392B" opacity="0.9"/>
      <circle cx="272" cy="42" r="4" fill="#C0392B" opacity="0.9"/>

      <!-- ── "CHOWDHURY" smaller, second row same pixel style ── -->
      <!-- C -->
      <g fill="#E74C3C" opacity="0.85">
        <rect class="px" x="288" y="20" width="5" height="5"/>
        <rect class="px" x="293" y="20" width="5" height="5"/>
        <rect class="px" x="298" y="20" width="5" height="5"/>
        <rect class="px" x="283" y="25" width="5" height="5"/>
        <rect class="px" x="283" y="30" width="5" height="5"/>
        <rect class="px" x="283" y="35" width="5" height="5"/>
        <rect class="px" x="283" y="40" width="5" height="5"/>
        <rect class="px" x="288" y="44" width="5" height="5"/>
        <rect class="px" x="293" y="44" width="5" height="5"/>
        <rect class="px" x="298" y="44" width="5" height="5"/>
      </g>
      <!-- H -->
      <g fill="#E74C3C" opacity="0.85">
        <rect class="px" x="308" y="20" width="5" height="5"/>
        <rect class="px" x="328" y="20" width="5" height="5"/>
        <rect class="px" x="308" y="25" width="5" height="5"/>
        <rect class="px" x="328" y="25" width="5" height="5"/>
        <rect class="px" x="308" y="30" width="5" height="5"/>
        <rect class="px" x="313" y="30" width="5" height="5"/>
        <rect class="px" x="318" y="30" width="5" height="5"/>
        <rect class="px" x="323" y="30" width="5" height="5"/>
        <rect class="px" x="328" y="30" width="5" height="5"/>
        <rect class="px" x="308" y="35" width="5" height="5"/>
        <rect class="px" x="328" y="35" width="5" height="5"/>
        <rect class="px" x="308" y="40" width="5" height="5"/>
        <rect class="px" x="328" y="40" width="5" height="5"/>
        <rect class="px" x="308" y="44" width="5" height="5"/>
        <rect class="px" x="328" y="44" width="5" height="5"/>
      </g>

      <!-- Tagline text below -->
      <text x="450" y="68" text-anchor="middle" fill="#C0392B" font-family="'Courier New', monospace" font-size="11" letter-spacing="4" opacity="0.9">DATA SCIENTIST · ML ENGINEER · GRAPH AI · SPORTS ANALYTICS</text>

      <!-- Sub status line -->
      <text x="450" y="86" text-anchor="middle" fill="#555" font-family="'Courier New', monospace" font-size="9" letter-spacing="3">BANGALORE · KOLKATA · TARGETING EU 🇳🇱 🇩🇰 🇸🇪 🇪🇸</text>

      <!-- Status indicators bottom right -->
      <circle cx="820" cy="95" r="4" fill="#00ff88">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite"/>
      </circle>
      <text x="830" y="99" fill="#00ff88" font-family="'Courier New', monospace" font-size="9" letter-spacing="2">ONLINE</text>

      <!-- Version tag bottom left -->
      <text x="20" y="99" fill="#333" font-family="'Courier New', monospace" font-size="9" letter-spacing="2">ANURAG.SYS v2026.1</text>

      <!-- Horizontal grid lines for LED effect -->
      <line x1="10" y1="55" x2="890" y2="55" stroke="#1a1a1a" stroke-width="0.5"/>
      <line x1="10" y1="74" x2="890" y2="74" stroke="#1a1a1a" stroke-width="0.5"/>
    </svg>

    <!-- Bottom scan line -->
    <div style="height:2px;background:linear-gradient(90deg,transparent,#FF6B35,#C0392B,#FF6B35,transparent);margin-top:6px;animation:glow-bar 2s ease-in-out infinite alternate 1s;"></div>
  </div>

  <style>
    @keyframes glow-bar { from{opacity:0.4} to{opacity:1} }
  </style>

  <div class="marquee-wrap">
    <div class="marquee">
      <span>// DATA SCIENTIST</span><span>// ML ENGINEER</span><span>// COMPUTER VISION</span>
      <span>// NLP SPECIALIST</span><span>// GRAPH AI</span><span>// SPORTS ANALYTICS</span>
      <span>// PYTHON EXPERT</span><span>// PYTORCH</span><span>// LANGCHAIN</span>
      <span>// DATA SCIENTIST</span><span>// ML ENGINEER</span><span>// COMPUTER VISION</span>
      <span>// NLP SPECIALIST</span><span>// GRAPH AI</span><span>// SPORTS ANALYTICS</span>
      <span>// PYTHON EXPERT</span><span>// PYTORCH</span><span>// LANGCHAIN</span>
    </div>
  </div>

  <div class="hero reveal">
    <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
      <div class="avatar-ring">
        <img src="https://avatars.githubusercontent.com/u/23507323?v=4" alt="Anurag Chowdhury" onerror="this.src='https://ui-avatars.com/api/?name=AC&background=C0392B&color=fff&size=200'"/>
        <div class="arc-reactor"></div>
      </div>
      <div style="text-align:center;">
        <a href="https://linkedin.com/in/mranuragchowdhury" target="_blank" class="btn">LINKEDIN ↗</a>
        <a href="https://github.com/AnuragChowdhury" target="_blank" class="btn">GITHUB ↗</a>
      </div>
    </div>
    <div class="bio-panel">
      <div class="bio-name">ANURAG CHOWDHURY <span class="blink">▋</span></div>
      <div class="bio-role">// DATA SCIENTIST · ML ENGINEER · AI ARCHITECT</div>
      <div class="bio-row">⚙️ CURRENT  <span>Iolite Technologies — ML Engineer Intern</span></div>
      <div class="bio-row">🎓 EDU      <span>MSc AI & ML · Christ University, Bangalore (2025–27)</span></div>
      <div class="bio-row">🏢 PREV     <span>TCS · HSBC Data Processing Centre</span></div>
      <div class="bio-row">📍 BASE     <span>Bangalore / Kolkata, India</span></div>
      <div class="bio-row">🎯 TARGET   <span>EU Roles — 🇳🇱 Netherlands · 🇩🇰 Denmark · 🇸🇪 Sweden · 🇪🇸 Spain</span></div>
      <div class="bio-row">⚽ SPORT    <span>Football Analyst · Hobbyist Photographer</span></div>
      <div class="stat-bars" id="stat-bars">
        <div class="stat-row"><span class="stat-label">MACHINE LEARNING</span><div class="stat-bar"><div class="stat-fill" data-w="0.92"></div></div><span class="stat-pct">92%</span></div>
        <div class="stat-row"><span class="stat-label">DEEP LEARNING</span><div class="stat-bar"><div class="stat-fill" data-w="0.88"></div></div><span class="stat-pct">88%</span></div>
        <div class="stat-row"><span class="stat-label">NLP / LLMs</span><div class="stat-bar"><div class="stat-fill" data-w="0.85"></div></div><span class="stat-pct">85%</span></div>
        <div class="stat-row"><span class="stat-label">COMPUTER VISION</span><div class="stat-bar"><div class="stat-fill" data-w="0.80"></div></div><span class="stat-pct">80%</span></div>
        <div class="stat-row"><span class="stat-label">GRAPH AI</span><div class="stat-bar"><div class="stat-fill" data-w="0.87"></div></div><span class="stat-pct">87%</span></div>
        <div class="stat-row"><span class="stat-label">SPORTS ANALYTICS</span><div class="stat-bar"><div class="stat-fill" data-w="0.90"></div></div><span class="stat-pct">90%</span></div>
      </div>
    </div>
  </div>

  <div class="hud-title">IMPACT METRICS // LIVE</div>
  <div class="cards reveal">
    <div class="card">
      <div class="card-title">🎰 PLAYERPULSE</div>
      <div class="card-metric">1M+</div>
      <div class="card-body">spins/sec · Monte Carlo Engine · <strong>68.5% XGBoost</strong> churn accuracy · <strong>40% lower churn</strong> via A/B framework</div>
      <div style="margin-top:10px">
        <a href="https://playerpulse-slot-anurag.netlify.app/simulator" target="_blank" class="btn">LIVE ↗</a>
        <a href="https://github.com/AnuragChowdhury/PlayerPulse" target="_blank" class="btn">CODE ↗</a>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🛡️ SENTINELX</div>
      <div class="card-metric">98%</div>
      <div class="card-body">F1-Score · GAT + XGBoost · <strong>0.5ms latency</strong> · 1,500+ players · <strong>$25K+</strong> weekly revenue protection</div>
      <div style="margin-top:10px">
        <a href="https://anuragchowdhury-sentinelx-fraud-platform-app-987wck.streamlit.app/" target="_blank" class="btn">LIVE ↗</a>
        <a href="https://github.com/AnuragChowdhury/SentinelX-Fraud-Platform" target="_blank" class="btn">CODE ↗</a>
      </div>
    </div>
    <div class="card">
      <div class="card-title">📊 IMPACT STATS</div>
      <div class="card-metric">30%</div>
      <div class="card-body"><strong>+30%</strong> decision efficiency (Iolite) · <strong>–60%</strong> processing time (OCR) · <strong>RMSE 0.4</strong> (HSBC stocks) · <strong>–30%</strong> PO errors (TCS)</div>
    </div>
  </div>
</section>

<!-- ======= EXPERIENCE ======= -->
<section id="exp" class="section">
  <div class="hud-title">EXPERIENCE LOG // CAREER TIMELINE</div>
  <div class="timeline">
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-date">OCT 2025 – PRESENT</div>
      <div class="tl-title">ML Engineer Intern</div>
      <div class="tl-org">🏢 Iolite Technologies, Bangalore</div>
      <div class="tl-body">
        → Built Admission Analytics dashboard improving decision efficiency by <strong>~30%</strong><br>
        → Developed autonomous marks verification system: <strong>Mistral OCR3 + GPT-4</strong><br>
        → Reduced manual processing time by <strong>~60%</strong><br>
      </div>
      <div style="margin-top:8px">
        <span class="badge">LangChain</span><span class="badge">GPT-4</span><span class="badge">Mistral</span><span class="badge">FastAPI</span>
      </div>
    </div>
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-date">JAN 2023 – MAY 2023</div>
      <div class="tl-title">Data Analyst Intern</div>
      <div class="tl-org">🏦 HSBC Data Processing Centre, Bangalore</div>
      <div class="tl-body">
        → Built stock price prediction models for HSBC trading desks<br>
        → Achieved <strong>RMSE of 0.4</strong> on financial time-series forecasting
      </div>
      <div style="margin-top:8px">
        <span class="badge">Python</span><span class="badge">LSTM</span><span class="badge">Pandas</span><span class="badge">Time Series</span>
      </div>
    </div>
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-date">JUL 2019 – AUG 2020</div>
      <div class="tl-title">Assistant System Engineer (ML)</div>
      <div class="tl-org">💼 Tata Consultancy Services, Bangalore</div>
      <div class="tl-body">
        → Reduced purchase order errors by <strong>30%</strong> using a recommendation engine<br>
        → Designed data pipeline supporting growth to <strong>100,000 DAUs</strong>
      </div>
      <div style="margin-top:8px">
        <span class="badge">Python</span><span class="badge">ML</span><span class="badge">ETL</span><span class="badge">Scikit-learn</span>
      </div>
    </div>
  </div>

  <div class="hud-title" style="margin-top:30px">EDUCATION // DEGREE STACK</div>
  <div class="cards">
    <div class="card reveal">
      <div class="card-title">🎓 MSc AI & Machine Learning</div>
      <div class="card-body">Christ (Deemed to be University), Bangalore<br><strong>2025 – 2027</strong> · CGPA: 3.55/4.0</div>
    </div>
    <div class="card reveal">
      <div class="card-title">📊 MSc Data Science</div>
      <div class="card-body">Christ University, Bangalore<br><strong>2021 – 2023</strong> · CGPA: 3.55/4.0</div>
    </div>
    <div class="card reveal">
      <div class="card-title">💻 B.Tech Computer Science Engineering</div>
      <div class="card-body">Christ University, Bangalore<br><strong>2015 – 2019</strong> · CGPA: <span style="color:var(--gold);font-size:15px;font-weight:700">9.45/10.0</span></div>
    </div>
  </div>
</section>

<!-- ======= PROJECTS ======= -->
<section id="projects" class="section">
  <div class="hud-title">PROJECT ARSENAL // DEPLOYED</div>
  <div class="cards">
    <div class="card reveal">
      <div class="card-title" style="font-size:15px">🎮 PlayerPulse</div>
      <div class="card-body" style="margin-bottom:10px">
        Gaming Analytics Intelligence Platform.<br><br>
        <strong>Monte Carlo Engine:</strong> 1M+ spins in &lt;2s<br>
        <strong>XGBoost Churn Model:</strong> 68.5% accuracy<br>
        <strong>A/B Testing:</strong> 40% lower churn observed<br><br>
        <span class="badge">Monte Carlo</span><span class="badge">XGBoost</span><span class="badge">Python</span><span class="badge">Streamlit</span><span class="badge">FastAPI</span>
      </div>
      <a href="https://playerpulse-slot-anurag.netlify.app/simulator" target="_blank" class="btn">🎰 LIVE DEMO ↗</a>
      <a href="https://github.com/AnuragChowdhury/PlayerPulse" target="_blank" class="btn">GITHUB ↗</a>
    </div>
    <div class="card reveal">
      <div class="card-title" style="font-size:15px">🛡️ SentinelX</div>
      <div class="card-body" style="margin-bottom:10px">
        Graph AI Fraud Intelligence Platform.<br><br>
        <strong>F1-Score:</strong> 98% · <strong>Latency:</strong> 0.5ms<br>
        <strong>Architecture:</strong> GAT + XGBoost + Anomaly<br>
        <strong>Coverage:</strong> 1,500+ players · $25K+/week<br><br>
        <span class="badge">PyTorch Geometric</span><span class="badge">GNN</span><span class="badge">XGBoost</span><span class="badge">Streamlit</span>
      </div>
      <a href="https://anuragchowdhury-sentinelx-fraud-platform-app-987wck.streamlit.app/" target="_blank" class="btn">🔐 LIVE DEMO ↗</a>
      <a href="https://github.com/AnuragChowdhury/SentinelX-Fraud-Platform" target="_blank" class="btn">GITHUB ↗</a>
    </div>
    <div class="card reveal">
      <div class="card-title">⚽ FIFA Player Analysis</div>
      <div class="card-body" style="margin-bottom:10px">ML clustering, valuation models, and positional analysis on FIFA datasets.<br><br><span class="badge">Jupyter</span><span class="badge">Scikit-learn</span><span class="badge">Matplotlib</span></div>
      <a href="https://github.com/AnuragChowdhury/Fifa_player_analysis" target="_blank" class="btn">GITHUB ↗</a>
    </div>
    <div class="card reveal">
      <div class="card-title">🌍 Earthquake Prediction</div>
      <div class="card-body" style="margin-bottom:10px">Seismic event prediction using ML regression models on geological datasets.<br><br><span class="badge">Python</span><span class="badge">Jupyter</span><span class="badge">Sklearn</span></div>
      <a href="https://github.com/AnuragChowdhury/Earthquake_prediction" target="_blank" class="btn">GITHUB ↗</a>
    </div>
    <div class="card reveal">
      <div class="card-title">📄 Document Summarizer</div>
      <div class="card-body" style="margin-bottom:10px">NLP summarization app using HuggingFace Transformers + Streamlit. Upload → summarize instantly.<br><br><span class="badge">HuggingFace</span><span class="badge">BERT</span><span class="badge">Streamlit</span></div>
      <a href="https://github.com/AnuragChowdhury/Document-Summarizer" target="_blank" class="btn">GITHUB ↗</a>
    </div>
  </div>
</section>

<!-- ======= SKILLS ======= -->
<section id="skills" class="section">
  <div class="hud-title">SKILL MATRIX // TECH STACK</div>
  <div class="chart-container reveal" style="margin-bottom:20px">
    <canvas id="skillChart" height="250"></canvas>
  </div>
  <div class="hud-title">TECH ARSENAL</div>
  <div class="skills-grid reveal">
    <div class="skill-chip">Python</div><div class="skill-chip">NumPy</div><div class="skill-chip">Pandas</div>
    <div class="skill-chip">PyTorch</div><div class="skill-chip">TensorFlow</div><div class="skill-chip">Scikit-learn</div>
    <div class="skill-chip">HuggingFace</div><div class="skill-chip">LangChain</div><div class="skill-chip">LangGraph</div>
    <div class="skill-chip">OpenCV</div><div class="skill-chip">FastAPI</div><div class="skill-chip">Streamlit</div>
    <div class="skill-chip">Docker</div><div class="skill-chip">MLflow</div><div class="skill-chip">SQL</div>
    <div class="skill-chip">PyG / GNN</div><div class="skill-chip">XGBoost</div><div class="skill-chip">CUDA</div>
    <div class="skill-chip">Monte Carlo</div><div class="skill-chip">NLP</div><div class="skill-chip">Computer Vision</div>
    <div class="skill-chip">Graph AI</div><div class="skill-chip">LLMs</div><div class="skill-chip">Sports Analytics</div>
  </div>

  <div class="hud-title" style="margin-top:28px">CERTIFICATIONS // VERIFIED</div>
  <div class="cert-list">
    <a class="cert-card" href="https://learn.nvidia.com/certificates?id=waHV-I1YTV6XqROD5MgDsg" target="_blank">
      <div class="cert-issuer">🟢 NVIDIA</div>
      <div class="cert-name">Fundamentals of Accelerated Computing with CUDA Python</div>
    </a>
    <a class="cert-card" href="https://www.datacamp.com/completed/statement-of-accomplishment/course/b7b0789899a43ed722c7a6f53ec0a3ae73e0d39a" target="_blank">
      <div class="cert-issuer">🔵 DATACAMP</div>
      <div class="cert-name">Developing LLM Applications with LangChain</div>
    </a>
    <a class="cert-card" href="https://www.datacamp.com/completed/statement-of-accomplishment/course/2407d9fd28baa81bd8dc1fd351f707b3eb866b8e" target="_blank">
      <div class="cert-issuer">🔵 DATACAMP</div>
      <div class="cert-name">Time Series Analysis in Python</div>
    </a>
    <a class="cert-card" href="https://drive.google.com/file/d/1FkFKjZRub96ek9BZ5SDP5LlQ5_xrrLLE/view" target="_blank">
      <div class="cert-issuer">🔴 INTERNSHALA</div>
      <div class="cert-name">Python for Data Science</div>
    </a>
  </div>
</section>

<!-- ======= STATS ======= -->
<section id="stats" class="section">
  <div class="hud-title">ANALYTICS TOWER // GITHUB STATS</div>
  <div class="cards reveal">
    <div class="card" style="text-align:center">
      <div class="card-metric" id="c1">0</div>
      <div class="card-body">REPOS</div>
    </div>
    <div class="card" style="text-align:center">
      <div class="card-metric" id="c2">0</div>
      <div class="card-body">YEARS IN TECH</div>
    </div>
    <div class="card" style="text-align:center">
      <div class="card-metric" id="c3">0%</div>
      <div class="card-body">SENTINELX F1-SCORE</div>
    </div>
    <div class="card" style="text-align:center">
      <div class="card-metric" id="c4">0</div>
      <div class="card-body">DEGREES EARNED</div>
    </div>
  </div>

  <div class="chart-container reveal" style="margin-top:16px">
    <div class="hud-title">EXPERIENCE TIMELINE</div>
    <canvas id="impactChart" height="200"></canvas>
  </div>

  <div class="chart-container reveal" style="margin-top:16px">
    <div class="hud-title">SKILL DOMAIN BREAKDOWN</div>
    <canvas id="domainChart" height="220"></canvas>
  </div>
</section>

<!-- ======= GAME ======= -->
<section id="game" class="section">
  <div class="hud-title">DRONE DEFENSE // SHOOTER GAME</div>
  <p style="font-size:12px;color:var(--muted);margin-bottom:12px;letter-spacing:1px">Destroy incoming data drones. Defend the model. Click/tap to fire.</p>
  <div class="game-hud">
    <span>SCORE: <span id="score">0</span></span>
    <span>WAVE: <span id="wave">1</span></span>
    <span>LIVES: <span id="lives">❤️❤️❤️</span></span>
    <span>HI-SCORE: <span id="hiscore">0</span></span>
  </div>
  <canvas id="game-canvas" width="680" height="360"></canvas>
  <div id="game-msg">CLICK TO START</div>
  <div class="game-controls">CLICK/TAP ANYWHERE ON CANVAS TO FIRE · ENERGY RECHARGES OVER TIME</div>
</section>

<!-- Chart.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>
<script>
// ===== NAVIGATION =====
function show(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
  document.querySelectorAll('.nav-link').forEach((b,i) => {
    const ids = ['home','exp','projects','skills','stats','game','arcade'];
    b.classList.toggle('active', ids[i] === id);
  });
  setTimeout(revealAll, 100);
  if(id==='stats') setTimeout(animateCounters, 300);
  if(id==='skills') setTimeout(buildSkillChart, 200);
  if(id==='stats') setTimeout(buildCharts, 300);
  if(id==='game') initGame();
}

// ===== SCROLL REVEAL =====
function revealAll() {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('shown');
  });
  // Animate stat bars on home
  document.querySelectorAll('.stat-fill').forEach(bar => {
    bar.style.transform = `scaleX(${bar.dataset.w})`;
    bar.classList.add('loaded');
  });
}
setTimeout(revealAll, 300);

// ===== AUDIO =====
let audioOn = false;
function toggleAudio() {
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('audio-btn');
  const bars = document.querySelectorAll('.eq-bar');
  if(!audioOn) {
    audio.volume = 0.2;
    audio.play().catch(()=>{});
    btn.textContent = '♪ AUDIO OFF';
    bars.forEach(b => b.style.opacity = '1');
    audioOn = true;
  } else {
    audio.pause();
    btn.textContent = '♪ AUDIO ON';
    bars.forEach(b => b.style.opacity = '0');
    audioOn = false;
  }
}

// ===== COUNTERS =====
function animateCounters() {
  const targets = [{id:'c1',val:28,suffix:''},{id:'c2',val:6,suffix:'+'},{id:'c3',val:98,suffix:'%'},{id:'c4',val:3,suffix:''}];
  targets.forEach(({id,val,suffix}) => {
    const el = document.getElementById(id);
    let cur = 0;
    const step = val / 40;
    const timer = setInterval(() => {
      cur = Math.min(cur + step, val);
      el.textContent = Math.floor(cur) + suffix;
      if(cur >= val) clearInterval(timer);
    }, 30);
  });
}

// ===== CHARTS =====
const chartDefaults = {
  color: '#666',
  borderColor: 'rgba(255,107,53,0.3)',
  grid: { color: 'rgba(255,107,53,0.08)' }
};

function buildSkillChart() {
  const ctx = document.getElementById('skillChart');
  if(ctx._chart) ctx._chart.destroy();
  ctx._chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Machine Learning','Deep Learning','NLP / LLMs','Computer Vision','Graph AI','Sports Analytics','Data Engineering'],
      datasets: [{
        label: 'Skill Level',
        data: [92,88,85,80,87,90,78],
        borderColor: '#FF6B35',
        backgroundColor: 'rgba(192,57,43,0.2)',
        pointBackgroundColor: '#C0392B',
        pointBorderColor: '#FF6B35',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      scales: { r: { grid: chartDefaults.grid, pointLabels: { color: '#aaa', font: { family: 'Courier New', size: 11 } }, ticks: { display: false }, angleLines: { color: 'rgba(255,107,53,0.1)' } } },
      plugins: { legend: { display: false } }
    }
  });
}

function buildCharts() {
  const c1 = document.getElementById('impactChart');
  if(c1._chart) c1._chart.destroy();
  c1._chart = new Chart(c1, {
    type: 'bar',
    data: {
      labels: ['TCS (2019)', 'HSBC (2023)', 'Iolite (2025)', 'PlayerPulse', 'SentinelX'],
      datasets: [{
        label: 'Impact Score',
        data: [65, 72, 88, 85, 98],
        backgroundColor: ['rgba(192,57,43,0.5)','rgba(231,76,60,0.5)','rgba(255,107,53,0.5)','rgba(192,57,43,0.7)','rgba(255,107,53,0.9)'],
        borderColor: ['#C0392B','#E74C3C','#FF6B35','#C0392B','#FF6B35'],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: chartDefaults.grid, ticks: { color: '#888', font: { family: 'Courier New', size: 10 } } },
        y: { grid: chartDefaults.grid, ticks: { color: '#888', font: { family: 'Courier New', size: 10 } }, min: 0, max: 100 }
      }
    }
  });

  const c2 = document.getElementById('domainChart');
  if(c2._chart) c2._chart.destroy();
  c2._chart = new Chart(c2, {
    type: 'doughnut',
    data: {
      labels: ['ML/DL','NLP/LLMs','Computer Vision','Graph AI','Sports Analytics','Data Engineering'],
      datasets: [{
        data: [25,20,18,17,12,8],
        backgroundColor: ['#C0392B','#E74C3C','#FF6B35','#8B0000','#D35400','#922B21'],
        borderColor: '#050505',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#aaa', font: { family: 'Courier New', size: 11 }, padding: 12 } } }
    }
  });
}

// ===== DRONE SHOOTER GAME =====
function initGame() {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('score');
  const waveEl = document.getElementById('wave');
  const livesEl = document.getElementById('lives');
  const hiscoreEl = document.getElementById('hiscore');
  const msgEl = document.getElementById('game-msg');

  let started = false, gameOver = false;
  let score = 0, wave = 1, lives = 3, hiScore = 0;
  let enemies = [], blasts = [], particles = [];
  let player = { x: 340, y: 320, r: 18 };
  let animId = null;

  function spawnEnemies() {
    const count = 3 + wave * 2;
    for(let i = 0; i < count; i++) {
      enemies.push({
        x: 40 + Math.random() * 600,
        y: -20 - i * 35,
        r: 12 + Math.random() * 6,
        speed: 0.6 + wave * 0.15 + Math.random() * 0.5,
        hp: wave > 2 ? 2 : 1,
        color: `hsl(${Math.random()*30+10}, 80%, 50%)`
      });
    }
  }

  function drawPlayer(ctx) {
    // Player ship
    ctx.save();
    ctx.translate(player.x, player.y);
    // Body glow
    ctx.shadowColor = '#FF6B35';
    ctx.shadowBlur = 12;
    ctx.fillStyle = '#C0392B';
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    // Arc reactor
    ctx.fillStyle = '#00aaff';
    ctx.shadowColor = '#00aaff';
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawEnemy(ctx, e) {
    ctx.save();
    ctx.shadowColor = e.color;
    ctx.shadowBlur = 8;
    ctx.strokeStyle = e.color;
    ctx.lineWidth = 2;
    // Drone shape
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI*2);
    ctx.stroke();
    ctx.fillStyle = 'rgba(200,50,50,0.15)';
    ctx.fill();
    // Cross arms
    ctx.beginPath();
    ctx.moveTo(e.x - e.r, e.y); ctx.lineTo(e.x + e.r, e.y);
    ctx.moveTo(e.x, e.y - e.r); ctx.lineTo(e.x, e.y + e.r);
    ctx.stroke();
    ctx.restore();
  }

  function fire(tx, ty) {
    const angle = Math.atan2(ty - player.y, tx - player.x);
    blasts.push({ x: player.x, y: player.y, vx: Math.cos(angle)*9, vy: Math.sin(angle)*9, r: 5 });
  }

  function explode(x, y) {
    for(let i = 0; i < 10; i++) {
      const a = (i/10)*Math.PI*2;
      const speed = 1.5 + Math.random()*2;
      particles.push({ x, y, vx: Math.cos(a)*speed, vy: Math.sin(a)*speed, life: 1.0, color: Math.random()>0.5?'#FF6B35':'#fff' });
    }
  }

  function loop() {
    ctx.clearRect(0, 0, 680, 360);

    // Background grid
    ctx.strokeStyle = 'rgba(255,107,53,0.04)';
    ctx.lineWidth = 0.5;
    for(let x = 0; x < 680; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,360); ctx.stroke(); }
    for(let y = 0; y < 360; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(680,y); ctx.stroke(); }

    if(!started) {
      ctx.fillStyle = '#FF6B35';
      ctx.font = '14px Courier New';
      ctx.textAlign = 'center';
      ctx.fillText('[ CLICK TO BOOT SYSTEM ]', 340, 180);
      return;
    }

    // Move + draw enemies
    for(let i = enemies.length-1; i >= 0; i--) {
      const e = enemies[i];
      e.y += e.speed;
      drawEnemy(ctx, e);
      // Reached bottom → lose life
      if(e.y > 370) {
        enemies.splice(i, 1);
        lives--;
        livesEl.textContent = '❤️'.repeat(Math.max(lives,0));
        if(lives <= 0) { endGame(); return; }
      }
      // Hit player
      const dx = e.x - player.x, dy = e.y - player.y;
      if(Math.sqrt(dx*dx+dy*dy) < e.r + player.r) {
        explode(e.x, e.y);
        enemies.splice(i, 1);
        lives--;
        livesEl.textContent = '❤️'.repeat(Math.max(lives,0));
        if(lives <= 0) { endGame(); return; }
      }
    }

    // Move + draw blasts
    for(let i = blasts.length-1; i >= 0; i--) {
      const b = blasts[i];
      b.x += b.vx; b.y += b.vy;
      ctx.save();
      ctx.shadowColor = '#00aaff'; ctx.shadowBlur = 10;
      ctx.fillStyle = '#00aaff';
      ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI*2); ctx.fill();
      ctx.restore();
      if(b.x<0||b.x>680||b.y<0||b.y>360) { blasts.splice(i,1); continue; }
      for(let j = enemies.length-1; j >= 0; j--) {
        const e = enemies[j];
        const dx = b.x-e.x, dy = b.y-e.y;
        if(Math.sqrt(dx*dx+dy*dy) < e.r + b.r) {
          blasts.splice(i,1);
          e.hp--;
          if(e.hp <= 0) {
            explode(e.x, e.y);
            enemies.splice(j,1);
            score += 10;
            scoreEl.textContent = score;
          }
          break;
        }
      }
    }

    // Particles
    for(let i = particles.length-1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.life -= 0.04;
      if(p.life <= 0) { particles.splice(i,1); continue; }
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2); ctx.fill();
      ctx.globalAlpha = 1;
    }

    drawPlayer(ctx);

    // Wave clear
    if(enemies.length === 0) {
      wave++;
      waveEl.textContent = wave;
      spawnEnemies();
    }

    animId = requestAnimationFrame(loop);
  }

  function endGame() {
    gameOver = true;
    started = false;
    if(score > hiScore) { hiScore = score; hiscoreEl.textContent = hiScore; }
    msgEl.textContent = `SYSTEM CRASH // SCORE: ${score} // CLICK TO RETRY`;
    cancelAnimationFrame(animId);
  }

  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const tx = (e.clientX - rect.left) * (680 / rect.width);
    const ty = (e.clientY - rect.top) * (360 / rect.height);

    if(!started) {
      started = true; gameOver = false; score = 0; wave = 1; lives = 3;
      enemies = []; blasts = []; particles = [];
      scoreEl.textContent = 0; waveEl.textContent = 1;
      livesEl.textContent = '❤️❤️❤️';
      msgEl.textContent = '';
      spawnEnemies();
      cancelAnimationFrame(animId);
      loop();
    } else {
      fire(tx, ty);
    }
  };

  // Initial frame
  loop();
}
</script>

<!-- ======= ARCADE ======= -->
<section id="arcade" class="section">
  <div class="hud-title">🕹️ GALAGA CONTRIBUTION GAME // COMMIT GRID ASSAULT</div>
  <p style="font-size:12px;color:var(--muted);margin-bottom:6px;letter-spacing:1px">
    Every square is a real GitHub commit. Watch the ship hunt them all down.
  </p>
  <div style="display:flex;gap:16px;font-size:11px;color:var(--muted);margin-bottom:14px;letter-spacing:1px;flex-wrap:wrap;">
    <span>⬜ No commits</span>
    <span style="color:#9be9a8;">▪ 1–3 commits</span>
    <span style="color:#40c463;">▪ 4–9 commits</span>
    <span style="color:#30a14e;">▪ 10–19 commits</span>
    <span style="color:#216e39;">▪ 20+ commits</span>
  </div>

  <!-- SCANLINE wrapper -->
  <div style="position:relative;border:1px solid var(--orange);border-radius:8px;overflow:hidden;box-shadow:0 0 24px rgba(255,107,53,0.25);">
    <!-- top HUD bar -->
    <div style="background:#0a0a0a;border-bottom:1px solid #1a1a1a;padding:6px 14px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:10px;color:var(--orange);letter-spacing:3px;">◈ GALAGA CONTRIBUTION ASSAULT</span>
      <span style="font-size:10px;color:var(--muted);letter-spacing:2px;" id="arcade-year">YEAR 2026</span>
      <span style="font-size:10px;color:var(--gold);letter-spacing:2px;">AUTOPLAY ▶</span>
    </div>

    <!-- THE GAME SVG -->
    <div style="background:#000;padding:0;">
      <svg width="100%" viewBox="0 0 1166 259" xmlns="http://www.w3.org/2000/svg" style="display:block;border-radius:8px;"><desc>Generated with galaga-contribution-graph on Wed Jun 10 2026 15:28:00 GMT+0530 (India Standard Time)</desc><rect width="100%" height="100%" fill="#000000"/><circle cx="23.8" cy="0" r="0.4" fill="white" opacity="0.68"><animate attributeName="cy" from="-2" to="261" dur="5991ms" begin="-5451ms" repeatCount="indefinite"/></circle><circle cx="131.1" cy="0" r="1.2" fill="white" opacity="0.68"><animate attributeName="cy" from="-2" to="261" dur="5778ms" begin="-4526ms" repeatCount="indefinite"/></circle><circle cx="46.5" cy="0" r="1.6" fill="white" opacity="0.98"><animate attributeName="cy" from="-2" to="261" dur="2905ms" begin="-2032ms" repeatCount="indefinite"/></circle><circle cx="536.7" cy="0" r="1.0" fill="white" opacity="0.97"><animate attributeName="cy" from="-2" to="261" dur="4733ms" begin="-4509ms" repeatCount="indefinite"/></circle><circle cx="1158.6" cy="0" r="1.5" fill="white" opacity="0.60"><animate attributeName="cy" from="-2" to="261" dur="5249ms" begin="-1507ms" repeatCount="indefinite"/></circle><circle cx="493.6" cy="0" r="1.5" fill="white" opacity="0.41"><animate attributeName="cy" from="-2" to="261" dur="2988ms" begin="-2547ms" repeatCount="indefinite"/></circle><circle cx="363.3" cy="0" r="0.4" fill="white" opacity="0.62"><animate attributeName="cy" from="-2" to="261" dur="4104ms" begin="-2351ms" repeatCount="indefinite"/></circle><circle cx="1122.0" cy="0" r="0.4" fill="white" opacity="0.85"><animate attributeName="cy" from="-2" to="261" dur="4162ms" begin="-1336ms" repeatCount="indefinite"/></circle><circle cx="1113.5" cy="0" r="1.3" fill="white" opacity="0.77"><animate attributeName="cy" from="-2" to="261" dur="6113ms" begin="-3810ms" repeatCount="indefinite"/></circle><circle cx="188.0" cy="0" r="1.9" fill="white" opacity="0.84"><animate attributeName="cy" from="-2" to="261" dur="5013ms" begin="-3637ms" repeatCount="indefinite"/></circle><circle cx="386.8" cy="0" r="1.5" fill="white" opacity="0.70"><animate attributeName="cy" from="-2" to="261" dur="6687ms" begin="-2960ms" repeatCount="indefinite"/></circle><circle cx="240.2" cy="0" r="1.1" fill="white" opacity="0.77"><animate attributeName="cy" from="-2" to="261" dur="5365ms" begin="-4682ms" repeatCount="indefinite"/></circle><circle cx="456.6" cy="0" r="1.9" fill="white" opacity="0.82"><animate attributeName="cy" from="-2" to="261" dur="3285ms" begin="-2250ms" repeatCount="indefinite"/></circle><circle cx="408.3" cy="0" r="1.0" fill="white" opacity="0.86"><animate attributeName="cy" from="-2" to="261" dur="6881ms" begin="-1211ms" repeatCount="indefinite"/></circle><circle cx="138.7" cy="0" r="1.0" fill="white" opacity="0.91"><animate attributeName="cy" from="-2" to="261" dur="6479ms" begin="-3471ms" repeatCount="indefinite"/></circle><circle cx="288.8" cy="0" r="1.0" fill="white" opacity="0.91"><animate attributeName="cy" from="-2" to="261" dur="6973ms" begin="-2592ms" repeatCount="indefinite"/></circle><circle cx="970.6" cy="0" r="1.5" fill="white" opacity="0.67"><animate attributeName="cy" from="-2" to="261" dur="7425ms" begin="-4687ms" repeatCount="indefinite"/></circle><circle cx="1073.1" cy="0" r="1.0" fill="white" opacity="0.85"><animate attributeName="cy" from="-2" to="261" dur="7039ms" begin="-678ms" repeatCount="indefinite"/></circle><circle cx="719.9" cy="0" r="1.4" fill="white" opacity="0.38"><animate attributeName="cy" from="-2" to="261" dur="5683ms" begin="-5052ms" repeatCount="indefinite"/></circle><circle cx="107.3" cy="0" r="0.8" fill="white" opacity="0.85"><animate attributeName="cy" from="-2" to="261" dur="6518ms" begin="-2454ms" repeatCount="indefinite"/></circle><circle cx="209.7" cy="0" r="0.9" fill="white" opacity="0.92"><animate attributeName="cy" from="-2" to="261" dur="4655ms" begin="-3609ms" repeatCount="indefinite"/></circle><circle cx="837.0" cy="0" r="0.5" fill="white" opacity="0.82"><animate attributeName="cy" from="-2" to="261" dur="7132ms" begin="-3989ms" repeatCount="indefinite"/></circle><circle cx="248.8" cy="0" r="1.8" fill="white" opacity="0.58"><animate attributeName="cy" from="-2" to="261" dur="3627ms" begin="-2462ms" repeatCount="indefinite"/></circle><circle cx="957.1" cy="0" r="2.0" fill="white" opacity="0.30"><animate attributeName="cy" from="-2" to="261" dur="6119ms" begin="-134ms" repeatCount="indefinite"/></circle><circle cx="410.3" cy="0" r="0.6" fill="white" opacity="0.66"><animate attributeName="cy" from="-2" to="261" dur="7517ms" begin="-7410ms" repeatCount="indefinite"/></circle><circle cx="355.1" cy="0" r="0.9" fill="white" opacity="0.95"><animate attributeName="cy" from="-2" to="261" dur="7466ms" begin="-1380ms" repeatCount="indefinite"/></circle><circle cx="845.0" cy="0" r="1.4" fill="white" opacity="0.59"><animate attributeName="cy" from="-2" to="261" dur="4391ms" begin="-4291ms" repeatCount="indefinite"/></circle><circle cx="898.3" cy="0" r="1.4" fill="white" opacity="0.61"><animate attributeName="cy" from="-2" to="261" dur="5136ms" begin="-2515ms" repeatCount="indefinite"/></circle><circle cx="435.6" cy="0" r="1.0" fill="white" opacity="0.96"><animate attributeName="cy" from="-2" to="261" dur="4605ms" begin="-532ms" repeatCount="indefinite"/></circle><circle cx="729.4" cy="0" r="1.5" fill="white" opacity="0.61"><animate attributeName="cy" from="-2" to="261" dur="7177ms" begin="-1009ms" repeatCount="indefinite"/></circle><circle cx="151.9" cy="0" r="1.4" fill="white" opacity="0.70"><animate attributeName="cy" from="-2" to="261" dur="6010ms" begin="-2714ms" repeatCount="indefinite"/></circle><circle cx="535.7" cy="0" r="1.3" fill="white" opacity="0.55"><animate attributeName="cy" from="-2" to="261" dur="5989ms" begin="-733ms" repeatCount="indefinite"/></circle><circle cx="361.3" cy="0" r="0.7" fill="white" opacity="0.71"><animate attributeName="cy" from="-2" to="261" dur="2506ms" begin="-247ms" repeatCount="indefinite"/></circle><circle cx="1018.5" cy="0" r="0.8" fill="white" opacity="0.94"><animate attributeName="cy" from="-2" to="261" dur="3012ms" begin="-1070ms" repeatCount="indefinite"/></circle><circle cx="645.5" cy="0" r="0.4" fill="white" opacity="0.45"><animate attributeName="cy" from="-2" to="261" dur="3305ms" begin="-2545ms" repeatCount="indefinite"/></circle><circle cx="258.2" cy="0" r="0.4" fill="white" opacity="0.53"><animate attributeName="cy" from="-2" to="261" dur="5749ms" begin="-2183ms" repeatCount="indefinite"/></circle><circle cx="792.4" cy="0" r="1.6" fill="white" opacity="0.38"><animate attributeName="cy" from="-2" to="261" dur="3034ms" begin="-1847ms" repeatCount="indefinite"/></circle><circle cx="147.9" cy="0" r="1.0" fill="white" opacity="0.35"><animate attributeName="cy" from="-2" to="261" dur="3996ms" begin="-3080ms" repeatCount="indefinite"/></circle><circle cx="311.8" cy="0" r="1.2" fill="white" opacity="0.52"><animate attributeName="cy" from="-2" to="261" dur="4767ms" begin="-3496ms" repeatCount="indefinite"/></circle><circle cx="867.2" cy="0" r="0.6" fill="white" opacity="0.75"><animate attributeName="cy" from="-2" to="261" dur="7945ms" begin="-743ms" repeatCount="indefinite"/></circle><circle cx="282.2" cy="0" r="1.0" fill="white" opacity="0.91"><animate attributeName="cy" from="-2" to="261" dur="7626ms" begin="-3169ms" repeatCount="indefinite"/></circle><circle cx="689.2" cy="0" r="1.1" fill="white" opacity="0.45"><animate attributeName="cy" from="-2" to="261" dur="3622ms" begin="-2584ms" repeatCount="indefinite"/></circle><circle cx="856.2" cy="0" r="1.8" fill="white" opacity="0.52"><animate attributeName="cy" from="-2" to="261" dur="4807ms" begin="-1891ms" repeatCount="indefinite"/></circle><circle cx="1127.9" cy="0" r="0.6" fill="white" opacity="0.67"><animate attributeName="cy" from="-2" to="261" dur="7932ms" begin="-5751ms" repeatCount="indefinite"/></circle><circle cx="344.4" cy="0" r="0.9" fill="white" opacity="0.78"><animate attributeName="cy" from="-2" to="261" dur="4637ms" begin="-3864ms" repeatCount="indefinite"/></circle><circle cx="606.6" cy="0" r="1.7" fill="white" opacity="0.75"><animate attributeName="cy" from="-2" to="261" dur="6603ms" begin="-4695ms" repeatCount="indefinite"/></circle><circle cx="1106.5" cy="0" r="1.1" fill="white" opacity="0.88"><animate attributeName="cy" from="-2" to="261" dur="2540ms" begin="-1723ms" repeatCount="indefinite"/></circle><circle cx="58.6" cy="0" r="1.8" fill="white" opacity="0.38"><animate attributeName="cy" from="-2" to="261" dur="5524ms" begin="-3171ms" repeatCount="indefinite"/></circle><circle cx="1025.0" cy="0" r="0.7" fill="white" opacity="0.72"><animate attributeName="cy" from="-2" to="261" dur="6666ms" begin="-6007ms" repeatCount="indefinite"/></circle><circle cx="172.3" cy="0" r="0.7" fill="white" opacity="0.70"><animate attributeName="cy" from="-2" to="261" dur="5070ms" begin="-1697ms" repeatCount="indefinite"/></circle><circle cx="697.2" cy="0" r="1.2" fill="white" opacity="0.78"><animate attributeName="cy" from="-2" to="261" dur="5666ms" begin="-1633ms" repeatCount="indefinite"/></circle><circle cx="404.8" cy="0" r="1.7" fill="white" opacity="0.42"><animate attributeName="cy" from="-2" to="261" dur="6489ms" begin="-956ms" repeatCount="indefinite"/></circle><circle cx="606.4" cy="0" r="1.0" fill="white" opacity="0.53"><animate attributeName="cy" from="-2" to="261" dur="2884ms" begin="-532ms" repeatCount="indefinite"/></circle><circle cx="237.0" cy="0" r="1.9" fill="white" opacity="0.50"><animate attributeName="cy" from="-2" to="261" dur="4000ms" begin="-3570ms" repeatCount="indefinite"/></circle><circle cx="935.9" cy="0" r="1.8" fill="white" opacity="0.51"><animate attributeName="cy" from="-2" to="261" dur="3381ms" begin="-2957ms" repeatCount="indefinite"/></circle><circle cx="709.8" cy="0" r="1.9" fill="white" opacity="0.37"><animate attributeName="cy" from="-2" to="261" dur="3352ms" begin="-454ms" repeatCount="indefinite"/></circle><circle cx="482.2" cy="0" r="1.2" fill="white" opacity="0.50"><animate attributeName="cy" from="-2" to="261" dur="6252ms" begin="-2123ms" repeatCount="indefinite"/></circle><circle cx="985.8" cy="0" r="1.1" fill="white" opacity="0.60"><animate attributeName="cy" from="-2" to="261" dur="4521ms" begin="-250ms" repeatCount="indefinite"/></circle><circle cx="536.5" cy="0" r="1.0" fill="white" opacity="0.54"><animate attributeName="cy" from="-2" to="261" dur="3612ms" begin="-2801ms" repeatCount="indefinite"/></circle><circle cx="996.5" cy="0" r="0.7" fill="white" opacity="0.63"><animate attributeName="cy" from="-2" to="261" dur="4356ms" begin="-3073ms" repeatCount="indefinite"/></circle><circle cx="208.4" cy="0" r="1.8" fill="white" opacity="0.83"><animate attributeName="cy" from="-2" to="261" dur="2852ms" begin="-2370ms" repeatCount="indefinite"/></circle><circle cx="102.3" cy="0" r="1.2" fill="white" opacity="0.70"><animate attributeName="cy" from="-2" to="261" dur="3605ms" begin="-2663ms" repeatCount="indefinite"/></circle><circle cx="523.9" cy="0" r="1.7" fill="white" opacity="0.59"><animate attributeName="cy" from="-2" to="261" dur="5764ms" begin="-4690ms" repeatCount="indefinite"/></circle><circle cx="724.2" cy="0" r="1.9" fill="white" opacity="0.45"><animate attributeName="cy" from="-2" to="261" dur="4782ms" begin="-273ms" repeatCount="indefinite"/></circle><circle cx="676.9" cy="0" r="1.8" fill="white" opacity="0.50"><animate attributeName="cy" from="-2" to="261" dur="7968ms" begin="-3542ms" repeatCount="indefinite"/></circle><circle cx="52.3" cy="0" r="1.0" fill="white" opacity="0.75"><animate attributeName="cy" from="-2" to="261" dur="4069ms" begin="-3360ms" repeatCount="indefinite"/></circle><circle cx="251.9" cy="0" r="1.2" fill="white" opacity="0.97"><animate attributeName="cy" from="-2" to="261" dur="7026ms" begin="-6551ms" repeatCount="indefinite"/></circle><circle cx="628.4" cy="0" r="1.8" fill="white" opacity="0.59"><animate attributeName="cy" from="-2" to="261" dur="5220ms" begin="-2359ms" repeatCount="indefinite"/></circle><circle cx="1000.7" cy="0" r="1.7" fill="white" opacity="0.75"><animate attributeName="cy" from="-2" to="261" dur="5891ms" begin="-2838ms" repeatCount="indefinite"/></circle><circle cx="675.3" cy="0" r="1.4" fill="white" opacity="0.90"><animate attributeName="cy" from="-2" to="261" dur="2640ms" begin="-1453ms" repeatCount="indefinite"/></circle><circle cx="588.3" cy="0" r="0.5" fill="white" opacity="0.78"><animate attributeName="cy" from="-2" to="261" dur="4182ms" begin="-2822ms" repeatCount="indefinite"/></circle><circle cx="516.6" cy="0" r="1.0" fill="white" opacity="0.30"><animate attributeName="cy" from="-2" to="261" dur="6748ms" begin="-1101ms" repeatCount="indefinite"/></circle><circle cx="641.3" cy="0" r="1.7" fill="white" opacity="0.76"><animate attributeName="cy" from="-2" to="261" dur="2827ms" begin="-2215ms" repeatCount="indefinite"/></circle><circle cx="203.7" cy="0" r="1.7" fill="white" opacity="0.33"><animate attributeName="cy" from="-2" to="261" dur="7738ms" begin="-4853ms" repeatCount="indefinite"/></circle><circle cx="290.5" cy="0" r="1.5" fill="white" opacity="0.56"><animate attributeName="cy" from="-2" to="261" dur="3706ms" begin="-2901ms" repeatCount="indefinite"/></circle><circle cx="545.0" cy="0" r="0.7" fill="white" opacity="0.31"><animate attributeName="cy" from="-2" to="261" dur="7857ms" begin="-408ms" repeatCount="indefinite"/></circle><circle cx="1115.2" cy="0" r="1.1" fill="white" opacity="0.94"><animate attributeName="cy" from="-2" to="261" dur="5644ms" begin="-5452ms" repeatCount="indefinite"/></circle><circle cx="136.2" cy="0" r="0.8" fill="white" opacity="0.80"><animate attributeName="cy" from="-2" to="261" dur="2500ms" begin="-1129ms" repeatCount="indefinite"/></circle><circle cx="1041.7" cy="0" r="0.4" fill="white" opacity="0.72"><animate attributeName="cy" from="-2" to="261" dur="4844ms" begin="-2036ms" repeatCount="indefinite"/></circle><circle cx="966.0" cy="0" r="1.5" fill="white" opacity="0.44"><animate attributeName="cy" from="-2" to="261" dur="7335ms" begin="-5308ms" repeatCount="indefinite"/></circle><circle cx="736.5" cy="0" r="0.7" fill="white" opacity="0.47"><animate attributeName="cy" from="-2" to="261" dur="4581ms" begin="-2357ms" repeatCount="indefinite"/></circle><circle cx="355.5" cy="0" r="1.0" fill="white" opacity="0.42"><animate attributeName="cy" from="-2" to="261" dur="6451ms" begin="-6122ms" repeatCount="indefinite"/></circle><circle cx="759.7" cy="0" r="0.4" fill="white" opacity="0.94"><animate attributeName="cy" from="-2" to="261" dur="4232ms" begin="-3377ms" repeatCount="indefinite"/></circle><circle cx="292.3" cy="0" r="1.7" fill="white" opacity="0.33"><animate attributeName="cy" from="-2" to="261" dur="7690ms" begin="-3577ms" repeatCount="indefinite"/></circle><circle cx="633.6" cy="0" r="0.4" fill="white" opacity="0.46"><animate attributeName="cy" from="-2" to="261" dur="6401ms" begin="-4005ms" repeatCount="indefinite"/></circle><circle cx="324.3" cy="0" r="2.0" fill="white" opacity="0.61"><animate attributeName="cy" from="-2" to="261" dur="5579ms" begin="-5030ms" repeatCount="indefinite"/></circle><circle cx="556.7" cy="0" r="0.6" fill="white" opacity="0.70"><animate attributeName="cy" from="-2" to="261" dur="5961ms" begin="-1214ms" repeatCount="indefinite"/></circle><circle cx="274.9" cy="0" r="1.1" fill="white" opacity="0.69"><animate attributeName="cy" from="-2" to="261" dur="4078ms" begin="-1705ms" repeatCount="indefinite"/></circle><circle cx="924.6" cy="0" r="1.9" fill="white" opacity="0.48"><animate attributeName="cy" from="-2" to="261" dur="6373ms" begin="-5954ms" repeatCount="indefinite"/></circle><circle cx="327.0" cy="0" r="0.9" fill="white" opacity="0.34"><animate attributeName="cy" from="-2" to="261" dur="5976ms" begin="-4966ms" repeatCount="indefinite"/></circle><circle cx="883.4" cy="0" r="2.0" fill="white" opacity="0.67"><animate attributeName="cy" from="-2" to="261" dur="5931ms" begin="-4227ms" repeatCount="indefinite"/></circle><circle cx="735.7" cy="0" r="1.1" fill="white" opacity="0.60"><animate attributeName="cy" from="-2" to="261" dur="5568ms" begin="-3843ms" repeatCount="indefinite"/></circle><circle cx="41.0" cy="0" r="0.5" fill="white" opacity="0.98"><animate attributeName="cy" from="-2" to="261" dur="3302ms" begin="-1722ms" repeatCount="indefinite"/></circle><circle cx="517.7" cy="0" r="0.5" fill="white" opacity="0.74"><animate attributeName="cy" from="-2" to="261" dur="5570ms" begin="-4262ms" repeatCount="indefinite"/></circle><circle cx="1158.7" cy="0" r="1.7" fill="white" opacity="0.82"><animate attributeName="cy" from="-2" to="261" dur="3129ms" begin="-281ms" repeatCount="indefinite"/></circle><circle cx="229.9" cy="0" r="1.7" fill="white" opacity="0.49"><animate attributeName="cy" from="-2" to="261" dur="4964ms" begin="-1784ms" repeatCount="indefinite"/></circle><circle cx="1153.1" cy="0" r="0.8" fill="white" opacity="0.99"><animate attributeName="cy" from="-2" to="261" dur="3743ms" begin="-3143ms" repeatCount="indefinite"/></circle><circle cx="488.7" cy="0" r="1.5" fill="white" opacity="0.35"><animate attributeName="cy" from="-2" to="261" dur="4331ms" begin="-2019ms" repeatCount="indefinite"/></circle><circle cx="1153.4" cy="0" r="1.1" fill="white" opacity="0.75"><animate attributeName="cy" from="-2" to="261" dur="3928ms" begin="-2553ms" repeatCount="indefinite"/></circle><circle cx="154.1" cy="0" r="0.9" fill="white" opacity="0.42"><animate attributeName="cy" from="-2" to="261" dur="7256ms" begin="-4141ms" repeatCount="indefinite"/></circle><circle cx="792.9" cy="0" r="2.0" fill="white" opacity="0.52"><animate attributeName="cy" from="-2" to="261" dur="6884ms" begin="-3092ms" repeatCount="indefinite"/></circle><circle cx="32.6" cy="0" r="0.6" fill="white" opacity="0.81"><animate attributeName="cy" from="-2" to="261" dur="4239ms" begin="-4021ms" repeatCount="indefinite"/></circle><circle cx="358.2" cy="0" r="1.9" fill="white" opacity="0.63"><animate attributeName="cy" from="-2" to="261" dur="3303ms" begin="-297ms" repeatCount="indefinite"/></circle><circle cx="874.9" cy="0" r="1.4" fill="white" opacity="0.89"><animate attributeName="cy" from="-2" to="261" dur="2670ms" begin="-488ms" repeatCount="indefinite"/></circle><circle cx="355.3" cy="0" r="1.2" fill="white" opacity="0.91"><animate attributeName="cy" from="-2" to="261" dur="6964ms" begin="-4890ms" repeatCount="indefinite"/></circle><circle cx="899.4" cy="0" r="1.6" fill="white" opacity="0.85"><animate attributeName="cy" from="-2" to="261" dur="6662ms" begin="-2443ms" repeatCount="indefinite"/></circle><circle cx="16.5" cy="0" r="1.5" fill="white" opacity="0.93"><animate attributeName="cy" from="-2" to="261" dur="5292ms" begin="-2978ms" repeatCount="indefinite"/></circle><circle cx="901.4" cy="0" r="1.0" fill="white" opacity="0.87"><animate attributeName="cy" from="-2" to="261" dur="2654ms" begin="-1764ms" repeatCount="indefinite"/></circle><circle cx="999.8" cy="0" r="1.6" fill="white" opacity="0.89"><animate attributeName="cy" from="-2" to="261" dur="7471ms" begin="-5758ms" repeatCount="indefinite"/></circle><circle cx="310.6" cy="0" r="1.6" fill="white" opacity="0.85"><animate attributeName="cy" from="-2" to="261" dur="5155ms" begin="-3075ms" repeatCount="indefinite"/></circle><circle cx="1136.9" cy="0" r="0.5" fill="white" opacity="0.89"><animate attributeName="cy" from="-2" to="261" dur="3368ms" begin="-1700ms" repeatCount="indefinite"/></circle><circle cx="1087.4" cy="0" r="1.0" fill="white" opacity="0.78"><animate attributeName="cy" from="-2" to="261" dur="5505ms" begin="-1080ms" repeatCount="indefinite"/></circle><circle cx="1061.9" cy="0" r="1.3" fill="white" opacity="0.31"><animate attributeName="cy" from="-2" to="261" dur="4234ms" begin="-2766ms" repeatCount="indefinite"/></circle><circle cx="1098.6" cy="0" r="1.2" fill="white" opacity="0.99"><animate attributeName="cy" from="-2" to="261" dur="6092ms" begin="-568ms" repeatCount="indefinite"/></circle><circle cx="252.8" cy="0" r="1.2" fill="white" opacity="0.86"><animate attributeName="cy" from="-2" to="261" dur="7782ms" begin="-7659ms" repeatCount="indefinite"/></circle><circle cx="982.2" cy="0" r="1.4" fill="white" opacity="0.62"><animate attributeName="cy" from="-2" to="261" dur="7227ms" begin="-1275ms" repeatCount="indefinite"/></circle><circle cx="221.0" cy="0" r="1.4" fill="white" opacity="0.49"><animate attributeName="cy" from="-2" to="261" dur="5906ms" begin="-330ms" repeatCount="indefinite"/></circle><circle cx="668.0" cy="0" r="1.8" fill="white" opacity="0.41"><animate attributeName="cy" from="-2" to="261" dur="6400ms" begin="-5449ms" repeatCount="indefinite"/></circle><circle cx="144.1" cy="0" r="1.8" fill="white" opacity="0.86"><animate attributeName="cy" from="-2" to="261" dur="4804ms" begin="-2809ms" repeatCount="indefinite"/></circle><circle cx="393.2" cy="0" r="1.5" fill="white" opacity="0.39"><animate attributeName="cy" from="-2" to="261" dur="4080ms" begin="-2416ms" repeatCount="indefinite"/></circle><text x="10" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Jun</text><text x="32" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="98" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Jul</text><text x="120" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="186" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Aug</text><text x="208" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="296" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Sep</text><text x="318" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="384" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Oct</text><text x="406" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="472" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Nov</text><text x="494" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="582" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Dec</text><text x="604" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="670" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Jan</text><text x="692" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="758" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Feb</text><text x="780" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="846" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Mar</text><text x="868" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="956" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Apr</text><text x="978" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="1044" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">May</text><text x="1066" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa"></text><text x="1154" y="10" text-anchor="middle" font-size="10" fill="#aaaaaa">Jun</text><rect x="0" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="0" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="0" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="0" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="0" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="0" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="0" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="22" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="22" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="22" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="22" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="22" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="22" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="22" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="44" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="44" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="44" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="44" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="44" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="44" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="44" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="66" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="66" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.6766;1"/>
			</rect><rect x="66" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="66" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="66" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="66" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="66" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="88" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="88" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="88" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="88" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="88" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="88" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="88" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="110" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="110" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="110" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="110" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="110" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="110" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="110" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="132" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="132" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="132" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="132" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="132" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="132" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="132" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="154" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="154" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="154" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="154" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="154" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="154" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="154" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="176" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="176" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="176" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="176" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="176" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="176" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="176" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="198" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="198" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="198" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="198" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="198" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="198" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="198" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="220" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="220" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="220" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="220" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="220" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="220" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="220" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="242" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="242" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="242" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="242" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="242" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="242" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="242" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="264" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="264" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="264" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="264" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="264" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="264" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="264" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="286" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="286" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="286" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="286" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="286" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="286" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="286" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="308" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="308" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="308" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="308" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="308" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="308" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="308" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="330" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="330" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#39d353;#26a641;#006d32;#0e4429;transparent;transparent" keyTimes="0;0.5871;0.592;0.597;0.7562;1"/>
			</rect><rect x="330" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="330" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="330" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="330" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="330" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="352" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="352" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="352" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="352" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="352" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="352" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="352" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="374" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="374" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="374" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="374" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="374" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="374" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="374" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="396" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="396" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="396" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="396" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="396" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="396" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="396" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="418" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="418" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="418" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="418" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="418" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="418" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="418" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="440" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="440" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="440" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="440" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="440" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="440" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="440" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="462" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="462" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="462" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="462" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="462" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="462" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="462" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="484" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="484" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="484" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="484" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="484" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="484" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="484" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="506" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="506" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="506" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="506" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="506" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="506" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.0323;1"/>
			</rect><rect x="506" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="528" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="528" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="528" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="528" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="528" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="528" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="528" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="550" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="550" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="550" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="550" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="550" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="550" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="550" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="572" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="572" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="572" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="572" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="572" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="572" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="572" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="594" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="594" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="594" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="594" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="594" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="594" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="594" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="616" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="616" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="616" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="616" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="616" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="616" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="616" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="638" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="638" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="638" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="638" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="638" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="638" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="638" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="660" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="660" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="660" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="660" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="660" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.092;1"/>
			</rect><rect x="660" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="660" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="682" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="682" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="682" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="682" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="682" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="682" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="682" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="704" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="704" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="704" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="704" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="704" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="704" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="704" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="726" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="726" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="726" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="726" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.1368;1"/>
			</rect><rect x="726" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.1269;1"/>
			</rect><rect x="726" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="726" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="748" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="748" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="748" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="748" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="748" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="748" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="748" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.1443;1"/>
			</rect><rect x="770" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="770" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="770" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="770" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="770" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="770" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="770" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="792" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="792" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="792" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="792" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="792" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="792" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="792" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="814" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="814" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="814" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="814" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="814" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#006d32;#0e4429;transparent;transparent" keyTimes="0;0.1816;0.1866;1"/>
			</rect><rect x="814" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="814" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="836" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="836" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="836" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="836" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="836" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="836" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="836" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="858" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="858" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="858" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="858" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="858" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="858" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="858" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="880" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="880" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="880" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="880" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.2214;1"/>
			</rect><rect x="880" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="880" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="880" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="902" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="902" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="902" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="902" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="902" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="902" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="902" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="924" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="924" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="924" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="924" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="924" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="924" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="924" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="946" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="946" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="946" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="946" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="946" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="946" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="946" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="968" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="968" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="968" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="968" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="968" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="968" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="968" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="990" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="990" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="990" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="990" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="990" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="990" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="990" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1012" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1012" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1012" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1012" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1012" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1012" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1012" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1034" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1034" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1034" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1034" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1034" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1034" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1034" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1056" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1056" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1056" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1056" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1056" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1056" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1056" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1078" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1078" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1078" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1078" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1078" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1078" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1078" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1100" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1100" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1100" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1100" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1100" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1100" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1100" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1122" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1122" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent" keyTimes="0;1"/>
			</rect><rect x="1122" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#26a641;#006d32;#0e4429;transparent;transparent" keyTimes="0;0.3483;0.3532;0.3582;1"/>
			</rect><rect x="1122" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#26a641;#006d32;#0e4429;transparent;transparent" keyTimes="0;0.306;0.3109;0.3408;1"/>
			</rect><rect x="1122" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#006d32;#0e4429;transparent;transparent" keyTimes="0;0.291;0.296;1"/>
			</rect><rect x="1122" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1122" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1144" y="15" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1144" y="37" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1144" y="59" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1144" y="81" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="#0e4429;transparent;transparent" keyTimes="0;0.3209;1"/>
			</rect><rect x="1144" y="103" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1144" y="125" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><rect x="1144" y="147" width="20" height="20" rx="3" fill="transparent">
				<animate attributeName="fill" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					values="transparent;transparent" keyTimes="0;1"/>
			</rect><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0174;0.0174;0.0323;0.0323;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0174;0.0199;0.0224;0.0249;0.0274;0.0299;1" values="517.0,224.0;517.0,224.0;517.0,210.8;517.0,197.6;517.0,184.4;517.0,171.2;517.0,158.0;517.0,158.0"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0224;0.0224;0.0672;0.0672;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0224;0.0249;0.0274;0.0299;0.0323;0.0348;0.0373;0.0398;0.0423;0.0448;0.0473;0.0498;0.0522;0.0547;0.0572;0.0597;0.0622;0.0647;1" values="517.0,224.0;517.0,224.0;517.0,210.8;517.0,197.6;517.0,184.4;517.0,171.2;517.0,158.0;517.0,144.8;517.0,131.6;517.0,118.4;517.0,105.2;517.0,92.0;517.0,78.8;517.0,65.6;517.0,52.4;517.0,39.2;517.0,26.0;517.0,12.8;517.0,-0.4;517.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0274;0.0274;0.0721;0.0721;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0274;0.0299;0.0323;0.0348;0.0373;0.0398;0.0423;0.0448;0.0473;0.0498;0.0522;0.0547;0.0572;0.0597;0.0622;0.0647;0.0672;0.0697;1" values="517.0,224.0;517.0,224.0;517.0,210.8;517.0,197.6;517.0,184.4;517.0,171.2;517.0,158.0;517.0,144.8;517.0,131.6;517.0,118.4;517.0,105.2;517.0,92.0;517.0,78.8;517.0,65.6;517.0,52.4;517.0,39.2;517.0,26.0;517.0,12.8;517.0,-0.4;517.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0721;0.0721;0.092;0.092;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0721;0.0746;0.0771;0.0796;0.0821;0.0846;0.0871;0.0896;1" values="671.0,224.0;671.0,224.0;671.0,210.8;671.0,197.6;671.0,184.4;671.0,171.2;671.0,158.0;671.0,144.8;671.0,131.6;671.0,131.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0771;0.0771;0.1219;0.1219;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0771;0.0796;0.0821;0.0846;0.0871;0.0896;0.092;0.0945;0.097;0.0995;0.102;0.1045;0.107;0.1095;0.1119;0.1144;0.1169;0.1194;1" values="671.0,224.0;671.0,224.0;671.0,210.8;671.0,197.6;671.0,184.4;671.0,171.2;671.0,158.0;671.0,144.8;671.0,131.6;671.0,118.4;671.0,105.2;671.0,92.0;671.0,78.8;671.0,65.6;671.0,52.4;671.0,39.2;671.0,26.0;671.0,12.8;671.0,-0.4;671.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0821;0.0821;0.1269;0.1269;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0821;0.0846;0.0871;0.0896;0.092;0.0945;0.097;0.0995;0.102;0.1045;0.107;0.1095;0.1119;0.1144;0.1169;0.1194;0.1219;0.1244;1" values="671.0,224.0;671.0,224.0;671.0,210.8;671.0,197.6;671.0,184.4;671.0,171.2;671.0,158.0;671.0,144.8;671.0,131.6;671.0,118.4;671.0,105.2;671.0,92.0;671.0,78.8;671.0,65.6;671.0,52.4;671.0,39.2;671.0,26.0;671.0,12.8;671.0,-0.4;671.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.107;0.107;0.1269;0.1269;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.107;0.1095;0.1119;0.1144;0.1169;0.1194;0.1219;0.1244;1" values="737.0,224.0;737.0,224.0;737.0,210.8;737.0,197.6;737.0,184.4;737.0,171.2;737.0,158.0;737.0,144.8;737.0,131.6;737.0,131.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0871;0.0871;0.1318;0.1318;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.0871;0.0896;0.092;0.0945;0.097;0.0995;0.102;0.1045;0.107;0.1095;0.1119;0.1144;0.1169;0.1194;0.1219;0.1244;0.1269;0.1294;1" values="671.0,224.0;671.0,224.0;671.0,210.8;671.0,197.6;671.0,184.4;671.0,171.2;671.0,158.0;671.0,144.8;671.0,131.6;671.0,118.4;671.0,105.2;671.0,92.0;671.0,78.8;671.0,65.6;671.0,52.4;671.0,39.2;671.0,26.0;671.0,12.8;671.0,-0.4;671.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1119;0.1119;0.1368;0.1368;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1119;0.1144;0.1169;0.1194;0.1219;0.1244;0.1269;0.1294;0.1318;0.1343;1" values="737.0,224.0;737.0,224.0;737.0,210.8;737.0,197.6;737.0,184.4;737.0,171.2;737.0,158.0;737.0,144.8;737.0,131.6;737.0,118.4;737.0,105.2;737.0,105.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1318;0.1318;0.1443;0.1443;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1318;0.1343;0.1368;0.1393;0.1418;1" values="759.0,224.0;759.0,224.0;759.0,210.8;759.0,197.6;759.0,184.4;759.0,171.2;759.0,171.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1169;0.1169;0.1617;0.1617;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1169;0.1194;0.1219;0.1244;0.1269;0.1294;0.1318;0.1343;0.1368;0.1393;0.1418;0.1443;0.1468;0.1493;0.1517;0.1542;0.1567;0.1592;1" values="737.0,224.0;737.0,224.0;737.0,210.8;737.0,197.6;737.0,184.4;737.0,171.2;737.0,158.0;737.0,144.8;737.0,131.6;737.0,118.4;737.0,105.2;737.0,92.0;737.0,78.8;737.0,65.6;737.0,52.4;737.0,39.2;737.0,26.0;737.0,12.8;737.0,-0.4;737.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1219;0.1219;0.1667;0.1667;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1219;0.1244;0.1269;0.1294;0.1318;0.1343;0.1368;0.1393;0.1418;0.1443;0.1468;0.1493;0.1517;0.1542;0.1567;0.1592;0.1617;0.1642;1" values="737.0,224.0;737.0,224.0;737.0,210.8;737.0,197.6;737.0,184.4;737.0,171.2;737.0,158.0;737.0,144.8;737.0,131.6;737.0,118.4;737.0,105.2;737.0,92.0;737.0,78.8;737.0,65.6;737.0,52.4;737.0,39.2;737.0,26.0;737.0,12.8;737.0,-0.4;737.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1368;0.1368;0.1816;0.1816;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1368;0.1393;0.1418;0.1443;0.1468;0.1493;0.1517;0.1542;0.1567;0.1592;0.1617;0.1642;0.1667;0.1692;0.1716;0.1741;0.1766;0.1791;1" values="759.0,224.0;759.0,224.0;759.0,210.8;759.0,197.6;759.0,184.4;759.0,171.2;759.0,158.0;759.0,144.8;759.0,131.6;759.0,118.4;759.0,105.2;759.0,92.0;759.0,78.8;759.0,65.6;759.0,52.4;759.0,39.2;759.0,26.0;759.0,12.8;759.0,-0.4;759.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1617;0.1617;0.1816;0.1816;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1617;0.1642;0.1667;0.1692;0.1716;0.1741;0.1766;0.1791;1" values="825.0,224.0;825.0,224.0;825.0,210.8;825.0,197.6;825.0,184.4;825.0,171.2;825.0,158.0;825.0,144.8;825.0,131.6;825.0,131.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1418;0.1418;0.1866;0.1866;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1418;0.1443;0.1468;0.1493;0.1517;0.1542;0.1567;0.1592;0.1617;0.1642;0.1667;0.1692;0.1716;0.1741;0.1766;0.1791;0.1816;0.1841;1" values="759.0,224.0;759.0,224.0;759.0,210.8;759.0,197.6;759.0,184.4;759.0,171.2;759.0,158.0;759.0,144.8;759.0,131.6;759.0,118.4;759.0,105.2;759.0,92.0;759.0,78.8;759.0,65.6;759.0,52.4;759.0,39.2;759.0,26.0;759.0,12.8;759.0,-0.4;759.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1667;0.1667;0.1866;0.1866;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1667;0.1692;0.1716;0.1741;0.1766;0.1791;0.1816;0.1841;1" values="825.0,224.0;825.0,224.0;825.0,210.8;825.0,197.6;825.0,184.4;825.0,171.2;825.0,158.0;825.0,144.8;825.0,131.6;825.0,131.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1716;0.1716;0.2164;0.2164;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1716;0.1741;0.1766;0.1791;0.1816;0.1841;0.1866;0.1891;0.1915;0.194;0.1965;0.199;0.2015;0.204;0.2065;0.209;0.2114;0.2139;1" values="825.0,224.0;825.0,224.0;825.0,210.8;825.0,197.6;825.0,184.4;825.0,171.2;825.0,158.0;825.0,144.8;825.0,131.6;825.0,118.4;825.0,105.2;825.0,92.0;825.0,78.8;825.0,65.6;825.0,52.4;825.0,39.2;825.0,26.0;825.0,12.8;825.0,-0.4;825.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1965;0.1965;0.2214;0.2214;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.1965;0.199;0.2015;0.204;0.2065;0.209;0.2114;0.2139;0.2164;0.2189;1" values="891.0,224.0;891.0,224.0;891.0,210.8;891.0,197.6;891.0,184.4;891.0,171.2;891.0,158.0;891.0,144.8;891.0,131.6;891.0,118.4;891.0,105.2;891.0,105.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2015;0.2015;0.2463;0.2463;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2015;0.204;0.2065;0.209;0.2114;0.2139;0.2164;0.2189;0.2214;0.2239;0.2264;0.2289;0.2313;0.2338;0.2363;0.2388;0.2413;0.2438;1" values="891.0,224.0;891.0,224.0;891.0,210.8;891.0,197.6;891.0,184.4;891.0,171.2;891.0,158.0;891.0,144.8;891.0,131.6;891.0,118.4;891.0,105.2;891.0,92.0;891.0,78.8;891.0,65.6;891.0,52.4;891.0,39.2;891.0,26.0;891.0,12.8;891.0,-0.4;891.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2711;0.2711;0.291;0.291;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2711;0.2736;0.2761;0.2786;0.2811;0.2836;0.2861;0.2886;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,131.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2761;0.2761;0.296;0.296;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2761;0.2786;0.2811;0.2836;0.2861;0.2886;0.291;0.2935;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,131.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2811;0.2811;0.306;0.306;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2811;0.2836;0.2861;0.2886;0.291;0.2935;0.296;0.2985;0.301;0.3035;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,105.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2861;0.2861;0.3109;0.3109;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.2861;0.2886;0.291;0.2935;0.296;0.2985;0.301;0.3035;0.306;0.3085;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,105.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.296;0.296;0.3209;0.3209;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.296;0.2985;0.301;0.3035;0.306;0.3085;0.3109;0.3134;0.3159;0.3184;1" values="1155.0,224.0;1155.0,224.0;1155.0,210.8;1155.0,197.6;1155.0,184.4;1155.0,171.2;1155.0,158.0;1155.0,144.8;1155.0,131.6;1155.0,118.4;1155.0,105.2;1155.0,105.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3159;0.3159;0.3408;0.3408;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3159;0.3184;0.3209;0.3234;0.3259;0.3284;0.3308;0.3333;0.3358;0.3383;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,105.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.301;0.301;0.3458;0.3458;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.301;0.3035;0.306;0.3085;0.3109;0.3134;0.3159;0.3184;0.3209;0.3234;0.3259;0.3284;0.3308;0.3333;0.3358;0.3383;0.3408;0.3433;1" values="1155.0,224.0;1155.0,224.0;1155.0,210.8;1155.0,197.6;1155.0,184.4;1155.0,171.2;1155.0,158.0;1155.0,144.8;1155.0,131.6;1155.0,118.4;1155.0,105.2;1155.0,92.0;1155.0,78.8;1155.0,65.6;1155.0,52.4;1155.0,39.2;1155.0,26.0;1155.0,12.8;1155.0,-0.4;1155.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3209;0.3209;0.3483;0.3483;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3209;0.3234;0.3259;0.3284;0.3308;0.3333;0.3358;0.3383;0.3408;0.3433;0.3458;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,92.0;1133.0,92.0"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.306;0.306;0.3507;0.3507;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.306;0.3085;0.3109;0.3134;0.3159;0.3184;0.3209;0.3234;0.3259;0.3284;0.3308;0.3333;0.3358;0.3383;0.3408;0.3433;0.3458;0.3483;1" values="1155.0,224.0;1155.0,224.0;1155.0,210.8;1155.0,197.6;1155.0,184.4;1155.0,171.2;1155.0,158.0;1155.0,144.8;1155.0,131.6;1155.0,118.4;1155.0,105.2;1155.0,92.0;1155.0,78.8;1155.0,65.6;1155.0,52.4;1155.0,39.2;1155.0,26.0;1155.0,12.8;1155.0,-0.4;1155.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3259;0.3259;0.3532;0.3532;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3259;0.3284;0.3308;0.3333;0.3358;0.3383;0.3408;0.3433;0.3458;0.3483;0.3507;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,92.0;1133.0,92.0"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3109;0.3109;0.3557;0.3557;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3109;0.3134;0.3159;0.3184;0.3209;0.3234;0.3259;0.3284;0.3308;0.3333;0.3358;0.3383;0.3408;0.3433;0.3458;0.3483;0.3507;0.3532;1" values="1155.0,224.0;1155.0,224.0;1155.0,210.8;1155.0,197.6;1155.0,184.4;1155.0,171.2;1155.0,158.0;1155.0,144.8;1155.0,131.6;1155.0,118.4;1155.0,105.2;1155.0,92.0;1155.0,78.8;1155.0,65.6;1155.0,52.4;1155.0,39.2;1155.0,26.0;1155.0,12.8;1155.0,-0.4;1155.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3308;0.3308;0.3582;0.3582;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.3308;0.3333;0.3358;0.3383;0.3408;0.3433;0.3458;0.3483;0.3507;0.3532;0.3557;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,92.0;1133.0,92.0"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.5547;0.5547;0.5871;0.5871;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.5547;0.5572;0.5597;0.5622;0.5647;0.5672;0.5697;0.5721;0.5746;0.5771;0.5796;0.5821;0.5846;1" values="341.0,224.0;341.0,224.0;341.0,210.8;341.0,197.6;341.0,184.4;341.0,171.2;341.0,158.0;341.0,144.8;341.0,131.6;341.0,118.4;341.0,105.2;341.0,92.0;341.0,78.8;341.0,65.6;341.0,65.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.5597;0.5597;0.592;0.592;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.5597;0.5622;0.5647;0.5672;0.5697;0.5721;0.5746;0.5771;0.5796;0.5821;0.5846;0.5871;0.5896;1" values="341.0,224.0;341.0,224.0;341.0,210.8;341.0,197.6;341.0,184.4;341.0,171.2;341.0,158.0;341.0,144.8;341.0,131.6;341.0,118.4;341.0,105.2;341.0,92.0;341.0,78.8;341.0,65.6;341.0,65.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.5647;0.5647;0.597;0.597;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.5647;0.5672;0.5697;0.5721;0.5746;0.5771;0.5796;0.5821;0.5846;0.5871;0.5896;0.592;0.5945;1" values="341.0,224.0;341.0,224.0;341.0,210.8;341.0,197.6;341.0,184.4;341.0,171.2;341.0,158.0;341.0,144.8;341.0,131.6;341.0,118.4;341.0,105.2;341.0,92.0;341.0,78.8;341.0,65.6;341.0,65.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.6443;0.6443;0.6766;0.6766;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.6443;0.6468;0.6493;0.6517;0.6542;0.6567;0.6592;0.6617;0.6642;0.6667;0.6692;0.6716;0.6741;1" values="77.0,224.0;77.0,224.0;77.0,210.8;77.0,197.6;77.0,184.4;77.0,171.2;77.0,158.0;77.0,144.8;77.0,131.6;77.0,118.4;77.0,105.2;77.0,92.0;77.0,78.8;77.0,65.6;77.0,65.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.6493;0.6493;0.694;0.694;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.6493;0.6517;0.6542;0.6567;0.6592;0.6617;0.6642;0.6667;0.6692;0.6716;0.6741;0.6766;0.6791;0.6816;0.6841;0.6866;0.6891;0.6915;1" values="77.0,224.0;77.0,224.0;77.0,210.8;77.0,197.6;77.0,184.4;77.0,171.2;77.0,158.0;77.0,144.8;77.0,131.6;77.0,118.4;77.0,105.2;77.0,92.0;77.0,78.8;77.0,65.6;77.0,52.4;77.0,39.2;77.0,26.0;77.0,12.8;77.0,-0.4;77.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7239;0.7239;0.7562;0.7562;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7239;0.7264;0.7289;0.7313;0.7338;0.7363;0.7388;0.7413;0.7438;0.7463;0.7488;0.7512;0.7537;1" values="341.0,224.0;341.0,224.0;341.0,210.8;341.0,197.6;341.0,184.4;341.0,171.2;341.0,158.0;341.0,144.8;341.0,131.6;341.0,118.4;341.0,105.2;341.0,92.0;341.0,78.8;341.0,65.6;341.0,65.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7289;0.7289;0.7736;0.7736;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7289;0.7313;0.7338;0.7363;0.7388;0.7413;0.7438;0.7463;0.7488;0.7512;0.7537;0.7562;0.7587;0.7612;0.7637;0.7662;0.7687;0.7711;1" values="341.0,224.0;341.0,224.0;341.0,210.8;341.0,197.6;341.0,184.4;341.0,171.2;341.0,158.0;341.0,144.8;341.0,131.6;341.0,118.4;341.0,105.2;341.0,92.0;341.0,78.8;341.0,65.6;341.0,52.4;341.0,39.2;341.0,26.0;341.0,12.8;341.0,-0.4;341.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7338;0.7338;0.7786;0.7786;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7338;0.7363;0.7388;0.7413;0.7438;0.7463;0.7488;0.7512;0.7537;0.7562;0.7587;0.7612;0.7637;0.7662;0.7687;0.7711;0.7736;0.7761;1" values="341.0,224.0;341.0,224.0;341.0,210.8;341.0,197.6;341.0,184.4;341.0,171.2;341.0,158.0;341.0,144.8;341.0,131.6;341.0,118.4;341.0,105.2;341.0,92.0;341.0,78.8;341.0,65.6;341.0,52.4;341.0,39.2;341.0,26.0;341.0,12.8;341.0,-0.4;341.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7388;0.7388;0.7836;0.7836;1" values="0;0;1;1;0;0"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.7388;0.7413;0.7438;0.7463;0.7488;0.7512;0.7537;0.7562;0.7587;0.7612;0.7637;0.7662;0.7687;0.7711;0.7736;0.7761;0.7786;0.7811;1" values="341.0,224.0;341.0,224.0;341.0,210.8;341.0,197.6;341.0,184.4;341.0,171.2;341.0,158.0;341.0,144.8;341.0,131.6;341.0,118.4;341.0,105.2;341.0,92.0;341.0,78.8;341.0,65.6;341.0,52.4;341.0,39.2;341.0,26.0;341.0,12.8;341.0,-0.4;341.0,-0.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9677;0.9677;1" values="0;0;1;1"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9677;0.9701;0.9726;0.9751;0.9776;0.9801;0.9826;0.9851;0.9876;0.99;0.9925;0.995;0.9975;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,92.0;1133.0,78.8;1133.0,65.6;1133.0,65.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9726;0.9726;1" values="0;0;1;1"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9726;0.9751;0.9776;0.9801;0.9826;0.9851;0.9876;0.99;0.9925;0.995;0.9975;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2;1133.0,92.0;1133.0,78.8"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9776;0.9776;1" values="0;0;1;1"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9776;0.9801;0.9826;0.9851;0.9876;0.99;0.9925;0.995;0.9975;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6;1133.0,118.4;1133.0,105.2"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9826;0.9826;1" values="0;0;1;1"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9826;0.9851;0.9876;0.99;0.9925;0.995;0.9975;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0;1133.0,144.8;1133.0,131.6"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9876;0.9876;1" values="0;0;1;1"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9876;0.99;0.9925;0.995;0.9975;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4;1133.0,171.2;1133.0,158.0"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9925;0.9925;1" values="0;0;1;1"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9925;0.995;0.9975;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8;1133.0,197.6;1133.0,184.4"/>
			</image><image x="-5" y="-13" width="10" height="13" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAByUExURQAAAP////7+/gBE/wBE/wBE/wBE/wBE/wBE/gBE/gBE/wBE/wBE/gBE/wBE/wBE/gBE/gBE/+cgMfUeJf8AAP8AAP4AAP4AAABE/wBE/hhW/y9m/y9n/yNd/4Sl/73O/7zO//8cHP4cHP8AAP4AAP///6QdcYAAAAAYdFJOUwAAAGbHk4W9hb1genq/3RYcHJPFhb2FvbKPFBsAAAABYktHRAH/Ai3eAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH6gUIFjcZmpji7QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNS0wOFQyMjo1NToyNSswMDowMDWlEL0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDUtMDhUMjI6NTU6MjUrMDA6MDBE+KgBAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA1LTA4VDIyOjU1OjI1KzAwOjAwE+2J3gAAAk5JREFUaN7tVotWwyAMnahzvp2PSXxMZ/P/3+ggECija1N2ZDvuWmm17W1y82IyyeH0LIPzyXBMdQYXR4IjwZFATDAD0NoeYE/mT30pITBfNK/ZNx2TyAX3acvjL4QE2r/HFxIXptGHmUEkIkkXx0CmwczIl6KD4OqaccPnWx8BXtc/d9GDN/Twepmc6S5A7x1z3iCgDKJfoFxI7kEI7nrdYkGfWXQZE3DW5e2HrGM5C0Anj3aoATmCyH8XAr5B/05oxRpsYGcEvQ5vJwiFxzUAkDAlBUrpndWAshg09NsCO9TgPxEIamE8wZ5rMIzg7b2FD7t+CgiWJxl8lRJ8DyFwJbdUJ0rFLysm6AsjFFowVgMYQlBswX4TtLcSYAiUD59qhzEJGGwSmF5r80CFFAgW+JZND3ZO5zINYDgBbBFRjbdAV63GLQSqjwAghJMJXB4os7bL2e9C9iWVewlUN8H9g8OcYC8fVxY/qxhPc3rOH4T8Bvq5CUC/vgh26zEBYxQBugOrWVCNYOEVwKAE1nAB2YYxBBh/HQ8uCvUJFi7+VARIVwfmAqcBhmQWWoB1XdhFGNGFcb0cZBjjrszRLLWgkgbovJB2JJfKXIljUjlSEev0RJuArIF0vC84/AYNLX/sQtRIxoRxj4qpXkfiaeIm/J+HcbEDDSiRMRoQNV3AA8yDcgJM/G+EPdE3VUpFd5INV9+JXFMykLmAfjIjmyK0wLUj5NYkJKBx0sKrWIMEchGxsgVNsQVNCYEfLGEySrd5xSK6LArjdUwtDIrCL/JGvSI+ReIgAAAAAElFTkSuQmCC" opacity="0" preserveAspectRatio="xMidYMid meet">
				<animate attributeName="opacity" calcMode="discrete" dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9975;0.9975;1" values="0;0;1;1"/>
				<animateTransform attributeName="transform" type="translate" calcMode="linear"
					dur="40300ms" repeatCount="indefinite"
					keyTimes="0;0.9975;1" values="1133.0,224.0;1133.0,224.0;1133.0,210.8"/>
			</image><circle cx="516.0" cy="135.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="0;0;1;0;0"/>
			</circle><circle cx="516.0" cy="135.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="516.0;516.0;516.0;516.0;516.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="135.0;135.0;135.0;124.0;124.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="0;0;1;0;0"/>
				</circle><circle cx="516.0" cy="135.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="516.0;516.0;516.0;516.0;516.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="135.0;135.0;135.0;146.0;146.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="0;0;1;0;0"/>
				</circle><circle cx="516.0" cy="135.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="516.0;516.0;516.0;505.0;505.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="135.0;135.0;135.0;135.0;135.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="0;0;1;0;0"/>
				</circle><circle cx="516.0" cy="135.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="516.0;516.0;516.0;527.0;527.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="135.0;135.0;135.0;135.0;135.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.0323;0.0323;0.0498;1" values="0;0;1;0;0"/>
				</circle><circle cx="670.0" cy="113.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="0;0;1;0;0"/>
			</circle><circle cx="670.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="670.0;670.0;670.0;670.0;670.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="113.0;113.0;113.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="0;0;1;0;0"/>
				</circle><circle cx="670.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="670.0;670.0;670.0;670.0;670.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="113.0;113.0;113.0;124.0;124.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="0;0;1;0;0"/>
				</circle><circle cx="670.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="670.0;670.0;670.0;659.0;659.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="0;0;1;0;0"/>
				</circle><circle cx="670.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="670.0;670.0;670.0;681.0;681.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.092;0.092;0.1095;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="113.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="0;0;1;0;0"/>
			</circle><circle cx="736.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="736.0;736.0;736.0;736.0;736.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="113.0;113.0;113.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="736.0;736.0;736.0;736.0;736.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="113.0;113.0;113.0;124.0;124.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="736.0;736.0;736.0;725.0;725.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="736.0;736.0;736.0;747.0;747.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1269;0.1269;0.1443;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="91.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="0;0;1;0;0"/>
			</circle><circle cx="736.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="736.0;736.0;736.0;736.0;736.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="91.0;91.0;91.0;80.0;80.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="736.0;736.0;736.0;736.0;736.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="91.0;91.0;91.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="736.0;736.0;736.0;725.0;725.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="0;0;1;0;0"/>
				</circle><circle cx="736.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="736.0;736.0;736.0;747.0;747.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1368;0.1368;0.1542;1" values="0;0;1;0;0"/>
				</circle><circle cx="758.0" cy="157.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="0;0;1;0;0"/>
			</circle><circle cx="758.0" cy="157.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="758.0;758.0;758.0;758.0;758.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="157.0;157.0;157.0;146.0;146.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="0;0;1;0;0"/>
				</circle><circle cx="758.0" cy="157.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="758.0;758.0;758.0;758.0;758.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="157.0;157.0;157.0;168.0;168.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="0;0;1;0;0"/>
				</circle><circle cx="758.0" cy="157.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="758.0;758.0;758.0;747.0;747.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="157.0;157.0;157.0;157.0;157.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="0;0;1;0;0"/>
				</circle><circle cx="758.0" cy="157.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="758.0;758.0;758.0;769.0;769.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="157.0;157.0;157.0;157.0;157.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1443;0.1443;0.1617;1" values="0;0;1;0;0"/>
				</circle><circle cx="824.0" cy="113.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="0;0;1;0;0"/>
			</circle><circle cx="824.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="824.0;824.0;824.0;824.0;824.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="113.0;113.0;113.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="0;0;1;0;0"/>
				</circle><circle cx="824.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="824.0;824.0;824.0;824.0;824.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="113.0;113.0;113.0;124.0;124.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="0;0;1;0;0"/>
				</circle><circle cx="824.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="824.0;824.0;824.0;813.0;813.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="0;0;1;0;0"/>
				</circle><circle cx="824.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="824.0;824.0;824.0;835.0;835.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.1866;0.1866;0.204;1" values="0;0;1;0;0"/>
				</circle><circle cx="890.0" cy="91.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="0;0;1;0;0"/>
			</circle><circle cx="890.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="890.0;890.0;890.0;890.0;890.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="91.0;91.0;91.0;80.0;80.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="0;0;1;0;0"/>
				</circle><circle cx="890.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="890.0;890.0;890.0;890.0;890.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="91.0;91.0;91.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="0;0;1;0;0"/>
				</circle><circle cx="890.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="890.0;890.0;890.0;879.0;879.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="0;0;1;0;0"/>
				</circle><circle cx="890.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="890.0;890.0;890.0;901.0;901.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.2214;0.2214;0.2388;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="113.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="0;0;1;0;0"/>
			</circle><circle cx="1132.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="1132.0;1132.0;1132.0;1132.0;1132.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="113.0;113.0;113.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="1132.0;1132.0;1132.0;1132.0;1132.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="113.0;113.0;113.0;124.0;124.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="1132.0;1132.0;1132.0;1121.0;1121.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="113.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="1132.0;1132.0;1132.0;1143.0;1143.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="113.0;113.0;113.0;113.0;113.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.296;0.296;0.3134;1" values="0;0;1;0;0"/>
				</circle><circle cx="1154.0" cy="91.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="0;0;1;0;0"/>
			</circle><circle cx="1154.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="1154.0;1154.0;1154.0;1154.0;1154.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="91.0;91.0;91.0;80.0;80.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="0;0;1;0;0"/>
				</circle><circle cx="1154.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="1154.0;1154.0;1154.0;1154.0;1154.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="91.0;91.0;91.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="0;0;1;0;0"/>
				</circle><circle cx="1154.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="1154.0;1154.0;1154.0;1143.0;1143.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="0;0;1;0;0"/>
				</circle><circle cx="1154.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="1154.0;1154.0;1154.0;1165.0;1165.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3209;0.3209;0.3383;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="91.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="0;0;1;0;0"/>
			</circle><circle cx="1132.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="1132.0;1132.0;1132.0;1132.0;1132.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="91.0;91.0;91.0;80.0;80.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="1132.0;1132.0;1132.0;1132.0;1132.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="91.0;91.0;91.0;102.0;102.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="1132.0;1132.0;1132.0;1121.0;1121.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="91.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="1132.0;1132.0;1132.0;1143.0;1143.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="91.0;91.0;91.0;91.0;91.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3408;0.3408;0.3582;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="69.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="0;0;1;0;0"/>
			</circle><circle cx="1132.0" cy="69.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="1132.0;1132.0;1132.0;1132.0;1132.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="69.0;69.0;69.0;58.0;58.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="69.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="1132.0;1132.0;1132.0;1132.0;1132.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="69.0;69.0;69.0;80.0;80.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="69.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="1132.0;1132.0;1132.0;1121.0;1121.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="69.0;69.0;69.0;69.0;69.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="0;0;1;0;0"/>
				</circle><circle cx="1132.0" cy="69.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="1132.0;1132.0;1132.0;1143.0;1143.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="69.0;69.0;69.0;69.0;69.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.3582;0.3582;0.3756;1" values="0;0;1;0;0"/>
				</circle><circle cx="76.0" cy="47.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="0;0;1;0;0"/>
			</circle><circle cx="76.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="76.0;76.0;76.0;76.0;76.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="47.0;47.0;47.0;36.0;36.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="0;0;1;0;0"/>
				</circle><circle cx="76.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="76.0;76.0;76.0;76.0;76.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="47.0;47.0;47.0;58.0;58.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="0;0;1;0;0"/>
				</circle><circle cx="76.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="76.0;76.0;76.0;65.0;65.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="47.0;47.0;47.0;47.0;47.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="0;0;1;0;0"/>
				</circle><circle cx="76.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="76.0;76.0;76.0;87.0;87.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="47.0;47.0;47.0;47.0;47.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.6766;0.6766;0.694;1" values="0;0;1;0;0"/>
				</circle><circle cx="340.0" cy="47.0" r="2" fill="none" stroke="#0e4429" stroke-width="3" opacity="0">
				<animate attributeName="r"            calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="2;2;2;20;20"/>
				<animate attributeName="stroke-width" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="3;3;3;0;0"/>
				<animate attributeName="opacity"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="0;0;1;0;0"/>
			</circle><circle cx="340.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="340.0;340.0;340.0;340.0;340.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="47.0;47.0;47.0;36.0;36.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="0;0;1;0;0"/>
				</circle><circle cx="340.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="340.0;340.0;340.0;340.0;340.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="47.0;47.0;47.0;58.0;58.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="0;0;1;0;0"/>
				</circle><circle cx="340.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="340.0;340.0;340.0;329.0;329.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="47.0;47.0;47.0;47.0;47.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="0;0;1;0;0"/>
				</circle><circle cx="340.0" cy="47.0" r="2.5" fill="#0e4429" opacity="0">
					<animate attributeName="cx"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="340.0;340.0;340.0;351.0;351.0"/>
					<animate attributeName="cy"      calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="47.0;47.0;47.0;47.0;47.0"/>
					<animate attributeName="r"       calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="2.5;2.5;2.5;0;0"/>
					<animate attributeName="opacity" calcMode="linear" dur="40300ms" repeatCount="indefinite" keyTimes="0;0.7562;0.7562;0.7736;1" values="0;0;1;0;0"/>
				</circle><image x="-16" y="-35" width="32" height="35" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfqBQgWJQn/24JaAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI2LTA1LTA4VDIyOjM1OjQ2KzAwOjAwKpfJ5AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNi0wNS0wOFQyMjozNTo0NiswMDowMFvKcVgAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjYtMDUtMDhUMjI6Mzc6MDkrMDA6MDB6KP6pAAANdklEQVR42u2cW6wdVRnH/2vNfc++HYFKe7S0FQEDaEKjlEhaHyRi0xJJrCKpDyZo0EQu8kBTSwhJjSca0fhQNVFiYiMJiQqxtEAoD4fQRHIk1YJFsWAqtJyc0rP3zJ7Zc1uzfNhnrTN7z+zL2WdTovglO/md6VzWrPn+6/vWreCcw/d9nD9/HoIXFxdz7HkeGo1GjlutVhc3m80cu64Lx3Fy7DhOF7uum+Nms4lWq5XjRqPRxZ7n5XhxcRG+7+f4/Pnzkonv+yCEAEDnwPuMaRAEAADDMDCICSHQdT3HlFJomjaQFUWBqqo5VlW1ixVFybGmaaCUDmRd10EIybFhGAAwkAnnHO12G0EQYGpqCu12G2EYol6vd7Hv+4jjGLVarYs9z0OSJJIZY6hWq10sXLVSqUg2dR1xFAEAVF1HGEUghKBcLsN1XcmO40BRFNi23cXNZhOqqkrWNA2lUqmLG40GDMOAZVldvLi4CNM0YVnWhZXAfffdxw8dOgQA2LtnD766ezcBgN8//jj/7r59AIDbbrsNDz30ELlgEgjDULp6Eeu6jjAMpdv3snD1QSzcfn5+HqdPn8bp06fhOA6Eea2WPL6wsCAlEIahdPVBLNy+iAEgDEPp9r1M6/W6bD0FN5tNyY7joF6vgzEG13VzHMcxWq2WZM/zchyGIdrttizQINN1vUt6nuchjuMct1otya7rgjGWYxFh6vW6jEj1el1GrXq9DrXdboMQAsuyINg0zRxTSmEYRo4VRYGiKANZVVUAAGNsaAUwxqBpGgB0VVovi684iE3TLGTLsiSPLQHh3lnulYCqql0SGLUCshJQVbWvBISrZ/mCSUC4fZIkfSXg+/6qJSAiTpEEkiSR/D8jgSRJ3nsJCFeflAQEj1IBaZp2uf2kJNBPDoUSEG4/KQlEUbRiCURRNFEJZLlLAr7vg1KKUqkEwZZlSTZNU7JhGDkWrt6PH374YX7ixAkAwIsvvji0AmZnZ3HXXXdxANi8eTPuuOMOAgC+78sK9H1ffsVBLNze931YliU7eKVSSbIaRRFM04SmaVIrWdZ1HY7jwLIsqKoK13X7cqlUAqUUrVZL8uHDh3H06NGhLy7s5MmTOHnyJADg3LlzuPPOO5GmKYIgQLlcllypVJAkCaIo6svVahVRFA1kVeT8zWZT9gWE22fZ930EQZBjz/O62PM8hGHI5+fnwRgD51y+3Lp162AtfZVarSaPVyoVbNy0CQAQRRHeevNNAICmadKbhBsLFn0BwZqm5Vjk/70s+gL1eh3E8zxQSkEIAWNs1fzGG2/w/fv3w/d9pGmKZ599Fr7vAwAOHzqEbVu3kt6vzjgQLVXUKy+/zLfd+GkAwM6dO/HYY48R0ThSSmVDqSgKOOerZjWOYxiGIbuu/dg0Tdl17ceWZUHXdTz33HN4++23R3b7fsY5h6qqSNMUYRjCtm3JhmEgSRKI8hexaZqIomgg01qtJpMfwY7j5Fi0/L0sokCtVpP9AtHbWq0JCRR1w0UUEMwYy7Fo+XtZJEW1Wm14FOgXEQSLNFfw+vXrSbVa5WfPns29UMQ5gpTnjvM+FZAkCQzDkC12lk3THMrZlr9fFKBxHMvaLmJVVRHHMQghfVlRlI47UYpKpYLZ2VmysLBA3nnnHbJt27bcy/b+BklAURRQShHHcY4JIYjjGKqq9mUAiONYZpe9PFQCrusOlYDneVICvu9jzZo1MjyKWDxpCWRHovpJQAysTkwCqqri0Ucf5WmaAgAopSjiLVu2YHp6moya/vazrAReeeUVfvz48YHPpZTi1ltvlYnTKBIojAKiVc+yaDlvv/32oQV/8MEHsXfvXlBKu/KAlZqQQJqmmJmZwcGDB4deIzpx4r3iOM7x0Cgg3L5XAq7rjvQ2pmlKOQgdjmNZCQjdDrN+EshylwQ8z5MjrYItyyrkUqlEsNRu3QQTN6PTrfTB8T00ESw1aaKRmqQEkiSRx0sg2IMabHTC7SxCPIFOsmVZFiil8DxPun0vi3zC8zyoSZLk+vH9xvAVRZGF2AID30FV/v0zuDiDzstmM8TVSkDIqCulhoIHsJxKK3BkBYjokCSJ9MQiTtMUSZIsS6Co5V+tBLKDIeOY6JRNWgLZiEA9zwMhREqAEIJSqZTjpUgxUooXRREURYFhGBORgKIoXRIYZFkJlEolEEJybNu2ZCoKqCgKRuFRTLjuJKLASu8jysgYG4lptVqVEhDsum6O0zQdWQIi5LxXEkjTFNVqVbp9LwsJVKvV5Sig6zrOnj0ra7yIs27IP1BHetEGAABhKfCvM0Da8RQhgXcrCnBKwTesB1c63WPeeAtYWBTP5owxIsYLwjBEo9Ho4lqtJiWgCpc4cuQI37Vr1+iFu+PLCPbtk20Cv/JKjqUOkJh/m5QE0jTtug/f8CG0jz8pnx0fOMCxZw8AYHp6GhjcxcDTTz+NrVu3ki4JtNvtsQvaa6JPPikJZIfKJ2FicUSXBMRg4iQsiiI59z8JCQielJmmmZeAGG6qgGAeH5Yn/xMJPo4zK3rA/v37MTMzw0VljGuHDx/G1NTU2Pd5DdOYxnLkuhxv4QyYfFfGGNRqtYp2u52RAIGF5XBvYuWjO6LTsVpjjK1KmlbPuwjKSoCKIazV9Nv/20xIoNVqQRV96UmN433w0ktx6MgREEJz//bhtZcSg+afwzhHstRuf/SKK8jc8b/kWnGepvjyri/i9VOnVl3G7OhygQRWZ4auY+PGTYW1aRACWnCcQ3Yyoes6NmzYUHi9ZVnjx9SMve8lYFnWsgREgiElYOiIHrpfnhyTBLj/rrEfpmWklVWZ8sejXHlhDgCQbL4W/IvbC796vIpEKvrJA4iCTBj+/l6g2ehaJKVWKpUuCXBNRfKt3bIw7NQpjvtX9uCsqX2aFuWFOagHloa4dn8B6a7thefFq3B6dvM2JOvWLWerP93P0WxICVQqlf9LIC+BMez1xYinN+9FNQhQvqjS9zzl6AuczJ/rPO/V1+Vx+vppqL99ggMAr9fAtn+msDD2zfeieu15BHYJr54L+VUXG2MVeqAExrFT50OwDZ+CDkCr9s/Z1R8/AmU2v0aAHnsJ+rGXAADpNVeAbf9M4fXaxs3QKyEiAH9bCHDVxeOl7/+XQJEEVmrnfIaTCyEHgEaQ4mOXdL7GGnu0Xhtfuwb8oikAAFlsgrw1fDZ505QOkUd5USqfP++N11HqkoBYHT6q/fbEIh4/2NHxTR+p4KndneSHA4UToL0W3/01GW3Ug49z/VsPDL3mwI4Pyfzy3qfO8H3PdSqtPffOisrebreXJSBWZr8fJeC6LlY0WnHtNddg544dAIDj2lX485I/0lHbYoUC6lL3NHsRIcvHRxx4pQRQlu5x/Sc/iS2f6IwIHXrySfx1aVHWKLYiCXx3717s3LGjs2SFAywVIXS0h4W/+zkBT3MvmnxlJ0m+JBKh0W72g5vWkpnPru1UBr0SCul8mBtvvJFvX/pI/SwrAdV1XWiaNpIEsrkCJQBVVhiGVQVAwRemtPNbgSmUYDRfyVuXBIYlQNVaDd/4+tcBABsuu2zMR144m163TpbXtu2B5xJCoJbL5YESuOTii8mPf/SjkQtA317gtdvvln9Hh35FULLGe5uEofb5r3GwTpiLfzkDvmn9wC92+eWXDy2vkEC5XF6WgFhAvGqLIqhzy41QnDCM3Z/hHOpLJ4C4UwGJH4x/r4yJaTLXdUGzefH7xbL9n5wEwjDE3ffcs6La+Dh0fBNLnaCW964VXPvhL8Cn6hwAfo0W/oRwRdc3Gw0AQyQQxzF++cgjK7rxLSjh27jkXXtxYcofnpE8i3P4Dcar7KwEZBSo1+u44YYbkKapXLMvpqTEOp0sp2mKubm591w6qqriuuuuk1NxjLFCTpJEznVWKh1v7ZLA5s2bybFjx0beOBkEAdauXcuHTVg8ffBR/m8zH7G3XH89rr76agIA/3jtNf7888/nztmYUuxYGrXuZ9VqFc888wxZ6cZJIQE0m005BT0qB0EgtqlyAPwWlDjHZYW/z8EqWhvJfzAzwz3Hgec4+PmBA4Xn3Drgvl+FzQHwqakpHkURgiBAs9mU0/KjsirGyMVMLJBfmd3LvWt2BtlqBDLqtaI8g9YPZlmUnVK6LIFWqyX3C4itLln2fR9hGHZJQFgDKV7s0yL/HeNPkc0h7Hvfc1ie0Gm329A0DeVyWUqgXC5Lt+9lsV+gXC5DdRwHuq7LlRO6rstNy70sNjAbhtGVZs4iwPVY/fL4XnsTbOh9OeewbRuMMTiOA9u2kSQJHMdBuVwu5Gq1ijiO4TgO1KK1M2JTQT8WLlcul8ee/dUyG6hUVe00SGOY2EaTjVAABnJ2zdN7tn3e0HUkYvu8piFcWnl+wbfPN5tN6LoOTdPgeV6OxV6ALIula0VMKZUbGAWL2dgiBiB3m3DOC1nsEslyqVQCY6yQxaapLNu2jTiOc6wOW0rWTwJZFucP2p8jXLSXh7lrv2RMbMgqOmeY22eZ2rbdtYZWLCPv5TRN0W63c8wYQxAEksXeniwX1bxt23LrmuA4jnMchiEYYzkOgkByu91GmqY5FuP/vSz+kxXbtvEfwITwAX3FN6kAAAAASUVORK5CYII=" preserveAspectRatio="xMidYMid meet">
		<animateTransform attributeName="transform" type="translate" calcMode="linear"
			dur="40300ms" repeatCount="indefinite"
			keyTimes="0;0.0025;0.005;0.0075;0.01;0.0124;0.0149;0.0174;0.0299;0.0323;0.0348;0.0373;0.0398;0.0423;0.0448;0.0473;0.0498;0.0522;0.0547;0.0572;0.0597;0.0622;0.0647;0.0672;0.0697;0.0721;0.0746;0.0896;0.092;0.0945;0.097;0.0995;0.102;0.1045;0.107;0.1095;0.1244;0.1269;0.1294;0.1318;0.1418;0.1443;0.1468;0.1493;0.1517;0.1542;0.1567;0.1592;0.1617;0.1766;0.1791;0.1816;0.1841;0.1866;0.1891;0.1915;0.194;0.1965;0.204;0.2065;0.209;0.2114;0.2139;0.2164;0.2189;0.2214;0.2239;0.2264;0.2289;0.2313;0.2338;0.2363;0.2388;0.2413;0.2438;0.2463;0.2488;0.2512;0.2537;0.2562;0.2587;0.2612;0.2637;0.2662;0.2687;0.2711;0.2736;0.2886;0.291;0.2935;0.3134;0.3159;0.3184;0.3333;0.3358;0.3383;0.3408;0.3433;0.3458;0.3483;0.3507;0.3532;0.3557;0.3582;0.3607;0.3632;0.3657;0.3682;0.3706;0.3731;0.3756;0.3781;0.3806;0.3831;0.3856;0.3881;0.3905;0.393;0.3955;0.398;0.4005;0.403;0.4055;0.408;0.4104;0.4129;0.4154;0.4179;0.4204;0.4229;0.4254;0.4279;0.4303;0.4328;0.4353;0.4378;0.4403;0.4428;0.4453;0.4478;0.4502;0.4527;0.4552;0.4577;0.4602;0.4627;0.4652;0.4677;0.4701;0.4726;0.4751;0.4776;0.4801;0.4826;0.4851;0.4876;0.49;0.4925;0.495;0.4975;0.5;0.5025;0.505;0.5075;0.51;0.5124;0.5149;0.5174;0.5199;0.5224;0.5249;0.5274;0.5299;0.5323;0.5348;0.5373;0.5398;0.5423;0.5448;0.5473;0.5498;0.5522;0.5547;0.5572;0.5697;0.5721;0.5746;0.5771;0.5796;0.5821;0.5846;0.5871;0.5896;0.592;0.5945;0.597;0.5995;0.602;0.6045;0.607;0.6095;0.6119;0.6144;0.6169;0.6194;0.6219;0.6244;0.6269;0.6294;0.6318;0.6343;0.6368;0.6393;0.6418;0.6443;0.6517;0.6542;0.6567;0.6592;0.6617;0.6642;0.6667;0.6692;0.6716;0.6741;0.6766;0.6791;0.6816;0.6841;0.6866;0.6891;0.6915;0.694;0.6965;0.699;0.7015;0.704;0.7065;0.709;0.7114;0.7139;0.7164;0.7189;0.7214;0.7239;0.7264;0.7438;0.7463;0.7488;0.7512;0.7537;0.7562;0.7587;0.7612;0.7637;0.7662;0.7687;0.7711;0.7736;0.7761;0.7786;0.7811;0.7836;0.7861;0.7886;0.791;0.7935;0.796;0.7985;0.801;0.8035;0.806;0.8085;0.8109;0.8134;0.8159;0.8184;0.8209;0.8234;0.8259;0.8284;0.8308;0.8333;0.8358;0.8383;0.8408;0.8433;0.8458;0.8483;0.8507;0.8532;0.8557;0.8582;0.8607;0.8632;0.8657;0.8682;0.8706;0.8731;0.8756;0.8781;0.8806;0.8831;0.8856;0.8881;0.8905;0.893;0.8955;0.898;0.9005;0.903;0.9055;0.908;0.9104;0.9129;0.9154;0.9179;0.9204;0.9229;0.9254;0.9279;0.9303;0.9328;0.9353;0.9378;0.9403;0.9428;0.9453;0.9478;0.9502;0.9527;0.9552;0.9577;0.9602;0.9627;0.9652;0.9677;0.9975;1"
			values="574.2,246.0;565.4,246.0;556.6,246.0;547.8,246.0;539.0,246.0;530.2,246.0;521.4,246.0;517.0,246.0;517.0,246.0;525.8,246.0;534.6,246.0;543.4,246.0;552.2,246.0;561.0,246.0;569.8,246.0;578.6,246.0;587.4,246.0;596.2,246.0;605.0,246.0;613.8,246.0;622.6,246.0;631.4,246.0;640.2,246.0;649.0,246.0;657.8,246.0;666.6,246.0;671.0,246.0;671.0,246.0;679.8,246.0;688.6,246.0;697.4,246.0;706.2,246.0;715.0,246.0;723.8,246.0;732.6,246.0;737.0,246.0;737.0,246.0;745.8,246.0;754.6,246.0;759.0,246.0;759.0,246.0;767.8,246.0;776.6,246.0;785.4,246.0;794.2,246.0;803.0,246.0;811.8,246.0;820.6,246.0;825.0,246.0;825.0,246.0;833.8,246.0;842.6,246.0;851.4,246.0;860.2,246.0;869.0,246.0;877.8,246.0;886.6,246.0;891.0,246.0;891.0,246.0;899.8,246.0;908.6,246.0;917.4,246.0;926.2,246.0;935.0,246.0;943.8,246.0;952.6,246.0;961.4,246.0;970.2,246.0;979.0,246.0;987.8,246.0;996.6,246.0;1005.4,246.0;1014.2,246.0;1023.0,246.0;1031.8,246.0;1040.6,246.0;1049.4,246.0;1058.2,246.0;1067.0,246.0;1075.8,246.0;1084.6,246.0;1093.4,246.0;1102.2,246.0;1111.0,246.0;1119.8,246.0;1128.6,246.0;1133.0,246.0;1133.0,246.0;1141.8,246.0;1148.4,246.0;1148.4,246.0;1139.6,246.0;1133.0,246.0;1133.0,246.0;1124.2,246.0;1115.4,246.0;1106.6,246.0;1097.8,246.0;1089.0,246.0;1080.2,246.0;1071.4,246.0;1062.6,246.0;1053.8,246.0;1045.0,246.0;1036.2,246.0;1027.4,246.0;1018.6,246.0;1009.8,246.0;1001.0,246.0;992.2,246.0;983.4,246.0;974.6,246.0;965.8,246.0;957.0,246.0;948.2,246.0;939.4,246.0;930.6,246.0;921.8,246.0;913.0,246.0;904.2,246.0;895.4,246.0;886.6,246.0;877.8,246.0;869.0,246.0;860.2,246.0;851.4,246.0;842.6,246.0;833.8,246.0;825.0,246.0;816.2,246.0;807.4,246.0;798.6,246.0;789.8,246.0;781.0,246.0;772.2,246.0;763.4,246.0;754.6,246.0;745.8,246.0;737.0,246.0;728.2,246.0;719.4,246.0;710.6,246.0;701.8,246.0;693.0,246.0;684.2,246.0;675.4,246.0;666.6,246.0;657.8,246.0;649.0,246.0;640.2,246.0;631.4,246.0;622.6,246.0;613.8,246.0;605.0,246.0;596.2,246.0;587.4,246.0;578.6,246.0;569.8,246.0;561.0,246.0;552.2,246.0;543.4,246.0;534.6,246.0;525.8,246.0;517.0,246.0;508.2,246.0;499.4,246.0;490.6,246.0;481.8,246.0;473.0,246.0;464.2,246.0;455.4,246.0;446.6,246.0;437.8,246.0;429.0,246.0;420.2,246.0;411.4,246.0;402.6,246.0;393.8,246.0;385.0,246.0;376.2,246.0;367.4,246.0;358.6,246.0;349.8,246.0;341.0,246.0;341.0,246.0;332.2,246.0;323.4,246.0;314.6,246.0;305.8,246.0;297.0,246.0;288.2,246.0;279.4,246.0;270.6,246.0;261.8,246.0;253.0,246.0;244.2,246.0;235.4,246.0;226.6,246.0;217.8,246.0;209.0,246.0;200.2,246.0;191.4,246.0;182.6,246.0;173.8,246.0;165.0,246.0;156.2,246.0;147.4,246.0;138.6,246.0;129.8,246.0;121.0,246.0;112.2,246.0;103.4,246.0;94.6,246.0;85.8,246.0;77.0,246.0;77.0,246.0;85.8,246.0;94.6,246.0;103.4,246.0;112.2,246.0;121.0,246.0;129.8,246.0;138.6,246.0;147.4,246.0;156.2,246.0;165.0,246.0;173.8,246.0;182.6,246.0;191.4,246.0;200.2,246.0;209.0,246.0;217.8,246.0;226.6,246.0;235.4,246.0;244.2,246.0;253.0,246.0;261.8,246.0;270.6,246.0;279.4,246.0;288.2,246.0;297.0,246.0;305.8,246.0;314.6,246.0;323.4,246.0;332.2,246.0;341.0,246.0;341.0,246.0;349.8,246.0;358.6,246.0;367.4,246.0;376.2,246.0;385.0,246.0;393.8,246.0;402.6,246.0;411.4,246.0;420.2,246.0;429.0,246.0;437.8,246.0;446.6,246.0;455.4,246.0;464.2,246.0;473.0,246.0;481.8,246.0;490.6,246.0;499.4,246.0;508.2,246.0;517.0,246.0;525.8,246.0;534.6,246.0;543.4,246.0;552.2,246.0;561.0,246.0;569.8,246.0;578.6,246.0;587.4,246.0;596.2,246.0;605.0,246.0;613.8,246.0;622.6,246.0;631.4,246.0;640.2,246.0;649.0,246.0;657.8,246.0;666.6,246.0;675.4,246.0;684.2,246.0;693.0,246.0;701.8,246.0;710.6,246.0;719.4,246.0;728.2,246.0;737.0,246.0;745.8,246.0;754.6,246.0;763.4,246.0;772.2,246.0;781.0,246.0;789.8,246.0;798.6,246.0;807.4,246.0;816.2,246.0;825.0,246.0;833.8,246.0;842.6,246.0;851.4,246.0;860.2,246.0;869.0,246.0;877.8,246.0;886.6,246.0;895.4,246.0;904.2,246.0;913.0,246.0;921.8,246.0;930.6,246.0;939.4,246.0;948.2,246.0;957.0,246.0;965.8,246.0;974.6,246.0;983.4,246.0;992.2,246.0;1001.0,246.0;1009.8,246.0;1018.6,246.0;1027.4,246.0;1036.2,246.0;1045.0,246.0;1053.8,246.0;1062.6,246.0;1071.4,246.0;1080.2,246.0;1089.0,246.0;1097.8,246.0;1106.6,246.0;1115.4,246.0;1124.2,246.0;1133.0,246.0;1133.0,246.0;1124.2,246.0"/>
	</image></svg>
    </div>

    <!-- bottom HUD bar -->
    <div style="background:#0a0a0a;border-top:1px solid #1a1a1a;padding:6px 14px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:10px;color:var(--muted);letter-spacing:2px;">PILOT: ANURAG CHOWDHURY // ML ENGINEER</span>
      <span style="font-size:10px;color:var(--muted);letter-spacing:2px;" id="arcade-commit-count">LOADING COMMITS...</span>
      <a href="https://github.com/AnuragChowdhury" target="_blank" style="font-size:10px;color:var(--orange);letter-spacing:2px;text-decoration:none;">GITHUB ↗</a>
    </div>
  </div>

  <!-- stats below the game -->
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:16px;">
    <div class="card" style="text-align:center;">
      <div class="card-metric" style="font-size:18px;">🎰</div>
      <div class="card-body">PlayerPulse<br><span style="color:var(--gold);">1M+ spins/sec</span></div>
    </div>
    <div class="card" style="text-align:center;">
      <div class="card-metric" style="font-size:18px;">🛡️</div>
      <div class="card-body">SentinelX<br><span style="color:var(--gold);">98% F1-Score</span></div>
    </div>
    <div class="card" style="text-align:center;">
      <div class="card-metric" style="font-size:18px;">⚽</div>
      <div class="card-body">Football Analytics<br><span style="color:var(--gold);">Target: EU 🇳🇱 🇩🇰</span></div>
    </div>
    <div class="card" style="text-align:center;">
      <div class="card-metric" style="font-size:18px;">🧠</div>
      <div class="card-body">MSc AI & ML<br><span style="color:var(--gold);">Christ University</span></div>
    </div>
  </div>

  <div style="margin-top:14px;text-align:center;">
    <a href="https://github.com/AnuragChowdhury/PlayerPulse" target="_blank" class="btn">🎮 PLAYERPULSE ↗</a>
    <a href="https://github.com/AnuragChowdhury/SentinelX-Fraud-Platform" target="_blank" class="btn">🛡️ SENTINELX ↗</a>
    <a href="https://linkedin.com/in/mranuragchowdhury" target="_blank" class="btn">💼 LINKEDIN ↗</a>
  </div>
</section>

<script>
// Set current year in arcade HUD
document.getElementById('arcade-year').textContent = 'YEAR ' + new Date().getFullYear();
// Simulate commit count display
setTimeout(() => {
  const el = document.getElementById('arcade-commit-count');
  if(el) el.textContent = 'COMMIT GRID: ACTIVE';
}, 800);
</script>

</body>
</html>
