$(document).ready(function() {

  words.sort(function(a,b) {
    colorA = tinycolor("#" + a);
    colorB = tinycolor("#" + b);

    return colorB.getBrightness() - colorA.getBrightness();
  });

  $.each(words, function(index, word) {
    color = tinycolor("#" + word);

    d = document.createElement('div');
    $(d).addClass('hex-box')
        .html('<h3>' + word + '</h3><p>' + color.toRgbString() + '</p>')
        .css('background-color', color.toHexString())
        .css('color', color.darken(50).toHexString())
        .appendTo($("section"))
  });

  $('.hex-box').on('mouseenter', function() {
    $(this).find('p').slideDown()
  });

  $('.hex-box').on('mouseout', function() {
    $(this).find('p').slideUp();
  });
});
