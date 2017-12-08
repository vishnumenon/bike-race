$(window).on("scroll", function() {
  $(".mm-nav").toggleClass("shrunk", $(this).scrollTop() > 200);
});
