/* ============================================================
   MOTOR DE TEORÍA MUSICAL
   Todo se calcula aquí a partir de las 12 notas y las fórmulas
   de intervalos. Así el "porqué" es coherente en toda la app.
   ============================================================ */

// Las 12 alturas (pitch classes). Dos ortografías: con sostenidos y con bemoles.
const CHROMATIC_SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const CHROMATIC_FLAT  = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

// Nombres "latinos" para quien lee Do Re Mi
const LATIN = {
  'C':'Do','C#':'Do#','Db':'Reb','D':'Re','D#':'Re#','Eb':'Mib','E':'Mi',
  'F':'Fa','F#':'Fa#','Gb':'Solb','G':'Sol','G#':'Sol#','Ab':'Lab','A':'La',
  'A#':'La#','Bb':'Sib','B':'Si'
};

function latin(note){ return LATIN[note] || note; }

// Índice (0-11) de una nota, acepte sostenido o bemol
function noteIndex(note){
  let i = CHROMATIC_SHARP.indexOf(note);
  if (i >= 0) return i;
  i = CHROMATIC_FLAT.indexOf(note);
  return i;
}

// Devuelve el nombre de la nota en un índice, eligiendo ortografía
function noteName(index, useFlats){
  index = ((index % 12) + 12) % 12;
  return (useFlats ? CHROMATIC_FLAT : CHROMATIC_SHARP)[index];
}

// ---- INTERVALOS (distancia en semitonos) ----
const INTERVALS = [
  {st:0,  short:'1J',  name:'Unísono / 1ª justa'},
  {st:1,  short:'2m',  name:'2ª menor (semitono)'},
  {st:2,  short:'2M',  name:'2ª mayor (tono)'},
  {st:3,  short:'3m',  name:'3ª menor'},
  {st:4,  short:'3M',  name:'3ª mayor'},
  {st:5,  short:'4J',  name:'4ª justa'},
  {st:6,  short:'4A/5d', name:'Tritono (4ª aum. / 5ª dism.)'},
  {st:7,  short:'5J',  name:'5ª justa'},
  {st:8,  short:'6m',  name:'6ª menor'},
  {st:9,  short:'6M',  name:'6ª mayor'},
  {st:10, short:'7m',  name:'7ª menor'},
  {st:11, short:'7M',  name:'7ª mayor'},
  {st:12, short:'8J',  name:'8ª justa (octava)'}
];

// ---- ESCALAS: pasos en semitonos entre grados consecutivos ----
// (T = 2 semitonos, S = 1 semitono)
const SCALES = {
  mayor:          {steps:[2,2,1,2,2,2,1], label:'Mayor (jónico)'},
  menor_natural:  {steps:[2,1,2,2,1,2,2], label:'Menor natural (eólico)'},
  menor_armonica: {steps:[2,1,2,2,1,3,1], label:'Menor armónica'},
  menor_melodica: {steps:[2,1,2,2,2,2,1], label:'Menor melódica'},
  dorico:         {steps:[2,1,2,2,2,1,2], label:'Dórico'},
  frigio:         {steps:[1,2,2,2,1,2,2], label:'Frigio'},
  lidio:          {steps:[2,2,2,1,2,2,1], label:'Lidio'},
  mixolidio:      {steps:[2,2,1,2,2,1,2], label:'Mixolidio'},
  locrio:         {steps:[1,2,2,1,2,2,2], label:'Locrio'},
  pent_mayor:     {steps:[2,2,3,2,3],     label:'Pentatónica mayor'},
  pent_menor:     {steps:[3,2,2,3,2],     label:'Pentatónica menor'},
  blues:          {steps:[3,2,1,1,3,2],   label:'Escala de blues'}
};

// Construye las notas de una escala desde una tónica
function buildScale(root, scaleKey, useFlats){
  const def = SCALES[scaleKey];
  const notes = [];
  let idx = noteIndex(root);
  notes.push(noteName(idx, useFlats));
  // recorremos todos los pasos salvo el último (que vuelve a la tónica)
  let acc = idx;
  for (let i = 0; i < def.steps.length - 1; i++){
    acc += def.steps[i];
    notes.push(noteName(acc, useFlats));
  }
  return notes;
}

// ---- ACORDES: semitonos desde la fundamental ----
const CHORDS = {
  mayor:      {formula:[0,4,7],    suffix:'',     label:'Mayor',            why:'3ª mayor (4 st) + 3ª menor (3 st) encima = sonido brillante/alegre.'},
  menor:      {formula:[0,3,7],    suffix:'m',    label:'Menor',            why:'3ª menor (3 st) + 3ª mayor (4 st) encima = sonido oscuro/triste.'},
  aumentado:  {formula:[0,4,8],    suffix:'aug',  label:'Aumentado',        why:'Dos 3ª mayores apiladas (4+4). La 5ª queda "aumentada". Suena tenso, suspendido.'},
  disminuido: {formula:[0,3,6],    suffix:'dim',  label:'Disminuido',       why:'Dos 3ª menores apiladas (3+3). La 5ª queda "disminuida". Suena inestable, pide resolver.'},
  maj7:       {formula:[0,4,7,11], suffix:'maj7', label:'Mayor séptima',    why:'Tríada mayor + 7ª mayor. Color suave, jazzy.'},
  dom7:       {formula:[0,4,7,10], suffix:'7',    label:'Séptima (dominante)', why:'Tríada mayor + 7ª menor. Contiene un tritono: genera tensión que empuja a resolver.'},
  m7:         {formula:[0,3,7,10], suffix:'m7',   label:'Menor séptima',    why:'Tríada menor + 7ª menor. Suave y oscuro a la vez.'},
  m7b5:       {formula:[0,3,6,10], suffix:'m7b5', label:'Semidisminuido',   why:'Tríada disminuida + 7ª menor. Típico del grado vii y del ii en tonalidad menor.'},
  dim7:       {formula:[0,3,6,9],  suffix:'dim7', label:'Disminuido séptima', why:'Tres 3ª menores apiladas (3+3+3). Totalmente simétrico, muy tenso.'}
};

function buildChord(root, chordKey, useFlats){
  const def = CHORDS[chordKey];
  const idx = noteIndex(root);
  return def.formula.map(st => noteName(idx + st, useFlats));
}

// ---- ARMONIZACIÓN DE LA ESCALA MAYOR ----
// Qué acorde nace sobre cada grado al apilar terceras dentro de la escala.
const HARMONY_MAJOR = [
  {grade:'I',    roman:'I',    tri:'mayor',      seventh:'maj7', func:'Tónica'},
  {grade:'II',   roman:'ii',   tri:'menor',      seventh:'m7',   func:'Subdominante'},
  {grade:'III',  roman:'iii',  tri:'menor',      seventh:'m7',   func:'Tónica'},
  {grade:'IV',   roman:'IV',   tri:'mayor',      seventh:'maj7', func:'Subdominante'},
  {grade:'V',    roman:'V',    tri:'mayor',      seventh:'dom7', func:'Dominante'},
  {grade:'VI',   roman:'vi',   tri:'menor',      seventh:'m7',   func:'Tónica'},
  {grade:'VII',  roman:'vii°', tri:'disminuido', seventh:'m7b5', func:'Dominante'}
];

// ---- CÍRCULO DE QUINTAS ----
// 15 tonalidades mayores con su armadura y su relativa menor.
const CIRCLE = [
  {major:'C',  minor:'Am',  acc:0,  text:'0 alteraciones'},
  {major:'G',  minor:'Em',  acc:1,  text:'1 sostenido: F#'},
  {major:'D',  minor:'Bm',  acc:2,  text:'2 sostenidos: F# C#'},
  {major:'A',  minor:'F#m', acc:3,  text:'3 sostenidos: F# C# G#'},
  {major:'E',  minor:'C#m', acc:4,  text:'4 sostenidos: F# C# G# D#'},
  {major:'B',  minor:'G#m', acc:5,  text:'5 sostenidos: F# C# G# D# A#'},
  {major:'F#', minor:'D#m', acc:6,  text:'6 sostenidos: F# C# G# D# A# E#'},
  {major:'Db', minor:'Bbm', acc:-5, text:'5 bemoles: Bb Eb Ab Db Gb'},
  {major:'Ab', minor:'Fm',  acc:-4, text:'4 bemoles: Bb Eb Ab Db'},
  {major:'Eb', minor:'Cm',  acc:-3, text:'3 bemoles: Bb Eb Ab'},
  {major:'Bb', minor:'Gm',  acc:-2, text:'2 bemoles: Bb Eb'},
  {major:'F',  minor:'Dm',  acc:-1, text:'1 bemol: Bb'}
];

// ---- MÁSTIL DEL BAJO ----
// Afinación estándar de 4 cuerdas, de la más aguda (arriba) a la más grave.
// G (cuerda 1) - D - A - E (cuerda 4). Cada cuerda está a una 4ª justa de la siguiente.
const BASS_TUNING = ['G','D','A','E']; // orden de arriba (aguda) a abajo (grave) para dibujar
const FRETS = 12;

function fretNote(openNote, fret, useFlats){
  return noteName(noteIndex(openNote) + fret, useFlats);
}

// ¿Qué grado de una escala es esta nota? (devuelve número 1..n o null)
function degreeInScale(note, scaleNotes){
  const i = scaleNotes.map(noteIndex).indexOf(noteIndex(note));
  return i >= 0 ? i + 1 : null;
}
