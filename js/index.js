var SR3Char = {

  Name : "Rykov Adamski",

  Abilities : {
    Body : 1,
    Quickness : 6,
    Strength : 5,
    Willpower : 4,
    Intelligence : 3,
    Charisma : 2,
    Essence : 6,
    Magic : 6,
    Reaction : 6
  },

  Condition : {
    Stun : 0,
    Physical : 0,
    Overflow : 0
  },

  DicePools : {

    Current : {
        Karma : 0,
        Astral : 0,
        Combat : 0,
        Control : 0,
        Hacking : 0,
        Spell : 0
    },

    Maximum : {
        Karma : 0,
        Astral : 0,
        Combat : 0,
        Control : 0,
        Hacking : 0,
        Spell : 0
    }

  },

  Skills : {
    Active : [
      {
        name : "Pistols",
        value : 6
      },

      {
        name : "Stealth",
        value : 3
      }
    ],

    Knowledge : [
      {
        Name : "Conspiracy Theories",
        Value : 3
      }
    ],

    Language : [
      {
        Name : "Russian",
        Value : 3
      }
    ]
  },

  Equipment : {
    Weapons : [
      {
        Weapon : "Ares Predator III",
        Type : "Pistol",
        Skill : 6,
        Equipped : true,
        Power : 8,
        Lethality : "S",
        Modes : {
          SingleShot : false,
          SemiAuto : true,
          Burst : false,
          FullAuto : false
        }
      }
    ],

    Armors : [
      {
        Armor : "Security Jacket",
        Ballistics : 3,
        Impact : 2,
        Equipped : true
      }
    ]
  },
}

updateForm();



/*****
** add listeners for collapsible sections
*****/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

initalizeConditionMonitor();

function initalizeConditionMonitor() {
  var cbs;
  cbs = document.querySelectorAll('input[type="checkbox"][name="stunDamage"]');
  for(i=0; i < cbs.length; i++) {
    cbs[i].innerText = cbs[i].value;
  }
  cbs = document.querySelectorAll('input[type="checkbox"][name="physicalDamage"]');
  for(i=0; i < cbs.length; i++) {
    cbs[i].innerText = cbs[i].value;
  }
}
/*****
** transfers stats from SR3Char object to the frontend form
*****/
function updateForm() {
  document.getElementById("Name").value = SR3Char.Name;

  document.getElementById("Body").value = SR3Char.Abilities.Body;
  document.getElementById("Quickness").value = SR3Char.Abilities.Quickness;
  document.getElementById("Strength").value = SR3Char.Abilities.Strength;
  document.getElementById("Willpower").value = SR3Char.Abilities.Willpower;
  document.getElementById("Intelligence").value = SR3Char.Abilities.Intelligence;
  document.getElementById("Charisma").value = SR3Char.Abilities.Charisma;

  document.getElementById("Magic").value = SR3Char.Abilities.Magic;
  document.getElementById("Reaction").value = SR3Char.Abilities.Reaction;

  updateConditionMonitor();

  document.getElementById("Stun").value = SR3Char.Condition.Stun;
  document.getElementById("Physical").value = SR3Char.Condition.Physical;
  document.getElementById("Overflow").value = SR3Char.Condition.Overflow;
  document.getElementById("Penalties").value = calculateConditionPenalties();

  //GenerateArmorTable(this.Armor);

  //GenerateWeaponTable(this.Weapons);

  GenerateSkillTable(this.Skills);


}

function calculateConditionPenalties() {
  var stun = parseInt(SR3Char.Condition.Stun);
  var phys = parseInt(SR3Char.Condition.Physical);
  var penalty = 0;

  if(stun >= 6) {
    penalty += 1;
  }

  if(stun >= 3) {
    penalty += 1;
  }

  if(stun >= 1) {
    penalty += 1;
  }

  if(phys >= 6) {
    penalty += 1;
  }

  if(phys >= 3) {
    penalty += 1;
  }

  if(phys >= 1) {
    penalty += 1;
  }

  return penalty;
}

/*****
** Copies text to the clipboard
*****/

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};


/*****
** Rolls <related_skill> d6 dice vs target number <tn>
*****/
function rollVsTN(related_skill, tn) {
  var s = "[[" + related_skill + "d6!!>" + tn + "]]";
  console.log(s);
  copyToClipboard(s);
}

/*****
** Rolls <related_skill> d6 dice, keeping highest result
*****/
function rollOpen(related_skill) {
  //&{template:default} {{name=Open Skill Test}} {{attack=[[5d6kh1!!]]}} {{Damage=[[6]]S}}
  //&{template:default} {{name=Pistols (Open)}} {{attack=[[5d6kh1!!]]}} {{Damage=[[6]]S}}

  var elements;
  var skill_name;
  var skill_dice;
  var pool_dice;

  document.querySelectorAll(' input[text], [name=Skills], [related_skill=' + related_skill +'] ');

  var s;
  s = "&{template:default} {{name=" + skill_name + " (Open)}} {{" + skill_name + "=[[" + skill_dice + "d6kh1!!]]}} {{Pool=[[" + pool_dice + "d6kh1!!]]}}";
  console.log(s);
  copyToClipboard(s);
}

/*****
** Creates table of skills from loaded character
*****/
function GenerateSkillTable(character) {

  var skills = SR3Char.Skills.Active;

  var table;
  var i;
  var tbody;

  table = document.getElementById("SkillTable");

  if(table.tBodies.length > 0) {

    for( i_tBody = 0; i_tBody < table.tBodies.length; i_tBody++ ) {
        tbody = table.tBodies[i_tBody];
        tbody.remove();
    }


  }

  tbody = document.createElement("tbody");


  for(i=0; i < skills.length; i++) {
    tbody.appendChild(loadSkill(skills[i].name, skills[i].value));

  }

  table.appendChild(tbody);

}

function loadSkill(name, value) {
  var td1; //table data
  var td2;
  var td3;
  var td4;

  var ip1; //input text
  var ip2; //input number
  var btn1; //button Open
  var btn2; //button VsTN

  tr = document.createElement("tr");

  td1 = document.createElement("td");
  td2 = document.createElement("td");
  td3 = document.createElement("td");
  td4 = document.createElement("td");

  ip1 = document.createElement("input");
  ip1.setAttribute("type", "text");
  ip1.value = name;
  ip1.setAttribute("related_skill", name);
  ip1.name = "Skills";
  ip1.className = "test";

  ip2 = document.createElement("input");
  ip2.setAttribute("type", "number");
  ip2.value = value;
  ip2.setAttribute("related_skill", value);
  ip2.name = "Skills";
  ip2.className = "test";

  btn1 = document.createElement("button");
  btn1.setAttribute("onclick", "rollOpen(parseInt(this.getAttributeNames('related_skill')[0]));");
  btn1.setAttribute("related_skill", name);
  btn1.name = "Skills";

  btn2 = document.createElement("button");
  btn2.setAttribute("onclick", "parseInt(this.getAttributeNames('related_skill')[0])");
  btn2.related_skill = name;
  btn2.name = "Skills";

  td1.appendChild(ip1);
  td2.appendChild(ip2);
  td3.appendChild(btn1);
  td4.appendChild(btn2);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  return tr;
}

function addNewSkill() {
  var tbody = document.getElementById("SkillTable");
  var row = document.createElement("")

  tbody.appendChild(row);
}

/*****
** Condition Monitor
*****/
function takeStunDamage() {

}

function takeDamage(type, damage) {
  console.log(type + ", " + damage);
  switch(type) {
    case "stun":
      SR3Char.Condition.Stun += parseInt(damage);
      break;
    case "physical":
      SR3Char.Condition.Physical += parseInt(damage);
      break;
  }

  if(SR3Char.Condition.Stun > 10) {
    SR3Char.Condition.Physical += parseInt(SR3Char.Condition.Stun) - 10;
    SR3Char.Condition.Stun = 10;
  }

  if(SR3Char.Condition.Physical > 10) {
    SR3Char.Condition.Overflow += parseInt(SR3Char.Condition.Physical) - 10;
    SR3Char.Condition.Physical = 10;
  }

  updateForm();

}

function updateCharacterDamage() {
  SR3Char.Condition.Stun = document.querySelectorAll('input[type="checkbox"][name="stunDamage"]:checked').length;
  document.getElementById("Stun").value = SR3Char.Condition.Stun;
  SR3Char.Condition.Physical = document.querySelectorAll('input[type="checkbox"][name="physicalDamage"]:checked').length;
  document.getElementById("Physical").value = SR3Char.Condition.Physical;
  SR3Char.Condition.Overflow = document.getElementById("Overflow").value;
  document.getElementById("Overflow").value = SR3Char.Condition.Overflow;
}

function updateDamageTrack(cb) {

  var type = cb.name;
  var track = document.querySelectorAll('input[type="checkbox"][name=' + type + ']');

  if(cb.checked) {
    for(i=0; i < track.length; i++) {
      if(parseInt(track[i].value) -1 < cb.value) {
        track[i].checked = true;
      } else {
        track[i].checked = false;
      }
    }
  } else {
    for(i=0; i < track.length; i++) {
      if(parseInt(track[i].value) + 1 > cb.value) {
        track[i].checked = false;
      } else {
        track[i].checked = true;
      }
    }
  }
}

function updateConditionMonitor() {

  var i;
  var track;
  var damage;

  track = document.getElementsByName("stunDamage");
  damage = SR3Char.Condition.Stun;

  for(i=0; i < track.length; i++) {
    if(track[i].value <= damage) {
      track[i].checked = true;
    } else {
      track[i].checked = false;
    }
  }



  track = document.getElementsByName("physicalDamage");
  damage = SR3Char.Condition.Physical;

  for(i=0; i < track.length; i++) {
    if(track[i].value <= damage) {
      track[i].checked = true;
    } else {
      track[i].checked = false;
    }
  }


  document.getElementById("Overflow").value = SR3Char.Condition.Overflow;

}

function initializeConditionMonitorCheckbox(o) {
  o.innerText = o.value;
}

function updateConditionMonitor(stun_wounds, phys_wounds, overflow_wounds) {

  var stun_wounds = SR3Char.Condition.Stun;
  var phys_wounds = SR3Char.Condition.Physical;
  var overflow_wounds = SR3Char.Condition.Overflow;

  var i;

  var stun_track = document.getElementsByName("stunDamage");
  var phys_track = document.getElementsByName("physicalDamage");

  var cb;

  track = stun_track;
  damage = stun_wounds;

  for(i=0; i<track.length; i++) {
    cb = track[i];
    if(cb.value <= damage) {
      cb.checked = true;
    }
  }

  track = phys_track;
  damage = phys_wounds;

  for(i=0; i<track.length; i++) {
    cb = track[i];
    if(cb.value <= damage) {
      cb.checked = true;
    }
  }

}

var weapons = {
  types : [
    {
      type : "Hold-Out Pistol",
      range : {
        short : 5,
        medium : 15,
        long : 30,
        extreme : 50
      }
    },

    {
      type : "Light Pistol",
      range : {
        short : 5,
        medium : 15,
        long : 30,
        extreme : 50
      }
    },

    {
      type : "Heavy Pistol",
      range : {
        short : 5,
        medium : 20,
        long : 40,
        extreme : 60
      }
    },

    {
      type : "Sub Machine Gun",
      range : {
        short : 10,
        medium : 40,
        long : 80,
        extreme : 150
      }
    },

    {
      type : "Taser",
      range : {
        short : 5,
        medium : 10,
        long : 12,
        extreme : 15
      }
    },

    {
      type : "Shotgun",
      range : {
        short : 10,
        medium : 20,
        long : 50,
        extreme : 100
      }
    },

    {
      type : "Sporting Rifle",
      range : {
        short : 100,
        medium : 250,
        long : 500,
        extreme : 750
      }
    },

    {
      type : "Sniper Rifle",
      range : {
        short : 150,
        medium : 300,
        long : 700,
        extreme : 1000
      }
    },

    {
      type : "Assault Rifle",
      range : {
        short : 50,
        medium : 150,
        long : 350,
        extreme : 550
      }
    },

    {
      type : "Light Machine Gun",
      range : {
        short : 75,
        medium : 200,
        long : 400,
        extreme : 800
      }
    },

    {
      type : "Medium Machine Gun",
      range : {
        short : 80,
        medium : 250,
        long : 750,
        extreme : 1200
      }
    },

    {
      type : "Heavy Machine Gun",
      range : {
        short : 80,
        medium : 250,
        long : 800,
        extreme : 150
      }
    },

    {
      type : "Assault Cannon",
      range : {
        short : 100,
        medium : 300,
        long : 900,
        extreme : 2400
      }
    },

    {
      type : "Grenade Launcher",
      range : {
        minimum : 5,
        short : 50,
        medium : 100,
        long : 150,
        extreme : 300
      }
    },

    {
      type : "Missile Launcher",
      range : {
        minimum : 20,
        short : 150,
        medium : 450,
        long : 1200,
        extreme : 3000
      }
    }
  ]
};


/*
  switch(weaponclass) {
    case "selectaweapon":
      short=0;
      medium=0;
      long=0;
      extreme=0;
      break;

    case "holdoutpistol":
      short=5;
      medium=15;
      long=30;
      extreme=50;
      break;

    case "lightpistol":
      short=5;
      medium=15;
      long=30;
      extreme=50;
      break;

    case "heavypistol":
      short=5;
      medium=20;
      long=40;
      extreme=60;
      break;

    case "smg":
      short=10;
      medium=40;
      long=80;
      extreme=150;
      break;

    case "taser":
      short=5;
      medium=10;
      long=12;
      extreme=5;
      break;

    case "shotgun":
      short=10;
      medium=20;
      long=50;
      extreme=100;
      break;

    case "sportingrifle":
      short=100;
      medium=250;
      long=500;
      extreme=750;
      break;

    case "sniperrifle":
      short=150;
      medium=300;
      long=700;
      extreme=1000;
      break;

    case "assaultrifle":
      short=50;
      medium=150;
      long=350;
      extreme=550;
      break;

    case "lightmachinegun":
      short=75;
      medium=200;
      long=400;
      extreme=800;
      break;

    case "mediummachinegun":
      short=80;
      medium=250;
      long=750;
      extreme=1200;
      break;

    case "heavymachinegun":
      short=80;
      medium=250;
      long=800;
      extreme=1500;
      break;

    case "assaultcannon":
      short=100;
      medium=300;
      long=900;
      extreme=2400;
      break;

    case "grenadelauncher":
      minimum=5;
      short=50;
      medium=100;
      long=150;
      extreme=300;
      longrangeTN=8;
      break;

    case "missilelauncher":
      minimum=20;
      short=150;
      medium=450;
      long=1200;
      extreme=3000;
      break;

    case "bow":
      short=parseInt(strength);
      medium=parseInt(strength)*10;
      long=parseInt(strength)*30;
      extreme=parseInt(strength)*60;
      break;

    case "lightcrossbow":
      short=parseInt(strength)*2;
      medium=parseInt(streingth)*8;
      long=parseInt(streingth)*20;
      extreme=parseInt(strength)*40;
      break;

    case "mediumcrossbow":
      short=parseInt(strength)*3;
      medium=parseInt(strength)*12;
      long=parseInt(strength)*30;
      extreme=parseInt(strength)*50;
      break;

    case "heavycrossbow":
      short=parseInt(strength)*5;
      medium=parseInt(strength)*15;
      long=parseInt(strength)*40;
      extreme=parseInt(strength)*60;
      break;

    case "thrownknife":
      short=parseInt(strength);
      medium=parseInt(strength)*2;
      long=parseInt(strength)*3;
      extreme=parseInt(strength)*5;
      break;

    case "shuriken":
      short=parseInt(strength);
      medium=parseInt(strength)*2;
      long=parseInt(strength)*5;
      extreme=parseInt(strength)*7;
      break;

    case "elementalmanipulation":
      short = 99999;
      medium = 10000;
      long=10001;
      extreme=10002;
      break;
  }
*/
