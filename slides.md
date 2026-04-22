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

<span class="eyebrow" style="color: var(--hr-black)">Introducción</span>

# ¿Qué es una entrevista técnica?

<!--
Establecer el punto de partida: asegurarse de que todos tienen la misma definición antes de entrar al contexto histórico.
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

<span class="eyebrow">Contexto histórico · Era 1 · 1990–2005</span>

# Los <span class="accent">Acertijos</span>

<div class="points">
  <div class="point">
    <span class="label">El mito de la genialidad</span>
    <p>Influenciado por Microsoft y Google, te encerraban en una sala y preguntaban: "¿Cuántas pelotas de golf caben en un Boeing 747?" o "¿Por qué las tapas de las alcantarillas son redondas?" La creencia: si resuelves esto, eres un genio creativo.</p>
  </div>
  <div class="point" v-click>
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

# El <span class="accent">Whiteboard</span>

<div class="points">
  <div class="point">
    <span class="label">El péndulo al extremo opuesto</span>
    <p>Para corregir los acertijos, la industria comenzó a pedir a los ingenieros que escribieran código de algoritmos complejos <span class="accent">a mano en una pizarra</span>, frente a un panel de jueces.</p>
  </div>
  <div class="point" v-click>
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

# El <span class="accent">Grinding</span>

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

# La <span class="accent">Colaboración Humano-IA</span>

<div class="grid-2 mt-8 gap-8 content-between h-72% pb-16">
  <div class="item">
    <span class="label">Las reglas volvieron a cambiar</span>
    <p>El <span class="accent">92%</span> de los devs ya usa IA diariamente. Copilot genera el <span class="accent">46%</span> de todo el código. Si la IA resuelve un problema de Leetcode en 5 segundos, memorizar código ya no evalúa talento.</p>
  </div>
  <div class="item" >
    <span class="label">El cuello de botella cambió</span>
    <p>Los devs pasan <span class="accent">68% más tiempo</span> revisando código de IA y <span class="accent">67% más</span> debuggeando. Escribir código es barato, pero no el entenderlo.</p>
  </div>
  <div class="item" >
    <span class="label">Lo que ya no impresiona</span>
    <p>Memorizar algoritmos. Una IA lo hace en segundos.</p>
  </div>
  <div class="item" >
    <span class="label">El nuevo estándar</span>
    <p>La industria transiciona a evaluarte sobre tu <span class="accent">Juicio de Ingeniería:</span> ¿puedes leer código generado por IA, detectar el fallo, entender si la arquitectura escala y corregirlo?</p>
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

<span class="eyebrow">Subtema 3 · Startup vs. Big Tech</span>

# Dos mundos, <span class="accent">sus diferencias</span>

<div class="versus">
  <div class="card">
    <span class="label">Big Tech</span>
    <ul>
      <li>
        <Popover trigger="click" placement="top">
          Evitan <strong>falsos positivos</strong>, corregir un error de contratación a su escala es sumamente costoso
          <template #content>
            <span class="label">¿Por qué?</span>
            <p>A su escala, un mal hire es carísimo de corregir. Prefieren perder un buen candidato antes que arriesgarse.</p>
            <p class="sub" style="margin-top:0.4rem">Fuente: "The Technical Interview in 2026" (BirJob)</p>
          </template>
        </Popover>
      </li>
      <li>
        <Popover trigger="click" placement="top">
          HackerRank, Leetcode,  diseño de sistemas y rondas conductuales. IA prohibida. Google reintrodujo entrevistas en persona por trampas
          <template #content>
            <span class="label">Desglose</span>
            <p>2–3 rondas de código, diseño de sistemas y conductual. Con IA prohibida, Google volvió a entrevistas presenciales por trampas con IA.</p>
            <p class="sub" style="margin-top:0.4rem">Fuente: Prepfully y Shadecoder (2026)</p>
          </template>
        </Popover>
      </li>
      <li>
        <Popover trigger="click" placement="top">
          Código ineficiente = costos de infraestructura masivos y peor experiencia de usuario
          <template #content>
            <span class="label">El costo real</span>
            <p>A su escala, código ineficiente = más costos en la nube, respuestas lentas y peor UX para cientos de millones de usuarios.</p>
            <p class="sub" style="margin-top:0.4rem">Fuente: "Inside FAANG's Coding Assessment Process" (Shadecoder)</p>
          </template>
        </Popover>
      </li>
    </ul>
  </div>
  <div class="card">
    <span class="label">Startups</span>
    <ul>
      <li>
        <Popover trigger="click" placement="top">
          Evitan <strong>falsos negativos</strong>, rechazar al ingeniero que lanzaría el producto esta semana es un riesgo.
          <template #content>
            <span class="label">¿Por qué?</span>
            <p>En etapa temprana, rechazar al ingeniero que habría lanzado el producto esta semana puede ser existencial para el negocio.</p>
            <p class="sub" style="margin-top:0.4rem">Fuente: "The Technical Interview in 2026" (BirJob)</p>
          </template>
        </Popover>
      </li>
      <li>
        <Popover trigger="click" placement="top">
          <span class="accent">Pruebas prácticas y take-homes</span>. Casi nunca algoritmos abstractos. Muchas esperan que uses Copilot o Cursor
          <template #content>
            <span class="label">Desglose</span>
            <p>Intro call, take-home práctico y fit cultural. Sin LeetCode. Muchas startups esperan que uses Copilot o Cursor durante la entrevista.</p>
            <p class="sub" style="margin-top:0.4rem">Fuente: BirJob y Utkrusht (2026)</p>
          </template>
        </Popover>
      </li>
      <li>
        <Popover trigger="click" placement="top">
          <span class="accent">Ownership end-to-end</span>, sentido de producto y entrega rápida bajo recursos limitados
          <template #content>
            <span class="label">Lo que buscan</span>
            <p>Alguien que sea dueño de una feature de principio a fin: idea, código, deploy. Pragmatismo sobre perfección.</p>
            <p class="sub" style="margin-top:0.4rem">Fuente: Sensei AI (2026)</p>
          </template>
        </Popover>
      </li>
    </ul>
  </div>
</div>

<!--
Error novato: prepararse igual para cualquier empresa. FAANG prueba si puedes aportar valor a un sistema masivo y estructurado; las startups, si puedes contribuir de inmediato y adaptarte a cambios constantes.
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
    <p>El código lo escribe una máquina. La <span class="accent">comunicación técnica, el diseño de arquitecturas escalables y la colaboración bajo ambigüedad</span> son habilidades exclusivamente humanas, y esas te dan el trabajo.</p>
  </div>
</div>

<!--
Transición: "Entonces, si las empresas ya saben que memorizar código no sirve... ¿qué es exactamente lo que te van a pedir que hagas en tu próxima entrevista? Eso es lo que vemos a continuación."
-->

---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 2</span>

# Formatos de Evaluación: <br>¿Cómo navegar cada tipo de prueba?

<!--
Transición: ya sabemos por qué cambió la entrevista. Ahora veamos exactamente qué formatos te vas a encontrar y cómo sobrevivir a cada uno.
-->

---
class: terrain-slide
---

<span class="eyebrow">Formato 1</span>

# Live Coding <span class="accent">&</span> Pair Programming

<div class="grid-2 mt-8 gap-8">
  <div class="points">
    <div class="point">
      <span class="label">El escenario</span>
      <p>Tú, un editor compartido y un ingeniero observando cada tecla que pulsas en tiempo real.</p>
    </div>
    <div class="point">
      <span class="label">Qué evalúan</span>
      <p>No solo si llegas a la respuesta. Evalúan <span class="accent">cómo piensas, cómo te comunicas bajo presión y si es fácil trabajar contigo</span>.</p>
    </div>
  </div>
  <div class="card">
    <span class="label">Recordemos:</span>
    <p style="font-size: 2rem; font-weight: 700; color: var(--hr-terminal); line-height: 1.2; margin: 0.5rem 0;">50%</p>
    <p>El rendimiento de un programador cae a la mitad solo por ser observado. El estrés bloquea la memoria de trabajo, recuerden respirar</p>
    <p class="sub" style="margin-top: 0.5rem">NC State University</p>
  </div>
</div>

<!--
Fuente: "Tech Sector Job Interviews Assess Anxiety, Not Software Skills" (NC State News)
-->

---
class: dark-slide
---

<span class="eyebrow">Formato 1 · Cómo sobrevivir</span>

# <span class="accent">Live Coding:</span> lo que funciona y lo que no

<div class="grid-2 mt-6 gap-8">
  <div class="noise-grid">
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Monólogo continuo</strong>
        <p>Hablar sin parar genera interferencia cognitiva. No puedes pensar, programar y verbalizar con eficiencia al mismo tiempo.</p>
      </div>
    </div>
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Rechazar las pistas</strong>
        <p>Ignorar o resistir una pista del entrevistador señala que no sabes colaborar. <span class="accent"> El entrevistador no es tu enemigo </span> </p>
      </div>
    </div>
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Codificar sin plan</strong>
        <p>Lanzarse a escribir código sin estructurar la lógica primero produce soluciones frágiles y difíciles de explicar.</p>
      </div>
    </div>
  </div>
  <div class="points">
    <div class="point">
      <span class="label">Silencio Estructurado</span>
      <p>Toma una pausa: <span class="accent">"Voy a tomarme un momento para cocinar mi idea"</span> Piensas, verbalizas el plan, luego codificas.</p>
    </div>
    <div class="point">
      <span class="label">Las pistas suman puntos</span>
      <p>Aceptar ayuda demuestra que sabes colaborar, aceptas feedback y que aprovechas que son dos cabezas y no solo una, que es exactamente lo que el Pair Programming evalúa.</p>
    </div>
    <div class="point">
      <span class="label">Habla el "por qué"</span>
      <p>Antes de cada decisión, di en voz alta por qué la tomas.</p>
    </div>
  </div>
</div>

<!--
Fuentes: "Universal Technical Interview Signal Research" · "How To Handle Hints In A Software Engineer Interview Without Failing" (Taro)
-->

---
class: terrain-slide
---

<span class="eyebrow">Formato 2</span>

# Take-home Assignment: El README <span class="accent">importa</span> 

<div class="grid-2 mt-8 gap-8">
  <div class="points">
    <div class="point">
      <span class="label">El escenario</span>
      <p>Construye una pequeña app o API. Tienes entre 2 y 7 días. Sin nadie observando.</p>
    </div>
    <div class="point">
      <span class="label">El error más común</span>
      <p>Pensar que el código que funciona es suficiente. Es solo el <span class="accent">50% de la calificación</span>. La otra mitad es tu madurez técnica.</p>
    </div>
    <p class="sub" style="margin-top: 0.75rem">
      <a href="https://eliya-b.medium.com/make-your-take-home-coding-assignment-stand-out-477f6f1efa81" target="_blank">Make your Take-Home stand out</a> · <a href="https://prepfully.com/interview-guides/software-engineer-interview-rubric-2026" target="_blank">Interview Rubric 2026</a>
      <br>
      <a href="https://github.com/DEmmaRL/lola-challenge" target="_blank">Challenge Example</a>
    </p>
  </div>
  <div class="card">
    <span class="label">Lo que sí o sí debe incluir</span>
    <ul>
      <li>README con instrucciones de instalación, variables de entorno y <span class="accent">decisiones técnicas tomadas</span></li>
      <li>Pruebas unitarias (tests)</li>
      <li>Código limpio y estructura coherente</li>
    </ul>
    
  </div>
</div>

<!--
Fuentes: "Make your Take-Home Coding Assignment stand out" (Elia Bar) · "Software Engineer Interview Rubric 2026" (Prepfully)
-->

---
class: light-slide
---

<span class="eyebrow">Formato 3</span>

# Reverse Debugging: <br>Encontrar la aguja <span class="accent">en el pajar</span>

<div class="grid-2 mt-8 gap-8">
  <div class="points">
    <div class="point">
      <span class="label">El escenario</span>
      <p>Te dan una codebase masiva con un error sutil. Tu trabajo: encontrarlo y arreglarlo. Sin escribir nada desde cero.</p>
    </div>
    <div class="point">
      <span class="label">Por qué lo hacen</span>
      <p>En la vida real, los devs pasan el <span class="accent">41% de su tiempo</span> leyendo y navegando código existente, no escribiéndolo.</p>
    </div>
  </div>
  <div class="points">
    <div class="point">
      <span class="label">Qué evalúan</span>
      <p>Cómo lees logs y stack traces, si usas las herramientas de diagnóstico correctas y si puedes seguir el flujo del programa mentalmente.</p>
    </div>
    <div class="point">
      <span class="label">Trace Tables (prueba de escritorio)</span>
      <p>Si no tienes acceso a un debugger, usa una tabla de rastreo: anota el valor de cada variable en cada paso. Demuestra que entiendes el código, no solo que lo ejecutas. <a href="https://dev.to/alex_hunter_44f4c9ed6671e/how-to-dry-run-code-manually-the-missing-skill-for-coding-interviews-1g7p" target="_blank">Cómo hacerlo</a></p>
    </div>
  </div>
</div>

<!--
Fuentes: "Evaluación Técnica HR-Tech 2026" · "How to Dry Run Code Manually" (DEV Community)
-->

---
class: dark-slide
---

<span class="eyebrow">Formato 4</span>

# ¿Qué es un <span class="accent">Coding Assessment</span>?

<div class="points mt-6">
  <div class="point">
    <span class="label">Definición</span>
    <p>Una prueba técnica automatizada donde resuelves uno o más problemas de programación en un tiempo limitado, dentro de una plataforma como HackerRank o LeetCode. Es el filtro más común antes de hablar con un humano.</p>
  </div>
  <div class="point" v-click>
    <span class="label">¿Qué evalúa?</span>
    <p>Que tu código produzca el resultado correcto para todos los casos de prueba, incluyendo los casos extremos. La plataforma lo verifica de forma automática, sin que nadie lo lea.</p>
  </div>
  <div class="point" v-click>
    <span class="label">¿Cuándo aparece en el proceso?</span>
    <p>Generalmente es la <span class="accent">primera barrera técnica</span>: después de aplicar y antes de cualquier entrevista con el equipo. Puede ser sincrónico (con tiempo corriendo) o asincrónico (tienes días para entregarlo).</p>
  </div>
</div>

<!--
Establecer la definición antes de entrar al debate de LeetCode vs. HackerRank y si "ha muerto" o no.
-->

---
class: dark-slide
---

<span class="eyebrow">Formato 4 · El mito vs. la realidad</span>

# ¿LeetCode <span class="accent">ha muerto</span>?

<div class="ab mt-6">
  <div class="ab-card bad">
    <span class="ab-tag bad">✕ El mito</span>
    <p>La IA ya resuelve cualquier problema de LeetCode en segundos. Estas plataformas ya no se usan y prepararse en ellas es perder el tiempo.</p>
  </div>
  <div class="ab-card good">
    <span class="ab-tag good">✓ La realidad</span>
    <p>Google, Meta y Amazon siguen teniendo rondas algorítmicas. A su escala, un algoritmo <span class="accent">O(n²) en lugar de O(n)</span> no es un error teórico: colapsa servidores, aumenta la latencia y cuesta millones en infraestructura.</p>
  </div>
</div>

<div class="example" style="margin-top: var(--gap-md)">
  <span class="label">Lo que cambió</span>
  <p>No si las usan, sino <span class="accent">para qué</span>. Ya no prueban memorización de patrones. Prueban si tu código sobreviviría al tráfico de producción real.</p>
</div>

<!--
El punto clave: no desmotivar a nadie de practicar algoritmos, sino redirigir el enfoque hacia entender complejidad, no memorizar soluciones.
-->

---
class: terrain-slide
---

<span class="eyebrow">Formato 4 · La trampa</span>

# La <span class="accent">Ley de Goodhart</span> y el Grinding

<div class="grid-2 mt-8 gap-8">
  <div class="points">
    <div class="point">
      <span class="label">La trampa del grinding</span>
      <p>Resolver 500+ problemas de forma compulsiva sin entenderlos. Una década de esta cultura produjo candidatos con perfiles perfectos en LeetCode que <span class="accent">fracasan al diseñar un sistema real</span>.</p>
    </div>
    <div class="point">
      <span class="label">La Ley de Goodhart</span>
      <p>"Cuando una medida se convierte en un objetivo, deja de ser una buena medida." Las entrevistas dejaron de medir ingeniería y empezaron a medir <span class="accent">la habilidad para resolver LeetCode</span>.</p>
    </div>
  </div>
  <div class="card">
    <span class="label">La alternativa</span>
    <p style="margin-bottom: var(--gap-sm)">En lugar de resolver 500 problemas, domina <span class="accent">20–30 patrones</span> y entiende por qué funcionan:</p>
    <ul>
      <li>Sliding window</li>
      <li>Two pointers</li>
      <li>BFS / DFS</li>
      <li>Dynamic programming básico</li>
    </ul>
  </div>
</div>

<!--
Énfasis: la diferencia entre alguien que memorizó la solución y alguien que entiende el patrón se nota en 30 segundos de conversación.
-->

---
class: dark-slide
---

<span class="eyebrow">Formato 4 · Cómo prepararse bien</span>

# Practica con <span class="accent">intención</span>, no con volumen

<div class="grid-2 mt-6 gap-8">
  <div class="points">
    <div class="point">
      <span class="label">Listas curadas > problemas al azar</span>
      <p>Listas como <span class="accent">NeetCode 150</span> cubren los patrones que más aparecen. 150 problemas bien entendidos valen más que 500 resueltos a ciegas.</p>
    </div>
    <div class="point">
      <span class="label">Simula la presión real</span>
      <p>Practica con <span class="accent">cronómetro, sin categoría visible y limitando tus ejecuciones</span>.</p>
    </div>
  </div>
  <div class="card">
    <span class="label">El dato que lo justifica todo</span>
    <p>Las pruebas algorítmicas puras explican solo el <span class="accent" style="font-size: 1.4rem">19.4%</span> del éxito futuro de un ingeniero.</p>
    <p style="margin-top: var(--gap-sm)">Combinadas con Juicio de Ingeniería y capacidad de justificar decisiones arquitectónicas, la predicción sube al <span class="accent" style="font-size: 1.4rem">27%</span>.</p>
    <p style="margin-top: var(--gap-sm); opacity: 0.6; font-size: var(--text-sm)">Que el código compile importa. Saber hablar y colaborar importa igual.</p>
  </div>
</div>

<!--
Énfasis: no es solo practicar más, es practicar diferente. El cerebro necesita habituarse al estrés de la entrevista, no solo al problema.
-->

---
class: dark-slide
---

<span class="eyebrow">Formato 4 · Las plataformas</span>

# LeetCode y <span class="accent">HackerRank</span>

<div class="versus mt-6">
  <div class="card">
    <span class="label">LeetCode </span>
    <ul>
      <li>Plataforma <span class="accent">B2C</span>: vende suscripciones a desarrolladores</li>
      <li>Su mayor valor: banco de problemas con <span class="accent">etiquetas por empresa</span> (qué preguntó Amazon en los últimos 6 meses) y foros de la comunidad</li>
      <li>Sirve para tu práctica personal, no es lo que el empleador usa</li>
    </ul>
  </div>
  <div class="card">
    <span class="label">HackerRank · Tu herramienta y del empleador</span>
    <ul>
      <li>Plataforma <span class="accent">B2B</span>: procesa más de 172,800 evaluaciones diarias</li>
      <li>En 2026: proyectos del mundo real, IDEs colaborativos con IA integrada y proyectos multi-archivo</li>
      <li>Anti-plagio sofisticado: detecta cambios de pestaña, patrones de teclado y uso de IA no permitida</li>
    </ul>
  </div>
</div>

<!--
Cuando practican en LeetCode se están preparando para la entrevista. Cuando usan HackerRank en una evaluación, están siendo evaluados por el empleador con herramientas mucho más sofisticadas.
-->

---
class: green-slide
layout: center
transition: fade
---

<span class="eyebrow" style="color: var(--hr-black)">Formato 5</span>

# Game-Based Assessments: <br>La entrevista que parece un juego

<!--
Transición: hay un formato que la mayoría no conoce y que ya está reemplazando al currículum como primer filtro.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Formato 5</span>

#  ¿Por qué?

<div class="grid-2 mt-6 gap-8" style="align-items: start;">
  <div class="points">
    <div class="point">
      <span class="label">El caso Roblox · Kaiju Cats</span>
      <p>En la superficie: diriges tres gatos por una ciudad destruyendo edificios. Detrás de la pantalla, el sistema mapea cada clic a competencias reales de ingeniería.</p>
    </div>
    <div class="point">
      <span class="label">Por qué existen</span>
      <p>Muchas empresas los usan como <span class="accent">primer filtro oficial</span>, reemplazando la revisión de currículum. Son especialmente comunes para posiciones junior y recién graduados.</p>
    </div>
  </div>
  <img src="/assets/kaiju-cats.png" style="width:100%;border-radius:var(--radius);view-transition-name:kaiju-cats;" />
</div>

<!--
Énfasis: el juego no mide si llegas al puntaje más alto, mide el proceso. Igual que el Live Coding.
-->

---
class: dark-slide
---

<span class="eyebrow">Formato 5 · La rúbrica oculta</span>

#  Evalúan cómo <span class="accent">decides</span>.

<div class="grid-2 mt-6 gap-8" style="align-items: start;">
  <img src="/assets/kaiju-cats.png" style="width:100%;border-radius:var(--radius);view-transition-name:kaiju-cats;" />
  <div class="points">
    <div class="point">
      <span class="label">Pensamiento sistémico</span>
      <p>Cómo optimizas rutas, evitas obstáculos y gestionas colisiones entre recursos.</p>
    </div>
    <div class="point">
      <span class="label">Gestión de recursos</span>
      <p>El retorno de cada decisión con un presupuesto de comandos limitado.</p>
    </div>
    <div class="point">
      <span class="label">Resiliencia</span>
      <p>Un candidato enfocado hace en promedio <span class="accent">9 iteraciones en 15 minutos</span>, mejorando su plan constantemente tras cada error.</p>
    </div>
  </div>
</div>

<!--
El juego captura métricas no lineales: no si ganas, sino qué tan rápido ajustas tu estrategia cuando algo falla.
-->

---
class: dark-slide
---

<span class="eyebrow">Formato 5 · Cómo enfrentarlo</span>

# Juega

<div class="grid-2 mt-6 gap-8">
  <div class="noise-grid">
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Hacer clic de inmediato</strong>
        <p>Los candidatos que fracasan empiezan a interactuar en menos de 1 minuto. El sistema lo registra como impulsividad, no como agilidad.</p>
      </div>
    </div>
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Obsesionarse con la puntuación</strong>
        <p>Ya existe un algoritmo de ML que obtiene 215,000 puntos. A los comités de contratación no les interesa la optimización perfecta.</p>
      </div>
    </div>
  </div>
  <div class="points">
    <div class="point">
      <span class="label">Los primeros 3–5 minutos</span>
      <p>Los candidatos exitosos los usan solo para <span class="accent">analizar el problema antes de enviar su primer plan</span>.</p>
    </div>
    <div class="point">
      <span class="label">La justificación importa</span>
      <p>Después del juego suelen pedirte que expliques tu estrategia. Un enfoque reflexivo te da el material para <span class="accent">defender tus decisiones</span>.</p>
    </div>
  </div>
</div>

<!--
El punto clave: la ventaja humana no es el puntaje, es la capacidad de navegar la ambigüedad y articular una estrategia coherente.
-->

---
class: green-slide
layout: center
transition: slide-up
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 3</span>

# La Señal Técnica: <br>¿Qué busca capturar el entrevistador?

<!--
Lo que van a aprender: cómo se califica el desempeño a puerta cerrada y qué activa un "Strong Hire".
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow"></span>

# <span class="accent">"Si compila, pasé"</span>

<div class="points mt-6">
  <div>
    <p>El código funcional es solo la mitad del puntaje. Cada compañía es diferente, pero la mayoría se enfocan en buscar señales que demuestren <span class="accent">tu madurez como ingeniero</span></p>
  </div>
</div>

<div class="grid-2 mt-6 gap-8">
  <div class="item">
    <span class="label">Mantenibilidad</span>
    <p>¿Escribiste código limpio? Un código legible y modular siempre le gana a un "truco" complejo pero imposible de leer para tus compañeros.</p>
  </div>
  <div class="item">
    <span class="label">Descomposición</span>
    <p>¿Abordaste todo en una sola función gigante, o pudiste separar la lógica en módulos más pequeños y manejables?</p>
  </div>
  <div class="item">
    <span class="label">Comunicación Continua</span>
    <p>Evita quedarte callado después de planear. Si te quedas atascado y no hablas, el evaluador no tiene nada que calificar. Pensar en voz alta demuestra cómo reaccionas a la frustración.</p>
  </div>
  <div class="item">
    <span class="label">Verificación Autónoma (Dry Run)</span>
    <p>¿Esperaste a que el entrevistador te marcara un error? Los mejores candidatos rastrean sus variables manualmente y encuentran sus propios fallos.</p>
  </div>
</div>
<!--
Fuente: "Universal Technical Interview Signal Research"
-->

---
class: terrain-slide
transition: view-transition
---

<span class="eyebrow">Trade-offs · Big O</span>

# No existen soluciones <span class="accent">perfectas</span>

<div class="grid-2 mt-8 gap-8" style="align-items: start;">
  <div class="points">
    <div class="point">
      <span class="label">El error de novato</span>
      <p>Presentar una solución y actuar como si no tuviera ninguna desventaja. Los entrevistadores evalúan si entiendes los trade-offs de tiempo y espacio entre estructuras de datos.</p>
    </div>
    <div>
      <p>Buscan que razonas siguiendo alguna <span class="accent">metodología o patrón</span> y no solo por instinto</p>
    </div>
  </div>
  <div class="card">
    <span class="label">Ejemplo</span>
    <p style="margin-top: var(--gap-sm)">"Podríamos usar un Array anidado con <span class="accent">O(N²)</span> de tiempo, pero con un Hash Map bajamos a <span class="accent">O(N)</span> sacrificando <span class="accent">O(N)</span> de memoria extra. Dado que el problema exige consultas rápidas, optaré por el Hash Map."</p>
  </div>
</div>

<!--
Fuente: "30 Software Engineer Interview Questions for 2026" (Wiz)
-->

---
class: light-slide
transition: slide-up
---

<span class="eyebrow">La vara de medir · Entry Level</span>

# No te van a pedir <span class="accent">diseñar Twitter</span>

<div class="grid-2 mt-8 gap-8" style="align-items: start;">
  <div class="points">
    <div class="point">
      <span class="label">Junior</span>
      <p>Como junior, nadie espera que domines patrones de System design, pero sí deberías tener un <span class="accent">razonamiento proactivo</span>.</p>
    </div>
    <div class="point">
      <span class="label">¿Cómo demostrarlo en la entrevista?</span>
      <p>Hacer preguntas aclaratorias sobre los <span class="accent">edge cases</span> antes de escribir la primera línea de código.</p>
    </div>
  </div>
  <div class="card">
    <span class="label">Preguntas que demuestran razonamiento</span>
    <ul style="margin-top: var(--gap-sm)">
      <li>"¿El arreglo puede venir vacío?"</li>
      <li>"¿Manejamos números negativos?"</li>
      <li>"¿Qué pasa si la entrada es nula?"</li>
    </ul>
    <p class="sub" style="margin-top: var(--gap-sm)">Identificar estos límites antes de empezar te ayuda a considerar todas las posibilidades.</p>
  </div>
</div>

<!--
Proactivo no solo en cuanto a trabajar, sino también en aprender, demostrar motivación por avanzar y curiosidad técnica. No solo sabes cómo resolver el problema impuesto sino que entiendes el problema en sí y puedes anticiparte a problemas.

¿Qué pasaría si ?
Fuente: "Software Engineer Interview Rubric 2026" (Prepfully)
-->

---
class: dark-slide
layout: center
transition: slide-up
---

<span class="eyebrow">Cierre · Sección 3</span>

# ¿Cómo activar el <span class="accent">Strong Hire</span>?

<!--
El cierre de sección más importante: la acción concreta que detona la mejor calificación posible.
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Leaning Hire vs. Strong Hire</span>

# No esperes a que el compilador <span class="accent">te corrija</span>

<div class="grid-2 mt-6 gap-8" style="align-items: start;">
  <div class="points">
    <div>
      <span class="label">Mental Debugging · Dry Run</span>
      <p>Simula tu propio código manualmente, encuentra tus errores lógicos y corrígelos antes de ejecutar. Demuestra control total sobre el estado del programa.</p>
    </div>
  </div>
  <div class="card">
    <span class="label">Trace Table · El tip de oro</span>
    <p style="margin-top: var(--gap-sm)">Anota los valores de tus variables como comentarios al margen a medida que el bucle avanza:</p>
```
i=0  sum=0  arr=[3,1,4]
i=1  sum=3
i=2  sum=4
     sum=8  ✓
```
    <p class="sub" style="margin-top: var(--gap-sm)">Fuente: "How to Dry Run Code Manually"</p>
  </div>
</div>

<!--
Este es el cierre de la sección 3. La Trace Table es el diferenciador visual más poderoso que pueden mostrar en una entrevista.
-->

---
class: green-slide
layout: center
transition: slide-up
---

<span class="eyebrow" style="color: var(--hr-black)">Sección 4</span>

# Inteligencia Artificial: <br>Uso estratégico y detección de fraude

<!--
Lo que van a aprender: cómo usar IA a su favor sin que el reclutador piense que están haciendo trampa.
-->

---
class: dark-slide
transition: slide-up
---

<div class="mt-20">
</div>

# La tasa de fraude se <span class="accent">duplicó</span>

<div style="display:flex; align-items:baseline; gap:1rem; margin: var(--gap-lg) 0 var(--gap-md); margin-bottom: 4rem;">
  <span style="font-size:5rem; font-weight:700; line-height:1; color:var(--hr-green);">35%</span>
  <span class="sub" style="max-width:22rem;">de fraude detectado en más de 50,000 entrevistas a finales de 2025, el doble que el año anterior.</span>
</div>

<div class="grid-2 gap-8">
  <div class="item">
    <span class="label">Malas prácticas comunes</span>
    <p><span class="accent">Capas invisibles</span> sobre el editor: respuestas de IA que el entrevistador no puede ver al compartir pantalla.</p>
  </div>
  <div class="item">
    <span class="label">Por qué es inútil</span>
    <p>Las plataformas monitorean <span class="accent">cómo se comporta el candidato</span>, no solo el código. Incluyen detección de deepfakes en tiempo real.</p>
  </div>
</div>

<!--
Fuente: Fabric HQ · "Interview Red Flags and Interview Cheating"
-->

---
class: dark-slide
transition: view-transition
---

<span class="eyebrow">Integridad técnica</span>

# Cómo detectan el <span class="accent">fraude</span>

<div class="grid-2 mt-6 gap-8">
  <div class="noise-grid">
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Lag Loop</strong>
        <p>Silencio sistemático de 3–5 segundos antes de responder. El sistema sospecha que estás esperando a que la IA procese y genere la respuesta.</p>
      </div>
    </div>
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Burst typing</strong>
        <p>Bloques masivos de código escritos a velocidades robóticas, sin las pausas ni correcciones naturales de un humano.</p>
      </div>
    </div>
    <div class="noise-item">
      <span class="no">✕</span>
      <div>
        <strong>Rastreo de mirada</strong>
        <p>Los sistemas cruzan el patrón de tecleo con el movimiento ocular para detectar si estás leyendo un guion fuera de pantalla.</p>
      </div>
    </div>
  </div>
  <div class="card">
    <p style="margin-top: var(--gap-sm)">Las herramientas para hacer trampa son detectables precisamente porque <span class="accent">eliminan los patrones humanos</span>: las dudas, las correcciones, el ritmo irregular.</p>
    <p style="margin-top: var(--gap-sm)">Prepararte bien es más seguro y más rentable que intentar engañar al sistema.</p>
    <p class="sub" style="margin-top: var(--gap-sm)">Fabric HQ · Incruiter · "Evaluación Técnica HR-Tech 2026"</p>
  </div>
</div>

<!--
Cerrar con el mensaje positivo: la preparación genuina no solo es más ética, es la estrategia más inteligente.
-->

---
class: terrain-slide
layout: center
transition: slide-up
---

<span class="eyebrow" style="color: var(--hr-celery)">Integridad técnica</span>

<h1 style="font-size: 2.5rem; line-height: 1.3; max-width: 40rem;">
  Seamos <span class="accent">éticos</span>
</h1>

<p class="sub" style="max-width: 36rem; margin-top: var(--gap-md);">
  La preparación genuina no solo es más ética, también es la estrategia más inteligente. Los sistemas de detección mejoran cada día, pero tu reputación profesional se arruina en segundos.
</p>

<!--
Pausa deliberada antes de pasar al uso estratégico de IA. El mensaje: hay una forma correcta de usar estas herramientas.
-->

---
class: terrain-slide
transition: view-transition
---

<span class="eyebrow">El nuevo estándar</span>

# Algunas empresas ahora <span class="accent">exigen</span> que uses IA

<div class="grid-2 mt-8 gap-8" style="align-items: start;">
  <div class="points">
    <div class="point">
      <span class="label">Antecendentes</span>
      <p>Empresas como Canva hoy exigen que los candidatos usen Copilot o Cursor durante la entrevista. No para ver qué tan rápido generas código, sino para evaluar si puedes <span class="accent">auditar y corregir los errores que la IA comete</span>.</p>
    </div>
    <div class="point">
      <span class="label">La trampa</span>
      <p>Si aceptas ciegamente la sugerencia de la IA sin revisarla, repruebas.</p>
    </div>
  </div>
  <div class="card">
    <span class="label">Lo que realmente evalúan</span>
    <p style="margin-top: var(--gap-sm)">Tu capacidad para encontrar el fallo en el código generado, entender por qué ocurre y corregirlo. Es exactamente el mismo juicio que evalúa el <span class="accent">Reverse Debugging</span>.</p>
    <p class="sub" style="margin-top: var(--gap-sm)">Utkrusht · "An Engineering leader's honest take on AI in tech interviews"</p>
  </div>
</div>

<!--
Transición natural desde la Sección 3: el juicio de ingeniería que describimos ahí es exactamente lo que estas empresas miden con IA.
-->

<!--
Cerrar con el mensaje positivo: la preparación genuina no solo es más ética, es la estrategia más inteligente.
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
      <p><span class="accent">@hackerrank.gdl</span> en Instagram. Eventos, recursos y comunidad.</p>
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
  hackerrank.com, regístrate y apoyarás a que hagamos más y mejores eventos.
</p>

<!--
Dejar esta slide en pantalla durante toda la sesión de preguntas.
-->
