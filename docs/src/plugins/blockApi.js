function apiCode(code, title, language){
  language = (language)? language : 'js';
  title = (title)? `<div class="apiCode__title">${title}</div>`: '';
  code = code.trim().replace(/@DOCSIFY_QM@/g, '`');
  const hl = Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.markup
  )

  return `<div class="apiCodeExample">${title}<pre id="${language}" v-pre data-lang="${language}" class="tabcontent"><code class="lang-${language}">${hl}</code></pre></div>`
}

async function install (hook, vm) {
  let api = false;

  hook.beforeEach(function (content) {
    api = content.startsWith('api>');

    if (api) {
      content = content.substring(4);

      const regExample = /(?!\`\`\`\s)```apiCode(\[(.*)?\])?(\((.*)?\))?((.*\n)+?)?```(?!\s\`\`\`)/gm;
      const regUrl = /^(?!\`\`\`\s)apiUrl(\[(.*)?\])?(\((.*)?\))?((.*)+?)?(?!\s\`\`\`)$/gm;

      let matchExample = regExample.exec(content);

      while (matchExample != null) {
        const example = apiCode(matchExample[5], matchExample[4], matchExample[2]);
        content = content.replace(matchExample[0], example);
        matchExample = regExample.exec(content);
      }

      let matchUrl = regUrl.exec(content);

      while (matchUrl != null) {
        let template = (`
          <div class="apiUrl">
            <span class="apiUrl__method ${matchUrl[2].toLowerCase()}">${matchUrl[2]}</span>
            ${matchUrl[4]}
          </div>
        `).replace(/\n/g, "")
          .replace(/[\t ]+\</g, "<")
          .replace(/\>[\t ]+\</g, "><")
          .replace(/\>[\t ]+$/g, ">")

        content = content.replace(matchUrl[0], template);
        matchUrl = regUrl.exec(content);
      }
    }

    return content;
  });

  hook.afterEach(function (html, next) {
    if (api) {
      console.log(html);
      const reg = /<p>apiBlock&gt;<\/p>((.*\n)+?)?<p>apiBlock\/&gt;<\/p>/gm;
      let match = reg.exec(html);

      while (match != null) {
        const template = `
          <article class="apiBlock">
            <div class="apiDoc">${match[1]}</div>
            <div class="apiCode"></div>
          </article>
        `;

        console.log(match);

        html = html.replace(match[0], template);
        match = reg.exec(html);
      }
    }

    next(html);
  })

  hook.doneEach(function () {
    if (api) {
      document.querySelector('body').className += ' apiSection';

      const apiBlock = document.querySelectorAll('.apiBlock');  // Listado de todo los apiBlock

      apiBlock.forEach(function(block){
        const apiCodeExample = block.querySelectorAll('.apiCodeExample');

        apiCodeExample.forEach(function(code) {
          block.querySelector('.apiCode').appendChild(code);
        })
      })
    } else {
      document.querySelector('body').className = document.querySelector('body').className.replace(' apiSection', '');
    }
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
