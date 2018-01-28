$(document).ready(function() {
setBinding();
});



function setBinding(){
$("nav a").click(function(e){
    e.preventDefault();
var sectionID = e.currentTarget.id+"Section";


$('html, body').animate({
    scrollTop: $("#" + sectionID).offset().top
}, 1000);

 });


}