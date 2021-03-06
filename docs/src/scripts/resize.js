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
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.offsetHeight );
    iframe.style.visibility = 'hidden';
    iframe.style.height = '100px'; // reset to minimal height in case going from longer to shorter doc
    iframe.style.height = height + 5 + 'px';
    iframe.style.visibility = 'visible';
  }, 500);
}
