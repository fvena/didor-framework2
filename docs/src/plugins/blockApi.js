function apiBlock(content) {
  const regDoc = /^\<p\>apiDoc&gt;\<\/p\>((.*\n)+?)?\<p\>apiExample&gt;\<\/p\>|\<p\>apiResult&gt;\<\/p\>$/gm;
  const regExample = /^\<p\>apiExample&gt;\<\/p\>((.*\n)+?)?\<p\>apiDoc&gt;\<\/p\>|\<p\>apiResult&gt;\<\/p\>$/gm;
  const regResult = /^\<p\>apiResult&gt;\<\/p\>((.*\n)+?)?\<p\>apiDoc&gt;\<\/p\>|\<p\>apiExample&gt;\<\/p\>$/gm;

  const docs = [];
  const examples = [];
  const results = [];

  let matchDoc = regDoc.exec(content);

  while (matchDoc != null) {
    docs.push(matchDoc[1]);
    content.replace(matchDoc[0],'');
    matchDoc = regDoc.exec(content);
  }

  let matchExample = regExample.exec(content);

  while (matchExample != null) {
    examples.push(matchExample[1]);
    content.replace(matchExample[0],'');
    matchExample = regExample.exec(content);
  }

  let matchResult = regResult.exec(content);

  while (matchResult != null) {
    results.push(matchResult[1]);
    content.replace(matchResult[0],'');
    matchResult = regResult.exec(content);
  }

  console.log(content);



  // console.log(content.match(regDoc));
  // console.log(content.match(regExample));
  // console.log(content.match(regResult));
  //
  // // Obtengo el bloque de documentación
  // let apiDoc = content.substring(
  //   content.lastIndexOf('<p>apiDoc&gt;</p>'),
  //   content.lastIndexOf('<p>apiExample&gt;</p>'));
  //
  // apiDoc = (apiDoc.length > 0) ? apiDoc : content.replace('<p>apiDoc&gt;</p>','');
  //
  // // Obtengo los bloques de código
  // let apiExamples = content.split('<p>apiExample&gt;</p>');
  // apiExamples.shift();
  //
  // // console.log(apiDoc);

  return `<article class="apiBlock">${content}</article>`;
}

async function install (hook, vm) {
  hook.afterEach(function (html, next) {
    const api = html.startsWith('<p>api&gt;</p>');

    if (api) {
      const match = html.split('<p>apiBlock&gt;</p>');
      let content = '';

      match.shift();
      match.forEach(function(block){
        content += apiBlock(block);
      });

      next(content);
    } else {
      next(html);
    }
  });

  hook.doneEach(function () {
    document.querySelector('#main').className += " apiSection";
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
