/*****
** Condition Monitor
*****/

function takeDamage(type, damage) {
  console.log(type + ", " + damage);
  switch(type) {
    case "stun":
      character.condition.stun += parseInt(damage);
      break;
    case "physical":
      character.condition.physical += parseInt(damage);
      break;
  }

  if(character.condition.stun > 10) {
    character.condition.physical += parseInt(character.condition.stun) - 10;
    character.condition.stun = 10;
  }

  if(character.condition.physical > 10) {
    character.condition.overflow += parseInt(character.condition.physical) - 10;
    character.condition.physical = 10;
  }

  updateConditionMonitor();

}

function updateCharacterDamage() {
  character.condition.stun = document.querySelectorAll('input[type="checkbox"][name="stunDamage"]:checked').length;
  document.getElementById("character.condition.stun").value = character.condition.stun;
  character.condition.physical = document.querySelectorAll('input[type="checkbox"][name="physicalDamage"]:checked').length;
  document.getElementById("character.condition.physical").value = character.condition.physical;
  character.condition.overflow = document.getElementById("character.condition.overflow").value;
  document.getElementById("character.condition.overflow").value = character.condition.overflow;
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
  damage = character.condition.stun;

  for(i=0; i < track.length; i++) {
    if(track[i].value <= damage) {
      track[i].checked = true;
    } else {
      track[i].checked = false;
    }
  }



  track = document.getElementsByName("physicalDamage");
  damage = character.condition.physical;

  for(i=0; i < track.length; i++) {
    if(track[i].value <= damage) {
      track[i].checked = true;
    } else {
      track[i].checked = false;
    }
  }


  document.getElementById("Overflow").value = character.condition.overflow;

}

function initializeConditionMonitorCheckbox(o) {
  o.innerText = o.value;
}

function updateConditionMonitor() {

  var stun_wounds = character.condition.stun;
  var phys_wounds = character.condition.physical;
  var overflow_wounds = character.condition.overflow;

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
