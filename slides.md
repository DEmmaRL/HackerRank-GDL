---
theme: default
title: HackerRank Crew GDL
transition: slide-left
drawings:
  persist: false
css: style.css
class: dark-slide
---

<div class="hero-lockup">
  <img src="/logos/logo-light-wide.svg" class="hero-logo" />
  <span class="hero-gdl"><span class="accent">CREW</span> GDL</span>
</div>

<span class="eyebrow">Skills over pedigree</span>

# Cómo construir un Resume de <span class="accent">clase mundial</span>

---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 1</span>

# ¿Qué Es Un Resume?

<!--
Dinámica interactiva de apertura: preguntarle al público "¿qué es un resume para ustedes?"
-->

---
class: dark-slide
---

<span class="eyebrow">¿Qué es un Resume?</span>

# Es un <span class="accent">documento de marketing</span> de ti mismo.

<div class="points">
  <div class="point">
    <span class="label">El producto eres tú</span>
    <p>El hiring manager es el comprador. Dale una razón para <span class="accent">comprarte</span>.</p>
  </div>
  <div class="point">
    <span class="label">Elevator pitch impreso</span>
    <p>15 a 30 segundos en papel: tu información, educación y experiencia en su forma más destilada.</p>
  </div>
</div>

<!--
Énfasis: el resume es ingeniería documental, no un diario. Diseñado para algoritmos y para demostrar profundidad técnica.
-->

---
class: dark-slide
transition: slide-up
---

<span class="eyebrow">Resume vs CV</span>

# Dos documentos,<br>dos <span class="accent">propósitos</span>

<div class="versus">
  <div class="card">
    <span class="label">Resume</span>
    <ul>
      <li>Contenido <strong>selectivo</strong>, no exhaustivo</li>
      <li><strong>1 página</strong> para junior / mid</li>
      <li>Máx. <strong>2 páginas</strong> para Senior o Staff</li>
      <li>Regla: 1 página por cada década de experiencia</li>
      <li>Mercado: EE. UU., Canadá, industria tech</li>
    </ul>
  </div>
  <div class="card">
    <span class="label">CV</span>
    <ul>
      <li>Historial <strong>completo</strong>, varias páginas</li>
      <li>Investigaciones, publicaciones, conferencias</li>
      <li>Para perfiles <strong>académicos y PhDs</strong></li>
      <li>Sin límite de extensión</li>
      <li>Mercado: academia, Europa, sector público</li>
    </ul>
  </div>
</div>
<v-click>
<div class="pt-4">
Esta separación más que nada <span class="accent">es un tecnicismo</span>.
A efectos prácticos, todos usamos el término CV o currículum para referirnos al resume. Pero vale la pena saber que realmente son diferentes. <br>
</div>
</v-click>

---
class: terrain-slide
layout: center
---

<span class="eyebrow">The Hook</span>

<h1 style="font-size: 2.4rem; line-height: 1.2;">
  El objetivo del resume no es<br>conseguir el trabajo.<br>
  Es <span class="accent">asegurar la entrevista</span>.
</h1>

<p class="sub">
  Ningún resume genera una oferta inmediata — ese no es su rol.<br>
  Su único trabajo es abrirte la puerta con los <strong>gatekeepers</strong>.
</p>

<!--
Este es el mensaje más importante de la sección. Dejar que aterrice en silencio antes de continuar.
-->

---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 2</span>

# Pero ¿Qué Contiene Un Resume?

<!--
Dinámica: lluvia de ideas con el público antes de revelar las respuestas. Preguntar "¿qué creen que debe llevar un resume?" y dejar que respondan antes de avanzar.
-->

---
class: dark-slide
---

<span class="eyebrow">Lo que SÍ debe llevar</span>

# El contenido <span class="accent">esencial</span>

<div class="grid-2">
  <div class="item">
    <span class="label">Contacto</span>
    <p>Nombre prominente · Email profesional · LinkedIn · GitHub o portafolio</p>
  </div>
  <div class="item">
    <span class="label">Experiencia</span>
    <p>Orden cronológico inverso. <span class="accent">Logros cuantificables</span>, no listas de tareas. Metodologías STAR / XYZ.</p>
  </div>
  <div class="item">
    <span class="label">Skills técnicos</span>
    <p>Agrupados por categoría: Lenguajes, Frameworks, DBs, Herramientas.</p>
  </div>
  <div class="item">
    <span class="label">Proyectos</span>
    <p>Vitales para juniors. Problema real + tecnología usada + link al código o demo.</p>
  </div>
  <div class="item">
    <span class="label">Educación</span>
    <p>Al inicio si eres recién graduado. Al final si ya tienes experiencia sólida.</p>
  </div>
  <div class="item">
    <span class="label">Formato</span>
    <p>PDF o Docx</p>
  </div>
</div>

<!--
Destacar que los proyectos no son copias de tutoriales — deben resolver un problema real. Para juniors, esta sección puede compensar la falta de experiencia laboral formal.
Pregunta de cierre antes de avanzar: "¿Alguien ha escuchado sobre las metodologías STAR o XYZ?"
-->

---
class: light-slide
---

<span class="eyebrow">A vs B · Ejemplo 1</span>

# ¿Cuál bullet te haría<br><span class="accent">llamar al candidato</span>?

<div class="ab">
  <div class="ab-card" :class="$clicks >= 1 ? 'bad' : ''">
    <span class="ab-tag bad" v-click>✕ Sin metodología</span>
    <p>"Trabajé en el desarrollo de la aplicación móvil del equipo y participé en reuniones de planeación."</p>
  </div>
  <div class="ab-card" :class="$clicks >= 1 ? 'good' : ''">
    <span class="ab-tag good" v-click="1">✓ Con metodología</span>
    <p>"Reduje el tiempo de carga inicial en <span :class="$clicks >= 1 ? 'accent' : ''">40%</span> implementando lazy loading en React Native, impactando a <span :class="$clicks >= 1 ? 'accent' : ''">120k usuarios activos</span>."</p>
  </div>
</div>

<!--
Antes del click: "¿Cuál creen que es mejor? ¿Cuál versión les gusta más?"
Después del click: revelar etiquetas y colores — sin explicar todavía el porqué.
-->

---
class: light-slide
---

<span class="eyebrow">A vs B · Ejemplo 2</span>

# Otro caso: mismo rol,<br><span class="accent">distinto impacto</span>

<div class="ab">
  <div class="ab-card" :class="$clicks >= 1 ? 'bad' : ''">
    <span class="ab-tag bad" v-click>✕ Sin metodología</span>
    <p>"Fui responsable de hacer code reviews y apoyar al equipo de backend con tareas de integración."</p>
  </div>
  <div class="ab-card" :class="$clicks >= 1 ? 'good' : ''">
    <span class="ab-tag good" v-click="1">✓ Con metodología</span>
    <p>"Disminuí el tiempo de integración entre servicios de <span :class="$clicks >= 1 ? 'accent' : ''">3 días a 4 horas</span> estandarizando el proceso de code review e introduciendo GitHub Actions en un equipo de <span :class="$clicks >= 1 ? 'accent' : ''">8 ingenieros</span>."</p>
  </div>
</div>

<!--
Mismo ritual: dejar que el público elija primero.
Al revelar: "¿Qué tienen en común los bullets del lado derecho?" — guiar hacia acción + métrica + contexto. Eso es exactamente STAR y XYZ.
-->

---
class: dark-slide
transition: fade
---

<span class="eyebrow">Experiencia · Metodologías</span>

# ¿Cómo se escribe un<br>bullet de <span class="accent">impacto</span>?

<div class="methods">
  <div class="method">
    <div class="method-name">STAR</div>
    <div class="method-formula">
      <span>Situation</span><span class="sep">→</span>
      <span>Task</span><span class="sep">→</span>
      <span>Action</span><span class="sep">→</span>
      <span class="accent">Result</span>
    </div>
    <p>Describe el contexto, tu responsabilidad, lo que hiciste y el resultado obtenido. Muy usado en entrevistas conductuales.</p>
  </div>
  <div class="method">
    <div class="method-name">XYZ <span style="font-size:0.6rem; opacity:0.6">· Google</span></div>
    <div class="method-formula mono">
      Accomplished <span class="accent">X</span>, measured by <span class="accent">Y</span>, by doing <span class="accent">Z</span>
    </div>
    <p>El estándar de Google. Fuerza a cuantificar el impacto antes de describir la acción.</p>
  </div>
</div>

<div class="example">
  <span class="label">Ejemplo XYZ</span>
  <p class="bad">✕ &nbsp;"Desarrollé features para la app móvil del equipo."</p>
  <p>"✓ &nbsp;Reduje el tiempo de carga inicial en <span class="accent">40%</span> implementando lazy loading y code splitting en React Native, impactando a <span class="accent">120k usuarios activos</span>."</p>
</div>

<!--
El ejemplo es la parte más poderosa — leer ambas versiones en voz alta para que el contraste sea obvio. Preguntar al público cuál los haría llamar al candidato.
-->

---
class: dark-slide
---

<span class="eyebrow">El Filtro de Ruido</span>

# Lo que <span class="accent">NO</span> debe llevar

<div class="noise-grid">
  <div class="noise-item">
    <span class="no">✕</span>
    <div>
      <strong>Fotografías</strong>
      <p>Abre la puerta a sesgos inconscientes. En EE. UU. está estrictamente desaconsejado.</p>
    </div>
  </div>
  <div class="noise-item">
    <span class="no">✕</span>
    <div>
      <strong>Dirección física</strong>
      <p>Las empresas tienen sesgo hacia candidatos locales. Elimínala para no quedar fuera antes de empezar.</p>
    </div>
  </div>
  <div class="noise-item">
    <span class="no">✕</span>
    <div>
      <strong>Hobbies y datos personales</strong>
      <p>Edad, género, estado civil, pasatiempos. Si el espacio es limitado, son los primeros en irse.</p>
    </div>
  </div>
  <div class="noise-item">
    <span class="no">✕</span>
  </div>
  <div class="noise-item">
    <span class="no">✕</span>
    <div>
      <strong>Buzzwords vacíos</strong>
      <p>"Ninja", "Gurú", "Rockstar". Desperdicio de espacio que genera rechazo en líderes técnicos.</p>
    </div>
  </div>
</div>

<!--
El punto de la dirección física suele sorprender al público — es un sesgo real y documentado. Detenerse aquí para que aterrice.
-->

---
class: terrain-slide
layout: center
---

<span class="eyebrow">Jane Heifetz · Harvard Business Review</span>

<h1 style="font-size: 2rem; line-height: 1.4; max-width: 38rem;">
  "Un resume es un cuerpo de contenido <span class="accent">muy selectivo</span>. No está destinado a ser exhaustivo. Si no contribuye a convencer al gerente de contratación de que hable contigo, entonces <span class="accent">quítalo</span>."
</h1>

<!--
Dejar la cita sola en pantalla. No agregar nada más — el silencio aquí es parte del mensaje.
-->
