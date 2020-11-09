function toggleOverlay(id) {
  console.log('toggleOverlay(' + id + ')');
  var overlay = document.getElementById(id)

  if(overlay.style.display == "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }

}

function clearInputFields(ids) {
  var i;

  for(i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).value = "";
  }
}
