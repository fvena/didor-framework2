function getParams(form, method){
  const params = {};

  for (let i = 0; i < form.length; i++) {
    let input = form.elements[i];

    if (input.type === 'text'){
      params[input.name] = input.value;
    }
  }

  if (method === 'get') {
    return {params: params};
  }

  return params;
}


async function api(event) {
  event.preventDefault();;

  const form = event.currentTarget.parentNode;
  const url = form.getAttribute('data-url');
  const method = form.getAttribute('data-method').toLowerCase();
  const id = form.getAttribute('data-pos');
  const params = await getParams(form, method);


  document.getElementById(id).innerHTML = 'Cargando...'

  
  let result = '';

  await axios[method](url, params)
    .then(function (response) {
      result = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      result = generateErrorHTMLOutput(error);
    });

  document.getElementById(id).innerHTML = result;
}


function generateSuccessHTMLOutput(response) {
  return  `<h4>Result</h4>
           <div class="apiCode__title">Status:</div>
           <pre data-lang="json"><code class="lang-json">${response.status} ${response.statusText}</code></pre>
           <div class="apiCode__title">Headers:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(response.headers, null, '\t')}</code></pre>
           <div class="apiCode__title">Data:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(response.data, null, '\t')}</code></pre>`;
}


function generateErrorHTMLOutput(error) {
  return  `<h4>Result</h4>
           <div class="apiCode__title">Message:</div>
           <pre data-lang="json"><code class="lang-json">${error.message}</code></pre>
           <div class="apiCode__title">Status:</div>
           <pre data-lang="json"><code class="lang-json">${error.response.status} ${error.response.statusText}</code></pre>
           <div class="apiCode__title">Headers:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(error.response.headers, null, '\t')}</code></pre>
           <div class="apiCode__title">Data:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(error.response.data, null, '\t')}</code></pre>`;
}
