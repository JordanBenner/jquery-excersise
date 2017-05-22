$(document).ready(function() {
  $('#clear-button').click(function(){
      $(this).click(function(){
          $('input[type="text"]').val('');
      });
  });
  $('#save-button').click(function(){
    var input = $("input[name='checkListItem']").val();
    $('.list').append('#text-field')
    $('#log').append( '<li>' + input + '</li>');
  });

})
