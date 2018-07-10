function iconsDemo(icons){
  var title = 'Demo code';
  var stylesheet = `<link rel='stylesheet' href='src/stylesheets/didor.css'>`;
  var content = '';

  for (var icon in icons) {
    content += `
      <div class='iconBlock'>
        <div class='iconBlock__icon'>
          <i class='${icons[icon]}'></i>
        </div>
        <div class='iconBlock__name'>.${icons[icon]}</div>
      </div>
    `;
  }

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
  const varSass = await loadJSON('/src/sassVar.json');

  hook.beforeEach(function (content) {
    const reg = /^iconos(.*)+?\>$/gm;
    const icons = varSass.icons;

    let match = reg.exec(content);

    if (match) {
      return content.replace(match[0], iconsDemo(icons));
    }
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
