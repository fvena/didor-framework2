/*
 * Docsify Configuration
 */
window.$docsify = {
  auto2top: true,
  basePath: './pages',
  themeColor: '#2badc4',
  formatUpdated: '{DD}/{MM} {HH}:{mm}',
  loadSidebar: '_sidebar.md',
  subMaxLevel: 2,
  pagination: {
    previousText: 'Anterior',
    nextText: 'Siguiente',
  }
}


/*
 * Resize all demo iframes to adapt its content
 */
function resizeAllDemoIframes(){
  var iframes = document.querySelectorAll("iframe");
  for( var i = 0; i < iframes.length; i++) {
    autoResize(iframes[i]);
  }
}


/*
 * Resize iframes to adapt its content
 */
function autoResize(iframe) {
  setTimeout(function(){
    var body = iframe.contentWindow.document.body;
    var html = iframe.contentWindow.document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    iframe.style.visibility = 'hidden';
    iframe.style.height = '10px'; // reset to minimal height in case going from longer to shorter doc
    iframe.style.height = height + 5 + 'px';
    iframe.style.visibility = 'visible';
  }, 500);
}


function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
