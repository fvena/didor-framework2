function loadJSON(file) {
  return new Promise(function(resolve, reject) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == '200') {
        resolve(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);
  });
}

function colorsIframe(colors, family){
  var content = '';
  if (family === 'brand'){
    for (var color in colors) {
      if (!colors[color].name.endsWith('-dark') && !colors[color].name.endsWith('-light')) {
        content += `
          <div class='colorBlock__col'>
            <div class='colorBlock__row bg-${colors[color].name}-light'>
              <div class='colorBlock__name'>${colors[color].name}-light</div>
              ${colors[color].valueHex}
            </div>
            <div class='colorBlock__row bg-${colors[color].name}'>
              <div class='colorBlock__name'>${colors[color].name}</div>
              ${colors[color].valueHex}
            </div>
            <div class='colorBlock__row bg-${colors[color].name}-dark'>
              <div class='colorBlock__name'>${colors[color].name}-dark</div>
              ${colors[color].valueHex}
            </div>
          </div>
        `;
      }
    }
  } else {
    for (var color in colors) {
      content += `
        <div class='colorBlock bg-${colors[color].name}'>
          <div class='colorBlock__name'>${colors[color].name}</div>
          ${colors[color].valueHex}<br>
          ${colors[color].valueRGBA}
        </div>
      `;
    }
  }


  var title = 'Demo colors';
  var stylesheet = `<link rel='stylesheet' href='src/stylesheets/didor.css'>`;
  var srcdoc = `
    <head>
      <title>${title}</title>
      ${stylesheet}
    </head>
    <body style='background-color: #FAFAFA !important'>
      ${content}
    </body>
  `;
  var iframe = `<iframe srcdoc="${srcdoc}" class="demoContainer" scrolling="no" frameborder="0" height="auto" onload="autoResize(this)"></iframe>`;

  return iframe;
}


async function install (hook, vm) {
  var colors = await loadJSON('/src/assets/vars.json');

  hook.beforeEach(function (content) {
    const reg = /^colors\[(.*)+?\]\>$/gm;
    var match = reg.exec(content);

    while (match != null) {
      color = colorsIframe(colors[match[1]],match[1]);
      content = content.replace(match[0], color);
      match = reg.exec(content);
    }

    return content;
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
