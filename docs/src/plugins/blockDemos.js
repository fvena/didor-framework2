function demoIframe(code, count){
  var title = 'Demo code';
  var stylesheet = `<link rel='stylesheet' href='src/stylesheets/didor.css'>`;
  var srcdoc = `
    <html style='height: initial'>
    <head>
      <title>${title}</title>
      ${stylesheet}
    </head>
    <body style='background-color: #f5f6f8 !important; border-radius: 5px; padding: .8rem 1.6rem;'>
      ${code}
    </body>
    </html>
  `;
  var iframe = `<iframe id="example" srcdoc="${srcdoc}" class="tabcontent" scrolling="no" frameborder="0" height="auto" onload="autoResize(this)"></iframe>`;

  return iframe;
}

function demoCode(code, language){
  code = code.trim().replace(/@DOCSIFY_QM@/g, '`');
  const hl = Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.markup
  )

  return `<pre id="${language}" v-pre data-lang="${language}" class="tabcontent"><code class="lang-${language}">${hl}</code></pre>`
}


async function install (hook, vm) {
  hook.beforeEach(function (content) {
    const reg = /^(?!\`\`\`\s)```demo(\[(.*)?\])?((.*\n)+?)?```(?!\s\`\`\`)$/gm;
    var match = reg.exec(content);
    var count = 1;

    while (match != null) {
      demo = (match[2]) ? demoCode(match[3], match[2]) : demoIframe(match[3], count);
      content = content.replace(match[0], demo);
      match = reg.exec(content);
      count++;
    }

    return content;
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
