$(function() {
  console.log(`Initializing ShowHideElements.js`);
});

function ToggleHidden(id) {
  ele = document.getElementById(id);
  if(ele.classList.contains('hidden')) {
    ele.classList.remove('hidden');
  } else {
    ele.classList.add('hidden');
  }
}

function Unhide(id) {
  document.getElementById(id).classList.remove('hidden');
}

function Hide(id) {
  document.getElementById(id).classList.add('hidden');
}


function UnhideGroup(group) {
  console.group('UnhideGroup()');
  console.log(group);
  for(let i=0; i<group.length;i++) {
    console.log(`unhiding: ${group[i].id}`);
    Unhide(group[i].id);
  }
}
