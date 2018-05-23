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

var acc = document.getElementsByClassName("showpic");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var pic = this.nextElementSibling;
    if (pic.style.maxHeight){
      pic.style.maxHeight = null;
    } else {
      pic.style.maxHeight = pic.scrollHeight + "px";
    }
  });
}
var acc = document.getElementsByClassName("platterDetail");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var platterDetail = this.nextElementSibling;
    if (platterDetail.style.maxHeight){
      platterDetail.style.maxHeight = null;
    } else {
      platterDetail.style.maxHeight = platterDetail.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("birthdayDetail");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var platterDetail = this.nextElementSibling;
    if (platterDetail.style.maxHeight){
      platterDetail.style.maxHeight = null;
    } else {
      platterDetail.style.maxHeight = platterDetail.scrollHeight + "px";
    }
  });
}
