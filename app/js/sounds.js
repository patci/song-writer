var amaj = new Audio();
amaj.src ='/chords/amaj.wav';
amaj.load();
var amin = new Audio();
amin.src = '/chords/amin.wav';
amin.load();
var bflatmaj = new Audio();
bflatmaj.src ='/chords/bflatmaj.wav';
bflatmaj.load();
var bflatmin = new Audio();
bflatmin.src = '/chords/bflatmin.wav';
bflatmin.load();
var bmaj = new Audio();
bmaj.src ='/chords/bmaj.wav';
bmaj.load();
var bmin = new Audio();
bmin.src = '/chords/bmin.wav';
bmin.load();
var cmaj = new Audio();
cmaj.src = '/chords/cmaj.wav';
cmaj.load();
var cmin = new Audio();
cmin.src = '/chords/cmin.wav';
cmin.load();
var csharpmaj = new Audio();
csharpmaj.src = '/chords/csharpmaj.wav';
csharpmaj.load();
var csharpmin = new Audio();
csharpmin.src = '/chords/csharpmin.wav';
csharpmin.load();
var dmaj = new Audio();
dmaj.src = '/chords/dmaj.wav';
dmaj.load();
var dmin = new Audio();
dmin.src = '/chords/dmin.wav';
dmin.load();
var eflatmaj = new Audio();
eflatmaj.src = '/chords/eflatmaj.wav';
eflatmaj.load();
var eflatmin = new Audio();
eflatmin.src = '/chords/eflatmin.wav';
eflatmin.load();
var emaj = new Audio();
emaj.src = '/chords/emaj.wav';
emaj.load();
var emin = new Audio();
emin.src = '/chords/emin.wav';
emin.load();
var fmaj = new Audio();
fmaj.src = '/chords/fmaj.wav';
fmaj.load();
var fmin = new Audio();
fmin.src = '/chords/fmin.wav';
fmin.load();
var fsharpmaj = new Audio();
fsharpmaj.src = '/chords/fsharpmaj.wav';
fsharpmaj.load();
var fsharpmin = new Audio();
fsharpmin.src = '/chords/fsharpmin.wav';
fsharpmin.load();
var gmaj = new Audio();
gmaj.src = '/chords/gmaj.wav';
gmaj.load();
var gmin = new Audio();
gmin.src = '/chords/gmin.wav';
gmin.load();
var gsharpmaj = new Audio();
gsharpmaj.src = '/chords/gsharpmaj.wav';
gsharpmaj.load();
var gsharpmin = new Audio();
gsharpmin.src = '/chords/gsharpmin.wav';
gsharpmin.load();
	
var triads = {amaj, amin, bflatmaj, bflatmin, bmaj, bmin, cmaj, cmin, 
							csharpmaj, csharpmin, dmaj, dmin, eflatmaj, eflatmin, emaj, emin,
							fmaj, fmin, fsharpmaj, fsharpmin, gmaj, gmin, gsharpmaj, gsharpmin};

var a = new Audio();
a.src = '/notes/a.wav';
a.load();
var ashrp = new Audio();
ashrp.src = '/notes/ashrp.wav';
ashrp.load();
var b = new Audio();
b.src = '/notes/b.wav';
b.load();
var c = new Audio();
c.src = '/notes/c.wav';
c.load();
var cshrp = new Audio();
cshrp.src = '/notes/cshrp.wav';
cshrp.load();
var d = new Audio();
d.src = '/notes/d.wav';
d.load();
var dshrp = new Audio();
dshrp.src = '/notes/dshrp.wav';
dshrp.load();
var e = new Audio();
e.src = '/notes/e.wav';
e.load();
var f = new Audio();
f.src = '/notes/f.wav';
f.load();
var fshrp = new Audio();
fshrp.src = '/notes/fshrp.wav';
fshrp.load();
var g = new Audio();
g.src = '/notes/g.wav';
g.load();
var gshrp = new Audio();
gshrp.src = '/notes/gshrp.wav';
gshrp.load();

var notes = {a, ashrp, b, c, cshrp, d, dshrp, e, f, fshrp, g, gshrp};


var sounds = {triads, notes};

module.exports = exports = sounds;