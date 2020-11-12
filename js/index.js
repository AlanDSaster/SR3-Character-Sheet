$(function() {
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



function UpdateDivSizeToContents(id) {
	var div = document.getElementById(id);
	if (div.style.maxHeight){
		div.style.maxHeight = div.scrollHeight + "px";
	} else {
		div.style.maxHeight = null;
	}
}



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



function ReloadCSS() {
	/*
		Code taken from:
			https://stackoverflow.com/questions/2024486/is-there-an-easy-way-to-reload-css-without-reloading-the-page
	*/

	var links = document.getElementsByTagName("link");
	for (var cl in links) {
	  var link = links[cl];
	  if (link.rel === "stylesheet") {
      link.href += "";
		}
	}
}

function ExpandAllCollapsibles() {
	var collapsibles = document.getElementsByClassName('content');

	for(i = 0; i < collapsibles.length; i++) {
		collapsibles[i].style.maxHeight = collapsibles[i].scrollHeight + 'px';
	}
}

function CollapseAllCollapsibles() {
	var collapsibles = document.getElementsByClassName('content');

	for(i = 0; i < collapsibles.length; i++) {
		collapsibles[i].style.maxHeight = null;
	}
}
