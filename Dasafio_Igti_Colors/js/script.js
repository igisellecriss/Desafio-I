window.addEventListener('load', changeColor);

function changeColor() {
  var red = document.getElementById('redSValue').value;
  var green = document.getElementById('greenSValue').value;
  var blue = document.getElementById('blueSValue').value;
  var rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
  var hex = '#' + getHexa(red) + getHexa(green) + getHexa(blue);

  var color = document.getElementById('colorSValue');
  color.style.backgroundColor = rgb;

  document.getElementById('redValue').innerHTML = red;
  document.getElementById('greenValue').innerHTML = green;
  document.getElementById('blueValue').innerHTML = blue;
  document.getElementById('rgbValue').innerHTML = rgb;
  document.getElementById('hexaValue').innerHTML = hex;

  function getHexa(value) {
    var hexa = parseInt(value).toString(16);
    return hexa.length === 1 ? '0' + hexa : hexa;
  }
}

document.getElementById('redSValue').addEventListener('input', changeColor);
document.getElementById('greenSValue').addEventListener('input', changeColor);
document.getElementById('blueSValue').addEventListener('input', changeColor);
