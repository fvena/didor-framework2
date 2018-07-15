/**
 * Muestra el tabcontent asociado al tablink seleccionado
 */
function showTab(event) {
  event.preventDefault();

  var tablink = event.currentTarget;                           // Tablink seleccionado
  var container = tablink.parentNode.parentNode.parentNode;    // Contenedor '.blockExample' del ejemplo
  var active = tablink.getAttribute('href');                   // ID del tabcontent seleccionado
  var tabcontent = container.querySelector(active);            // Tabcontent seleccionado

  var tablinks = container.querySelectorAll('.tablinks');      // Listado de todos los tablinks
  var tabcontents = container.querySelectorAll('.tabcontent'); // Listado de todos los tabcontents


  // Elimino la clase '.active' de todos los tablinks
  tablinks.forEach(function(tablink) {
    tablink.className = tablink.className.replace(' active', '');
  })

  // Oculto todos los tabcontents
  tabcontents.forEach(function(tabcontent) {
    tabcontent.style.display = 'none';
  })


  // Añado la clase 'active' al tablink seleccionado
  // y muestro el tabcontent correspondiente
  tablink.className += " active";
  tabcontent.style.display = 'block';
}
