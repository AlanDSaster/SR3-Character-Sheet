$(function() {
  console.log('collapsible')
	var coll = document.getElementsByClassName("collapsible");
	var i;
	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	      content.style.maxHeight = null;
	    } else {
	      content.style.maxHeight = content.scrollHeight + "px";
	    }
	  });
	}
	initalizeConditionMonitor();
});

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
