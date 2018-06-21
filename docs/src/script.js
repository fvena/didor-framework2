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
  },
  markdown: {
    renderer: {
      code: function(code, language){
        if (language === 'iframe'){
          var title = 'Demo code';
          var stylesheet = `<link rel='stylesheet' href='//unpkg.com/docsify/lib/themes/vue.css'>`;
          var script = '';
          var srcdoc = `
            <head>
              <title>${title}</title>
              ${stylesheet}
            </head>
            <body style='background-color: #FAFAFA !important'>
              ${code}
              ${script}
            </body>
          `;
          return `<iframe srcdoc="${srcdoc}" class="demoContainer" scrolling="no" frameborder="0" onload="autoResize(this)"></iframe>`;
        }
      }
    }
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
function autoResize(iframe){
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
