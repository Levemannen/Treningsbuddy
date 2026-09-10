const assert = require("node:assert/strict");
require("../warmup-engine.js");
const engine=global.TreningsbuddyWarmupEngine;
const meta={
  Knebøy:{id:"squat",primary:"Fremside lår",secondary:["Sete"],movement:["Knebøy"],load:"Tung",type:"Baseøvelse"},
  Benkpress:{id:"bench",primary:"Bryst",secondary:["Triceps","Skuldre"],movement:["Push (press)"],load:"Tung",type:"Baseøvelse"},
  Nedtrekk:{id:"pulldown",primary:"Rygg",secondary:["Biceps"],movement:["Pull (trekk)"],load:"Moderat",type:"Baseøvelse"},
  Planke:{id:"plank",primary:"Mage",secondary:[],movement:["Kjerne/stabilitet"],load:"Kroppsvekt",type:"Assistanseøvelse"},
};
const getMeta=name=>meta[name];
const names=workout=>engine.generate(workout.map(name=>({name})),getMeta).map(step=>step.name);
const legs=names(["Knebøy"]),push=names(["Benkpress"]),pull=names(["Nedtrekk"]),full=names(["Knebøy","Benkpress","Planke"]);
assert.ok(legs.includes("Ankelmobilitet")&&legs.includes("Knebøy med kroppsvekt"));
assert.ok(push.includes("Armsirkler og skulderblad")&&push.includes("Scapula push-ups"));
assert.ok(pull.includes("Brystryggrotasjon")&&pull.includes("Lette skulderbladstrekk"));
assert.ok(full.includes("Ankelmobilitet")&&full.includes("Armsirkler og skulderblad"));
assert.notDeepEqual(legs,push);
assert.ok(legs.length<=6&&push.length<=6&&full.length<=6);
console.log("Oppvarmingsmotor: alle tester bestått");
