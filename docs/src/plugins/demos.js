function demoIframe(code){
  var title = 'Demo code';
  var stylesheet = `<link rel='stylesheet' href='src/stylesheets/didor.css'>`;
  var srcdoc = `
    <head>
      <title>${title}</title>
      ${stylesheet}
    </head>
    <body style='background-color: #FAFAFA !important'>
      ${code}
    </body>
  `;
  var iframe = `<iframe srcdoc="${srcdoc}" class="demoContainer" scrolling="no" frameborder="0" height="auto" onload="autoResize(this)"></iframe>`;

  return iframe;
}


async function install (hook, vm) {
  hook.beforeEach(function (content) {
    const reg = /^```demo((.*\n)+?)?```$/gm;
    var match = reg.exec(content);

    while (match != null) {
      iframe = demoIframe(match[1]);
      content = content.replace(match[0], iframe);
      match = reg.exec(content);
    }

    return content;
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
