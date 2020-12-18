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
  RANGEDWEAPONSTABLE.UpdateEntries();
}
