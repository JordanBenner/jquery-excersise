$(document).ready(function() {
  $('#add-button').click(function() {
    var textValue = $('description').val();
    $('#todo-list').append('<li>' + textValue +'<button class="remove">remove</button>' +'</li>');
    $('#description').val('');
  });

  function removeItem() {
    var button = $(this);
    var li = button.parent();
    li.remove();
  }

  $('button.remove').on('click', removeItem);
});
