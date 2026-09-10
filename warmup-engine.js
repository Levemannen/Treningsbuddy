(function(root){
  const item=(id,name,duration,reason)=>({id,name,duration,reason});
  const library={
    pulse:item("pulse","Rolig pulsøkning",40,"Øker temperatur og gjør kroppen klar."),
    shoulders:item("shoulders","Armsirkler og skulderblad",35,"Forbereder skuldre og øvre rygg."),
    scapula:item("scapula","Scapula push-ups",35,"Aktiverer skulderbladene før press."),
    press:item("press","Lett spesifikk pressoppvarming",45,"Øv bevegelsen med svært lett belastning."),
    thoracic:item("thoracic","Brystryggrotasjon",35,"Forbereder brystrygg og skulderbevegelse."),
    pull:item("pull","Lette skulderbladstrekk",40,"Aktiverer rygg før trekkøvelser."),
    ankle:item("ankle","Ankelmobilitet",35,"Forbereder anklene på knebøy og utfall."),
    hips:item("hips","Dynamisk hofteåpner",40,"Forbereder hofte og knær."),
    squat:item("squat","Knebøy med kroppsvekt",45,"Øver knebøymønsteret før belastning."),
    hinge:item("hinge","Hoftehengsel uten vekt",40,"Forbereder bakside og rygg på hoftehengsel."),
    glutes:item("glutes","Seteaktivering",40,"Aktiverer sete før underkroppsarbeid."),
    core:item("core","Dead bug",40,"Aktiverer kjernen før belastning."),
    specific:item("specific","Lett spesifikk oppvarming",50,"Utfør første hovedøvelse med svært lett belastning."),
  };
  const unique=items=>items.filter((value,index,array)=>array.findIndex(other=>other.id===value.id)===index);
  const analyze=(exercises,metaFor)=>{
    const metadata=(exercises||[]).map(exercise=>({exercise,name:exercise.name||String(exercise),meta:metaFor(exercise.name||String(exercise))}));
    const movements=new Set(metadata.flatMap(row=>row.meta.movement||[]));
    const muscles=new Set(metadata.flatMap(row=>[row.meta.primary,...(row.meta.secondary||[])]).filter(Boolean));
    const heavy=metadata.filter(row=>row.meta.load==="Tung"||row.meta.type==="Baseøvelse");
    return {metadata,movements,muscles,heavy,firstHeavy:heavy[0]||metadata[0]||null};
  };
  const generate=(exercises,metaFor)=>{
    const analysis=analyze(exercises,metaFor),chosen=[library.pulse];
    const has=movement=>analysis.movements.has(movement);
    const lower=["Fremside lår","Bakside lår","Sete","Legger"].some(muscle=>analysis.muscles.has(muscle));
    const upper=["Bryst","Rygg","Skuldre","Biceps","Triceps"].some(muscle=>analysis.muscles.has(muscle));
    if(has("Knebøy")||has("Utfall")){chosen.push(library.ankle,library.hips,library.squat);}
    if(has("Hoftehengsel")){chosen.push(library.glutes,library.hinge);}
    if(has("Push (press)")){chosen.push(library.shoulders,library.scapula,library.press);}
    if(has("Pull (trekk)")){chosen.push(library.thoracic,library.pull);}
    if(has("Kjerne/stabilitet")||analysis.muscles.has("Mage")||analysis.muscles.has("Korsrygg"))chosen.push(library.core);
    if(lower&&!chosen.some(value=>value.id==="hips"))chosen.push(library.hips,library.glutes);
    if(upper&&!chosen.some(value=>value.id==="shoulders"))chosen.push(library.shoulders);
    if(analysis.firstHeavy){const target=analysis.firstHeavy.name;chosen.push({...library.specific,id:`specific-${analysis.firstHeavy.meta.id||target}`,name:`Lett ${target}`,reason:`Forbered bevegelsen som kommer først i økten.`});}
    return unique(chosen).slice(0,6);
  };
  root.TreningsbuddyWarmupEngine={analyze,generate,library};
})(typeof globalThis!=="undefined"?globalThis:this);
