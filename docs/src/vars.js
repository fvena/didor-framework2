const sassExtract = require('sass-extract');
const fs = require("fs");

function getColors(colorsMap){
  var colors = [];

  for (var color in colorsMap) {
    var item = {};
    item.name = color;
    item.valueHex = colorsMap[color].value.hex;
    item.valueRGBA = `rgba(${colorsMap[color].value.r},${colorsMap[color].value.g},${colorsMap[color].value.b},${colorsMap[color].value.a})`;
    colors.push(item);
  }

  return colors;
}


sassExtract.render({
  file: '../../src/2-Settings/_main.scss'
})
.then(rendered => {
  var vars = rendered.vars.global;
  var colorBrandMap = vars['$color-brand-map'].value;
  var colorGrayMap = vars['$color-gray-map'].value;
  var colorNotifyMap = vars['$color-notify-map'].value;

  var colors = {};
  colors.brand = getColors(colorBrandMap);
  colors.gray = getColors(colorGrayMap);
  colors.notify = getColors(colorNotifyMap);

  fs.writeFile("./assets/vars.json", JSON.stringify(colors, null, 2), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been updated");
  });
});
