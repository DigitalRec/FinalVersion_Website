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




// card open & close

var acc = document.getElementsByClassName("showdetail");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var showdetail = this.nextElementSibling;
    if (showdetail.style.maxHeight){
      showdetail.style.maxHeight = null;
    } else {
      showdetail.style.maxHeight = showdetail.scrollHeight + "px";
    }
  });
}
