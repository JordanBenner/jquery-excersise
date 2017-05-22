$(document).ready(function() {
  $('a').click(function (event) {
    event.preventDefault();
    //$('href').each(function('#iframe') {
      var src = $(this).attr('href');
      $('#iframe').attr('src', src);


  });

})
