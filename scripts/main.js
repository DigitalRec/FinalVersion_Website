/* Some of the html, css and JS thanks to
https://www.adam-bray.com ,www.w3schools.com and
https://css-tricks.com/three-line-menu-navicon*/

// mobile_side menu expand

function mobilenav_open(){
  document.getElementById("sidemenu").style.width="100%";
}
function mobilenav_close(){
  document.getElementById("sidemenu").style.width = "0";
}

var dropdown = document.getElementsByClassName("side_dropdown_btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// card open & close

var acc = document.getElementsByClassName("showmap");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var map_container = this.nextElementSibling;
    if (map_container.style.maxHeight){
      map_container.style.maxHeight = null;
    } else {
      map_container.style.maxHeight = map_container.scrollHeight + "px";
    }
  });
}
