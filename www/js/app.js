/* ============================================================
   APP: navegación, herramientas interactivas y ejercicios.
   Vanilla JS, sin dependencias, 100% offline.
   ============================================================ */

const ROOTS = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

// ---------- Audio (síntesis simple con WebAudio, opcional) ----------
let audioCtx = null;
function tone(freq, when, dur){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'triangle';
    o.frequency.value = freq;
    o.connect(g); g.connect(audioCtx.destination);
    const t = audioCtx.currentTime + when;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.25, t+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
    o.start(t); o.stop(t+dur+0.05);
  }catch(e){/* silencio si el navegador no deja */}
}
// Frecuencia de una nota (índice 0-11) en una octava dada. A4=440.
function freqOf(index, octave){
  // midi: C0 = 12. nota = octave*12 + index + 12
  const midi = octave*12 + index + 12;
  return 440 * Math.pow(2, (midi-69)/12);
}
function playNote(noteName, octave=3, when=0, dur=0.5){
  tone(freqOf(noteIndex(noteName), octave), when, dur);
}
function playSequence(notes, octave=3, gap=0.4){
  notes.forEach((n,i)=> playNote(n, octave, i*gap, gap*0.9));
}
function playChord(notes, octave=3){
  notes.forEach(n=> playNote(n, octave, 0, 1.2));
}

// ---------- Navegación ----------
const views = {};
function navTo(id){
  document.querySelectorAll('.view').forEach(v=> v.classList.remove('active'));
  document.querySelectorAll('.navbtn').forEach(b=> b.classList.remove('active'));
  const v = document.getElementById('view-'+id);
  if(v) v.classList.add('active');
  const b = document.querySelector(`.navbtn[data-view="${id}"]`);
  if(b) b.classList.add('active');
  window.scrollTo(0,0);
}

// ---------- Render: Inicio ----------
function renderHome(){
  return `
  <div class="hero">
    <h1>Teoría Musical para Bajistas</h1>
    <p>Toda la teoría que necesitas para entender tu bajo, explicada desde el porqué.
    Sin internet, todo está aquí dentro.</p>
  </div>
  <div class="cards">
    ${LESSON_ORDER.map(l=>`<button class="card" onclick="navTo('${l.id}')">
        <span class="card-title">${l.title}</span></button>`).join('')}
  </div>
  <h3>Herramientas</h3>
  <div class="cards">
    <button class="card tool" onclick="navTo('mastil')"><span class="card-title">Mástil interactivo</span></button>
    <button class="card tool" onclick="navTo('explorador')"><span class="card-title">Escalas y acordes</span></button>
    <button class="card tool" onclick="navTo('circuloint')"><span class="card-title">Círculo de quintas</span></button>
    <button class="card tool" onclick="navTo('ejercicios')"><span class="card-title">Ejercicios</span></button>
  </div>
  <p class="tip">Consejo: empieza por <strong>Fundamentos</strong> y baja en orden. Cada tema enlaza
  con el siguiente.</p>`;
}

// ---------- Render: lección de teoría ----------
function renderLesson(id){
  const idx = LESSON_ORDER.findIndex(l=>l.id===id);
  const prev = LESSON_ORDER[idx-1];
  const next = LESSON_ORDER[idx+1];
  return `
    <div class="lesson">${CONTENT[id]}</div>
    <div class="lesson-nav">
      ${prev?`<button onclick="navTo('${prev.id}')">← ${prev.title}</button>`:'<span></span>'}
      ${next?`<button onclick="navTo('${next.id}')">${next.title} →</button>`:'<span></span>'}
    </div>`;
}

// ---------- Mástil interactivo ----------
let fbState = {root:'E', scale:'pent_menor', flats:false};
function renderFretboardView(){
  return `
  <h2>Mástil del bajo</h2>
  <div class="controls">
    <label>Tónica
      <select id="fb-root">${ROOTS.map(r=>`<option value="${r}">${r} (${latin(r)})</option>`).join('')}</select>
    </label>
    <label>Escala
      <select id="fb-scale">${Object.keys(SCALES).map(k=>`<option value="${k}">${SCALES[k].label}</option>`).join('')}</select>
    </label>
    <button id="fb-play">▶ Oír</button>
  </div>
  <div id="fretboard"></div>
  <p class="tip">El punto rojo es la tónica. Los números pequeños son el grado de la escala.
  El bajo se dibuja de la cuerda aguda (arriba) a la grave (abajo), como lo ves al tocar.</p>
  `;
}
function drawFretboard(){
  const el = document.getElementById('fretboard');
  const scaleNotes = buildScale(fbState.root, fbState.scale, fbState.flats);
  let html = '<table class="fretboard"><tr><th></th>';
  for(let f=0; f<=FRETS; f++) html += `<th>${f}</th>`;
  html += '</tr>';
  BASS_TUNING.forEach(open=>{
    html += `<tr><th class="strlbl">${open}</th>`;
    for(let f=0; f<=FRETS; f++){
      const n = fretNote(open, f, fbState.flats);
      const deg = degreeInScale(n, scaleNotes);
      let cls = 'cell';
      if(deg){ cls += ' in'; if(deg===1) cls += ' root'; }
      const marker = (f===3||f===5||f===7||f===9||f===12) ? ' mark':'';
      html += `<td class="${cls}${marker}">${deg?`<span class="note">${n}</span><span class="deg">${deg}</span>`:''}</td>`;
    }
    html += '</tr>';
  });
  html += '</table>';
  el.innerHTML = html;
}
function bindFretboard(){
  const r=document.getElementById('fb-root'), s=document.getElementById('fb-scale');
  r.value=fbState.root; s.value=fbState.scale;
  r.onchange=()=>{fbState.root=r.value; drawFretboard();};
  s.onchange=()=>{fbState.scale=s.value; drawFretboard();};
  document.getElementById('fb-play').onclick=()=>{
    const notes = buildScale(fbState.root, fbState.scale, fbState.flats);
    playSequence(notes.concat([notes[0]]), 3, 0.35);
  };
  drawFretboard();
}

// ---------- Explorador de escalas y acordes ----------
let exState = {root:'C', flats:false};
function renderExplorer(){
  return `
  <h2>Escalas y acordes</h2>
  <div class="controls">
    <label>Tónica
      <select id="ex-root">${ROOTS.map(r=>`<option value="${r}">${r} (${latin(r)})</option>`).join('')}</select>
    </label>
  </div>
  <div id="ex-out"></div>`;
}
function drawExplorer(){
  const root = exState.root;
  let html = '<h3>Escalas desde '+root+'</h3><div class="explist">';
  ['mayor','menor_natural','dorico','frigio','lidio','mixolidio','locrio','pent_mayor','pent_menor','blues'].forEach(k=>{
    const notes = buildScale(root, k, exState.flats);
    html += `<div class="exrow"><div class="exname">${SCALES[k].label}</div>
      <div class="exnotes">${notes.map(n=>`<span class="pill">${n}</span>`).join('')}</div>
      <button class="mini" onclick='playSeq(${JSON.stringify(notes)})'>▶</button></div>`;
  });
  html += '</div><h3>Acordes desde '+root+'</h3><div class="explist">';
  Object.keys(CHORDS).forEach(k=>{
    const notes = buildChord(root, k, exState.flats);
    const d = CHORDS[k];
    html += `<div class="exrow"><div class="exname">${root}${d.suffix} <small>${d.label}</small></div>
      <div class="exnotes">${notes.map(n=>`<span class="pill">${n}</span>`).join('')}</div>
      <button class="mini" onclick='playCh(${JSON.stringify(notes)})'>▶</button>
      <div class="exwhy">${d.why}</div></div>`;
  });
  html += '</div>';
  document.getElementById('ex-out').innerHTML = html;
}
function playSeq(notes){ playSequence(notes.concat([notes[0]]),3,0.35); }
function playCh(notes){ playChord(notes,3); }
function bindExplorer(){
  const r=document.getElementById('ex-root');
  r.value=exState.root;
  r.onchange=()=>{exState.root=r.value; drawExplorer();};
  drawExplorer();
}

// ---------- Armonización dinámica (dentro de círculo) ----------
function harmonizeTable(root){
  const scale = buildScale(root, 'mayor', false);
  let html = '<table class="chord-table"><tr><th>Grado</th><th>Acorde (tríada)</th><th>Con 7ª</th><th>Función</th></tr>';
  HARMONY_MAJOR.forEach((h,i)=>{
    const chordRoot = scale[i];
    const tri = CHORDS[h.tri];
    const sev = CHORDS[h.seventh];
    html += `<tr><td>${h.roman}</td>
      <td><strong>${chordRoot}${tri.suffix}</strong></td>
      <td>${chordRoot}${sev.suffix}</td>
      <td>${h.func}</td></tr>`;
  });
  html += '</table>';
  return html;
}

// ---------- Círculo de quintas interactivo (SVG) ----------
function renderCircleTool(){
  return `
  <h2>Círculo de quintas interactivo</h2>
  <div id="circle-svg"></div>
  <div id="circle-info" class="callout">Pulsa una tonalidad en el círculo.</div>
  <h3 id="circle-harm-title" style="display:none">Campo armónico</h3>
  <div id="circle-harm"></div>`;
}
function drawCircle(){
  const size=320, cx=size/2, cy=size/2, R=130, r2=92;
  let svg = `<svg viewBox="0 0 ${size} ${size}" class="circlesvg">`;
  CIRCLE.forEach((c,i)=>{
    const ang = (i/12)*2*Math.PI - Math.PI/2;
    const x = cx + R*Math.cos(ang), y = cy + R*Math.sin(ang);
    const xm = cx + r2*Math.cos(ang), ym = cy + r2*Math.sin(ang);
    svg += `<g class="ckey" onclick="selectKey(${i})">
      <circle cx="${x}" cy="${y}" r="26" class="ckey-maj"/>
      <text x="${x}" y="${y+5}" class="ctext-maj">${c.major}</text>
      <text x="${xm}" y="${ym+4}" class="ctext-min">${c.minor}</text></g>`;
  });
  svg += `<text x="${cx}" y="${cy-6}" class="cmid">Mayores</text>
          <text x="${cx}" y="${cy+12}" class="cmid2">y relativas menores</text></svg>`;
  document.getElementById('circle-svg').innerHTML = svg;
}
function selectKey(i){
  const c = CIRCLE[i];
  const domIndex = (i+1)%12; // la dominante es un paso horario
  const dom = CIRCLE[domIndex].major;
  document.getElementById('circle-info').innerHTML =
    `<strong>${c.major} mayor</strong> (relativa menor: ${c.minor})<br>
     Armadura: ${c.text}<br>
     Dominante (V): <strong>${dom}</strong> — está justo un paso a la derecha.<br>
     Subdominante (IV): <strong>${CIRCLE[(i+11)%12].major}</strong> — un paso a la izquierda.`;
  document.getElementById('circle-harm-title').style.display='block';
  document.getElementById('circle-harm').innerHTML = harmonizeTable(c.major);
}

// ---------- Ejercicios ----------
let quiz = {score:0, total:0, current:null};
const QUIZ_TYPES = ['interval','chord','degree','circle','fret'];

function newQuestion(){
  const type = QUIZ_TYPES[Math.floor(Math.random()*QUIZ_TYPES.length)];
  let q;
  if(type==='interval'){
    const iv = INTERVALS[1+Math.floor(Math.random()*11)];
    const root = ROOTS[Math.floor(Math.random()*12)];
    const answer = noteName(noteIndex(root)+iv.st, false);
    q = {
      text:`¿Qué nota está a una <strong>${iv.name}</strong> por encima de <strong>${root}</strong>?`,
      options: shuffleOptions(answer, ROOTS),
      answer, explain:`${root} + ${iv.st} semitonos = ${answer}.`
    };
  } else if(type==='chord'){
    const keys = Object.keys(CHORDS);
    const ck = keys[Math.floor(Math.random()*keys.length)];
    const root = ROOTS[Math.floor(Math.random()*12)];
    const notes = buildChord(root, ck, false);
    q = {
      text:`¿Cuáles son las notas del acorde <strong>${root}${CHORDS[ck].suffix}</strong> (${CHORDS[ck].label})?`,
      options: shuffleChordOptions(notes, root),
      answer: notes.join(' '), explain:CHORDS[ck].why
    };
  } else if(type==='degree'){
    const root = ROOTS[Math.floor(Math.random()*12)];
    const scale = buildScale(root,'mayor',false);
    const g = 1+Math.floor(Math.random()*7);
    q = {
      text:`En la escala de <strong>${root} mayor</strong>, ¿qué nota es el grado <strong>${g}</strong>?`,
      options: shuffleOptions(scale[g-1], ROOTS),
      answer: scale[g-1], explain:`${root} mayor: ${scale.join(' - ')}.`
    };
  } else if(type==='circle'){
    const c = CIRCLE[Math.floor(Math.random()*CIRCLE.length)];
    q = {
      text:`¿Cuál es la <strong>relativa menor</strong> de <strong>${c.major} mayor</strong>?`,
      options: shuffleOptions(c.minor, CIRCLE.map(x=>x.minor)),
      answer: c.minor, explain:`Comparten armadura (${c.text}). La relativa menor sale del 6º grado.`
    };
  } else { // fret
    const open = BASS_TUNING[Math.floor(Math.random()*4)];
    const fret = 1+Math.floor(Math.random()*11);
    const answer = fretNote(open, fret, false);
    q = {
      text:`En la cuerda <strong>${open}</strong> del bajo, ¿qué nota suena en el <strong>traste ${fret}</strong>?`,
      options: shuffleOptions(answer, ROOTS),
      answer, explain:`${open} + ${fret} trastes (semitonos) = ${answer}.`
    };
  }
  quiz.current = q;
  renderQuestion();
}
function shuffleOptions(correct, pool){
  const opts = new Set([correct]);
  while(opts.size<4){ opts.add(pool[Math.floor(Math.random()*pool.length)]); }
  return shuffle([...opts]);
}
function shuffleChordOptions(correctNotes, root){
  const correct = correctNotes.join(' ');
  const opts = new Set([correct]);
  const types = Object.keys(CHORDS);
  let guard=0;
  while(opts.size<4 && guard<30){
    const t = types[Math.floor(Math.random()*types.length)];
    opts.add(buildChord(root,t,false).join(' '));
    guard++;
  }
  return shuffle([...opts]);
}
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

function renderQuizView(){
  return `
  <h2>Ejercicios</h2>
  <div class="scorebar">Aciertos: <span id="q-score">0</span> / <span id="q-total">0</span></div>
  <div id="q-card" class="quiz-card"></div>
  <button id="q-next" class="bigbtn" style="display:none">Siguiente →</button>`;
}
function renderQuestion(){
  const q = quiz.current;
  document.getElementById('q-next').style.display='none';
  document.getElementById('q-card').innerHTML = `
    <div class="q-text">${q.text}</div>
    <div class="q-options">
      ${q.options.map(o=>`<button class="q-opt" onclick="answer(this,'${o.replace(/'/g,"\\'")}')">${o}</button>`).join('')}
    </div>
    <div class="q-explain" id="q-explain"></div>`;
}
function answer(btn, chosen){
  const q = quiz.current;
  quiz.total++;
  const correct = chosen===q.answer;
  if(correct) quiz.score++;
  document.querySelectorAll('.q-opt').forEach(b=>{
    b.disabled=true;
    if(b.textContent===q.answer) b.classList.add('ok');
    else if(b===btn) b.classList.add('bad');
  });
  document.getElementById('q-explain').innerHTML =
    (correct?'<strong class="good">¡Correcto!</strong> ':'<strong class="wrong">Casi.</strong> La respuesta era <strong>'+q.answer+'</strong>. ')+q.explain;
  document.getElementById('q-score').textContent=quiz.score;
  document.getElementById('q-total').textContent=quiz.total;
  document.getElementById('q-next').style.display='block';
}

// ---------- Arranque ----------
function buildViews(){
  const main = document.getElementById('main');
  let html = `<section id="view-home" class="view active">${renderHome()}</section>`;
  LESSON_ORDER.forEach(l=>{
    html += `<section id="view-${l.id}" class="view">${renderLesson(l.id)}</section>`;
  });
  html += `<section id="view-mastil" class="view">${renderFretboardView()}</section>`;
  html += `<section id="view-explorador" class="view">${renderExplorer()}</section>`;
  html += `<section id="view-circuloint" class="view">${renderCircleTool()}</section>`;
  html += `<section id="view-ejercicios" class="view">${renderQuizView()}</section>`;
  main.innerHTML = html;

  bindFretboard();
  bindExplorer();
  drawCircle();
  document.getElementById('q-next').onclick=newQuestion;
  newQuestion();
}

document.addEventListener('DOMContentLoaded', ()=>{
  // menú
  const nav = document.getElementById('nav');
  const items = [{id:'home',title:'Inicio'}]
    .concat(LESSON_ORDER)
    .concat([{id:'mastil',title:'Mástil'},{id:'explorador',title:'Escalas/Acordes'},
             {id:'circuloint',title:'Círculo'},{id:'ejercicios',title:'Ejercicios'}]);
  nav.innerHTML = items.map(i=>`<button class="navbtn" data-view="${i.id}" onclick="navTo('${i.id}')">${i.title}</button>`).join('');
  buildViews();
  navTo('home');
});
