/**
 * Genera y añade de forma dinámica un 'tab nav' al ejemplo que permite alternar
 * entre el ejemplo y el código
 */
function demoView() {
  var containers = document.querySelectorAll('.blockExample');  // Listado de todos los ejemplos

  // Trabajo sobre cada demo por separado
  containers.forEach(function(container) {
    var exampeContainer = container.querySelector('iframe');            // Iframe con el ejemplo
    var codeContainers = container.querySelectorAll('pre[data-lang]');  // Listado de los códigos que acompañan al ejemplo

    // Inicio de la plantilla
    var tabBar = '<ul class="tab">';


    // Si hay ejemplo añado su link
    if (exampeContainer) {
      tabBar += '<li><a href="#example" class="tablinks" onclick="showTab(event)">example</a></li>';
    }


    // Añado un link por cada código
    codeContainers.forEach(function(code) {
      var language = code.getAttribute('data-lang');
      tabBar += `<li><a href="#${language}" class="tablinks" onclick="showTab(event)">${language}</a></li>`;
    })

    tabBar +='</ul>';


    // Añado el 'tab nav' dentro del contenedor
    container.insertAdjacentHTML("afterbegin", tabBar);
    container.querySelector('.tablinks').click();
  });
}


async function install (hook, vm) {
  hook.doneEach(function () {
    demoView();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}

if (window.$docsify) window.$docsify.plugins = [].concat(install, $docsify.plugins)
