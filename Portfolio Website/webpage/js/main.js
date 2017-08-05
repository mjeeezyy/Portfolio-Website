$(document).ready(function() {
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};


$("span").click(function() {
    $(".sidenav").toggle();
  });

};
