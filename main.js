//toggle animation into x
function toggleAnimation(x) {
    x.classList.toggle('activated');
}
//make the navigation bar shows up or hide (mobile devices)
var toggleX = document.getElementById('nav-toggle');
var navMenu = document.getElementsByClassName('nav-links')[0];
toggleX.addEventListener("click", function(){
    if(navMenu.className === "nav-links") {
        navMenu.className = "show";} 
    else{
        navMenu.className = "nav-links"; }
     });
//color the navbar when the user scrolls down
$(window).on('scroll', function (){
    if($(window).scrollTop() > 1) {
        $('.navigation').addClass("navbar-colored");}
    else{
        $('.navigation').removeClass("navbar-colored");
    }
});
 //make navigation bar fades out after clicking the hyperlink
$(document).ready(function(){
   $("#navbar ul a").on("click", function (){
       $("#navbar").removeClass("show").addClass("nav-links");
       $("#nav-toggle").removeClass("activated");
   }); 
});
//make the + sign turns into - sign
$(".plans-space").on("click", function () {
    $(".add-less-sign1").toggleClass("turning");
});
$(".plans-space2").on("click", function () {
    $(".add-less-sign3").toggleClass("turning");
});
// make the plans space grows down
$(".plans-space").on("click", function () {
    $(".plans-space").toggleClass("plans-space-sized");
    $(".plans-cont").toggle(300);
});
$(".plans-space2").on("click", function () {
    $(".plans-space2").toggleClass("plans-space-sized");
    $(".plans-cont2").toggle(300);
});
//smooth  scrolling from the hyperlinks
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
      }
    }
  });
//////