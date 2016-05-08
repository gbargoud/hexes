$(document).ready(function() {
  $.each(words, function(index, value) {
    $('.container').append('<div style="background: #' + value + '">' + value + '</div>');
  });
});
