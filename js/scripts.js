$(document).ready(function() {
  $.each(words, function(index, value) {
    $('.container').append('<div class="hex-box" style="background: #' + value +
    '">#' + value + '</div>');
  });
});
