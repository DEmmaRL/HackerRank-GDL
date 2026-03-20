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
class: dark-slide
layout: center
transition: fade
---

<span class="eyebrow">Eye-Tracking Study · The Ladders</span>

<h1 style="font-size: 2.8rem; line-height: 1.1;">
  Los reclutadores deciden en<br><span class="accent">6 segundos</span>.
</h1>

<p class="sub">
  Un estudio de seguimiento ocular demostró que el <strong>80% del tiempo visual</strong> se concentra en solo 6 puntos de datos:<br>
  nombre, cargo actual, fechas, cargo anterior y educación.
</p>

<!--
Dato de impacto para cerrar la Sección 1. Dejar que aterrice antes de avanzar.
Nick Singh (ex-Google/Facebook): "Debes lograr que el reclutador llegue al 'Sí' en 15 segundos. Tu resume debe ser comprensible para una persona no técnica en ese tiempo."
-->

---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 2</span>

# El Esqueleto del Resume Tech

<!--
Dinámica: lluvia de ideas con el público antes de revelar las respuestas. Preguntar "¿qué creen que debe llevar un resume?" y dejar que respondan antes de avanzar.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Las 5 Secciones Clave</span>

# Un resume se <span class="accent">escanea</span>.

<div class="skeleton-layout">
  <div class="resume-skeleton vt-skeleton">
    <div class="rs-block"><span class="rs-title">Contacto</span><div class="rs-lines"><div class="rs-line" style="width:70%"></div><div class="rs-line" style="width:50%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Technical Skills</span><div class="rs-lines"><div class="rs-line" style="width:90%"></div><div class="rs-line" style="width:75%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Experience</span><div class="rs-lines"><div class="rs-line"></div><div class="rs-line" style="width:85%"></div><div class="rs-line" style="width:60%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Projects</span><div class="rs-lines"><div class="rs-line" style="width:80%"></div><div class="rs-line" style="width:65%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Education</span><div class="rs-lines"><div class="rs-line" style="width:55%"></div></div></div>
  </div>
  <div class="skeleton-detail">
    <p>La información se presenta de <span class="accent">arriba a abajo</span> en orden de relevancia para el reclutador técnico.</p>
    <p style="opacity:0.6; font-size: var(--text-sm);">Este es el orden base. Más adelante veremos cómo cambia según tu seniority.</p>
  </div>
</div>

<!--
Introducir el concepto de escaneo visual. El resume no es narrativa lineal — es una jerarquía de información.
Señalar el skeleton de izquierda mientras se explica cada bloque.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Sección 1 del Resume</span>

# <span class="accent">Contacto</span> e Información de Cabecera

<div class="skeleton-layout">
  <div class="resume-skeleton vt-skeleton">
    <div class="rs-block active"><span class="rs-title">Contacto</span><div class="rs-lines"><div class="rs-line" style="width:70%"></div><div class="rs-line" style="width:50%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Technical Skills</span><div class="rs-lines"><div class="rs-line" style="width:90%"></div><div class="rs-line" style="width:75%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Experience</span><div class="rs-lines"><div class="rs-line"></div><div class="rs-line" style="width:85%"></div><div class="rs-line" style="width:60%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Projects</span><div class="rs-lines"><div class="rs-line" style="width:80%"></div><div class="rs-line" style="width:65%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Education</span><div class="rs-lines"><div class="rs-line" style="width:55%"></div></div></div>
  </div>
  <div class="skeleton-detail">
    <span class="label">Qué incluir</span>
    <ul>
      <li>Nombre completo prominente</li>
      <li>Ciudad / Estado <span style="opacity:0.5">(no dirección completa)</span></li>
      <li>Email profesional · Teléfono</li>
      <li>LinkedIn · <span class="accent">GitHub o portafolio</span></li>
    </ul>
    <div class="example" style="margin-top:0.8rem">
      <span class="label">Por qué GitHub es obligatorio</span>
      <p>"Los hiring managers revisarán tu GitHub para ver si realmente programas. Estos enlaces no son opcionales."</p>
    </div>
  </div>
</div>

<!--
Énfasis en GitHub: para estudiantes de ingeniería, un GitHub activo puede compensar falta de experiencia laboral formal.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Sección 2 del Resume</span>

# <span class="accent">Technical Skills</span>

<div class="skeleton-layout">
  <div class="resume-skeleton vt-skeleton">
    <div class="rs-block"><span class="rs-title">Contacto</span><div class="rs-lines"><div class="rs-line" style="width:70%"></div><div class="rs-line" style="width:50%"></div></div></div>
    <div class="rs-block active"><span class="rs-title">Technical Skills</span><div class="rs-lines"><div class="rs-line" style="width:90%"></div><div class="rs-line" style="width:75%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Experience</span><div class="rs-lines"><div class="rs-line"></div><div class="rs-line" style="width:85%"></div><div class="rs-line" style="width:60%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Projects</span><div class="rs-lines"><div class="rs-line" style="width:80%"></div><div class="rs-line" style="width:65%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Education</span><div class="rs-lines"><div class="rs-line" style="width:55%"></div></div></div>
  </div>
  <div class="skeleton-detail">
    <span class="label">Va cerca de la parte superior</span>
    <p>El reclutador técnico valida tu perfil en los primeros segundos. Las skills deben ser visibles de inmediato.</p>
    <span class="label" style="margin-top:0.8rem">Cómo estructurarlo</span>
    <ul>
      <li><strong>Lenguajes:</strong> Python, JavaScript, Java</li>
      <li><strong>Frameworks:</strong> React, Node.js, Spring</li>
      <li><strong>Bases de datos:</strong> PostgreSQL, MongoDB</li>
      <li><strong>Herramientas:</strong> AWS, Docker, Git</li>
    </ul>
    <p style="margin-top:0.6rem; opacity:0.6">Sin barras de progreso ni calificaciones — métricas arbitrarias que no significan nada para un ingeniero.</p>
  </div>
</div>

<!--
A vs B de skills viene después: barras de progreso vs categorización por dominio.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Sección 3 del Resume</span>

# <span class="accent">Work Experience</span>

<div class="skeleton-layout">
  <div class="resume-skeleton vt-skeleton">
    <div class="rs-block"><span class="rs-title">Contacto</span><div class="rs-lines"><div class="rs-line" style="width:70%"></div><div class="rs-line" style="width:50%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Technical Skills</span><div class="rs-lines"><div class="rs-line" style="width:90%"></div><div class="rs-line" style="width:75%"></div></div></div>
    <div class="rs-block active"><span class="rs-title">Experience</span><div class="rs-lines"><div class="rs-line"></div><div class="rs-line" style="width:85%"></div><div class="rs-line" style="width:60%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Projects</span><div class="rs-lines"><div class="rs-line" style="width:80%"></div><div class="rs-line" style="width:65%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Education</span><div class="rs-lines"><div class="rs-line" style="width:55%"></div></div></div>
  </div>
  <div class="skeleton-detail">
    <span class="label">El núcleo del documento</span>
    <p>Orden cronológico inverso. Cada puesto: <span class="accent">3 a 5 bullets</span> enfocados en logros y métricas.</p>
    <div class="example" style="margin-top:0.8rem">
      <span class="label">La regla del 95%</span>
      <p>El 95% del contenido debe enfocarse en <span class="accent">resultados</span>, no en responsabilidades. Los bullets de impacto se construyen con STAR y XYZ — los veremos en detalle en la siguiente sección.</p>
    </div>
  </div>
</div>

<!--
No profundizar aquí en STAR/XYZ — solo mencionar que viene. El detalle está en la Sección 3 de la presentación.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Sección 4 del Resume</span>

# <span class="accent">Projects</span>

<div class="skeleton-layout">
  <div class="resume-skeleton vt-skeleton">
    <div class="rs-block"><span class="rs-title">Contacto</span><div class="rs-lines"><div class="rs-line" style="width:70%"></div><div class="rs-line" style="width:50%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Technical Skills</span><div class="rs-lines"><div class="rs-line" style="width:90%"></div><div class="rs-line" style="width:75%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Experience</span><div class="rs-lines"><div class="rs-line"></div><div class="rs-line" style="width:85%"></div><div class="rs-line" style="width:60%"></div></div></div>
    <div class="rs-block active"><span class="rs-title">Projects</span><div class="rs-lines"><div class="rs-line" style="width:80%"></div><div class="rs-line" style="width:65%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Education</span><div class="rs-lines"><div class="rs-line" style="width:55%"></div></div></div>
  </div>
  <div class="skeleton-detail">
    <span class="label">La sección más importante para juniors</span>
    <p>Para estudiantes o perfiles junior, esta sección tiene <span class="accent">más peso que la experiencia laboral</span>.</p>
    <span class="label" style="margin-top:0.8rem">Cada proyecto debe incluir</span>
    <ul>
      <li>Nombre del proyecto</li>
      <li>Una línea de descripción del problema que resuelve</li>
      <li>Stack tecnológico usado</li>
      <li><span class="accent">Link al repo o demo en vivo</span></li>
    </ul>
    <p style="margin-top:0.6rem; opacity:0.75">"Esta sección separa a los candidatos que construyen cosas de los que solo hablan de construirlas."</p>
  </div>
</div>

<!--
Énfasis para la audiencia: si están en CUCEI y no tienen experiencia laboral, sus proyectos son su carta de presentación más fuerte.
No copias de tutoriales — proyectos que resuelven un problema real.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Sección 5 del Resume</span>

# <span class="accent">Education</span>

<div class="skeleton-layout">
  <div class="resume-skeleton vt-skeleton">
    <div class="rs-block"><span class="rs-title">Contacto</span><div class="rs-lines"><div class="rs-line" style="width:70%"></div><div class="rs-line" style="width:50%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Technical Skills</span><div class="rs-lines"><div class="rs-line" style="width:90%"></div><div class="rs-line" style="width:75%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Experience</span><div class="rs-lines"><div class="rs-line"></div><div class="rs-line" style="width:85%"></div><div class="rs-line" style="width:60%"></div></div></div>
    <div class="rs-block"><span class="rs-title">Projects</span><div class="rs-lines"><div class="rs-line" style="width:80%"></div><div class="rs-line" style="width:65%"></div></div></div>
    <div class="rs-block active"><span class="rs-title">Education</span><div class="rs-lines"><div class="rs-line" style="width:55%"></div></div></div>
  </div>
  <div class="skeleton-detail">
    <span class="label">Mantenlo breve</span>
    <ul>
      <li>Universidad · Título · Año de graduación</li>
      <li>GPA solo si es <span class="accent">> 3.5</span> y te graduaste en los últimos 2 años</li>
    </ul>
    <div class="example" style="margin-top:0.8rem">
      <span class="label">La regla de posición</span>
      <p>Si eres recién graduado → va <span class="accent">arriba</span>, justo después del contacto.<br>
      Si ya tienes experiencia sólida → va <span class="accent">al final</span>.<br>
      Después de tu primer trabajo, a nadie le importa tu promedio.</p>
    </div>
  </div>
</div>

<!--
Para la audiencia de CUCEI: si están en los últimos semestres o recién graduados, la educación va arriba. Eso cambia en cuanto consigan su primer trabajo real.
-->

---
class: dark-slide
---

<span class="eyebrow">El Orden Dinámico</span>

# El esqueleto cambia según<br>tu <span class="accent">seniority</span>

<div class="seniority-grid">
  <div class="seniority-col">
    <span class="label">Junior / Recién Graduado</span>
    <div class="seniority-item highlight"><span class="s-num">01</span> Contacto</div>
    <div class="seniority-item highlight"><span class="s-num">02</span> <span class="accent">Educación</span> ← sube</div>
    <div class="seniority-item highlight"><span class="s-num">03</span> <span class="accent">Proyectos</span> ← sube</div>
    <div class="seniority-item"><span class="s-num">04</span> Technical Skills</div>
    <div class="seniority-item"><span class="s-num">05</span> Experience</div>
  </div>
  <div class="seniority-col">
    <span class="label">Mid / Senior</span>
    <div class="seniority-item"><span class="s-num">01</span> Contacto</div>
    <div class="seniority-item highlight"><span class="s-num">02</span> <span class="accent">Experience</span> ← sube</div>
    <div class="seniority-item"><span class="s-num">03</span> Technical Skills</div>
    <div class="seniority-item"><span class="s-num">04</span> Projects <span style="opacity:0.5; font-size:0.7rem">(se reduce)</span></div>
    <div class="seniority-item highlight"><span class="s-num">05</span> <span class="accent">Education</span> ← baja</div>
  </div>
</div>

<p class="sub" style="margin-top: var(--gap-md)">
  "Rompe el orden cuando sea necesario para destacar. Pon tus puntos de venta más fuertes en la parte superior." — Nick Singh
</p>

<!--
Esta slide es especialmente relevante para la audiencia: la mayoría son juniors o están por graduarse.
La regla de Nick Singh: el orden no es dogma, es estrategia.
-->

---
class: terrain-slide
layout: center
---

<span class="eyebrow">Farah Sharghi · Ex-Reclutadora Google</span>

<h1 style="font-size: 1.9rem; line-height: 1.4; max-width: 40rem;">
  "En reclutamiento, el silencio equivale a riesgo. Tu resume debe explicar brevemente las cosas riesgosas por adelantado: un año sabático, un cambio de carrera o un despido."
</h1>

<p class="sub">
  Un resumen de 1–2 líneas solo vale la pena cuando necesitas <span class="accent">explicar un riesgo</span>.<br>
  Si no hay nada que aclarar, ese espacio es mejor usarlo en experiencia o proyectos.
</p>

<!--
Cerrar la sección con el debate del Summary. La postura: los resúmenes genéricos se saltan. Solo úsalo para explicar transiciones o gaps.
-->

---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 3</span>

# Experiencia y la Fórmula de Oro

<!--
Transición: "Ya sabemos qué secciones tiene un resume. Ahora la pregunta es: ¿cómo se escribe la más importante?"
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
