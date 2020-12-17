$(function() {
  CollapseAllCollapsibles();
  ToggleCollapsibleSection('CharacterRangedWeaponsSection');
});






function ToggleCollapsibleSection(id) {
  var collapsible = document.getElementById(id);
  if(collapsible.classList.contains('collapsed')) {
    UncollapseCollapsible(collapsible.id);
  } else {
    CollapseCollapsible(collapsible.id);
  }
}

function CollapseCollapsible(id) {
  document.getElementById(id).classList.add('collapsed');
}

function UncollapseCollapsible(id) {
  document.getElementById(id).classList.remove('collapsed');
}

function UncollapseAllCollapsibles() {
	var collapsibles = document.getElementsByClassName('collapsible_section');
	for(i = 0; i < collapsibles.length; i++) {
    let collapsible = collapsibles[i];
    UncollapseCollapsible(collapsible.id);
	}
}

function CollapseAllCollapsibles() {
	var collapsibles = document.getElementsByClassName('collapsible_section');
  var menu = document.getElementById('CharacterSheetMenuSection');
	for(i = 0; i < collapsibles.length; i++) {
    if(collapsibles[i]!==menu) CollapseCollapsible(collapsibles[i].id);
	}
}
