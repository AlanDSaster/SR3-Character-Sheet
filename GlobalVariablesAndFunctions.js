function GetAttributeByName(name) {
  elements = document.getElementsByName(name);
  return elements[0].value;
}

function SetAttributeByName(name, value) {
  elements = document.getElementsByName(name);
  for(let i=0; i<elements.length; i++) {
    elements[i].value = value;
  }
}

function GetTbodyIndex(element) {
  var tbody = element.parentNode.parentNode.parentNode;
  var tbodies = tbody.parentNode.tBodies;
  for(var i=0; i<tbodies.length; i++) {
    if(tbody===tbodies[i]) return i;
  }
  return -1;
}

function Update() {
  UpdateSelects();
  BIOTABLE.Update();
  RANGEDWEAPONSTABLE.UpdateEntries();
}

function UpdateSelects() {
  selects = document.getElementsByTagName('select');

  for(i=0; i<selects.length; i++) {
    select = selects[i];

    switch(select.name) {
      case 'RangedWeaponsTable.skill_used':
        RemoveOptions(select);
        options_data = [];
        skills = SKILLSTABLE.GetSkills();
        for(let i=0; i<skills.length; i++) {
          let skill = skills[i].name;
          options_data.push(skill);
        }
        for(let i=0; i<options_data.length; i++) {
          let option = document.createElement('option');
          option.text = options_data[i];
          select.options.add(option);
        }
        break;
      default:
        break;
    }
  }
}

function RemoveOptions(select) {
  while(select.options.length > 0) {
    select.remove(select.options.length);
    console.log(`select.options.length: ${select.options.length}`);
  }
}
