const sassExtract = require('sass-extract');
const fs = require("fs");


function getListColors(colorsMap){
  var colors = {};

  for (var color in colorsMap) {
    colors[color] = colorsMap[color].value.hex;;
  }

  return colors;
}


function getColors(varSass) {
  const colors = {};

  colors.brand = getListColors(varSass['$color-brand-map'].value);
  colors.gray = getListColors(varSass['$color-gray-map'].value);
  colors.notify = getListColors(varSass['$color-notify-map'].value);

  return colors;
}

function getIcons(varSass) {
  const icons = [];

  for (var variable in varSass) {
    if (variable.startsWith('$icon-')) {
      icons.push(variable.substr(1));
    }
  }

  return icons;
}


function writeJSON(file, data) {
  fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been updated");
  });
}


sassExtract.render({
  file: './src/didor.scss'
})
.then(rendered => {
  var varSass = rendered.vars.global;
  var vars = {};

  vars.colors = getColors(varSass);
  vars.icons = getIcons(varSass);

  writeJSON("./docs/src/sassVar.json", vars);
});
