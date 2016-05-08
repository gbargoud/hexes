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
        .html(word)
        .css('background-color', color.toHexString())
        .css('color', color.darken(50).toHexString())
        .appendTo($("section"))
  });
});
