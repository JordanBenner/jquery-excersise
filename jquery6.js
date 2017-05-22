$(document).ready(function() {
  $(function() {
        var showGreeting = true;
        $('#section-header').click(function() {
           $('#section').toggle();
          if (showGreeting) {
            $('#section').hide();
          } else {
            $('#section').show();
          }
          showGreeting = !showGreeting;
        });
      });

})
