(function(root){
  const item=(id,name,duration,reason)=>({id,name,duration,reason});
  const library={
    pulse:item("pulse","Marsj på stedet",60,"Start rolig, løft knærne og øk tempoet litt de siste 20 sekundene."),
    shoulders:item("shoulders","Arm Circles",35,"Lag små til store sirkler: først fremover, deretter bakover."),
    scapula:item("scapula","Scapula Push-ups",35,"Hold armene strake og før skulderbladene kontrollert sammen og fra hverandre."),
    press:item("press","Pushup mot vegg",40,"Gjør rolige repetisjoner og hold skuldrene nede før pressøvelsene."),
    thoracic:item("thoracic","Thoracic Rotation",35,"Roter rolig gjennom brystryggen, annenhver side."),
    pull:item("pull","Scapular Retractions",40,"Trekk skulderbladene bak og ned, slipp rolig tilbake."),
    ankle:item("ankle","Ankle Rocks",35,"Før kneet rolig frem over tærne uten at hælen løfter seg; bytt side halvveis."),
    hips:item("hips","Hoftesirkler",40,"Gjør kontrollerte sirkler og bytt retning halvveis."),
    squat:item("squat","Air Squats",45,"Gjør rolige knebøy med kroppsvekt og øk bevegelsesutslaget gradvis."),
    hinge:item("hinge","Standing Hip Hinge Drill",40,"Skyv hoften bak med nøytral rygg og reis deg kontrollert."),
    glutes:item("glutes","Glute Bridge",40,"Press gjennom føttene og spenn setet kort på toppen."),
    core:item("core","Dead Bug",40,"Beveg motsatt arm og bein rolig mens korsryggen holdes stabil."),
    specific:item("specific","Lett første hovedøvelse",60,"Gjør 8–10 rolige repetisjoner med svært lett belastning og god teknikk."),
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
    const specific=analysis.firstHeavy?{...library.specific,id:`specific-${analysis.firstHeavy.meta.id||analysis.firstHeavy.name}`,name:`Lett ${analysis.firstHeavy.name}`,reason:`Gjør 8–10 rolige repetisjoner med svært lett belastning. Dette forbereder den første hovedøvelsen.`}:null;
    const general=unique(chosen).filter(step=>step.id!=="specific").slice(0,specific?5:6);
    return specific?[...general,specific]:general;
  };
  root.TreningsbuddyWarmupEngine={analyze,generate,library};
})(typeof globalThis!=="undefined"?globalThis:this);
