

function GetRangedAttackConditions() {


  prefix = 'RangedAttackConditions.';

  meters_from_target = parseInt(document.getElementsByName(`${prefix}meters_from_target`)[0].value);
  aim_actions = parseInt(document.getElementsByName(`${prefix}aim_actions`)[0].value);
  targets = parseInt(document.getElementsByName(`${prefix}targets`)[0].value);
  target_movement = document.getElementsByName(`${prefix}target_movement`)[0].value;
  attacker_movement = document.getElementsByName(`${prefix}attacker_movement`)[0].value;
  gyrostabilization = parseInt(document.getElementsByName(`${prefix}gyrostabilization`)[0].value);
  blind_fire = document.getElementsByName(`${prefix}blind_fire`)[0].checked;
  partial_cover = document.getElementsByName(`${prefix}partial_cover`)[0].checked;
  using_second_firearm = document.getElementsByName(`${prefix}using_second_firearm`)[0].checked;
  called_shot = document.getElementsByName(`${prefix}called_shot`)[0].checked;
  vision_type = parseInt(document.getElementsByName(`${prefix}vision_type`)[0].value);
  visibility = parseInt(document.getElementsByName(`${prefix}visibility`)[0].value);
  flashlight = document.getElementsByName(`${prefix}flashlight`)[0].checked;
  light_spell = document.getElementsByName(`${prefix}light_spell`)[0].checked;
  light_spell_force = parseInt(document.getElementsByName(`${prefix}light_spell_force`)[0].value);
  recoil_compensation = parseInt(document.getElementsByName(`${prefix}recoil_compensation`)[0].value);
  console.log(recoil_compensation);
  othermodifiers = document.getElementsByName(`${prefix}othermodifiers`)[0].value;
  var conditions = {
		'meters_from_target' : meters_from_target,
		'aim_actions' : aim_actions,
		'targets' : targets,
		'target_movement' : target_movement,
		'attacker_movement' : attacker_movement,
		'gyrostabilization' : gyrostabilization,
		'blind_fire' : blind_fire,
		'partial_cover' : partial_cover,
		'using_second_firearm' : using_second_firearm,
		'called_shot' : called_shot,
		'vision_type' : vision_type,
		'visibility' : visibility,
		'flashlight' : flashlight,
		'light_spell' : light_spell,
		'light_spell_force' : light_spell_force,
    'othermodifiers' : othermodifiers,
    'recoil_compensation' : recoil_compensation
  };



  return conditions;
}
