# Colores

``` demo
<div id='colors'></div>
<script>
  function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == '200') {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }


  loadJSON('/src/assets/vars.json', function(response) {
    var colors = JSON.parse(response);
    var content = '';

    for (var colorMap in colors) {
      content += `<h1>${colorMap}</h1>`;

      for (var color in colors[colorMap]) {
        var item = colors[colorMap][color];
        content += `
          <div class='colorBlock bg-${item.name}'>
            <div class='colorBlock__name'>${item.name}</div>
            ${item.valueHex}<br>
            ${item.valueRGBA}
          </div>
        `;
      }
    }

    document.getElementById('colors').innerHTML = content;
  });
</script>
```
