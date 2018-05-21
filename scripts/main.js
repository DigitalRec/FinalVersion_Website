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

function myFunction() {
    var x = document.getElementById("cli");
    if (x.innerHTML === "Click Me") {
        x.innerHTML = "HIHIHI";
    } else {
        x.innerHTML = "Click Me";
    }
}

var acc = document.getElementsByClassName("top");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var bottom = this.nextElementSibling;
    if (bottom.style.maxHeight){
      bottom.style.maxHeight = null;
    } else {
      bottom.style.maxHeight = bottom.scrollHeight + "px";
    }
  });
}
