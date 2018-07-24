function getParams(form, method){
  const params = {};

  for (let i = 0; i < form.length; i++) {
    let input = form.elements[i];

    if (input.type === 'checkbox' && input.checked) {
      let name = input.parentNode.nextSibling.name;
      let value = input.parentNode.nextSibling.value;

      params[name] = value;
    }
  }

  if (method === 'get') {
    return {params: params};
  }

  return params;
}


async function api(event) {
  event.preventDefault();;

  const form = event.currentTarget.parentNode.parentNode;
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
  return  `<div class="apiCode__title">Response Status:</div>
           <pre data-lang="json"><code class="lang-json">${response.status} ${response.statusText}</code></pre>
           <div class="apiCode__title">Response Headers:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(response.headers, null, '\t')}</code></pre>
           <div class="apiCode__title">Response Data:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(response.data, null, '\t')}</code></pre>`;
}


function generateErrorHTMLOutput(error) {
  return  `<h4>Result</h4>
           <div class="apiCode__title">Error Message:</div>
           <pre data-lang="json"><code class="lang-json">${error.message}</code></pre>
           <div class="apiCode__title">Error Status:</div>
           <pre data-lang="json"><code class="lang-json">${error.response.status} ${error.response.statusText}</code></pre>
           <div class="apiCode__title">Error Headers:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(error.response.headers, null, '\t')}</code></pre>
           <div class="apiCode__title">Error Data:</div>
           <pre data-lang="json"><code class="lang-json">${JSON.stringify(error.response.data, null, '\t')}</code></pre>`;
}
