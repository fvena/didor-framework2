function apiCode(code, title, language) {
  language = (language)? language : 'js';
  title = (title)? `<div class="apiCode__title">${title}</div>`: '';
  code = code.trim().replace(/@DOCSIFY_QM@/g, '`');
  const hl = Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.markup
  )

  return `<div class="apiCodeExample">${title}<pre id="${language}" v-pre data-lang="${language}" class="tabcontent"><code class="lang-${language}">${hl}</code></pre></div>`
}

function apiExample(data, id) {
  let params = '';

  // for (param in data.params) {
  //   params += `<div class="apiForm__row">
  //               <input class="apiForm__checkbox" type="checkbox" value="">
  //               <div class="apiForm__name">${param}</div>
  //               <input class="apiForm__input" type="text" name="${param}" value="${data.params[param]}">
  //             </div>`;
  // }

  data.params.forEach(function(param) {
    params += `<div class="apiForm__row">
                <input class="apiForm__checkbox" type="checkbox" ${(param.required)? "checked disabled" : "" }>
                <div class="apiForm__name">${param.name}</div>
                <input class="apiForm__input" type="text" name="${param.name}" value="${param.default}">
              </div>`;
  });

  const template = `
    <div class="apiExample">
      <form class="apiForm" data-url="${data.url}" data-method="${data.method}" data-pos="apiResult${id}" autocomplete="off">
        <div class="apiForm__header">
          <div class="apiForm__header__method">${data.method}</div>
          <div class="apiForm__header__url">${data.url}</div>
          <button class="apiForm__header__submit" onclick="api(event)">Probar</button>
        </div>
        ${params}
      </form>
      <div id="apiResult${id}" class="apiExampleResult"></div>
    </div>
  `;

  return template
    .replace(/\n/g, "")
    .replace(/[\t ]+\</g, "<")
    .replace(/\>[\t ]+\</g, "><")
    .replace(/\>[\t ]+$/g, ">");
}

async function install (hook, vm) {
  let api = false;

  hook.beforeEach(function (content) {
    api = content.startsWith('api>');

    if (api) {
      content = content.substring(4);

      const regCode = /(?!\`\`\`\s)```apiCode(\[(.*)?\])?(\((.*)?\))?((.*\n)+?)?```(?!\s\`\`\`)/gm;
      const regExample = /(?!\`\`\`\s)```apiExample((.*\n)+?)?```(?!\s\`\`\`)/gm;
      const regUrl = /^(?!\`\`\`\s)apiUrl(\[(.*)?\])?(\((.*)?\))?((.*)+?)?(?!\s\`\`\`)$/gm;


      // apiCode
      let matchCode = regCode.exec(content);

      while (matchCode != null) {
        const code = apiCode(matchCode[5], matchCode[4], matchCode[2]);
        content = content.replace(matchCode[0], code);
        matchCode = regCode.exec(content);
      }


      // apiUrl
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


      // apiExample
      let matchExample = regExample.exec(content);
      let pos = 0;

      while (matchExample !== null) {
        const example = apiExample(JSON.parse(matchExample[1]), pos);
        content = content.replace(matchExample[0], example);
        pos++;
        matchExample = regExample.exec(content);
      }
    }

    return content;
  });

  hook.afterEach(function (html, next) {
    let content = html;

    if (api) {
      const apiBlocks = html.split('<p>apiBlock&gt;</p>');
      content = '';

      apiBlocks.shift();
      apiBlocks.forEach(function (apiBlock) {
        content += `
          <article class="apiBlock">
            <div class="apiDoc">${apiBlock}</div>
            <div class="apiCode"></div>
          </article>
        `;
      });
    }

    next(content);
  })

  hook.doneEach(function () {
    if (api) {
      document.querySelector('body').className += ' apiSection';

      const apiBlock = document.querySelectorAll('.apiBlock');  // Listado de todo los apiBlock

      apiBlock.forEach(function(block){
        const apiCodeExample = block.querySelectorAll('.apiCodeExample, .apiExample');

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
