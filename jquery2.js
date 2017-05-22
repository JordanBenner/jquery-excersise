$(document).ready(function() {
  $('#the-button').click(function() {
    $(this).text('You clicked me!');
  })
})

$('#the-button').click(function() {
  alert('You clicked me!');
})
