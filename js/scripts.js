$(document).ready(function() {
  $("button#screen").click(function() {
    $("body").toggleClass("dark-background");
  });
  $("h3#selecthighlight").click(function() {
    $("h3#selecthighlight").toggleClass("highlight");
  });
});
