$(document).ready(function() {
  // Put your code here
  $('a').click(function(event) {
    event.preventDefault();
  });
  $('textarea').keydown(function(event) {
    console.log('Key Down:', event.keyCode);
  });
  $('textarea').keyup(function(event) {
    console.log('Key Up:', event.keyCode);
  });
});
$('#the-button').click(function() {
  $(this).text('you clicked me!');
})
