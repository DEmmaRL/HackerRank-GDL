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

# Evolución de la Entrevista Técnica: <br>¿Qué estamos evaluando hoy?

<!--
Lo que la audiencia va a aprender: ¿Por qué ya no basta con saber programar para pasar una entrevista?
-->

---
class: dark-slide
---

<span class="eyebrow">¿Qué es realmente?</span>

# ¿Qué es una <span class="accent">Technical Interview</span>?

<div class="points">
  <div class="point">
    <span class="label">Definición formal</span>
    <p>Proceso de contratación estructurado que utilizan las empresas para roles tecnológicos: desarrolladores, científicos de datos, DevOps, etc.</p>
  </div>
  <div class="point" v-click>
    <span class="label">Una simulación de trabajo real</span>
    <p>La empresa busca crear una <span class="accent">simulación de cómo sería trabajar contigo</span> todos los días. Evalúan cómo desglosas un problema complejo, tu conocimiento de algoritmos, toma de decisiones y cómo te comunicas bajo presión.</p>
  </div>
</div>

<!--
Énfasis: en la universidad te evalúan para ver si llegas a la respuesta correcta. Aquí evalúan el proceso.
-->

---
class: dark-slide
---

<span class="eyebrow">Contexto histórico · Era 1 · 1990–2005</span>

# La Era de los <span class="accent">Acertijos</span>

<div class="points">
  <div class="point">
    <span class="label">El mito de la genialidad</span>
    <p>Influenciado por Microsoft y Google, te encerraban en una sala y preguntaban: "¿Cuántas pelotas de golf caben en un Boeing 747?" o "¿Por qué las tapas de las alcantarillas son redondas?" La creencia: si resuelves esto, eres un genio creativo.</p>
  </div>
  <div class="point" v-click>
    <span class="label">El dato duro</span>
    <p>Google analizó sus propios datos de contratación y descubrió algo vergonzoso: la correlación entre resolver acertijos y ser un buen empleado era <span class="accent">cero</span>. Laszlo Bock (SVP People Ops) admitió en The New York Times que eran "una completa pérdida de tiempo" y servían principalmente para hacer que el entrevistador se sintiera inteligente.</p>
  </div>
</div>

<!--
Fun fact: la pregunta del blender de Google aparece en la película "The Internship" (2013) y en un video de Veritasium. "You're shrunken to the size of a nickel and dropped into a blender. What do you do?"
-->

---
class: dark-slide
---

<span class="eyebrow">Contexto histórico · Era 2 · 2006–2018</span>

# La Era de la <span class="accent">Pizarra Blanca</span>

<div class="points">
  <div class="point">
    <span class="label">El péndulo al extremo opuesto</span>
    <p>Para corregir los acertijos, la industria comenzó a pedir a los ingenieros que escribieran código de algoritmos complejos <span class="accent">a mano en una pizarra</span>, frente a un panel de jueces.</p>
  </div>
  <div class="point" v-click>
    <span class="label">El dato duro</span>
    <p>Un estudio de la Universidad Estatal de Carolina del Norte y Microsoft Research midió la carga cognitiva con rastreadores oculares. Descubrieron que el rendimiento de un programador se <span class="accent">reduce a la mitad</span> simplemente por el hecho de ser observado.</p>
  </div>
  <div class="point" v-click>
    <span class="label">La conclusión del estudio</span>
    <p>Las empresas no estaban contratando a los mejores programadores, sino a los que mejor toleraban la <span class="accent">ansiedad de desempeño social</span>.</p>
  </div>
</div>

---
class: dark-slide
---

<span class="eyebrow">Contexto histórico · Era 3 · 2019–2023</span>

# La Era del <span class="accent">Grinding</span>

<div class="points">
  <div class="point">
    <span class="label">Las plataformas automatizadas</span>
    <p>Las empresas comenzaron a usar LeetCode y HackerRank para filtrar a millones de candidatos. Esto creó una cultura donde los estudiantes pasaban meses memorizando cientos de patrones algorítmicos abstractos.</p>
  </div>
  <div class="point" v-click>
    <span class="label">El dato duro</span>
    <p>Según el Developer Skills Report de HackerRank 2025, el <span class="accent">62%</span> de los desarrolladores sentía que este proceso no evaluaba su capacidad real para hacer el trabajo, y el <span class="accent">73%</span> reportaba niveles de ansiedad que arruinaban su rendimiento.</p>
  </div>
</div>

---
class: dark-slide
---

<span class="eyebrow">Contexto histórico · Era 4 · 2024–2026</span>

# La Era de la <span class="accent">Colaboración Humano-IA</span>

<div class="points">
  <div class="point">
    <span class="label">Las reglas volvieron a cambiar</span>
    <p>Con la llegada de GitHub Copilot, Cursor y Claude, si un candidato puede resolver el algoritmo de mayor dificultad de LeetCode en 5 segundos usando IA, la memorización de código ya no sirve para evaluar talento.</p>
  </div>
  <div class="point" v-click>
    <span class="label">El nuevo estándar</span>
    <p>La industria pasó de evaluar la sintaxis a evaluar el <span class="accent">Juicio de Ingeniería (Engineering Judgment)</span>: saber qué construir, por qué importa y si el resultado es correcto.</p>
  </div>
</div>

---
class: terrain-slide
layout: center
---

<span class="eyebrow">Vikas Aditya · CEO de HackerEarth, 2026</span>

<h1 style="font-size: 1.7rem; line-height: 1.5; max-width: 44rem;">
  "Las empresas ya no están evaluando la fluidez en la sintaxis; están evaluando el <span class="accent">juicio</span>. En un mundo asistido por IA donde la generación de código se ha comoditizado, el valor reside en saber <span class="accent">qué construir, por qué importa</span> y si el resultado es correcto."
</h1>

---
class: dark-slide
---

<span class="eyebrow">Subtema 2 · Memorización vs. Supervisión</span>

# La <span class="accent">Paradoja</span> de la Productividad con IA

<div class="grid-2">
  <div class="item" v-click>
    <span class="label">El nuevo baseline (2024–2026)</span>
    <p>El <span class="accent">92%</span> de los desarrolladores ya usa IA en su trabajo diario. GitHub Copilot genera el <span class="accent">46%</span> de todo el código escrito.</p>
  </div>
  <div class="item" v-click>
    <span class="label">El cuello de botella cambió</span>
    <p>Escribir código es rápido. Ser ingeniero es más difícil. Los devs pasan un <span class="accent">68% más de tiempo</span> revisando código de IA y un <span class="accent">67% más</span> debuggeando implementaciones complejas.</p>
  </div>
  <div class="item" v-click>
    <span class="label">Lo que ya no impresiona</span>
    <p>Memorizar algoritmos de LeetCode. Una IA lo hace en segundos.</p>
  </div>
  <div class="item" v-click>
    <span class="label">Lo que sí evalúan hoy</span>
    <p><span class="accent">Orquestación:</span> ¿Puedes leer código generado por IA, encontrar el fallo de seguridad, entender si la arquitectura escala y arreglarlo? El código es barato; el entendimiento profundo del sistema es caro.</p>
  </div>
</div>

---
class: dark-slide
---

<span class="eyebrow">Subtema 3 · Startup vs. Big Tech</span>

# Dos mundos, <span class="accent">dos manuales</span> de juego

<div class="versus">
  <div class="card">
    <span class="label">Big Tech · FAANG</span>
    <ul>
      <li>Optimizan para evitar <strong>falsos positivos</strong> — prefieren rechazar a un buen candidato antes que contratar a uno malo</li>
      <li>5–7 rondas: algoritmos complejos, diseño de sistemas para millones de usuarios, rondas conductuales estructuradas</li>
      <li>Un código ineficiente a su escala <span class="accent">cuesta millones</span></li>
    </ul>
  </div>
  <div class="card">
    <span class="label">Startups · Series A–C</span>
    <ul>
      <li>Optimizan para evitar <strong>falsos negativos</strong> — rechazar al ingeniero que lanzaría el producto esta semana puede ser existencial</li>
      <li>2–3 rondas: pruebas prácticas, take-homes, bugs en tiempo real. Rara vez invertirás un árbol binario</li>
      <li>Buscan: <span class="accent">agilidad, versatilidad, mentalidad Full-Stack</span></li>
    </ul>
  </div>
</div>

<!--
Error novato: prepararse igual para cualquier empresa. La tolerancia al error es completamente distinta.
-->

---
class: dark-slide
---

<span class="eyebrow">Cierre · Sección 1</span>

# ¿Por qué ya no basta con <span class="accent">saber programar</span>?

<div class="points">
  <div class="point">
    <span class="label">El dato que lo cambia todo</span>
    <p>Un estudio de Leadership IQ rastreó 20,000 nuevas contrataciones: el <span class="accent">46% fracasa</span> en sus primeros 18 meses.</p>
  </div>
  <div class="point" v-click>
    <span class="label">¿Por qué fracasan?</span>
    <p>El <span class="accent">89%</span> por deficiencias en habilidades blandas: no saber recibir feedback, falta de adaptabilidad, inteligencia emocional. Solo el <span class="accent">11%</span> por falta de habilidades técnicas.</p>
  </div>
  <div class="point" v-click>
    <span class="label">La conclusión de 2026</span>
    <p>El código lo escribe una máquina. La <span class="accent">comunicación técnica, el diseño de arquitecturas escalables y la colaboración bajo ambigüedad</span> son habilidades exclusivamente humanas — y esas te dan el trabajo.</p>
  </div>
</div>

<!--
Transición: "Entonces, si las empresas ya saben que memorizar código no sirve... ¿qué es exactamente lo que te van a pedir que hagas en tu próxima entrevista? Eso es lo que vemos a continuación."
-->

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
