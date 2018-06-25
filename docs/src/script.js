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
        if (language === 'demo'){
          var title = 'Demo code';
          var stylesheet = `<link rel='stylesheet' href='src/stylesheets/didor.css'>`;
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
          return `<iframe srcdoc="${srcdoc}" class="demoContainer" scrolling="no" frameborder="0" height="auto" onload="autoResize(this)"></iframe>`;
        } else {
          code = code.replace(/@DOCSIFY_QM@/g, '`')
          const hl = Prism.highlight(
            code,
            Prism.languages[language] || Prism.languages.markup
          )

          return `<pre v-pre data-lang="${language}"><code class="lang-${language}">${hl}</code></pre>`
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
  setTimeout(function(){
    var body = iframe.contentWindow.document.body;
    var html = iframe.contentWindow.document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    console.log(height);
    console.log(iframe.contentWindow.document.body.scrollHeight);
    console.log(iframe.contentWindow.document.body.offsetHeight);
    console.log(iframe.contentWindow.document.documentElement.clientHeight);
    console.log(iframe.contentWindow.document.documentElement.scrollHeight);
    console.log(iframe.contentWindow.document.documentElement.offsetHeight);
    iframe.style.visibility = 'hidden';
    iframe.style.height = '10px'; // reset to minimal height in case going from longer to shorter doc
    iframe.style.height = height + 5 + 'px';
    iframe.style.visibility = 'visible';
  }, 500);
}
