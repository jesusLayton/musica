/* ============================================================
   CONTENIDO PEDAGÓGICO (texto de las lecciones)
   Enfocado al bajo y al "porqué" de cada cosa.
   ============================================================ */

const CONTENT = {

fundamentos: `
<h2>1. Los cimientos: por qué hay 12 notas</h2>
<p>En la música occidental partimos la octava en <strong>12 partes iguales</strong> llamadas
<em>semitonos</em>. Un semitono es la distancia más pequeña del sistema (en el bajo, de un
traste al siguiente). Dos semitonos = un <strong>tono</strong>.</p>

<p>Esas 12 alturas tienen 7 nombres "naturales" (Do Re Mi Fa Sol La Si = C D E F G A B) y los
huecos entre ellas se rellenan con <strong>sostenidos (#)</strong> —sube un semitono— o
<strong>bemoles (♭)</strong> —baja un semitono—.</p>

<div class="callout">
<strong>¿Por qué entre Mi–Fa y Si–Do NO hay sostenido?</strong><br>
Porque la escala natural ya no es simétrica: de Mi a Fa y de Si a Do sólo hay <em>un semitono</em>,
mientras que entre las demás notas naturales hay un tono. Ese patrón irregular es precisamente lo
que da carácter a la escala mayor. No es un capricho: es el patrón T-T-S-T-T-T-S (lo verás en Escalas).
</div>

<h3>Enarmonía</h3>
<p>La misma tecla/traste puede tener dos nombres: <strong>C# = D♭</strong>. Suenan igual; se escribe
de una forma u otra según la tonalidad (lo entenderás del todo con el Círculo de Quintas).</p>

<h3>La octava</h3>
<p>Si subes 12 semitonos llegas a la <strong>misma nota</strong> pero más aguda: es la octava.
Suena "igual" porque su frecuencia es exactamente el doble. Por eso el patrón del mástil se repite
a partir del traste 12.</p>
`,

bajo: `
<h2>2. El mástil del bajo: por qué está afinado así</h2>
<p>El bajo estándar de 4 cuerdas se afina (de grave a aguda) <strong>Mi – La – Re – Sol</strong>
(E–A–D–G). Entre cada cuerda y la siguiente hay una <strong>4ª justa</strong> (5 semitonos / 5 trastes).</p>

<div class="callout">
<strong>¿Por qué por cuartas?</strong><br>
Porque hace que las posiciones de escalas y arpegios sean <em>idénticas</em> subas por donde subas:
un mismo "dibujo" de dedos sirve para cualquier tonalidad, sólo lo mueves de sitio. La guitarra usa
casi lo mismo (cuartas) salvo el salto Sol–Si que es una 3ª mayor, por eso sus dibujos cambian un
poco. El bajo, al ser todo cuartas, es muy regular y lógico.
</div>

<h3>Encontrar cualquier nota</h3>
<ul>
<li>Cada traste = 1 semitono.</li>
<li>Traste 12 de cualquier cuerda = la misma nota que la cuerda al aire, una octava más aguda.</li>
<li>Una octava está, cómodamente, <strong>2 trastes arriba y 2 cuerdas abajo</strong> (p.ej. Mi en la
cuerda Mi ↔ Mi en el traste 2 de la cuerda Re).</li>
</ul>

<p>Usa la pestaña <strong>Mástil</strong> para ver cualquier escala o arpegio dibujado sobre el bajo.</p>

<h3>El rol del bajo en la banda</h3>
<p>El bajo toca casi siempre la <strong>fundamental</strong> del acorde (la nota que le da el nombre).
Es el puente entre la armonía (acordes) y el ritmo. Si entiendes qué acorde suena, sabes qué nota es
tu "casa". Todo lo demás (quintas, aproximaciones cromáticas, walking) son adornos sobre esa base.</p>
`,

intervalos: `
<h2>3. Intervalos: la unidad de medida de todo</h2>
<p>Un <strong>intervalo</strong> es la distancia entre dos notas. Se mide en semitonos y se le da un
nombre (3ª menor, 5ª justa...). <strong>Todo</strong> en teoría —escalas, acordes, el círculo— está
hecho de intervalos. Si dominas esto, lo demás cae por su propio peso.</p>

<p>El nombre tiene dos partes: un <em>número</em> (cuántas notas naturales abarca: 2ª, 3ª, 4ª...) y
una <em>cualidad</em> (menor, mayor, justa, aumentada, disminuida).</p>

<div class="callout">
<strong>Justas vs. mayores/menores</strong><br>
Las 4ª, 5ª y 8ª se llaman "justas" (son muy estables, casi vacías de color). Las 2ª, 3ª, 6ª y 7ª
tienen versión <em>mayor</em> y <em>menor</em> (se diferencian en un semitono) y son las que dan el
"color" alegre/triste a la música.
</div>

<h3>Los dos que debes memorizar sí o sí (en el bajo)</h3>
<ul>
<li><strong>5ª justa (7 semitonos):</strong> siempre a 2 trastes arriba y 1 cuerda abajo. Es tu
"comodín": suena bien con casi cualquier acorde.</li>
<li><strong>3ª (3 ó 4 semitonos):</strong> decide si el acorde es menor o mayor. Es la nota con más
información.</li>
</ul>

<p>Mira la pestaña <strong>Intervalos</strong> para oír cada uno y verlo en el mástil.</p>
`,

escalas: `
<h2>4. Escalas: por qué la mayor suena a "mayor"</h2>
<p>Una escala es una selección ordenada de notas dentro de la octava. La <strong>escala mayor</strong>
(o modo <em>jónico</em>) se construye con este patrón fijo de tonos (T) y semitonos (S):</p>

<p class="formula">T – T – S – T – T – T – S</p>

<p>Da igual la nota de salida: si respetas ese patrón, suena a escala mayor. En C son las teclas
blancas (C D E F G A B C); por eso el patrón "natural" del que hablamos en Fundamentos ES la escala
mayor de Do.</p>

<div class="callout">
<strong>¿Por qué ese patrón suena alegre?</strong><br>
La clave está en la <strong>3ª mayor</strong> (grado 3, a 4 semitonos de la tónica). Esa tercera es la
que el oído lee como "mayor/brillante". Si la bajas un semitono (3ª menor) obtienes la escala menor y
todo suena triste. El resto de notas colocan las tensiones y reposos.
</div>

<h3>La escala menor natural (eólico)</h3>
<p>Patrón: <span class="formula-inline">T – S – T – T – S – T – T</span>. Fíjate: es la MISMA escala
mayor pero empezando desde su <strong>6º grado</strong>. Por eso Do mayor y La menor tienen las mismas
notas: son <strong>relativas</strong>. Cambia el centro (la nota que sientes como "casa"), no las notas.</p>

<h3>Los 7 modos (el gran enredo, resuelto)</h3>
<p>Si tocas las notas de Do mayor pero empezando y terminando en otra nota cada vez, obtienes los
<strong>7 modos</strong>. Son la misma colección de notas con distinto "centro de gravedad":</p>
<ul>
<li><strong>Jónico</strong> (desde C) = mayor.</li>
<li><strong>Dórico</strong> (desde D): menor con la 6ª mayor. Muy usado en funk/rock → ideal para bajo.</li>
<li><strong>Frigio</strong> (desde E): menor con 2ª menor, sabor español/flamenco.</li>
<li><strong>Lidio</strong> (desde F): mayor con 4ª aumentada, sonido "flotante".</li>
<li><strong>Mixolidio</strong> (desde G): mayor con 7ª menor, el sonido del dominante y del blues/rock.</li>
<li><strong>Eólico</strong> (desde A) = menor natural.</li>
<li><strong>Locrio</strong> (desde B): inestable, 5ª disminuida. Raro pero existe (sobre acordes m7♭5).</li>
</ul>

<div class="callout">
<strong>La idea que lo desenreda todo:</strong> un modo no es "otra escala que memorizar", es
<em>la escala mayor empezada por otro grado</em>. Lo que cambia es dónde pones el reposo.
</div>

<h3>Pentatónicas (tu mejor amiga en el bajo)</h3>
<p>Son escalas de 5 notas que quitan las notas más "conflictivas". La <strong>pentatónica menor</strong>
es la base del rock, el blues y muchísimas líneas de bajo porque casi nunca suena mal. Añádele un
semitono (la "blue note") y tienes la escala de blues.</p>
`,

acordes: `
<h2>5. Acordes: se construyen apilando terceras</h2>
<p>Un acorde (tríada) son 3 notas tocadas juntas. La regla de oro: se forman
<strong>apilando terceras</strong> desde una fundamental. El tipo de terceras que apiles decide el
carácter. Esto explica de golpe mayor, menor, aumentado y disminuido:</p>

<table class="chord-table">
<tr><th>Acorde</th><th>Fórmula (semitonos)</th><th>Cómo se apila</th><th>Carácter</th></tr>
<tr><td><strong>Mayor</strong></td><td>0 – 4 – 7</td><td>3ª <strong>Mayor</strong> + 3ª menor</td><td>Brillante, alegre</td></tr>
<tr><td><strong>menor</strong></td><td>0 – 3 – 7</td><td>3ª <strong>menor</strong> + 3ª Mayor</td><td>Oscuro, triste</td></tr>
<tr><td><strong>aumentado</strong></td><td>0 – 4 – 8</td><td>3ª Mayor + 3ª Mayor</td><td>Tenso, suspendido</td></tr>
<tr><td><strong>disminuido</strong></td><td>0 – 3 – 6</td><td>3ª menor + 3ª menor</td><td>Inestable, "pide resolver"</td></tr>
</table>

<div class="callout">
<strong>El porqué del aumentado y el disminuido:</strong><br>
• Si apilas <em>dos terceras mayores</em> (4+4=8), la quinta se va demasiado arriba: queda
<strong>aumentada</strong>. El acorde pierde su "suelo" y suena flotando.<br>
• Si apilas <em>dos terceras menores</em> (3+3=6), la quinta se queda corta: queda
<strong>disminuida</strong>. Aparece un <em>tritono</em> (el intervalo más tenso), por eso suena como
si tuviera que moverse a otro sitio para descansar.
</div>

<h3>Séptimas: añadir una tercera más</h3>
<p>Apila una cuarta nota (otra tercera encima) y tienes acordes de séptima, con más color:</p>
<ul>
<li><strong>maj7</strong> (0-4-7-11): mayor + 7ª mayor → suave, jazzy.</li>
<li><strong>7</strong> o dominante (0-4-7-10): mayor + 7ª menor → tiene el tritono, <em>empuja</em> a resolver.</li>
<li><strong>m7</strong> (0-3-7-10): menor + 7ª menor → oscuro pero relajado.</li>
<li><strong>m7♭5</strong> o semidisminuido (0-3-6-10): el "medio camino" hacia el disminuido.</li>
<li><strong>dim7</strong> (0-3-6-9): tres terceras menores, totalmente simétrico y tensísimo.</li>
</ul>

<p>Para el bajo lo esencial: la <strong>fundamental</strong> (le da nombre) y la <strong>3ª</strong>
(dice si es mayor o menor). Pruébalos en la pestaña <strong>Acordes</strong>.</p>
`,

armonizacion: `
<h2>6. Armonizar la escala: de dónde salen los acordes de una canción</h2>
<p>Aquí se une todo. Si tomas la escala mayor y construyes un acorde <strong>sobre cada grado</strong>
(apilando terceras <em>usando sólo notas de la escala</em>), obtienes siempre la misma secuencia de
tipos de acorde. Esto es el <strong>campo armónico</strong>: los acordes que "pertenecen" a una tonalidad.</p>

<p class="formula">I – ii – iii – IV – V – vi – vii°</p>
<p>Mayúscula = acorde mayor; minúscula = menor; ° = disminuido. En tríadas:</p>

<table class="chord-table">
<tr><th>Grado</th><th>Tipo</th><th>Función</th></tr>
<tr><td>I</td><td>Mayor</td><td>Tónica (reposo total)</td></tr>
<tr><td>ii</td><td>menor</td><td>Subdominante</td></tr>
<tr><td>iii</td><td>menor</td><td>Tónica (color)</td></tr>
<tr><td>IV</td><td>Mayor</td><td>Subdominante (aleja de casa)</td></tr>
<tr><td>V</td><td>Mayor (dominante 7)</td><td>Dominante (máxima tensión)</td></tr>
<tr><td>vi</td><td>menor</td><td>Tónica (el relativo menor)</td></tr>
<tr><td>vii°</td><td>disminuido</td><td>Dominante</td></tr>
</table>

<div class="callout">
<strong>Por qué esto es oro para el bajo:</strong><br>
Cuando ves una canción "en Do mayor", ya sabes que lo más probable es que sus acordes sean
C, Dm, Em, F, G, Am. Y como el bajo toca la fundamental, ya sabes casi toda tu línea sin ver una sola
partitura. La progresión más común del mundo, <strong>I–V–vi–IV</strong> (C–G–Am–F), son 4 notas:
Do–Sol–La–Fa.
</div>

<h3>Tónica – Subdominante – Dominante</h3>
<p>Las tres funciones explican el "movimiento" de la música: <strong>Tónica</strong> (casa, reposo) →
<strong>Subdominante</strong> (te alejas) → <strong>Dominante</strong> (tensión) → de vuelta a Tónica.
Ese viaje de ida y vuelta es el 90% de las canciones. El <strong>V → I</strong> (dominante a tónica)
es la resolución más fuerte que existe, y en el bajo ese salto (una 5ª justa hacia abajo o 4ª hacia
arriba) es el movimiento rey.</p>
`,

circulo: `
<h2>7. El Círculo de Quintas: el mapa de toda la armonía</h2>
<p>El círculo ordena las 12 tonalidades por <strong>quintas justas</strong>: cada paso en el sentido
de las agujas del reloj es subir una 5ª justa (7 semitonos). C → G → D → A → E → B → F#...</p>

<div class="callout">
<strong>¿Por qué por quintas y por qué forma un círculo?</strong><br>
Si vas sumando quintas justas (7 semitonos) y te quedas dentro de la octava (restando 12 cuando te
pasas), recorres <em>las 12 notas</em> y vuelves al punto de partida. Matemáticamente: 7 y 12 no
comparten divisores, así que la quinta "visita" todas las notas antes de repetir. Por eso es un
círculo cerrado de 12 posiciones.
</div>

<h3>Para qué sirve de verdad</h3>
<ul>
<li><strong>Armaduras:</strong> cada paso a la derecha añade <strong>un sostenido</strong>; cada paso a
la izquierda (por cuartas) añade <strong>un bemol</strong>. Así sabes cuántas alteraciones tiene cada
tonalidad sin memorizar nada: C=0, G=1#, D=2#, F=1♭, Bb=2♭...</li>
<li><strong>Tonalidades vecinas:</strong> las tonalidades pegadas en el círculo comparten casi todas
sus notas, por eso suenan bien juntas y las canciones suelen moverse entre vecinas.</li>
<li><strong>Relativo menor:</strong> dentro de cada posición está su menor relativo (C ↔ Am). Comparten
armadura.</li>
<li><strong>Progresiones:</strong> moverse en sentido antihorario (por quintas descendentes) es el
movimiento más natural: ii → V → I es, literalmente, tres pasos seguidos en el círculo. Para el bajo
eso son saltos de 5ª/4ª, los más sólidos.</li>
</ul>

<p>Toca el círculo interactivo en la pestaña <strong>Círculo</strong>: pulsa cualquier tonalidad para
ver su armadura, su relativa menor y su dominante.</p>
`,

progresiones: `
<h2>8. Progresiones y líneas de bajo</h2>
<p>Una progresión es una sucesión de acordes. Entendiendo armonización + círculo, las lees al vuelo.
Algunas universales (te las doy en Do; muévelas con el círculo a cualquier tono):</p>

<table class="chord-table">
<tr><th>Nombre</th><th>Grados</th><th>En Do (fundamentales para el bajo)</th></tr>
<tr><td>Pop / "4 acordes"</td><td>I–V–vi–IV</td><td>Do – Sol – La – Fa</td></tr>
<tr><td>Blues (12 compases)</td><td>I–IV–V</td><td>Do – Fa – Sol</td></tr>
<tr><td>Jazz / cadencia</td><td>ii–V–I</td><td>Re – Sol – Do</td></tr>
<tr><td>Doo-wop</td><td>I–vi–IV–V</td><td>Do – La – Fa – Sol</td></tr>
<tr><td>Andaluza (menor)</td><td>i–♭VII–♭VI–V</td><td>La – Sol – Fa – Mi</td></tr>
</table>

<h3>Cómo construir una línea de bajo (en orden de dificultad)</h3>
<ol>
<li><strong>Fundamentales:</strong> toca la nota que da nombre a cada acorde. Simple y efectivo, nunca falla.</li>
<li><strong>Fundamental + quinta:</strong> alterna la fundamental con su 5ª justa (2 trastes arriba, 1 cuerda abajo). Sonido "country/rock" clásico.</li>
<li><strong>Fundamental + octava:</strong> da energía (muy disco/funk).</li>
<li><strong>Arpegios:</strong> recorre las notas del acorde (fund – 3ª – 5ª). La 3ª aporta el color mayor/menor.</li>
<li><strong>Walking bass:</strong> une un acorde con el siguiente con notas de paso, muchas veces entrando por un <strong>semitono</strong> o una <strong>5ª</strong> hacia la fundamental del acorde siguiente.</li>
</ol>

<div class="callout">
<strong>El truco del bajista:</strong> apunta siempre a la fundamental del acorde que viene,
llegando a ella por grado (semitono/tono) o por salto de 5ª. Eso "marca" el cambio de acorde y es lo
que hace que una línea suene profesional.
</div>
`

};

// Orden y títulos de las secciones teóricas
const LESSON_ORDER = [
  {id:'fundamentos',  title:'Fundamentos'},
  {id:'bajo',         title:'El bajo'},
  {id:'intervalos',   title:'Intervalos'},
  {id:'escalas',      title:'Escalas y modos'},
  {id:'acordes',      title:'Acordes'},
  {id:'armonizacion', title:'Campo armónico'},
  {id:'circulo',      title:'Círculo de quintas'},
  {id:'progresiones', title:'Progresiones'}
];
