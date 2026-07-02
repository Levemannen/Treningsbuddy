const tabs = [["home","Start"],["templates","Øktmaler"],["push","Push"],["pull","Pull"],["fullbody","Fullbody"],["crosstrening","Cross"],["tabata","Tabata"],["core","Core"],["kroppsvekt","Kroppsvekt"],["morgen","Morgen"],["toying","Tøying"],["nodokt","Nødøkt"],["bank","Øvelser"],["builder","Bygger"],["history","Historikk"]];
      const favorites = ["Deadlift","Landmine Press","Stangroing","Frontbøy","Floor Press","Inverted Rows","Pushups","Push Press","Shrugs","Bicepscurl","Triceps Extension","Planke/Rollout"];
      const equipment = ["Kroppsvekt","Manualer","Stang","Kabel","Maskin","Kettlebell","Strikk","TRX/slynger","Smith-maskin","Landmine","Medisinball","Annet","Benk","Pullupstang"];
      const groups = {
        push:{"Horisontal push (brystfokus)":["Pushups","Pushup","Knee pushup","Incline Pushups","Incline pushup","Decline Pushups","Decline pushup","Diamond Pushups","Diamond pushup","Wide pushup","Close Grip Pushups","Close-grip pushup","Archer Pushups","Archer pushup","Ring Pushups","Ring pushup","Deficit pushup","Explosive pushup","Clap pushup","One-arm pushup","Flyes","Cable Flyes","Machine Chest Press","Hantelpress"],"Benkpress-varianter":["Benkpress","Smal benkpress","Close Grip Bench Press","Bred benkpress","Pausert benkpress","Spoto press","Floor Press","Floor press","Pin press","Larsen press","Incline benkpress","Skrå hantelpress","Decline benkpress","Dumbbell bench press","Dumbbell Bench Press","Dumbbell floor press","Dumbbell Floor Press","Swiss bar bench press"],"Vertikal push (skulderfokus)":["Skulderpress","Skulderpress med stang","Skulderpress med manualer","Hantel Skulderpress","Sittende skulderpress","Stående skulderpress","Arnold Press","Arnold press","Push Press","Push press","Z-Press","Z-press","Landmine Press","Landmine press","Enarms landmine press"],"Kroppsvekt vertikal push":["Pike Pushups","Pike pushup","Elevated pike pushup","Handstand hold","Wall Handstand Hold","Wall handstand pushup","Handstand pushup","Deficit handstand pushup"],Dips:["Dips","Benkdips","Bench Dips","Ring dips","Korean dips","Straight bar dips"],"Side- og frontskuldre":["Sidehev","Lean-away lateral raise","Fronthev","Plate raise","Y-Raise","Y-raise","Cuban raise","Facepull","Upright Row"],Triceps:["Rope Pushdown","Triceps pushdown","Overhead Triceps Extension","Overhead triceps extension","Enarms overhead extension","Triceps Extension","Skull Crushers","Skull crushers","JM press","Tate press","Close Grip Pushups","Close-grip pushup","Smal benkpress","Bench Dips","Bench dips","Triceps Kickback"],"Push-øvelser med kettlebell":["Kettlebell press","Kettlebell push press","Bottom-up press","Kettlebell floor press"],"Push-øvelser med landmine":["Landmine Press","Landmine press","Enarms landmine press","Landmine thruster"]},
        pull:{Rygg:["Deadlift","Pullups","Nedtrekk","Stangroing","Seated Row","Enarms Roing","Chest Supported Row","Inverted Rows","T-Bar Row","Meadows Row","Straight Arm Pulldown","Rack Pull","Good Morning"],"Bakside skulder":["Reverse Flyes","Facepull","Band Pull Aparts","Rear Delt Row","Cable Reverse Flyes"],Biceps:["Stangcurl","Hantelcurl","Hammercurl","Bicepscurl","Incline Hantelcurl","Preacher Curl","Cable Curl","Reverse Curl"],Grep:["Farmer's Hold","Dead Hang","Plate Pinch","Suitcase Carry","Wrist Curl"]},
    core:{"Planke-varianter":["Planke","Høy planke","Lang planke","RKC-planke","Planke med benløft","Planke med armstrekk","Planke med skuldertouch","Planke til albue (commando plank)","Sideplanke","Sideplanke med benløft","Sideplanke med rotasjon","Copenhagen Plank","Omvendt planke","Planke/Rollout"],"Dead bug / Bird dog":["Dead Bug","Dead bug med armstrekk","Dead bug med benstrekk","Dead bug med arm og ben","Bird Dog","Bird dog med pause","Bird dog crunch"],"Hollow body":["Hollow Hold","Hollow rocks","Hollow tuck hold","Hollow body flutter kicks","Hollow body scissors"],"Crunch-varianter":["Crunch","Reverse Crunch","Bicycle crunch","Toe touch crunch","Heel touch crunch","Oblique crunch","Cross-body crunch","Double crunch"],"Situp-varianter":["Situps","Butterfly situp","Jackknife situp","V-up","Tuck-up","Sprinter situp","Boat Pose"],"Beinhev-varianter":["Leg Raises","Liggende beinhev","Enkeltbeinshev","Saksespark","Flutter kicks","Leg raise hold","Reverse leg raise","Ab Wheel Rollout"],"Skrå magemuskler":["Russian Twist","Russian twist (uten vekt)","Side crunch","Sideplanke med hoftefall","Windshield wipers","Oblique V-up","Plank Knee To Elbow","Pallof Press","Wood Chop"],"L-sit-familien":["Tuck sit","L-sit","Enkeltbeins L-sit","V-sit","Tuck hold"],"Rygg og bakside core":["Superman","Alternating superman","Superman hold","Back Extension","Back extension på gulv","Svømmeren (Swimmer)","Glute Bridge","Enbeins glute bridge","Hip thrust (kroppsvekt)","Hip Extension Hold"],"Dynamiske core-øvelser":["Mountain Climbers","Cross-body mountain climbers","Bear Crawl","Crab walk","Leopard crawl","Army crawl","Inchworm","Plank Walkouts","Plank jacks","Commandos","Shoulder Taps","Stir The Pot"],"Avanserte kroppsvektøvelser":["Dragon flag","Hanging knee raise","Hanging leg raise","Hanging windshield wipers","Toes to bar","Front lever tuck","Front lever raises"]},
        kroppsvekt:{Press:["Pushups","Wall Pushups","Pike Pushups","Dips","Diamond Pushups","Decline Pushups","Hand Release Pushups","Archer Pushups","Shoulder Tap Pushups","Wall Handstand Hold"],Trekk:["Inverted Rows","Dead Hang","Scapular Pullups","Negative Pullups","Towel Row","Table Row","Isometric Row Hold"],Bein:["Squat","Reverse Lunge","Bulgarian Split Squat","Calf Raises","Step Ups","Cossack Squat","Wall Sit","Single Leg RDL","Jump Squat","Skater Squat","Split Squat Hold"],Hofte:["Glute Bridge","Hip Thrust","Single Leg Glute Bridge","Frog Pumps","Marching Glute Bridge"],Rygg:["Superman","Back Extension","Prone Y-T-W","Swimmers","Alternating Superman"],Kjerne:["Planke","Sideplanke","Commandos","Mountain Climbers","Dead Bug","Bird Dog","Hollow Hold","Plank Walkouts","Plank Shoulder Taps"]},
        morgen:{"Morgenrutiner":["Pushups","Alternating Superman","Bird Dog","Glute Bridge","Dead Bug","Standing Hip Hinge Drill","Calf Raises","Tall Posture Hold","Wall Pushups","Arm Circles","Reverse Lunges","Hip Flexor Stretch","Thoracic Rotation","Heel To Toe Balance Walk","Scapular Retractions","Nasal Breathing","Cat Cow","World's Greatest Stretch","Ankle Rocks","Wall Slides"]},
        fullbody:{Favorittbank:favorites,Underkropp:["Goblet Squat","Frontbøy","Romanian Deadlift","Step Ups","Bulgarian Split Squat","Hip Thrust","Calf Raises"],Overkropp:["Hantelpress","Landmine Press","Stangroing","Pullups","Floor Press","Inverted Rows","Facepull"],Kondisjon:["Kettlebell Swing","Sled Push","Battle Ropes","Medicine Ball Slam","Jump Rope"]},
        crosstrening:{Crosstrening:["Pushups","Rows","Air Squats","Burpees","Goblet Hold","Hollow Hold","Plank Walkouts","Dumbbell Deadlift","Mountain Climbers","Push Press","Bent Over Row","Situps","Renegade Rows","Kettlebell Swing","Box Step Overs","Wall Balls","Jump Rope","Walking Lunges","Bear Crawl","Medicine Ball Slam","Devil Press","Battle Ropes","Sled Push","Shuttle Run","High Knees","Box Jumps","Lateral Shuffle","Bear Crawl Drag"]},
        toying:{Tøying:["Hamstring Stretch","Standing Quad Stretch","Hip Flexor Stretch","Couch Stretch","Figure Four Stretch","Glute Stretch","Calf Stretch","Butterfly Stretch","Frog Stretch","Adductor Rock Back","90/90 Hip Stretch","World's Greatest Stretch","Doorway Chest Stretch","Cross Body Shoulder Stretch","Overhead Triceps Stretch","Lat Stretch","Neck Side Stretch","Child's Pose","Cat Cow","Downward Dog","Low Lunge","Half Split","Pigeon Pose","Seated Forward Fold","Thread The Needle","Supine Twist","Happy Baby","Standing Forward Fold"]}
      };
      groups.core = {Core: [...new Set(Object.values(groups.core).flat())]};
      groups.kroppsvekt = {Kroppsvekt: [...new Set(Object.values(groups.kroppsvekt).flat())]};
      groups.tabata = {Tabata: [...groups.kroppsvekt.Kroppsvekt]};
      const templates = [
        {id:"push-90",cat:"push",name:"Push 90 min",duration:90,desc:"Benkpress: 2 oppvarmingssett, 3 x 6-8",ex:[["Benkpress",3,"6-8"],["Skrå hantelpress",4,"8-12"],["Skulderpress",4,"6-10"],["Sidehev",4,"12-15"],["Facepull",3,"15-20"],["Rope Pushdown",3,"10-12"],["Overhead Triceps Extension",2,"12-15"],["Dips",3,"6-10"]]},
        {id:"push-60",cat:"push",name:"Push 60 min",duration:60,desc:"Rask styrkeøkt med favorittpress.",ex:[["Frontbøy",4,6],["Landmine Press",3,8],["Floor Press",3,"8-10"],["Push Press",3,6],["Pushups",3,"sett"],["Triceps Extension",3,12]]},
        {id:"pull-90",cat:"pull",name:"Pull 90 min",duration:90,desc:"Rygg, bakside skulder, biceps og grep.",ex:[["Pullups/Nedtrekk",3,"6-10"],["Stangroing",4,"6-10"],["Stangcurl",4,"8-12"],["Enarms Hantelroing",3,"8-12"],["Reverse Flyes",3,"12-15"],["Hantelcurl",3,"10-12"],["Hammercurl",2,"12-15"],["Farmer's Hold",2,"sett"]]},
        {id:"pull-60",cat:"pull",name:"Pull 60 min",duration:60,desc:"Kort tung trekkøkt med deadlift.",ex:[["Deadlift",4,5],["Stangroing",3,8],["Seated Row",3,10],["Inverted Rows",3,"10-12"],["Shrugs",3,12],["Bicepscurl",3,"10-12"],["Planke/Rollout",3,"sett"]]},
        {id:"fullbody-styrke",cat:"fullbody",name:"Fullbody Styrke",desc:"Favorittbanken.",ex:favorites.map(n=>[n,3,"8-12"])},
        {id:"fullbody-enkel",cat:"fullbody",name:"Fullbody Enkel",desc:"Velg 6-8 øvelser fra favorittbanken.",ex:favorites.slice(0,8).map(n=>[n,3,"rolig"])},
        {id:"morgen-a",cat:"morgen",name:"Morgen A",duration:8,desc:"8 min.",ex:["Pushups","Alternating Superman","Bird Dog","Glute Bridge","Dead Bug","Standing Hip Hinge Drill","Calf Raises","Tall Posture Hold"].map(n=>[n,1,"45 sek"])},
        {id:"morgen-b",cat:"morgen",name:"Morgen B",duration:8,desc:"8 min.",ex:["Wall Pushups","Arm Circles","Reverse Lunges","Hip Flexor Stretch","Thoracic Rotation","Heel To Toe Balance Walk","Scapular Retractions","Nasal Breathing"].map(n=>[n,1,"45 sek"])},
        {id:"toying-enkel",cat:"toying",name:"Tøying Enkel",duration:8,desc:"Rolig tøying for hele kroppen.",ex:["Hamstring Stretch","Hip Flexor Stretch","Figure Four Stretch","Doorway Chest Stretch","Lat Stretch","Supine Twist"].map(n=>[n,1,"45 sek"])},
        {id:"nodokt-8",cat:"nodokt",name:"Nødøkt",duration:8,desc:"8 minutter når alt annet ryker.",ex:["Pushups","Inverted Rows","Glute Bridge","Dead Bug","Sideplanke","Dead Hang"].map(n=>[n,1,"AMRAP"])}
      ];
      const workoutTemplates = [
        {id:"tpl-fullbody-20",cat:"fullbody",name:"20 min fullbody",duration:20,level:"Middels",desc:"Kort helkroppsøkt med enkel flyt fra bein til press, trekk og kjerne.",equipment:"Kroppsvekt, manualer eller kettlebell",timerChoice:"interval",work:45,pause:15,rounds:3,ex:[["Goblet Squat",1,"45 sek"],["Pushups",1,"45 sek"],["Stangroing",1,"45 sek"],["Glute Bridge",1,"45 sek"],["Hollow Hold",1,"45 sek"],["Farmer's Hold",1,"45 sek"]]},
        {id:"tpl-tabata-10",cat:"tabata",name:"10 min tabata",duration:10,level:"Middels",desc:"Klassisk 20/10-oppsett med kroppsvektøvelser og høy puls.",equipment:"Kroppsvekt",timerChoice:"tabata",work:20,pause:10,rounds:8,ex:[["Pushups",1,"20/10"],["Air Squats",1,"20/10"],["Mountain Climbers",1,"20/10"],["Hollow Hold",1,"20/10"]]},
        {id:"tpl-push-beginner",cat:"push",name:"Push nybegynner",duration:35,level:"Nybegynner",desc:"Rolig pressøkt for bryst, skuldre og triceps med god teknikk først.",equipment:"Kroppsvekt, manualer, kabel",timerChoice:"none",ex:[["Incline pushup",3,"8-12"],["Dumbbell bench press",3,"8-10"],["Landmine Press",3,"8"],["Sidehev",3,"12-15"],["Triceps pushdown",3,"10-12"]]},
        {id:"tpl-pull-home",cat:"pull",name:"Pull hjemme",duration:30,level:"Nybegynner",desc:"Rygg og biceps hjemme med kroppsvekt, bord/slynge eller lett utstyr.",equipment:"Kroppsvekt, strikk, bord/TRX",timerChoice:"none",ex:[["Inverted Rows",3,"8-12"],["Band Pull Aparts",3,"15-20"],["Towel Row",3,"10-12"],["Dead Hang",3,"20-40 sek"],["Bicepscurl",3,"10-12"]]},
        {id:"tpl-core-quick",cat:"core",name:"Kjapp kjerneøkt",duration:12,level:"Nybegynner",desc:"Rask kjerneøkt med stabilitet, anti-ekstensjon og kontroll.",equipment:"Kroppsvekt",timerChoice:"interval",work:40,pause:20,rounds:3,ex:[["Dead Bug",1,"40 sek"],["Sideplanke",1,"40 sek"],["Hollow Hold",1,"40 sek"],["Bird Dog",1,"40 sek"],["Planke med skuldertouch",1,"40 sek"]]},
        {id:"tpl-hot-tabata",cat:"tabata",name:"Hot tabata",duration:16,level:"Avansert",desc:"Mer intens tabata med spenst, kjerne og høyere puls.",equipment:"Kroppsvekt",timerChoice:"tabata",work:20,pause:10,rounds:8,ex:[["Burpees",1,"20/10"],["Jump Squat",1,"20/10"],["Cross-body mountain climbers",1,"20/10"],["Plank jacks",1,"20/10"],["Explosive pushup",1,"20/10"]]},
        {id:"tpl-stretch-calm",cat:"toying",name:"Rolig tøying",duration:10,level:"Nybegynner",desc:"Rolig tøying for hofter, rygg og skuldre.",equipment:"Matte",timerChoice:"interval",work:45,pause:10,rounds:1,ex:[["Child's Pose",1,"45 sek"],["Cat Cow",1,"45 sek"],["Downward Dog",1,"45 sek"],["Low Lunge",1,"45 sek"],["Pigeon Pose",1,"45 sek"],["Supine Twist",1,"45 sek"]]},
        {id:"tpl-bodyweight-home",cat:"kroppsvekt",name:"Kroppsvekt hjemme",duration:25,level:"Middels",desc:"Hjemmeøkt uten utstyr med press, bein, rygg og core.",equipment:"Kroppsvekt",timerChoice:"interval",work:45,pause:15,rounds:4,ex:[["Pushups",1,"45 sek"],["Reverse Lunge",1,"45 sek"],["Inverted Rows",1,"45 sek"],["Glute Bridge",1,"45 sek"],["Mountain Climbers",1,"45 sek"],["Dead Bug",1,"45 sek"]]},
        {id:"tpl-back-mobility",cat:"toying",name:"Mobilitet for rygg",duration:14,level:"Nybegynner",desc:"Skånsom rutine for rygg, hofter og brystrygg.",equipment:"Matte",timerChoice:"interval",work:45,pause:15,rounds:2,ex:[["Cat Cow",1,"45 sek"],["Thread The Needle",1,"45 sek"],["Sphinx",1,"45 sek"],["Back extension på gulv",1,"45 sek"],["Bird Dog",1,"45 sek"],["Supine Twist",1,"45 sek"]]},
        {id:"tpl-legs-glutes",cat:"fullbody",name:"Bein og sete",duration:35,level:"Middels",desc:"Underkroppsøkt med knebøy, utfall og hofteekstensjon.",equipment:"Kroppsvekt, manualer eller stang",timerChoice:"none",ex:[["Frontbøy",4,"6"],["Bulgarian Split Squat",3,"8-10"],["Hip Thrust",3,"8-12"],["Romanian Deadlift",3,"8-10"],["Calf Raises",3,"12-20"],["Sideplanke",2,"30 sek"]]}
      ];
      const allNames = [...new Set([...favorites,...Object.values(groups).flatMap(g=>Object.values(g).flat()),...[...templates,...workoutTemplates].flatMap(t=>t.ex.map(x=>x[0]))])].sort((a,b)=>a.localeCompare(b,"no"));
      const filterData = {
        muscles:["Bryst","Rygg","Skuldre","Biceps","Triceps","Underarm","Mage","Korsrygg","Sete","Fremside lår","Bakside lår","Legger","Full kropp"],
        movements:["Push (press)","Pull (trekk)","Knebøy","Hoftehengsel","Utfall","Rotasjon","Bæring","Hopp/spenst","Kjerne/stabilitet"],
        levels:["Nybegynner","Middels","Avansert"],
        goals:["Muskelvekst","Styrke","Eksplosivitet","Utholdenhet","Mobilitet","Rehabilitering","Fettforbrenning"],
        bank:["Push","Pull","Bein","Fullkropp","Morgenrutine","Hjemmetrening","Gym","Håndball-spesifikk","Mobilitet","Rehab/skadeforebygging"]
      };
      const contains = (name, words) => words.some(w=>name.toLowerCase().includes(w.toLowerCase()));
      const inGroup = (name, cat, title) => groups[cat] && groups[cat][title] && groups[cat][title].includes(name);
      const inCategory = (name, cat) => groups[cat] && Object.values(groups[cat]).some(list=>list.includes(name));
      const metaFor = name => {
        const lower=name.toLowerCase(), push=inCategory(name,"push"), pull=sameGroup(name,"Deadlift")||inGroup(name,"pull","Rygg")||inGroup(name,"pull","Bakside skulder")||inGroup(name,"pull","Biceps")||inGroup(name,"pull","Grep"), core=inCategory(name,"core");
        const pushShoulder = inGroup(name,"push","Vertikal push (skulderfokus)")||inGroup(name,"push","Kroppsvekt vertikal push")||inGroup(name,"push","Side- og frontskuldre")||inGroup(name,"push","Push-øvelser med landmine");
        const pushTriceps = inGroup(name,"push","Triceps")||inGroup(name,"push","Dips")||contains(name,["triceps","pushdown","extension","skull","JM press","Tate press","Smal benk","Close-grip","Close Grip"]);
        let primary = push ? (pushTriceps?"Triceps":pushShoulder?"Skuldre":"Bryst") : pull ? (inGroup(name,"pull","Biceps")?"Biceps":inGroup(name,"pull","Grep")?"Underarm":"Rygg") : core ? (inGroup(name,"core","Rygg og bakside core")?"Korsrygg":"Mage") : "Full kropp";
        if (contains(name,["Squat","Frontbøy","Lunge","Split Squat","Step Ups","Wall Sit","Air Squats","Cossack"])) primary="Fremside lår";
        if (contains(name,["Deadlift","Hip Thrust","Glute Bridge","Kettlebell Swing","Hip Hinge","Good Morning","RDL","Romanian"])) primary=contains(name,["Hip Thrust","Glute Bridge"])?"Sete":"Bakside lår";
        if (contains(name,["Calf"])) primary="Legger";
        const secondary = [...new Set([push&&"Triceps", push&&"Skuldre", pull&&"Biceps", pull&&"Bakside skulder", core&&"Korsrygg", contains(name,["Squat","Lunge","Step"])&&"Sete", contains(name,["Deadlift","Swing","Good Morning"])&&"Korsrygg"].filter(Boolean).filter(x=>x!==primary))].slice(0,3);
        const equip = [...new Set([contains(name,["Hantel","Dumbbell","manualer","Goblet","Renegade","Devil","Tate press"])&&"Manualer", contains(name,["Stang","stang","bar","Benkpress","Deadlift","Frontbøy","Good Morning","Curl","Spoto","Pin press","Larsen","JM press"])&&"Stang", contains(name,["Cable","Kabel","Rope","Pulldown","Nedtrekk","Pushdown"])&&"Kabel", contains(name,["Machine"])&&"Maskin", contains(name,["Kettlebell","Bottom-up","Swing"])&&"Kettlebell", contains(name,["Band","Strikk"])&&"Strikk", contains(name,["TRX","Ring"])&&"TRX/slynger", contains(name,["Smith"])&&"Smith-maskin", contains(name,["Landmine"])&&"Landmine", contains(name,["Medicine","Medisinball","Wall Balls","Slam"])&&"Medisinball", contains(name,["Benk","Bench","Floor Press","floor press"])&&"Benk", contains(name,["Pullups","Dead Hang","Scapular"])&&"Pullupstang"].filter(Boolean))];
        if (!equip.length) equip.push(contains(name,["Pushup","Pushups","Dips","Benkdips","Handstand","Pike","Planke","plank","Situps","situp","Crunch","Beinhev","Leg raise","Flutter","Saksespark","V-up","Tuck","L-sit","V-sit","Dragon flag","Hanging","Toes to bar","Front lever","Burpees","Squat","Lunge","Superman","Swimmer","Svømmeren","Bird Dog","Bird dog","Hollow","Dead Bug","Dead bug","Bear Crawl","Bear crawl","Crab walk","Leopard crawl","Army crawl","Inchworm","Mountain","Glute Bridge","glute bridge","Hip thrust"])?"Kroppsvekt":"Annet");
        const movement = contains(name,["Press","Push","Dips","Fly","Extension"])||push?["Push (press)"]:contains(name,["Row","Roing","Pull","Curl","Hang","Shrugs","Nedtrekk"])||pull?["Pull (trekk)"]:contains(name,["Squat","Frontbøy"])?["Knebøy"]:contains(name,["Deadlift","Hinge","Swing","Good Morning","Hip Thrust","Glute Bridge"])?["Hoftehengsel"]:contains(name,["Lunge","Split Squat","Step"])?["Utfall"]:contains(name,["Twist","Rotation","Wood Chop","Pallof"])?["Rotasjon","Kjerne/stabilitet"]:contains(name,["Carry","Farmer","Suitcase","Hold","Pinch"])?["Bæring"]:contains(name,["Jump","Burpees","Wall Balls","Slam"])?["Hopp/spenst"]:["Kjerne/stabilitet"];
        const difficulty = contains(name,["Pullups","Handstand pushup","Deficit","Weighted","Ring","Rollout","Copenhagen","Meadows","Devil","Z-Press","Dragon flag","Hanging windshield","Toes to bar","Front lever","L-sit","V-sit","One-arm","Archer","Clap","Explosive","Korean dips","Straight bar dips"])?"Avansert":contains(name,["Wall","Knee pushup","Incline pushup","Dead Bug","Dead bug","Bird Dog","Bird dog","Glute Bridge","glute bridge","Calf Raises","Nasal","Breathing","Arm Circles","Planke","plank","Crunch","Heel touch"])?"Nybegynner":"Middels";
        const bodyPart = primary==="Full kropp"||contains(name,["Burpees","Devil","Battle","Sled","Jump Rope"])?"Full kropp":["Mage","Korsrygg"].includes(primary)?"Kjerne":["Sete","Fremside lår","Bakside lår","Legger"].includes(primary)?"Underkropp":"Overkropp";
        const load = equip.includes("Kroppsvekt")?"Kroppsvekt":contains(name,["Deadlift","Frontbøy","Benkpress","Rack Pull"])?"Tung":contains(name,["Sidehev","Facepull","Reverse","Curl","Extension","Bird Dog","Dead Bug"])?"Lett":"Moderat";
        const side = contains(name,["Enarms","One-arm","Single Leg","Suitcase","Bulgarian","Lunge","Step Ups","Sideplanke"])?"Unilateral":"Bilateral";
        const type = contains(name,["Curl","Sidehev","Fronthev","lateral raise","Plate raise","Cuban raise","Extension","Pushdown","Fly","Calf","Wrist"])?"Isolasjonsøvelse":contains(name,["Stretch","Rotation","Ankle","Wall Slides","Breathing"])?"Mobilitet":contains(name,["Jump Rope","Battle","Sled","Burpees","Mountain","Wall Balls"])?"Kondisjon":contains(name,["Arm Circles","Scapular","Hinge Drill"])?"Oppvarming":contains(name,["Facepull","Band Pull","Y-Raise","Pallof","Dead Bug","Bird Dog","Spoto","Pin press","Larsen","Bottom-up"])?"Assistanseøvelse":"Baseøvelse";
        const goals = [...new Set([["Baseøvelse","Assistanseøvelse"].includes(type)&&"Styrke", ["Baseøvelse","Isolasjonsøvelse","Assistanseøvelse"].includes(type)&&"Muskelvekst", contains(name,["Push Press","Jump","Slam","Swing","Burpees","Sled"])&&"Eksplosivitet", ["Kondisjon"].includes(type)&&"Utholdenhet", ["Mobilitet","Oppvarming"].includes(type)&&"Mobilitet", contains(name,["Facepull","Dead Bug","Bird Dog","Pallof","Band Pull","Scapular","Wall Slides"])&&"Rehabilitering", contains(name,["Burpees","Jump Rope","Mountain","Battle","Sled"])&&"Fettforbrenning"].filter(Boolean))];
        const bankCats = [...new Set([push&&"Push", pull&&"Pull", ["Sete","Fremside lår","Bakside lår","Legger"].includes(primary)&&"Bein", bodyPart==="Full kropp"&&"Fullkropp", groups.morgen.Morgenrutiner.includes(name)&&"Morgenrutine", equip.includes("Kroppsvekt")&&"Hjemmetrening", !equip.includes("Kroppsvekt")&&"Gym", goals.includes("Eksplosivitet")&&"Håndball-spesifikk", type==="Mobilitet"&&"Mobilitet", goals.includes("Rehabilitering")&&"Rehab/skadeforebygging"].filter(Boolean))];
        const tags = [...new Set([primary,...secondary,...equip,...movement,difficulty,...goals,type,bodyPart,load,side,...bankCats,name.toLowerCase()])];
        return {name, aliases: name.includes("Hantel")?[name.replace("Hantel","Dumbbell")]:[], description:`${name} er en ${type.toLowerCase()} for ${primary.toLowerCase()}${secondary.length?` med ${secondary.join(", ").toLowerCase()} som støtte`:""}.`, primary, secondary, equipment:equip, movement, difficulty, goals, type, bodyPart, load, side, ppl:bankCats.find(x=>["Push","Pull","Bein"].includes(x))||"Fullkropp", bankCats, tags};
      };
      const storeKey = "treningsbanken-static-v3";
      let state = JSON.parse(localStorage.getItem(storeKey) || '{"tab":"home","builder":[],"builderName":"Egen økt","builderCat":"favoritter","sessions":[],"notes":{},"plan":{"monday":"push-60","wednesday":"pull-60","friday":"fullbody-styrke"},"energy":3,"sleep":3,"effort":"middels","pain":"","comment":"","rest":{}}');
      state.favoriteTemplates = state.favoriteTemplates || [];
      state.savedPrograms = state.savedPrograms || [];
      if(state.tab==="builder"&&state.builderMode!=="active"){state.tab="home";state.builder=[];state.builderStep="category";state.builderName="Ny økt";state.justAdded="";}
      state.removedFavorites = state.removedFavorites || [];
      state.exerciseVideos = state.exerciseVideos || {};
      state.youtubeSearches = state.youtubeSearches || {};
      if (!state.homeFlowReady && state.tab!=="builder") state.tab = "home";
      state.homeFlowReady = true;
      state.builderPickCat = state.builderPickCat || "push";
      state.builderSearch = state.builderSearch || "";
      state.randomCount = state.randomCount || 6;
      state.randomCat = state.randomCat || "kroppsvekt";
      state.showFavoriteTemplatesOnly = state.showFavoriteTemplatesOnly || false;
      state.timerChoice = state.timerChoice || "none";
      state.pauseBetween = state.pauseBetween || 0;
      state.activeIndex = Number.isInteger(state.activeIndex) ? state.activeIndex : 0;
      state.intervalRun = state.intervalRun || null;
      state.timerSound = state.timerSound || "warm-gong";
      state.timerVolume = state.timerVolume || "medium";
      state.minimalFocus = Boolean(state.minimalFocus);
      state.setRest = state.setRest || {};
      state.swapIndex = null;
      const view = document.querySelector("#view");
      const save = () => localStorage.setItem(storeKey, JSON.stringify(state));
      const newSet = (target="") => ({id:crypto.randomUUID(),target});
      const entry = (name, sets=3, reps="") => ({name, setCount:Math.max(1,Number(sets)||1), targetReps:reps, rest:90, mode:String(reps).includes("/")||String(reps).includes("sek")?"intervall":"styrke", work:String(reps).includes("20/10")?20:String(reps).includes("40/20")?40:45, pause:String(reps).includes("20/10")?10:String(reps).includes("40/20")?20:15, rounds:3, note:""});
      const setCountOf = e => Math.max(1,Number(e.setCount || (Array.isArray(e.sets) ? e.sets.length : e.sets) || 1));
      const favoriteExercises = () => favorites.filter(n=>!(state.removedFavorites||[]).includes(n));
      const isFavoriteExercise = name => favoriteExercises().includes(name);
      const removeFavoriteExercise = name => { state.removedFavorites=[...new Set([...(state.removedFavorites||[]),name])]; save(); render(); };
      const youtubeQuery = name => state.youtubeSearches[name] || name;
      const youtubeSearchUrl = name => `https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeQuery(name)+" exercise technique")}`;
      const youtubeId = url => {
        const text=String(url||"").trim();
        return (text.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/)||[])[1] || "";
      };
      const videoPanel = name => {
        const url=state.exerciseVideos[name]||"", id=youtubeId(url);
        return `<section class="videoPanel"><div class="cardTop"><div><h3>Video</h3><p class="muted">${id?"Lagret YouTube-video for denne øvelsen.":"Søk etter teknikkvideo, eller lim inn en YouTube-lenke for å vise videoen her."}</p></div><a class="secondary smallText" target="_blank" data-youtube-link="${name}" href="${youtubeSearchUrl(name)}">Søk på YouTube</a></div><div class="videoSearchRow"><label>YouTube-søk<input data-youtube-search="${name}" value="${youtubeQuery(name)}" placeholder="${name}"></label></div>${id?`<iframe class="videoEmbed" src="https://www.youtube-nocookie.com/embed/${id}" title="${name} video" loading="lazy" allowfullscreen></iframe>`:""}<label>YouTube-lenke<input data-video="${name}" value="${url}" placeholder="https://www.youtube.com/watch?v=..."></label>${url&&!id?'<p class="muted">Fant ikke en gyldig YouTube-video-ID i lenken.</p>':""}</section>`;
      };
      const setsOf = e => Array.from({length:setCountOf(e)},()=>newSet(e.targetReps||e.reps||""));
      const planTarget = e => ["registrer",""].includes(String(e.targetReps||e.reps||"").toLowerCase()) ? "" : (e.targetReps||e.reps||"");
      const format = e => `${setCountOf(e)} sett${planTarget(e)?` · ${planTarget(e)}`:""}`;
      const exerciseUseCount = name => state.sessions.filter(s=>s.ex.some(e=>e.name===name)).length;
      const lastEntries = name => state.sessions.flatMap(s=>s.ex.filter(e=>e.name===name).map(e=>({...e,date:s.date}))).slice(0,5);
      const alternatives = name => allNames.filter(n=>n!==name && (sameGroup(name,n)||isFavoriteExercise(n))).slice(0,4);
      const sameGroup = (a,b) => Object.values(groups).some(g=>Object.values(g).some(list=>list.includes(a)&&list.includes(b)));
      const imageFor = name => name.includes("Deadlift")||name.includes("Hinge")?"hinge":name.includes("Frontbøy")||name==="Squat"||name.includes("Lunge")||name.includes("Split Squat")?"squat":inCategory(name,"push")||sameGroup(name,"Pushups")?"push":sameGroup(name,"Deadlift")||sameGroup(name,"Stangroing")?"pull":sameGroup(name,"Planke")||sameGroup(name,"Dead Bug")||contains(name,["Planke","plank","Dead bug","Bird dog","Hollow","Crunch","Situp","situp","V-up","Tuck","Beinhev","Leg raise","Flutter","Saksespark","Russian twist","Windshield","L-sit","V-sit","Superman","Swimmer","Svømmeren","Mountain climbers","Bear crawl","Crab walk","Leopard crawl","Army crawl","Inchworm","Dragon flag","Hanging","Toes to bar","Front lever"])?"core":"general";
      const stepsFor = name => imageFor(name)==="hinge"?["Stå med vekten over midtfoten.","Trekk brystet opp og hold ryggen lang.","Press gulvet bort med stangen tett på kroppen.","Lås ut kontrollert og senk samme vei."]:imageFor(name)==="squat"?["Sett føttene stabilt og finn buktrykket.","Senk deg kontrollert med knær over tær.","Hold full fot i gulvet og brystet høyt.","Press opp uten å miste posisjon."]:imageFor(name)==="push"?["Sett skuldrene og stram kroppen.","Senk kontrollert til bunnposisjon.","Hold kort kontroll i bunn.","Press opp med jevn kraft."]:imageFor(name)==="pull"?["Start med lang rygg og aktive skulderblad.","Trekk albuen i riktig bane.","Hold kort kontroll i topposisjon.","Senk rolig tilbake."]:["Finn nøytral rygg og rolig pust.","Stram mage og sete.","Hold posisjonen uten kompensasjon.","Stopp når teknikken glipper."];
      const regressionsFor = name => name==="Pushups"?["Wall Pushups","Incline Pushups","Knee Pushups"]:name==="Deadlift"?["Standing Hip Hinge Drill","Dumbbell Deadlift","Block Pull"]:name.includes("Pullups")?["Dead Hang","Scapular Pullups","Nedtrekk"]:imageFor(name)==="core"?["Dead Bug","Planke","Bird Dog"]:["Lavere belastning","Kortere bevegelse","Roligere tempo"];
      const progressionsFor = name => name==="Pushups"?["Tempo Pushups","Feet Elevated Pushups","Weighted Pushups"]:name==="Deadlift"?["Paused Deadlift","Deficit Deadlift","Tyngre toppsett"]:name.includes("Pullups")?["Pullups","Weighted Pullups","Chest-to-bar Pullups"]:imageFor(name)==="core"?["Lengre hold","Rollout","Loaded Carry"]:["Mer belastning","Flere reps","Lengre tid under spenning"];
      const difficultyRank = {"Nybegynner":1,"Middels":2,"Avansert":3};
      const categoriesFor = name => Object.keys(groups).filter(cat=>inCategory(name,cat));
      const swapAlternatives = (name,activeCat) => {
        const current=metaFor(name), currentCats=categoriesFor(name), easier=regressionsFor(name), harder=progressionsFor(name);
        return allNames.filter(n=>n!==name).map(n=>{const m=metaFor(n), reasons=[], sharedEquipment=m.equipment.filter(x=>current.equipment.includes(x)&&x!=="Annet"), sameForm=inCategory(n,activeCat)||categoriesFor(n).some(cat=>currentCats.includes(cat));let score=0;
          if(m.primary===current.primary){score+=60;reasons.push(`Samme muskel: ${m.primary}`);}
          if(sameForm){score+=35;reasons.push("Samme treningsform");}
          if(sharedEquipment.length){score+=22;reasons.push(`Samme utstyr: ${sharedEquipment[0]}`);}
          if(m.difficulty===current.difficulty){score+=14;reasons.push(`Samme nivå: ${m.difficulty}`);}
          if(easier.includes(n)||difficultyRank[m.difficulty]<difficultyRank[current.difficulty]){score+=10;reasons.push("Lettere variant");}
          if(harder.includes(n)||difficultyRank[m.difficulty]>difficultyRank[current.difficulty]){score+=10;reasons.push("Tyngre variant");}
          if(sameGroup(name,n))score+=18;
          return {name:n,score,reasons:reasons.slice(0,3)};
        }).filter(x=>x.score>=60).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name,"no")).slice(0,10);
      };
      const list = items => `<ul class="compactList">${items.map(x=>`<li>${x}</li>`).join("")}</ul>`;
      const startFor = name => imageFor(name)==="hinge"?"Stå med vekten over midtfoten, hofter bak, lang rygg og aktivt buktrykk. Hold belastningen tett på kroppen.":imageFor(name)==="squat"?"Stå stabilt med hele foten i gulvet. Spenn mage og øvre rygg før du starter senkefasen.":imageFor(name)==="push"?"Sett skulderbladene, finn stabil fot- eller håndplassering og hold kroppen stram før første repetisjon.":imageFor(name)==="pull"?"Start med lang rygg, nøytral nakke og aktive skulderblad. La armene være lange før trekket.":"Finn nøytral rygg, rolig pust og en posisjon du kan kontrollere uten kompensasjon.";
      const breathingFor = name => imageFor(name)==="core"?"Pust rolig bak buktrykket. Hold spenningen uten å holde pusten for lenge.":imageFor(name)==="hinge"||imageFor(name)==="squat"?"Pust inn og spenn magen før repetisjonen. Hold trykket gjennom den tyngste delen og pust kontrollert ut på toppen.":"Pust inn før senkefasen. Pust ut når du presser, trekker eller fullfører repetisjonen.";
      const techniqueFor = name => imageFor(name)==="hinge"?["Hold belastningen tett på kroppen.","Bevar lang rygg og aktiv mage.","Start bevegelsen med hoften, ikke korsryggen.","Fullfør med sete og lår, ikke med å lene deg bakover."]:imageFor(name)==="squat"?["Hold hele foten i gulvet.","La knær følge tærne.","Hold brystet høyt og mage spent.","Senk kontrollert før du presser opp."]:imageFor(name)==="push"?["Hold kroppen stram fra start til slutt.","Senk kontrollert før du presser.","Hold håndledd og albuer i en sterk linje.","Press jevnt uten å miste skulderposisjon."]:imageFor(name)==="pull"?["Start trekket med skulderbladene.","Hold ryggen stabil gjennom hele settet.","Trekk albuen i en naturlig bane.","Senk kontrollert og unngå rykk."]:["Hold nøytral rygg.","Stram mage og sete lett.","Beveg deg rolig og kontrollert.","Avslutt settet når teknikken glipper."];
      const mistakesFor = name => imageFor(name)==="hinge"?["Runder korsryggen: reduser vekt og tren hoftehengsel.","Belastningen driver bort fra kroppen: trekk den tettere inn.","Rykker fra gulvet: bygg trykk før du løfter.","Overstrekker på toppen: stopp i strak, stabil posisjon."]:imageFor(name)==="squat"?["Hælene løfter seg: kort ned dybden og jobb med ankelkontroll.","Knær faller inn: press knærne lett ut over tærne.","Mister buktrykk: pust inn og spenn før hver repetisjon.","Faller fremover: senk vekt og hold brystet høyere."]:imageFor(name)==="push"?["Skuldre sklir frem: sett skulderbladene før start.","Korsryggen svaier: stram mage og sete.","For kort bevegelse: bruk lettere variant og full kontroll.","Albuer flarer ukontrollert: finn en sterkere albuebane."]:imageFor(name)==="pull"?["Drar med fart: senk belastningen og stopp i topposisjon.","Skuldre trekkes opp: hold nakken lang og skuldre ned.","Mister ryggposisjon: støtt kroppen bedre eller bruk lavere vekt.","Halve repetisjoner: bruk kontrollert full bevegelse."]:["Holder pusten for lenge: pust rolig og jevnt.","Mister nøytral rygg: kort ned settet.","Jager tempo: senk farten og prioriter kontroll.","Fortsetter etter teknikkfall: stopp settet tidligere."];
      const cuesFor = name => imageFor(name)==="hinge"?["Lang rygg","Stang tett","Press gulvet","Hofter gjennom"]:imageFor(name)==="squat"?["Full fot","Knær over tær","Bryst opp","Press opp"]:imageFor(name)==="push"?["Stram kropp","Kontroll ned","Press jevnt","Lås sterkt"]:imageFor(name)==="pull"?["Skuldre ned","Albue bak","Rolig ned","Lang nakke"]:["Ribbein ned","Rolig pust","Hold linjen","Stopp rent"];
      const repsFor = m => m.type==="Kondisjon"?{strength:"4-8 kraftfulle drag/intervaller",hypertrophy:"8-15 reps",endurance:"30-60 sek eller 15-30 reps"}:m.type==="Mobilitet"||m.type==="Oppvarming"?{strength:"Ikke hovedvalg",hypertrophy:"Ikke hovedvalg",endurance:"30-60 sek rolig kontroll"}:m.type==="Isolasjonsøvelse"?{strength:"6-10 reps",hypertrophy:"10-20 reps",endurance:"15-30 reps"}:{strength:"3-6 reps",hypertrophy:"6-12 reps",endurance:"12-20 reps"};
      const safetyFor = name => imageFor(name)==="hinge"?["Start lett til ryggen holder posisjon.","Avbryt ved skarp smerte i rygg eller hofte.","Ikke maks tungt når du er sliten i korsrygg."]:imageFor(name)==="squat"?["Bruk belastning du kan kontrollere i full fot.","Stopp hvis knær, hofte eller rygg gir skarp smerte.","Øk dybde og vekt gradvis."]:imageFor(name)==="push"?["Hold skulderen smertefri gjennom hele bevegelsen.","Velg lettere variant ved tap av kroppslinje.","Unngå å låse deg fast i smertefull albuebane."]:imageFor(name)==="pull"?["Unngå rykk hvis albue eller skulder er irritert.","Hold nakken avslappet og ryggen stabil.","Reduser vekt hvis grepet bestemmer teknikken."]:["Hold kontrollert tempo.","Stopp før teknikken bryter sammen.","Velg smertefri bevegelsesbane."];
      const progression = name => lastEntries(name).reverse().map((_,i)=>i+1).slice(-8);
      const spark = points => `<div class="spark">${points.length?points.map(p=>`<span style="height:${Math.max(18,p/Math.max(...points)*100)}%"></span>`).join(""):""}</div>`;
      const suggestion = e => { const last=lastEntries(e.name)[0]; return last?`Sist brukt: ${new Date(last.date).toLocaleDateString("no")} · ${format(last)}`:"Fokuser på god teknikk og jevn flyt."; };
      const poolFor = cat => [...new Set(Object.values(groups[cat==="tabata"?"kroppsvekt":cat]||{}).flat().concat(templates.filter(t=>t.cat===(cat==="tabata"?"kroppsvekt":cat)).flatMap(t=>t.ex.map(x=>x[0]))))].sort((a,b)=>a.localeCompare(b,"no"));
      const categoryOptions = [["push","Push"],["pull","Pull"],["fullbody","Fullbody"],["crosstrening","Cross"],["kroppsvekt","Kroppsvekt"],["morgen","Morgentrening"],["toying","Tøying"],["core","Core"]];
      const flowOptions = [["push","Push"],["pull","Pull"],["fullbody","Fullbody"],["crosstrening","Cross"],["tabata","Tabata"],["core","Core"],["kroppsvekt","Kroppsvekt"],["toying","Tøying"]];
      const intervalCategories = ["crosstrening","kroppsvekt","tabata","toying"];
      const hasIntervalTimer = cat => intervalCategories.includes(cat);
      const timerSoundOptions = [["soft-bell","Myk klokke"],["warm-gong","Varm gong"],["soft-click","Diskret klikk"],["none","Ingen lyd"]];
      const volumeOptions = [["off","Av"],["low","Lav"],["medium","Medium"],["high","Høy"]];
      const soundLabels = {work:"Start arbeid",rest:"Start hvile",countdown:"Nedtelling",complete:"Økt ferdig",warning:"Varsel"};
      const soundPickerHtml = () => `<div class="soundPicker"><div class="cardTop"><div><strong>Lydsignal</strong><p class="muted">Bruk egne lydfiler i sounds/, eller varm innebygd lyd hvis filen mangler.</p></div></div><div class="buttons">${timerSoundOptions.map(([id,label])=>`<button class="chip ${state.timerSound===id?"active":""}" data-sound-choice="${id}">${label}</button>`).join("")}</div><div class="buttons">${volumeOptions.map(([id,label])=>`<button class="chip ${state.timerVolume===id?"active":""}" data-volume-choice="${id}">${label}</button>`).join("")}</div><div class="buttons">${Object.entries(soundLabels).map(([id,label])=>`<button class="secondary smallText" data-preview-sound="${id}">Test ${label}</button>`).join("")}</div></div>`;
      const flowLabel = id => (flowOptions.find(x=>x[0]===id)||categoryOptions.find(x=>x[0]===id)||["","Egen"])[1];
      const setFlowCategory = cat => { state.builderPickCat=cat; state.builderCat=cat; state.builderName=`Ny ${flowLabel(cat)}-økt`; state.builder=[]; state.builderSearch=""; state.builderStep="exercises"; state.timerChoice=cat==="tabata"?"tabata":hasIntervalTimer(cat)?"interval":"none";if(cat==="tabata"){state.globalWork=20;state.globalPause=10;state.globalRounds=8;}if(cat==="toying"){state.globalWork=45;state.globalPause=10;state.globalRounds=1;} save(); render(); };
      const startNewWorkoutFlow = () => { state.builder=[]; state.builderName="Ny økt"; state.builderStep="category"; state.builderMode="build"; state.tab="builder"; state.justAdded=""; state.editingProgramId=null; save(); render(); };
      const startSavedWorkout = p => {state.builderName=p.name;state.builderCat=p.cat||"favoritt";state.builderPickCat=p.cat||"favoritt";state.builder=p.ex.map(e=>({...e,setCount:p.cat==="toying"?setCountOf(e):setCountOf(e)===1?3:setCountOf(e),targetReps:e.targetReps||e.reps||""}));state.timerChoice=p.timerChoice||"none";state.pauseBetween=p.pauseBetween||0;state.builderStep="timer";state.builderMode="build";state.tab="builder";save();render();};
      const templateProgram = t => {const timerChoice=t.cat==="tabata"?"tabata":hasIntervalTimer(t.cat)?"interval":"none";const work=t.cat==="tabata"?20:t.cat==="toying"?45:40;const pause=t.cat==="tabata"?10:10;const rounds=t.cat==="tabata"?8:t.cat==="toying"?1:3;return {id:crypto.randomUUID(),sourceTemplateId:t.id,name:t.name,cat:t.cat,ex:t.ex.map(x=>({...entry(x[0],Number(x[1])||3,x[2]||""),work,pause,rounds})),timerChoice,pauseBetween:0,duration:t.duration,date:new Date().toISOString()};};
      const toggleTemplateFavorite = id => {state.favoriteTemplates=state.favoriteTemplates||[];state.savedPrograms=state.savedPrograms||[];const exists=state.favoriteTemplates.includes(id),t=templates.find(x=>x.id===id);if(exists){state.favoriteTemplates=state.favoriteTemplates.filter(x=>x!==id);state.savedPrograms=state.savedPrograms.filter(x=>x.sourceTemplateId!==id);}else if(t){state.favoriteTemplates.push(id);if(!state.savedPrograms.some(x=>x.sourceTemplateId===id))state.savedPrograms.unshift(templateProgram(t));}save();render();};
      const migrateTemplateFavorites = () => {(state.favoriteTemplates||[]).forEach(id=>{const t=templates.find(x=>x.id===id);if(t&&!state.savedPrograms.some(x=>x.sourceTemplateId===id))state.savedPrograms.push(templateProgram(t));});save();};
      const templateStats = t => {
        const sessions = state.sessions.filter(s=>s.name===t.name || s.name===`${t.name} kopi`);
        const durations = sessions.map(s=>Number(s.duration)||0).filter(Boolean);
        const first = sessions.at(-1), last = sessions[0];
        return {count:sessions.length, first:first?new Date(first.date).toLocaleDateString("no"):"-", last:last?new Date(last.date).toLocaleDateString("no"):"-", total:durations.reduce((a,b)=>a+b,0), avg:durations.length?Math.round(durations.reduce((a,b)=>a+b,0)/durations.length):0};
      };
      const randomWorkout = () => {
        const randomCategory = state.builderPickCat || state.randomCat || "kroppsvekt";
        const pool = poolFor(randomCategory).filter(Boolean);
        const count = Math.min(Math.max(Number(state.randomCount)||6,6),15);
        const shuffled = [...pool].sort(()=>Math.random()-.5).slice(0,count);
        state.builderName = `Tilfeldig ${flowLabel(randomCategory)}`;
        state.builderCat = randomCategory;
        state.builder = shuffled.map(n=>({...entry(n,randomCategory==="toying"?1:3,randomCategory==="tabata"?"20/10":"45 sek"),mode:"intervall",work:randomCategory==="tabata"?20:45,pause:randomCategory==="tabata"||randomCategory==="toying"?10:15,rounds:randomCategory==="tabata"?8:randomCategory==="toying"?1:3}));
        state.tab = "builder";
        state.builderStep = "exercises";
        state.timerChoice = randomCategory==="tabata"?"tabata":"interval";
        state.startedAt = Date.now();
        save();
        render();
      };
      const exercisePickListHtml = () => poolFor(state.builderPickCat).filter(n=>n.toLowerCase().includes((state.builderSearch||"").toLowerCase())).map(n=>{const m=metaFor(n); return `<div class="exercisePick"><div><button class="textButton exerciseName" data-detail="${n}">${n}</button><p class="muted">${m.primary} · ${m.equipment.join(", ")}</p></div><div class="buttons actionPair"><button class="secondary smallText" data-detail="${n}">Detaljer</button><button class="primary smallText" data-add="${n}">Legg til</button></div></div>`;}).join("") || '<p class="empty">Ingen øvelser funnet.</p>';
      function renderShell() {
        document.querySelector("#globalHome").onclick=()=>{pauseWorkoutTimer();state.tab="home";state.builderMode=state.builderMode==="active"?"active":"build";save();render();};
        document.querySelector("#tabs").innerHTML = tabs.map(([id,label])=>`<button class="tab ${state.tab===id?"active":""}" data-tab="${id}">${label}</button>`).join("");
        document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{pauseWorkoutTimer();if(b.dataset.tab==="builder")return startNewWorkoutFlow();state.tab=b.dataset.tab; save(); render();});
        const monthAgo=Date.now()-30*24*60*60*1000;
        document.querySelector("#monthCount").textContent = `${state.sessions.filter(s=>new Date(s.date).getTime()>=monthAgo).length} økter / 30d`;
        document.querySelector("#volumeCount").textContent = `${state.sessions.reduce((sum,s)=>sum+(Number(s.duration)||0),0)} min totalt`;
      }
      function profile(name) {
        const m=metaFor(name), reps=repsFor(m), alts=alternatives(name), cues=cuesFor(name);
        return `<div class="profileGrid"><section><strong>Startposisjon</strong><p class="muted">${startFor(name)}</p></section><section><strong>Steg-for-steg</strong><ol class="stepList">${stepsFor(name).map(s=>`<li>${s}</li>`).join("")}</ol></section><section><strong>Pusteteknikk</strong><p class="muted">${breathingFor(name)}</p></section><section><strong>God teknikk</strong>${list(techniqueFor(name))}</section><section><strong>Vanlige feil og korrigering</strong>${list(mistakesFor(name))}</section><section><strong>Coaching cues</strong><div class="chipRow">${cues.map(c=>`<span class="tag cue">${c}</span>`).join("")}</div></section><section><strong>Lettere progresjoner</strong>${list(regressionsFor(name))}</section><section><strong>Tyngre progresjoner</strong>${list(progressionsFor(name))}</section><section><strong>Alternative øvelser</strong><div class="chipRow">${alts.map(n=>`<button class="chip" data-add="${n}">Legg til ${n}</button>`).join("")||'<span class="muted">Ingen nære alternativer funnet.</span>'}</div></section><section><strong>Anbefalte reps</strong><div class="meta"><span><strong>Styrke:</strong> ${reps.strength}</span><span><strong>Muskelvekst:</strong> ${reps.hypertrophy}</span><span><strong>Utholdenhet:</strong> ${reps.endurance}</span></div></section><section><strong>Sikkerhet</strong>${list(safetyFor(name))}</section><section><strong>Tagger for filtrering</strong><p class="muted">${m.tags.slice(0,18).join(", ")}</p></section></div>`;
      }
      function card(name) {
        const recent=lastEntries(name), m=metaFor(name);
        return `<article class="panel grid"><div class="cardTop"><div><h3>${name}</h3><p class="muted">${m.description}</p></div></div><div class="meta summaryMeta"><span><strong>Primær:</strong> ${m.primary}</span><span><strong>Utstyr:</strong> ${m.equipment.join(", ")}</span><span><strong>Nivå:</strong> ${m.difficulty}</span><span><strong>Mål:</strong> ${m.goals.slice(0,2).join(", ")}</span></div><div class="tags">${m.bankCats.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join("")}${m.tags.slice(0,4).map(t=>`<span class="tag">${t}</span>`).join("")}</div><div class="records"><span>Sist brukt: ${recent[0]?new Date(recent[0].date).toLocaleDateString("no"):"ikke brukt"}</span><span>Gjennomført: ${exerciseUseCount(name)} ganger</span></div>${spark(progression(name))}<div class="buttons actionPair"><button class="secondary" data-detail="${name}">Detaljer</button><button class="primary" data-add="${name}">Legg til</button></div></article>`;
      }
      function addToBuilder(name) {
        state.builder.push(entry(name,state.builderPickCat==="toying"?1:3,state.builderPickCat==="toying"?"45 sek":""));
        state.builderMode = "build";
        state.tab = "builder";
        state.justAdded = name;
        save();
        render();
        requestAnimationFrame(() => document.querySelector(".newWorkoutPanel")?.scrollIntoView({behavior:"smooth", block:"start"}));
      }
      function bindCommon() {
        document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>addToBuilder(b.dataset.add));
        document.querySelectorAll("[data-remove-favorite]").forEach(b=>b.onclick=()=>removeFavoriteExercise(b.dataset.removeFavorite));
        document.querySelectorAll("[data-detail]").forEach(b=>b.onclick=()=>{pauseWorkoutTimer();state.detailName=b.dataset.detail; state.detailBack=state.tab; state.tab="detail"; save(); render();});
        document.querySelectorAll("[data-note]").forEach(t=>t.oninput=()=>{state.notes[t.dataset.note]=t.value; save();});
        document.querySelectorAll("[data-video]").forEach(t=>t.onchange=()=>{state.exerciseVideos[t.dataset.video]=t.value; save(); render();});
        document.querySelectorAll("[data-youtube-search]").forEach(t=>t.oninput=()=>{state.youtubeSearches[t.dataset.youtubeSearch]=t.value||t.dataset.youtubeSearch; const link=document.querySelector(`[data-youtube-link="${CSS.escape(t.dataset.youtubeSearch)}"]`); if(link)link.href=`https://www.youtube.com/results?search_query=${encodeURIComponent((t.value||t.dataset.youtubeSearch)+" exercise technique")}`; save();});
        document.querySelectorAll("[data-start]").forEach(b=>{const t=templates.find(x=>x.id===b.dataset.start); b.onclick=()=>{state.timerChoice=hasIntervalTimer(t.cat)?(t.id.includes("tabata")?"tabata":"interval"):"none"; const exercises=t.ex.map(x=>{const e=entry(x[0],x[1],x[2]); if(t.id.includes("tabata")){e.work=20;e.pause=10;e.rounds=8;} else if(t.id.includes("interval")){e.work=40;e.pause=20;e.rounds=4;} return e;}); start(t.name,t.cat,exercises);};});
        document.querySelectorAll("[data-copy]").forEach(b=>{const t=templates.find(x=>x.id===b.dataset.copy); b.onclick=()=>{state.builderName=`${t.name} kopi`; state.builder=t.ex.map(x=>entry(x[0],x[1],x[2])); state.builderCat=t.cat; state.builderMode="build"; state.tab="builder"; save(); render();};});
        document.querySelectorAll("[data-fav-template]").forEach(b=>b.onclick=()=>toggleTemplateFavorite(b.dataset.favTemplate));
      }
      function renderDetail() {
        const name=state.detailName&&allNames.includes(state.detailName)?state.detailName:allNames[0], m=metaFor(name), recent=lastEntries(name);
        view.innerHTML=`<div class="section"><button class="secondary" id="backDetail">Tilbake</button><button class="primary" data-add="${name}">Legg til</button></div><article class="panel grid detailPanel"><div class="cardTop"><div><h2>${name}</h2><p class="muted">${m.description}</p></div><a class="link" target="_blank" href="${youtubeSearchUrl(name)}">Video</a></div><div class="meta"><span><strong>Primær:</strong> ${m.primary}</span><span><strong>Sekundær:</strong> ${m.secondary.join(", ")||"Ingen"}</span><span><strong>Utstyr:</strong> ${m.equipment.join(", ")}</span><span><strong>Vanskelighet:</strong> ${m.difficulty}</span><span><strong>Bevegelse:</strong> ${m.movement.join(", ")}</span><span><strong>Mål:</strong> ${m.goals.join(", ")}</span><span><strong>Type:</strong> ${m.type}</span><span><strong>Kroppsdel:</strong> ${m.bodyPart}</span><span><strong>Belastning:</strong> ${m.load}</span><span><strong>Side:</strong> ${m.side}</span></div>${videoPanel(name)}<div class="records"><span>Sist brukt: ${recent[0]?new Date(recent[0].date).toLocaleDateString("no"):"ikke brukt"}</span><span>Gjennomført: ${exerciseUseCount(name)} ganger</span></div>${spark(progression(name))}${profile(name)}<textarea data-note="${name}" placeholder="Egne notater">${state.notes[name]||""}</textarea></article>`;
        document.querySelector("#backDetail").onclick=()=>{state.tab=state.detailBack||"bank"; save(); render();};
        bindCommon();
      }
      function templateCard(t) { const fav=(state.favoriteTemplates||[]).includes(t.id); return `<article class="panel grid ${fav?"favoriteCard":""}"><div class="cardTop"><div><h3>${fav?"Favoritt · ":""}${t.name}</h3><p class="muted">${t.desc||""}</p></div><div class="buttons">${t.duration?`<span class="pill">${t.duration} min</span>`:""}<button class="icon" data-fav-template="${t.id}" title="Favoritt">${fav?"★":"☆"}</button></div></div><div class="meta"><span><strong>Kategori:</strong> ${flowLabel(t.cat)}</span><span><strong>Øvelser:</strong> ${t.ex.length}</span></div><div class="list">${t.ex.map(x=>`<div class="historyRow clickableRow"><button class="textButton" data-detail="${x[0]}">${x[0]}</button><span class="muted">${x[1]||""} sett ${x[2]||""}</span></div>`).join("")}</div><div class="buttons actionPair"><button class="primary" data-start="${t.id}">Start økt</button><button class="secondary" data-copy="${t.id}">Kopier til bygger</button></div></article>`; }
      const estimatedProgramMinutes = p => p.duration || (p.timerChoice!=="none" ? Math.max(1,Math.round((p.ex||[]).reduce((sum,e)=>sum+((Number(e.work)||state.globalWork||40)+(Number(e.pause)||state.globalPause||20))*(Number(e.rounds)||state.globalRounds||3),0)/60)) : Math.max(10,(p.ex||[]).length*6));
      function start(name,cat,ex) { state.builderName=name; state.builder=ex; state.builderCat=cat; state.builderMode="active"; state.activeIndex=0; state.swapIndex=null; state.intervalRun=null; state.setRest={}; state.startedAt=Date.now(); state.energy=3; state.sleep=3; state.effort="middels"; state.pain=""; state.comment=""; state.tab="builder"; save(); render(); }
      function renderCategory(cat) {
        const catTemplates=templates.filter(t=>t.cat===cat);
        const tpl=catTemplates.map(templateCard).join("");
        const groupHtml=groups[cat]?Object.entries(groups[cat]).map(([title,names])=>`<article class="panel grid"><h3>${title}</h3><div class="list">${names.map(n=>`<div class="bankLine clickableRow"><div><button class="textButton exerciseName" data-detail="${n}">${n}</button><p class="muted">${lastEntries(n)[0]?`Sist: ${format(lastEntries(n)[0])}`:"Øvelse"}</p></div><div class="buttons actionPair"><button class="secondary smallText" data-detail="${n}">Detaljer</button><button class="primary smallText" data-add="${n}">Legg til</button></div></div>`).join("")}</div></article>`).join(""):"";
        view.innerHTML=`<div class="section"><h2>${tabs.find(t=>t[0]===cat)[1]}</h2></div>${tpl?`<div class="cards">${tpl}</div>`:""}${groupHtml?`<div class="cards">${groupHtml}</div>`:""}`;
        bindCommon();
      }      function renderHome() {
        const count=(state.savedPrograms||[]).length;
        view.innerHTML=`<section class="homeHero"><button class="homeChoice primary" id="homeNew"><span>Lag ny økt</span><small>Velg treningsform, øvelser og timer</small></button><button class="homeChoice secondary" id="homeFav"><span>Gjør favorittøkt</span><small>${count?`${count} lagrede økter`:"Ingen lagrede ennå"}</small></button></section>`;
        document.querySelector("#homeNew").onclick=startNewWorkoutFlow;
        document.querySelector("#homeFav").onclick=()=>{state.tab="favworkouts"; save(); render();};
      }
      function renderFavoriteWorkouts() {
        const programs=state.savedPrograms||[];
        view.innerHTML=`<div class="section"><button class="secondary" id="backHome">Tilbake</button><h2>Favorittøkter</h2></div>${programs.length?`<div class="cards">${programs.map(p=>`<article class="panel grid"><div class="cardTop"><div><h3>${p.name}</h3><p class="muted">${flowLabel(p.cat)} · ${p.ex.length} øvelser · ca. ${estimatedProgramMinutes(p)} min</p></div><span class="pill">${p.timerChoice==="tabata"?"Tabata":p.timerChoice==="interval"?"Timer":"Uten timer"}</span></div><div class="list">${p.ex.map(e=>`<div class="historyRow clickableRow"><button class="textButton" data-detail="${e.name}">${e.name}</button><span class="muted">${format(e)}</span></div>`).join("")}</div><div class="buttons actionPair"><button class="primary" data-start-program="${p.id}">Start økt</button><button class="secondary" data-edit-program="${p.id}">Rediger</button><button class="secondary" data-duplicate-program="${p.id}">Dupliser</button><button class="secondary" data-delete-program="${p.id}">Slett</button></div></article>`).join("")}</div>`:'<p class="empty">Ingen favorittøkter lagret ennå. Lag en ny økt og trykk Lagre som favoritt.</p>'}`;
        document.querySelector("#backHome").onclick=()=>{state.tab="home"; save(); render();};
        document.querySelectorAll("[data-start-program]").forEach(b=>{const p=programs.find(x=>x.id===b.dataset.startProgram); b.onclick=()=>p&&startSavedWorkout(p);});
        document.querySelectorAll("[data-delete-program]").forEach(b=>b.onclick=()=>{state.savedPrograms=programs.filter(p=>p.id!==b.dataset.deleteProgram); save(); render();});
        document.querySelectorAll("[data-edit-program]").forEach(b=>{const p=programs.find(x=>x.id===b.dataset.editProgram); b.onclick=()=>{if(!p)return; state.builderName=p.name; state.builderCat=p.cat; state.builderPickCat=p.cat; state.builder=p.ex.map(e=>({...e})); state.timerChoice=p.timerChoice||"none"; state.pauseBetween=p.pauseBetween||0; state.builderStep="exercises"; state.builderMode="build"; state.editingProgramId=p.id; state.tab="builder"; save(); render();};});
        document.querySelectorAll("[data-duplicate-program]").forEach(b=>{const p=programs.find(x=>x.id===b.dataset.duplicateProgram); b.onclick=()=>{if(!p)return; state.savedPrograms.unshift({...p,id:crypto.randomUUID(),name:`${p.name} kopi`,date:new Date().toISOString()}); save(); render();};});
        bindCommon();
      }      function renderFlowCategory() {
        view.innerHTML=`<div class="section"><button class="secondary" id="backHome">Tilbake</button><h2>Velg treningsform</h2></div><div class="flowGrid">${flowOptions.map(([id,label])=>`<button class="flowChoice panel" data-flow-cat="${id}"><span>${label}</span><small>${poolFor(id).length} øvelser</small></button>`).join("")}</div>`;
        document.querySelector("#backHome").onclick=()=>{state.tab="home"; save(); render();};
        document.querySelectorAll("[data-flow-cat]").forEach(b=>b.onclick=()=>setFlowCategory(b.dataset.flowCat));
      }
      function applyTimerToBuilder() {
        if(state.timerChoice==="none") return;
        const mode=state.timerChoice==="tabata"?"intervall":"intervall";
        const work=Number(state.globalWork)||Number(state.builder[0]?.work)||20;
        const pause=Number(state.globalPause)||Number(state.builder[0]?.pause)||10;
        const rounds=Number(state.globalRounds)||Number(state.builder[0]?.rounds)||8;
        state.builder=state.builder.map(e=>({...e,mode,work,pause,rounds,roundRest:Number(state.pauseBetween)||0}));
      }
      function saveCurrentAsFavorite() {
        if(!state.builder.length) return;
        applyTimerToBuilder();
        state.savedPrograms=state.savedPrograms||[];
        const name=(state.builderName||"Favorittøkt").trim();
        const cat=state.builderCat||state.builderPickCat;
        const existingIndex=state.savedPrograms.findIndex(p=>p.id===state.editingProgramId||(p.name||"").trim().toLowerCase()===name.toLowerCase()&&p.cat===cat);
        const workout={id:existingIndex>=0?state.savedPrograms[existingIndex].id:crypto.randomUUID(),name,cat,ex:state.builder.map(e=>({...e})),timerChoice:state.timerChoice||"none",pauseBetween:state.pauseBetween||0,date:new Date().toISOString()};
        if(existingIndex>=0)state.savedPrograms.splice(existingIndex,1,workout);else state.savedPrograms.unshift(workout);
        state.editingProgramId=workout.id;
        save();
        alert(existingIndex>=0?"Favorittøkten er oppdatert.":"Økten er lagret som favoritt.");
      }      function renderTimerStep() {
        const eligible=hasIntervalTimer(state.builderCat);
        applyTimerToBuilder();
        const timerSummary=eligible&&state.timerChoice!=="none"?`${state.globalWork||20} sek arbeid · ${state.globalPause||10} sek pause · ${state.globalRounds||8} runder${state.pauseBetween?` · ${state.pauseBetween} sek ekstra hvile`:""}`:"Ingen timer";
        view.innerHTML=`<div class="section"><button class="secondary" id="backExercises">Tilbake</button><h2>Klar til start</h2></div><article class="panel grid"><input id="builderName" value="${state.builderName||"Ny økt"}" placeholder="Navn på økt"><div class="builderSummary"><strong>Timer:</strong> ${timerSummary}</div>${eligible&&state.timerChoice!=="none"?soundPickerHtml():""}<div class="list">${state.builder.map((e,i)=>`<div class="historyRow clickableRow"><button class="textButton" data-detail="${e.name}">${e.name}</button>${setCountControls(e,i)}<button class="secondary smallText" data-remove="${i}">Fjern</button></div>`).join("")}</div><div class="buttons"><button class="primary" id="startBuilt">Start økt</button><button class="secondary" id="saveProgram">Lagre som favoritt</button></div></article>`;
        document.querySelector("#backExercises").onclick=()=>{state.builderStep="exercises"; save(); render();};
        document.querySelectorAll("[data-sound-choice]").forEach(b=>b.onclick=()=>{state.timerSound=b.dataset.soundChoice;save();playAppSound("countdown",1);render();});
        document.querySelectorAll("[data-volume-choice]").forEach(b=>b.onclick=()=>{state.timerVolume=b.dataset.volumeChoice;save();playAppSound("countdown",1);render();});
        document.querySelectorAll("[data-preview-sound]").forEach(b=>b.onclick=()=>playAppSound(b.dataset.previewSound,1));
        document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{state.builder.splice(Number(b.dataset.remove),1); save(); render();});bindSetCountControls();
        document.querySelector("#startBuilt").onclick=()=>{applyTimerToBuilder(); start(state.builderName||"Egen økt",state.builderCat||state.builderPickCat,state.builder);};
        document.querySelector("#saveProgram").onclick=()=>saveCurrentAsFavorite();
        bindCommon();
      }      function renderBuilder() {
        if (state.builderMode==="active") return renderActiveWorkout();
        if (state.builderStep==="category") return renderFlowCategory();
        if (state.builderStep==="timer") return renderTimerStep();
        const timerBased=hasIntervalTimer(state.builderPickCat);
        const commonTimer=timerBased?`<section class="commonTimerSettings"><div><h3>Felles timer for hele økten</h3><p class="muted">Disse verdiene brukes på alle valgte øvelser.</p></div><div class="timerChoiceGrid"><button class="chip ${state.timerChoice==="none"?"active":""}" data-timer-choice="none">Ingen timer</button><button class="chip ${state.timerChoice==="interval"?"active":""}" data-timer-choice="interval">Arbeid og hvile</button>${state.builderPickCat==="tabata"?`<button class="chip ${state.timerChoice==="tabata"?"active":""}" data-timer-choice="tabata">Tabata 20/10</button>`:""}</div>${state.timerChoice!=="none"?`<div class="timerGrid"><label>Arbeid sekunder<input id="globalWork" inputmode="numeric" value="${state.globalWork||state.builder[0]?.work||20}"></label><label>Pause sekunder<input id="globalPause" inputmode="numeric" value="${state.globalPause||state.builder[0]?.pause||10}"></label><label>Antall runder<input id="globalRounds" inputmode="numeric" value="${state.globalRounds||state.builder[0]?.rounds||8}"></label><label>Hvile mellom runder<input id="pauseBetween" inputmode="numeric" value="${state.pauseBetween||0}"></label></div>`:""}</section>`:"";
        view.innerHTML=`<div class="section"><h2>Velg øvelser</h2></div><article class="panel grid"><input id="builderName" value="${state.builderName||"Ny økt"}" placeholder="Navn på økt"><div class="categoryGrid">${flowOptions.map(([id,label])=>`<button class="chip ${state.builderPickCat===id?"active":""}" data-builder-cat="${id}">${label}</button>`).join("")}</div>${commonTimer}<div class="builderSummary"><strong>Ny økt:</strong> ${state.builder.length} øvelser valgt${state.builder.length?` · ${state.builder.map(e=>e.name).slice(-3).join(", ")}`:""}</div><div class="randomWorkoutRow"><span class="muted">Antall:</span><div class="randomCountChoices" aria-label="Antall øvelser">${[6,9,12,15].map(n=>`<button class="chip ${Number(state.randomCount)===n?"active":""}" data-random-count="${n}">${n}</button>`).join("")}</div><button class="secondary" id="randomWorkout">Generer tilfeldig økt</button></div><label>Søk i valgte kategori<input id="builderSearch" value="${state.builderSearch||""}" placeholder="Søk etter øvelse"></label><div class="exerciseList" id="exercisePickList">${exercisePickListHtml()}</div></article><article class="panel grid newWorkoutPanel"><div class="cardTop"><div><h2>Valgte øvelser</h2><p class="muted">${state.builder.length} valgte øvelser. Gå videre når økta er klar.</p></div><span class="pill">${flowLabel(state.builderPickCat)}</span></div>${state.justAdded?`<p class="addedNotice">La til ${state.justAdded} i Ny økt.</p>`:""}${state.builder.length?state.builder.map((e,i)=>builderLine(e,i)).join(""):'<p class="empty">Klikk på øvelser over for å legge dem til her.</p>'}<div class="buttons"><button class="primary" id="nextTimer">Gå videre</button><button class="secondary" id="saveProgram">Lagre som favoritt</button></div></article>`;
        bindBuilder();
      }      const clockText = sec => `${String(Math.floor(Math.max(0,sec)/60)).padStart(2,"0")}:${String(Math.max(0,sec)%60).padStart(2,"0")}`;
      const activeUsesIntervals = () => hasIntervalTimer(state.builderCat) && state.timerChoice!=="none";
      const intervalRemaining = () => state.intervalRun?.running?Math.max(0,Math.ceil((state.intervalRun.endsAt-Date.now())/1000)):Math.max(0,Number(state.intervalRun?.remaining)||0);
      const pauseWorkoutTimer = () => {const run=state.intervalRun;if(run?.running){run.remaining=Math.max(0,Math.ceil((run.endsAt-Date.now())/1000));run.running=false;delete run.endsAt;save();}};
      let timerAudioContext=null, lastCountdownBeep="", wakeLock=null, restDoneKey="";
      const volumeLevel = () => ({off:0,low:.25,medium:.55,high:.85}[state.timerVolume] ?? .55);
      const soundFiles = {work:"./sounds/work-start.mp3",rest:"./sounds/rest-start.mp3",countdown:"./sounds/countdown.mp3",complete:"./sounds/workout-complete.mp3",warning:"./sounds/warning.mp3"};
      const soundCache = {};
      const preloadSounds = () => Object.entries(soundFiles).forEach(([kind,src])=>{if(!soundCache[kind]){const audio=new Audio(src);audio.preload="auto";soundCache[kind]=audio;}});
      const armTimerAudio = () => {preloadSounds();const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;timerAudioContext=timerAudioContext||new AudioContext();if(timerAudioContext.state==="suspended")timerAudioContext.resume();};
      const requestWakeLock = async () => {try{if("wakeLock" in navigator&&!wakeLock)wakeLock=await navigator.wakeLock.request("screen");}catch(_){wakeLock=null;}};
      document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&state.builderMode==="active")requestWakeLock();});
      const syntheticSound = (kind="countdown",remaining=1) => {
        if(!timerAudioContext||timerAudioContext.state!=="running")return;
        const vol=volumeLevel(); if(!vol||state.timerSound==="none")return;
        const now=timerAudioContext.currentTime, master=timerAudioContext.createGain(), filter=timerAudioContext.createBiquadFilter(), delay=timerAudioContext.createDelay(), echo=timerAudioContext.createGain();
        filter.type="lowpass"; filter.frequency.setValueAtTime(state.timerSound==="soft-click"?1050:780,now);
        delay.delayTime.setValueAtTime(.09,now); echo.gain.setValueAtTime(state.timerSound==="soft-click"?.04:.07,now);
        master.gain.setValueAtTime(.0001,now); master.gain.exponentialRampToValueAtTime(vol*.32,now+.025); master.gain.exponentialRampToValueAtTime(.0001,now+(kind==="complete"?1.15:.52));
        master.connect(filter); filter.connect(timerAudioContext.destination); filter.connect(delay); delay.connect(echo); echo.connect(timerAudioContext.destination);
        const base = kind==="rest"?196:kind==="complete"?247:kind==="warning"?174:remaining===1?330:294;
        const profile = state.timerSound;
        const tones = profile==="soft-click"?[[base*2,"triangle",0,.16],[base*2.5,"sine",.015,.12]]:profile==="soft-bell"?[[base*2,"sine",0,.54],[base*3,"triangle",.025,.48],[base*4,"sine",.05,.38]]:[[base,"triangle",0,.86],[base*1.5,"sine",.02,.74],[base*2,"triangle",.055,.58]];
        tones.forEach(([freq,type,offset,dur])=>{const osc=timerAudioContext.createOscillator(),gain=timerAudioContext.createGain(),start=now+offset;osc.type=type;osc.frequency.setValueAtTime(freq,start);gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(vol*.38,start+.02);gain.gain.exponentialRampToValueAtTime(.0001,start+dur);osc.connect(gain);gain.connect(master);osc.start(start);osc.stop(start+dur+.05);});
      };
      const playAppSound = (kind="countdown",remaining=1) => {
        const vol=volumeLevel(); if(!vol||state.timerSound==="none")return;
        armTimerAudio();
        const audio=soundCache[kind];
        if(audio){audio.pause();audio.currentTime=0;audio.volume=vol;audio.play().catch(()=>syntheticSound(kind,remaining));return;}
        syntheticSound(kind,remaining);
      };
      const startInterval = i => {armTimerAudio();requestWakeLock();lastCountdownBeep="";const e=state.builder[i],paused=state.intervalRun?.index===i&&!state.intervalRun.running&&Number(state.intervalRun.remaining)>0;if(paused){state.intervalRun.running=true;state.intervalRun.endsAt=Date.now()+state.intervalRun.remaining*1000;delete state.intervalRun.remaining;}else{state.intervalRun={index:i,phase:"work",round:1,running:true,endsAt:Date.now()+(Number(e.work)||20)*1000};playAppSound("work");}save();updateCountdowns();};
      const resetInterval = () => {state.intervalRun=null;lastCountdownBeep=""; save(); updateCountdowns();};      const neighborCard = (label,e,empty) => `<div class="neighborCard ${empty?"emptyNeighbor":""}"><span>${label}</span><strong>${e?e.name:empty}</strong>${e?`<small>${format(e)}</small>`:""}</div>`;
      const activeSwapPanel = (i,e) => {const options=swapAlternatives(e.name,state.builderCat);return `<section class="swapPanel"><div class="cardTop"><div><h2>Bytt øvelse</h2><p class="muted">Erstatt ${e.name} bare i denne økten.</p></div><button class="secondary smallText" data-close-swap>Tilbake</button></div><div class="swapList">${options.map(option=>`<button class="swapOption" data-swap-active="${i}|${encodeURIComponent(option.name)}"><strong>${option.name}</strong><span>${option.reasons.join(" · ")}</span></button>`).join("")||'<p class="empty">Ingen gode alternativer funnet.</p>'}</div><button class="secondary" data-keep-original>Behold opprinnelig øvelse</button></section>`;};
      function finishActiveWorkout() {
        if(!state.builder.length)return;
        state.sessions.unshift({date:new Date().toISOString(),name:state.builderName||"Egen økt",cat:state.builderCat||"favoritter",duration:state.startedAt?Math.max(1,Math.round((Date.now()-state.startedAt)/60000)):undefined,ex:state.builder,comment:state.comment});
        state.builder=[]; state.rest={}; state.setRest={}; state.intervalRun=null; state.swapIndex=null; state.justAdded=""; state.activeIndex=0; state.builderMode="build"; state.tab="history"; save(); render();
      }
      function renderActiveWorkout() {
        if(!state.builder.length){view.innerHTML='<p class="empty">Ingen øvelser i økten.</p>';return;}
        requestWakeLock();
        state.activeIndex=Math.min(Math.max(Number(state.activeIndex)||0,0),state.builder.length-1);
        const i=state.activeIndex, e=state.builder[i], prev=state.builder[i-1], next=state.builder[i+1], interval=activeUsesIntervals(), run=state.intervalRun?.index===i?state.intervalRun:null, left=run?intervalRemaining():Number(e.work)||20;
        const m=metaFor(e.name), cues=cuesFor(e.name).slice(0,state.minimalFocus?1:5), mistake=mistakesFor(e.name)[0]||"Hold kontroll og stopp hvis teknikken glipper.", note=(state.notes&&state.notes[e.name])||e.note||"", last=lastEntries(e.name)[0];
        const setTotal=setCountOf(e), done=Number(e.doneSets)||0, currentSet=Math.min(done+1,setTotal), restUntil=(state.setRest||{})[i]||0, restLeft=Math.max(0,Math.ceil((restUntil-Date.now())/1000));
        const progress=Math.round(((i+1)/state.builder.length)*100);
        const timerPanel=interval?`<section class="focusInfo timerFocus"><div class="intervalStatus"><strong data-interval-phase class="${run?.phase||"ready"}">${run?(run.phase==="work"?"ARBEID":run.phase==="rest"?"HVILE":"FERDIG"):"KLAR"}</strong><span data-interval-round>Runde ${run?.round||1} av ${e.rounds||3}</span></div><div class="workoutClock ${run?.running?"running":""}" data-interval-clock>${clockText(left)}</div><p class="muted clockLabel">${e.work||20}s arbeid · ${e.pause||10}s hvile · ${e.rounds||3} runder</p><div class="buttons activeTimerButtons"><button class="primary" data-start-interval="${i}">${run?.running?"Start på nytt":run?"Fortsett intervall":"Start intervall"}</button><button class="secondary" data-reset-interval>Nullstill</button></div></section>`:`<section class="focusInfo"><div class="strengthMode"><strong>Sett ${Math.min(currentSet,setTotal)} av ${setTotal}</strong><span>Reps: ${e.targetReps||e.reps||"kontrollert"}${e.load?` · Belastning: ${e.load}`:""}</span></div><div class="setCheckRow">${Array.from({length:setTotal},(_,idx)=>`<button class="setCheck ${idx<done?"done":""}" data-set-done="${idx+1}">${idx+1}</button>`).join("")}</div>${restLeft?`<div class="restFocus"><span>Hvile</span><strong data-set-rest-clock="${i}">${clockText(restLeft)}</strong><div class="buttons"><button class="secondary smallText" data-add-rest="15">+15 sek</button><button class="secondary smallText" data-add-rest="30">+30 sek</button></div></div>`:"<p class=\"muted\">Hak av ett sett om gangen. Hviletimer starter automatisk.</p>"}</section>`;
        if(state.minimalFocus){
          view.innerHTML=`<article class="panel focusScreen minimalFocus"><div class="focusTop"><span>Øvelse ${i+1} av ${state.builder.length}</span><button class="secondary smallText" id="toggleMinimal">Vis mer</button></div><div class="workoutProgress"><span style="width:${progress}%"></span></div><h1>${e.name}</h1>${timerPanel}<section class="focusCue"><strong>Fokus</strong><p>${cues[0]||"Rolig kontroll"}</p></section><div class="buttons navButtons focusBottom"><button class="secondary" id="prevExercise" ${i===0?"disabled":""}>Forrige</button><button class="primary" id="nextExercise">${next?"Neste":"Avslutt"}</button></div></article>`;
          bindActiveWorkout();
          return;
        }
        view.innerHTML=`<article class="panel focusScreen activeWorkoutPanel"><div class="focusTop"><span>Øvelse ${i+1} av ${state.builder.length}</span><button class="secondary smallText" id="toggleMinimal">Minimal modus</button></div><div class="workoutProgress"><span style="width:${progress}%"></span></div><section class="focusHero"><p class="muted">${state.builderName||"Pågående økt"}</p><h1><button class="textButton exerciseName" data-detail="${e.name}">${e.name}</button></h1></section>${timerPanel}<section class="focusBlock"><h2>Fokus på dette</h2><ul class="focusList">${cues.map(c=>`<li>${c}</li>`).join("")}</ul></section><section class="focusBlock warningBlock"><h2>Vanlig feil</h2><p>${mistake}</p></section><section class="focusBlock"><h2>Muskelgrupper</h2><div class="chipRow"><span class="tag cue">${m.primary}</span>${m.secondary.map(x=>`<span class="tag">${x}</span>`).join("")}</div></section>${note?`<section class="focusBlock"><h2>Egne notater</h2><p>${note}</p></section>`:""}<section class="focusBlock"><h2>Forrige prestasjon</h2><p class="muted">${last?`${new Date(last.date).toLocaleDateString("no")} · ${format(last)}${last.comment?` · ${last.comment}`:""}`:"Ingen historikk ennå."}</p></section><section class="focusBlock"><h2>Mål i dag</h2><p>${last?`Match eller gjør litt bedre enn sist: ${format(last)}.`:"God teknikk, kontrollert tempo og fullfør alle planlagte sett."}</p></section><div class="neighborGrid">${neighborCard("Forrige",prev,"Start")}${neighborCard("Neste øvelse",next,"Ferdig etter denne")}</div><div class="buttons navButtons focusBottom"><button class="secondary" id="prevExercise" ${i===0?"disabled":""}>Forrige øvelse</button><button class="primary" id="nextExercise">${next?"Neste øvelse":"Avslutt økt"}</button><button class="secondary" data-open-swap="${i}">Bytt øvelse</button><button class="secondary" data-detail="${e.name}">Teknikkdetaljer</button><button class="secondary" id="editWorkout">Pause / åpne bygger</button><button class="secondary" id="finish">Avslutt økt</button></div>${state.swapIndex===i?activeSwapPanel(i,e):""}<textarea id="comment" placeholder="Øktkommentar">${state.comment||""}</textarea><div class="buttons"><button class="secondary" id="saveProgram">Lagre som favoritt</button><button class="secondary" id="closeFocus">Lukk fokusmodus</button></div></article>`;
        bindActiveWorkout();
      }      function bindActiveWorkout() {
        ["comment"].forEach(id=>{const el=document.querySelector("#"+id); if(el) el.oninput=e=>{state[id]=e.target.value; save();};});
        document.querySelectorAll("[data-start-interval]").forEach(b=>b.onclick=()=>startInterval(Number(b.dataset.startInterval)));
        document.querySelectorAll("[data-reset-interval]").forEach(b=>b.onclick=resetInterval);
        document.querySelectorAll("[data-set-done]").forEach(b=>b.onclick=()=>{const i=state.activeIndex,e=state.builder[i],done=Number(b.dataset.setDone);e.doneSets=Math.max(Number(e.doneSets)||0,done);state.setRest=state.setRest||{};if(e.doneSets<setCountOf(e)){state.setRest[i]=Date.now()+(Number(e.rest)||90)*1000;restDoneKey="";playAppSound("rest");}save();render();});
        document.querySelectorAll("[data-add-rest]").forEach(b=>b.onclick=()=>{const i=state.activeIndex,extra=Number(b.dataset.addRest)||0;state.setRest=state.setRest||{};state.setRest[i]=Math.max(Date.now(),state.setRest[i]||Date.now())+extra*1000;save();render();});
        document.querySelectorAll("[data-open-swap]").forEach(b=>b.onclick=()=>{state.swapIndex=Number(b.dataset.openSwap);save();render();});
        document.querySelectorAll("[data-close-swap],[data-keep-original]").forEach(b=>b.onclick=()=>{state.swapIndex=null;save();render();});
        document.querySelectorAll("[data-swap-active]").forEach(b=>b.onclick=()=>{const [index,encoded]=b.dataset.swapActive.split("|");const i=Number(index),name=decodeURIComponent(encoded);resetInterval();state.builder[i]={...state.builder[i],name};state.swapIndex=null;save();render();});
        const goPrev=()=>{resetInterval(); state.swapIndex=null; state.activeIndex=Math.max(0,state.activeIndex-1); save(); render();};
        const goNext=()=>{resetInterval(); state.swapIndex=null; if(state.activeIndex>=state.builder.length-1) finishActiveWorkout(); else {state.activeIndex++; save(); render();}};
        const prev=document.querySelector("#prevExercise"), next=document.querySelector("#nextExercise"); if(prev)prev.onclick=goPrev; if(next)next.onclick=goNext;
        const toggle=document.querySelector("#toggleMinimal"); if(toggle)toggle.onclick=()=>{state.minimalFocus=!state.minimalFocus;save();render();};
        const edit=document.querySelector("#editWorkout"); if(edit)edit.onclick=()=>{pauseWorkoutTimer();state.builderMode="build";save();render();};
        const close=document.querySelector("#closeFocus"); if(close)close.onclick=()=>{pauseWorkoutTimer();state.builderMode="build";save();render();};
        const finish = document.querySelector("#finish"); if (finish) finish.onclick=finishActiveWorkout;
        const saveProgram = document.querySelector("#saveProgram"); if (saveProgram) saveProgram.onclick=()=>saveCurrentAsFavorite();
        const focus=document.querySelector(".focusScreen"); if(focus){let sx=0;focus.ontouchstart=e=>{sx=e.touches[0].clientX;};focus.ontouchend=e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>70){dx<0?goNext():goPrev();}};}
        bindCommon();
      }      const setCountControls = (e,i) => `<div class="setCountControls" aria-label="Antall sett for ${e.name}"><button class="secondary icon" data-set-minus="${i}" aria-label="Færre sett">−</button><strong>${setCountOf(e)} sett</strong><button class="secondary icon" data-set-plus="${i}" aria-label="Flere sett">+</button></div>`;
      const bindSetCountControls = () => {document.querySelectorAll("[data-set-minus]").forEach(b=>b.onclick=()=>{const e=state.builder[Number(b.dataset.setMinus)];e.setCount=Math.max(1,setCountOf(e)-1);save();render();});document.querySelectorAll("[data-set-plus]").forEach(b=>b.onclick=()=>{const e=state.builder[Number(b.dataset.setPlus)];e.setCount=Math.min(12,setCountOf(e)+1);save();render();});};
      function builderLine(e,i) {
        return `<div class="builderLine simpleBuilderLine"><div class="builderHead"><div><h3><button class="textButton exerciseName" data-detail="${e.name}">${e.name}</button></h3>${setCountControls(e,i)}</div><div class="buttons"><button class="secondary smallText" data-detail="${e.name}">Detaljer</button><button class="secondary smallText" data-up="${i}">Opp</button><button class="secondary smallText" data-down="${i}">Ned</button><button class="secondary smallText" data-remove="${i}">Fjern</button></div></div>${e.note?`<p class="muted">${e.note}</p>`:""}</div>`;
      }      function bindBuilder() {
        const builderName = document.querySelector("#builderName");
        if (builderName) builderName.oninput=e=>{state.builderName=e.target.value; save();};
        document.querySelectorAll("[data-builder-cat]").forEach(b=>b.onclick=()=>{const cat=b.dataset.builderCat;state.builderPickCat=cat;state.builderCat=cat;state.builder=[];state.timerChoice=cat==="tabata"?"tabata":hasIntervalTimer(cat)?"interval":"none";if(cat==="tabata"){state.globalWork=20;state.globalPause=10;state.globalRounds=8;}if(cat==="toying"){state.globalWork=45;state.globalPause=10;state.globalRounds=1;}state.builderSearch="";save();render();});
        document.querySelectorAll("[data-timer-choice]").forEach(b=>b.onclick=()=>{state.timerChoice=b.dataset.timerChoice;if(state.timerChoice==="tabata"){state.globalWork=20;state.globalPause=10;state.globalRounds=8;}applyTimerToBuilder();save();render();});
        ["globalWork","globalPause","globalRounds","pauseBetween"].forEach(id=>{const el=document.querySelector("#"+id);if(el)el.oninput=e=>{state[id]=Number(e.target.value)||0;applyTimerToBuilder();save();};});
        const builderSearch = document.querySelector("#builderSearch");
        if (builderSearch) builderSearch.oninput=e=>{state.builderSearch=e.target.value; save(); document.querySelector("#exercisePickList").innerHTML=exercisePickListHtml(); bindCommon();};
        const randomCat = document.querySelector("#randomCat");
        if (randomCat) randomCat.onchange=e=>{state.randomCat=e.target.value; save();};
        const randomCount = document.querySelector("#randomCount");
        if (randomCount) randomCount.oninput=e=>{state.randomCount=e.target.value; save();};
        document.querySelectorAll("[data-random-count]").forEach(b=>b.onclick=()=>{state.randomCount=Number(b.dataset.randomCount);save();render();});
        const randomButton = document.querySelector("#randomWorkout");
        if (randomButton) randomButton.onclick=randomWorkout;
        ["comment"].forEach(id=>{const el=document.querySelector("#"+id); if(el) el.oninput=e=>{state[id]=e.target.value; save();};});
        document.querySelectorAll("[data-ek]").forEach(el=>el.oninput=()=>{const e=state.builder[el.dataset.i]; e[el.dataset.ek]=["work","pause","rounds"].includes(el.dataset.ek)?Number(el.value)||0:el.value; save();});
        document.querySelectorAll("[data-enote]").forEach(el=>el.oninput=()=>{state.builder[el.dataset.enote].note=el.value; save();});
        document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{state.builder.splice(Number(b.dataset.remove),1); save(); render();});bindSetCountControls();
        document.querySelectorAll("[data-up]").forEach(b=>b.onclick=()=>move(Number(b.dataset.up),-1));
        document.querySelectorAll("[data-down]").forEach(b=>b.onclick=()=>move(Number(b.dataset.down),1));
        document.querySelectorAll("[data-swap]").forEach(b=>b.onclick=()=>{const [i,n]=b.dataset.swap.split(":"); state.builder[i].name=n; save(); render();});
        document.querySelectorAll("[data-rest]").forEach(b=>b.onclick=()=>{const [i,sec]=b.dataset.rest.split(":"); state.builder[i].rest=Number(sec); save(); render();});
        document.querySelectorAll("[data-timer]").forEach(b=>b.onclick=()=>{state.rest=state.rest||{}; const i=b.dataset.timer; state.rest[i]=Date.now()+(state.builder[i].rest||90)*1000; save(); updateCountdowns();});
        document.querySelectorAll("[data-worktimer]").forEach(b=>b.onclick=()=>{state.rest=state.rest||{}; const i=b.dataset.worktimer, e=state.builder[i], seconds=e.mode==="kontinuerlig"?(e.work||120):((e.work||45)+(e.pause||15))*(e.rounds||3); state.rest[i]=Date.now()+seconds*1000; save(); updateCountdowns();});
        const finish = document.querySelector("#finish");
        if (finish) finish.onclick=()=>{if(!state.builder.length)return; state.sessions.unshift({date:new Date().toISOString(),name:state.builderName||"Egen økt",cat:state.builderCat||"favoritter",duration:state.startedAt?Math.max(1,Math.round((Date.now()-state.startedAt)/60000)):undefined,ex:state.builder,comment:state.comment}); state.builder=[]; state.rest={}; state.justAdded=""; state.builderMode="build"; state.tab="history"; save(); render();};
        const nextTimer = document.querySelector("#nextTimer");
        if (nextTimer) nextTimer.onclick=()=>{if(!state.builder.length)return; state.builderStep="timer"; save(); render();};
        const saveProgram = document.querySelector("#saveProgram");
        if (saveProgram) saveProgram.onclick=()=>saveCurrentAsFavorite();
        bindCommon();
      }
      function move(i,d){const t=i+d;if(t<0||t>=state.builder.length)return;[state.builder[i],state.builder[t]]=[state.builder[t],state.builder[i]];save();render();}
      function workoutStatsCards() {
        const names=[...new Set(state.sessions.map(s=>s.name))];
        return names.map(name=>{const sessions=state.sessions.filter(s=>s.name===name), durations=sessions.map(s=>Number(s.duration)||0).filter(Boolean), first=sessions.at(-1), last=sessions[0]; return `<article class="panel grid"><h3>${name}</h3><div class="records"><span>${sessions.length} gjennomføringer</span><span>Første: ${first?new Date(first.date).toLocaleDateString("no"):"-"}</span><span>Siste: ${last?new Date(last.date).toLocaleDateString("no"):"-"}</span><span>Total tid: ${durations.reduce((a,b)=>a+b,0)} min</span><span>Snitt: ${durations.length?Math.round(durations.reduce((a,b)=>a+b,0)/durations.length):"-"} min</span><span>Øvelser sist: ${last?last.ex.length:"-"}</span></div></article>`;}).join("");
      }
      function renderHistory() {
        const ex=allNames[0], metricPoints=progression(ex);
        view.innerHTML=`<div class="section"><h2>Historikk og progresjon</h2></div><article class="panel grid"><div class="records"><span>Økter totalt: ${state.sessions.length}</span><span>Total tid: ${state.sessions.reduce((sum,s)=>sum+(Number(s.duration)||0),0)} min</span></div>${spark(metricPoints)}</article>${state.sessions.length?`<div class="section"><h2>Statistikk per økt</h2></div><div class="cards">${workoutStatsCards()}</div>`:""}${state.sessions.length?state.sessions.map(s=>`<article class="panel grid"><div class="cardTop"><div><h3>${s.name}</h3><p class="muted">${new Date(s.date).toLocaleDateString("no")} · ${s.cat}${s.duration?` · ${s.duration} min`:""}</p></div><span class="pill">${s.ex.length} øvelser</span></div><div class="list">${s.ex.map(e=>`<div class="historyRow clickableRow"><button class="textButton" data-detail="${e.name}">${e.name}</button><span class="muted">${format(e)}</span></div>`).join("")}</div>${s.comment?`<p class="muted">${s.comment}</p>`:""}</article>`).join(""):'<p class="empty">Fullfør en økt for å se dato, varighet, øvelser og kommentarer her.</p>'}`;
        bindCommon();
      }
      const templateToEntries = t => t.ex.map(x=>{const e=entry(x[0],t.cat==="toying"?1:3,x[2]); if(t.timerChoice&&t.timerChoice!=="none"){e.mode="intervall";e.work=t.work||e.work||45;e.pause=t.pause??e.pause??15;e.rounds=t.rounds||e.rounds||3;} return e;});
      function useWorkoutTemplate(t, edit=false) {
        state.builderName = edit ? `${t.name} kopi` : t.name;
        state.builderCat = t.cat;
        state.builderPickCat = t.cat==="tabata" ? "kroppsvekt" : t.cat;
        state.builder = templateToEntries(t);
        state.timerChoice = t.timerChoice || "none";
        state.globalWork = t.work || state.globalWork || 45;
        state.globalPause = t.pause ?? state.globalPause ?? 15;
        state.globalRounds = t.rounds || state.globalRounds || 3;
        state.builderStep = edit ? "exercises" : "timer";
        state.builderMode = "build";
        state.tab = "builder";
        state.justAdded = "";
        save();
        render();
      }
      function renderWorkoutTemplates() {
        const cards = workoutTemplates.map(t=>`<article class="panel grid templateCard"><div class="cardTop"><div><h3>${t.name}</h3><p class="muted">${t.desc}</p></div><span class="pill">${t.duration} min</span></div><div class="meta"><span><strong>Kategori:</strong> ${flowLabel(t.cat)}</span><span><strong>Nivå:</strong> ${t.level}</span><span><strong>Utstyr:</strong> ${t.equipment}</span><span><strong>Timer:</strong> ${t.timerChoice==="tabata"?"Tabata":t.timerChoice==="interval"?`${t.work||45}/${t.pause||15} sek · ${t.rounds||3} runder`:"Ingen"}</span></div><div class="list">${t.ex.map(x=>`<div class="historyRow clickableRow"><button class="textButton" data-detail="${x[0]}">${x[0]}</button><span class="muted">${x[1]||""} sett ${x[2]||""}</span></div>`).join("")}</div><div class="buttons actionPair"><button class="primary" data-use-workout-template="${t.id}">Bruk mal</button><button class="secondary" data-edit-workout-template="${t.id}">Dupliser og rediger</button></div></article>`).join("");
        view.innerHTML = `<div class="section"><h2>Øktmaler</h2><p class="muted">Ferdige økter du kan bruke som startpunkt.</p></div><div class="cards">${cards}</div>`;
        document.querySelectorAll("[data-use-workout-template]").forEach(b=>{const t=workoutTemplates.find(x=>x.id===b.dataset.useWorkoutTemplate); b.onclick=()=>t&&useWorkoutTemplate(t,false);});
        document.querySelectorAll("[data-edit-workout-template]").forEach(b=>{const t=workoutTemplates.find(x=>x.id===b.dataset.editWorkoutTemplate); b.onclick=()=>t&&useWorkoutTemplate(t,true);});
        bindCommon();
      }      function renderPlan() {
        const days=[["monday","Mandag"],["wednesday","Onsdag"],["friday","Fredag"]];
        view.innerHTML=`<div class="section"><h2>Ukeplan</h2></div><div class="cards three">${days.map(([key,label])=>{const t=templates.find(x=>x.id===state.plan[key])||templates[0];return `<article class="panel grid"><h3>${label}</h3><select data-plan="${key}">${templates.map(x=>`<option value="${x.id}" ${x.id===state.plan[key]?"selected":""}>${x.name}</option>`).join("")}</select><p class="muted">${t.desc||""}</p><button class="primary" data-start="${t.id}">Start økt</button></article>`}).join("")}</div>`;
        document.querySelectorAll("[data-plan]").forEach(s=>s.onchange=()=>{state.plan[s.dataset.plan]=s.value; save(); render();});
        bindCommon();
      }
      function renderBank() {
        const opts = (label,items) => `<option>${label}</option>${items.map(e=>`<option>${e}</option>`).join("")}`;
        view.innerHTML=`<div class="section"><h2>Øvelsesbank</h2></div><article class="panel grid filterGrid"><input id="search" placeholder="Søk øvelse, tagg eller fritekst"><select id="muscle">${opts("Alle muskler",filterData.muscles)}</select><select id="equip">${opts("Alt utstyr",equipment)}</select><select id="movement">${opts("Alle bevegelser",filterData.movements)}</select><select id="level">${opts("Alle nivå",filterData.levels)}</select><select id="goal">${opts("Alle mål",filterData.goals)}</select><select id="bankCat">${opts("Alle kategorier",filterData.bank)}</select><select id="favOnly"><option>Alle øvelser</option><option>Kun favoritter</option></select></article><p class="muted" id="resultCount"></p><div class="cards three" id="bankCards"></div>`;
        const apply=()=>{const q=document.querySelector("#search").value.toLowerCase(), muscle=document.querySelector("#muscle").value, eq=document.querySelector("#equip").value, movement=document.querySelector("#movement").value, level=document.querySelector("#level").value, goal=document.querySelector("#goal").value, bankCat=document.querySelector("#bankCat").value, favOnly=document.querySelector("#favOnly").value==="Kun favoritter"; const names=allNames.filter(n=>{const m=metaFor(n), hay=[n,m.description,m.primary,...m.secondary,...m.equipment,...m.movement,m.difficulty,...m.goals,m.type,m.bodyPart,m.load,m.side,m.ppl,...m.bankCats,...m.tags,...m.aliases].join(" ").toLowerCase(); return (!favOnly||isFavoriteExercise(n))&&(!q||hay.includes(q))&&(muscle==="Alle muskler"||m.primary===muscle||m.secondary.includes(muscle))&&(eq==="Alt utstyr"||m.equipment.includes(eq))&&(movement==="Alle bevegelser"||m.movement.includes(movement))&&(level==="Alle nivå"||m.difficulty===level)&&(goal==="Alle mål"||m.goals.includes(goal))&&(bankCat==="Alle kategorier"||m.bankCats.includes(bankCat));}); document.querySelector("#resultCount").textContent=`${names.length} øvelser funnet`; document.querySelector("#bankCards").innerHTML=names.map(card).join("")||'<p class="empty">Ingen treff. Prøv færre filtre.</p>'; bindCommon();};
        ["search","muscle","equip","movement","level","goal","bankCat","favOnly"].forEach(id=>document.querySelector("#"+id).oninput=apply);
        apply();
      }
      function render() {
        const focusActive = state.tab==="builder" && state.builderMode==="active";
        document.body.classList.toggle("focusModeActive", focusActive);
        renderShell();
        if(state.tab==="home")return renderHome();
        if(state.tab==="favworkouts")return renderFavoriteWorkouts();
        if(state.tab==="favoritter"){const favs=favoriteExercises();view.innerHTML=`<div class="section"><h2>Favorittøvelser</h2><button class="secondary" id="favBtn">Start økt</button></div>${favs.length?`<div class="cards three">${favs.map(card).join("")}</div>`:'<p class="empty">Ingen favorittøvelser valgt akkurat nå.</p>'}`;document.querySelector("#favBtn").onclick=()=>start("Favorittøkt","favoritter",favs.map(n=>entry(n,3,"")));bindCommon();return;}
        if(state.tab==="builder")return renderBuilder();
        if(state.tab==="detail")return renderDetail();
        if(state.tab==="history")return renderHistory();
        if(state.tab==="templates")return renderWorkoutTemplates();
        if(state.tab==="bank")return renderBank();

        renderCategory(state.tab);
      }
      function updateCountdowns() {
        document.querySelectorAll("[data-set-rest-clock]").forEach(el=>{const left=Math.max(0,Math.ceil((((state.setRest||{})[el.dataset.setRestClock]||0)-Date.now())/1000)); el.textContent=clockText(left); if(left===0&&(state.setRest||{})[el.dataset.setRestClock]){const key=`set-${el.dataset.setRestClock}-${state.setRest[el.dataset.setRestClock]}`; if(key!==restDoneKey){restDoneKey=key;playAppSound("work");if(navigator.vibrate)navigator.vibrate(140);}}});
        document.querySelectorAll("[data-countdown]").forEach(b=>{const left=Math.max(0,Math.ceil((((state.rest||{})[b.dataset.countdown]||0)-Date.now())/1000)); b.textContent=left?`${left}s`:"Hvile";});
        document.querySelectorAll("[data-clock]").forEach(el=>{const left=Math.max(0,Math.ceil((((state.rest||{})[el.dataset.clock]||0)-Date.now())/1000)); el.textContent=clockText(left); el.classList.toggle("running",left>0);});
        const run=state.intervalRun;
        if(run?.running&&Date.now()>=run.endsAt){
          const e=state.builder[run.index], work=Number(e?.work)||20, pause=Number(e?.pause)||0, rounds=Number(e?.rounds)||1;
          if(run.phase==="work"&&pause>0){run.phase="rest";run.endsAt=Date.now()+pause*1000;playAppSound("rest");}
          else if(run.round<rounds){run.round++;run.phase="work";run.endsAt=Date.now()+work*1000;playAppSound("work");}
          else {run.phase="done";run.running=false;playAppSound("complete");if(navigator.vibrate)navigator.vibrate([120,80,120]);}
          save();
        }
        const active=state.intervalRun, activeLeft=intervalRemaining(), clock=document.querySelector("[data-interval-clock]"), phase=document.querySelector("[data-interval-phase]"), round=document.querySelector("[data-interval-round]");
        if(active?.running&&activeLeft>=1&&activeLeft<=3){const beepKey=`${active.index}-${active.phase}-${active.round}-${activeLeft}`;if(beepKey!==lastCountdownBeep){lastCountdownBeep=beepKey;playAppSound("countdown",activeLeft);}}
        if(clock){clock.textContent=clockText(activeLeft);clock.classList.toggle("running",Boolean(active?.running));}
        if(phase&&active){phase.textContent=active.phase==="work"?"ARBEID":active.phase==="rest"?"HVILE":"FERDIG";phase.className=active.phase;}
        if(round&&active){const total=Number(state.builder[active.index]?.rounds)||1;round.textContent=`Runde ${Math.min(active.round,total)} av ${total}`;}
      }
      setInterval(updateCountdowns,1000);
      if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
      migrateTemplateFavorites();
      render();




















