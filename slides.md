---
theme: default
title: The Technical Interview | HackerRank Crew GDL
transition: slide-left
drawings:
  persist: false
class: dark-slide
---

<div class="hero-lockup">
  <img src="/logos/logo-light-wide.svg" class="hero-logo" />
  <span class="hero-gdl"><span class="accent">CREW</span> GDL</span>
</div>

<span class="eyebrow">Diego Rivera · demmarl</span>

# The Technical Interview | <span class="accent">Metodologías, preparación y psicología</span>

<!--
Portada. Esperar a que el público se acomode antes de avanzar.
-->

---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 1</span>

# Título de Sección

---
class: dark-slide
---

<span class="eyebrow">points</span>

# Componente <span class="accent">points</span>

<div class="points">
  <div class="point">
    <span class="label">Label del punto</span>
    <p>Descripción del punto con posible <span class="accent">acento</span> en palabras clave.</p>
  </div>
  <div class="point">
    <span class="label">Otro punto</span>
    <p>Más contenido aquí.</p>
  </div>
</div>

---
class: dark-slide
---

<span class="eyebrow">grid-2 + item</span>

# Componente <span class="accent">grid-2</span>

<div class="grid-2">
  <div class="item">
    <span class="label">Item 1</span>
    <p>Contenido del item con border-left accent.</p>
  </div>
  <div class="item">
    <span class="label">Item 2</span>
    <p>Otro item en la segunda columna.</p>
  </div>
  <div class="item">
    <span class="label">Item 3</span>
    <p>Tercera celda del grid.</p>
  </div>
  <div class="item">
    <span class="label">Item 4</span>
    <p>Cuarta celda del grid.</p>
  </div>
</div>

---
class: dark-slide
---

<span class="eyebrow">versus</span>

# Componente <span class="accent">versus</span>

<div class="versus">
  <div class="card">
    <span class="label">Opción A</span>
    <ul>
      <li>Característica uno</li>
      <li>Característica dos</li>
      <li>Característica tres</li>
    </ul>
  </div>
  <div class="card">
    <span class="label">Opción B</span>
    <ul>
      <li>Característica uno</li>
      <li>Característica dos</li>
      <li>Característica tres</li>
    </ul>
  </div>
</div>

---
class: light-slide
---

<span class="eyebrow">A vs B</span>

# Componente <span class="accent">ab</span> con v-click

<div class="ab">
  <div class="ab-card" :class="$clicks >= 1 ? 'bad' : ''">
    <span class="ab-tag bad" v-click>✕ Opción mala</span>
    <p>Descripción de la opción incorrecta o menos recomendada.</p>
  </div>
  <div class="ab-card" :class="$clicks >= 1 ? 'good' : ''">
    <span class="ab-tag good" v-click="1">✓ Opción buena</span>
    <p>Descripción de la opción correcta con <span :class="$clicks >= 1 ? 'accent' : ''">métrica o dato clave</span>.</p>
  </div>
</div>

---
class: dark-slide
---

<span class="eyebrow">noise-grid</span>

# Componente <span class="accent">noise-grid</span>

<div class="noise-grid">
  <div class="noise-item" v-click>
    <span class="no">✕</span>
    <div>
      <strong>Cosa a evitar</strong>
      <p>Explicación de por qué esto es un problema o antipatrón.</p>
    </div>
  </div>
  <div class="noise-item" v-click>
    <span class="no">✕</span>
    <div>
      <strong>Otra cosa a evitar</strong>
      <p>Más contexto sobre este punto.</p>
    </div>
  </div>
  <div class="noise-item" v-click>
    <span class="no">✕</span>
    <div>
      <strong>Un tercer antipatrón</strong>
      <p>Descripción adicional.</p>
    </div>
  </div>
</div>

---
class: dark-slide
---

<span class="eyebrow">methods</span>

# Componente <span class="accent">methods</span>

<div class="methods">
  <div class="method">
    <div class="method-name">Método A</div>
    <div class="method-formula">
      <span>Paso 1</span><span class="sep">→</span>
      <span>Paso 2</span><span class="sep">→</span>
      <span class="accent">Resultado</span>
    </div>
    <p>Descripción del método y cuándo usarlo.</p>
  </div>
  <div class="method">
    <div class="method-name">Método B</div>
    <div class="method-formula mono">
      Acción <span class="accent">X</span>, medida por <span class="accent">Y</span>, haciendo <span class="accent">Z</span>
    </div>
    <p>Descripción del segundo método.</p>
  </div>
</div>

<div class="example">
  <span class="label">Ejemplo aplicado</span>
  <p>Aquí va un ejemplo concreto usando uno de los métodos anteriores.</p>
</div>

---
class: terrain-slide
layout: center
---

<span class="eyebrow">Cita · Fuente</span>

<h1 style="font-size: 2rem; line-height: 1.4; max-width: 40rem;">
  "Texto de la cita que quieres destacar con <span class="accent">énfasis</span> en la parte más importante."
</h1>

<p class="sub">
  Contexto adicional o explicación de la cita.<br>
  Segunda línea de contexto si es necesario.
</p>

---
class: dark-slide
---

<span class="eyebrow">HackerRank Campus Crew GDL</span>

# Únete

<div class="grid-2" style="margin-top: var(--gap-lg); align-items: start;">
  <div class="points">
    <div class="point">
      <span class="label">La primera comunidad oficial de HackerRank en México</span>
      <p>Un espacio para ingenieros de CUCEI y GDL que quieren crecer, prepararse y conectar con la industria tech.</p>
    </div>
    <div class="point">
      <span class="label">Crea tu cuenta en HackerRank</span>
      <p>Regístrate y selecciona <span class="accent">Universidad de Guadalajara</span>. Empieza a construir tu perfil técnico hoy.</p>
    </div>
    <div class="point">
      <span class="label">Síguenos en Instagram</span>
      <p><span class="accent">@hackerrank.gdl</span> — eventos, recursos y comunidad.</p>
    </div>
    <div class="point">
      <span class="label">Recursos y material de sesiones</span>
      <p>La presentación de hoy, recursos extra y material de sesiones anteriores en <span class="accent">HackerRankCrewGDL.com</span></p>
    </div>
  </div>
  <div style="display: flex; flex-direction: column; align-items: center; gap: var(--gap-md); padding-top: 0.5rem;">
    <img src="/qr-discord.png" style="width:160px;height:160px;border-radius:var(--radius);" />
    <span class="label">Discord · HackerRank Crew GDL</span>
  </div>
</div>

<!--
Pedir que saquen el teléfono para escanear el QR antes de avanzar a la última slide.
-->

---
class: terrain-slide
layout: center
---

<span class="eyebrow">Q&A</span>

<h1 style="font-size: 3rem; line-height: 1.1;">
  ¿Preguntas?
</h1>

<p class="sub">
  <span class="accent">@hackerrank.gdl</span> en Instagram<br>
  hackerrank.com — regístrate y apoyarás a que hagamos más y mejores eventos.
</p>

<!--
Dejar esta slide en pantalla durante toda la sesión de preguntas.
-->
