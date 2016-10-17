
var gramsToOunces = function(grams) {
  return grams / 28.3495;
}

var ouncesToGrams = function(ounces) {
  return ounces * 28.3495;
}

var gramsToPounds = function(grams) {
  return grams / 453.592;
}

var poundsToKg = function(pounds) {
  return pounds / 2.20462;
}



var pounds = parseFloat(prompt("Enter pounds:"));


var result = poundsToKg (pounds);
alert(result);
