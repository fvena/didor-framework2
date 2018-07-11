# Visibilidad

Para facilitar un desarrollo adaptable, utiliza las clases `.hidden`, `.visible`
para ocultar y mostrar elementos según el tamaño de pantalla.

## Mostrar elementos

Para que un elemento solo sea visible en un tamaño de pantalla concreto, primero
debes ocultar el elemento con la clase '.hidden' y luego indicar con la clase
`.*-visible` cuando será visible.

```demo
<div class='padding'>
  <div class='hidden palm-visible'>Solo será visible en tamaños <strong>palm</strong></div>
  <div class='hidden lap-visible'>Solo será visible en tamaños <strong>lap</strong></div>
  <div class='hidden small-visible'>Solo será visible en tamaños <strong>small</strong></div>
  <div class='hidden desk-visible'>Solo será visible en tamaños <strong>desk</strong></div>
  <div class='hidden large-visible'>Solo será visible en tamaños <strong>large</strong></div>
  <div class='hidden tablet-visible'>Solo será visible en tamaños <strong>tablet</strong></div>
  <div class='hidden portrait-visible'>Solo será visible en tamaños <strong>portrait</strong></div>
  <div class='hidden landscape-visible'>Solo será visible en tamaños <strong>landscape</strong></div>
  <div class='hidden touch-visible'>Solo será visible en tamaños <strong>touch</strong></div>
  <div class='hidden screen-visible'>Solo será visible en tamaños <strong>screen</strong></div>
</div>
```

```html
<div class="hidden palm-visible">Solo será visible en tamaños palm</div>
<div class="hidden lap-visible">Solo será visible en tamaños lap</div>
<div class="hidden small-visible">Solo será visible en tamaños small</div>
<div class="hidden desk-visible">Solo será visible en tamaños desk</div>
<div class="hidden large-visible">Solo será visible en tamaños large</div>
<div class="hidden tablet-visible">Solo será visible en tamaños tablet</div>
<div class="hidden portrait-visible">Solo será visible en tamaños portrait</div>
<div class="hidden landscape-visible">Solo será visible en tamaños landscape</div>
<div class="hidden touch-visible">Solo será visible en tamaños touch</div>
<div class="hidden screen-visible">Solo será visible en tamaños screen</div>
```

<div class="relative">
  <table class='responsive responsive--title-col'>
    <tr>
      <th>&nbsp;</th>
      <th><i class='icon-palm'></i> Palm</th>
      <th><i class='icon-lap'></i> Lap</th>
      <th><i class='icon-small'></i> Small</th>
      <th><i class='icon-desktop'></i> Desk</th>
      <th><i class='icon-large'></i> Large</th>
    </tr>
    <tr>
      <td><div>.visible</div></td>
      <td colspan='5'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr><td colspan='6'>&nbsp;</td></tr>
    <tr>
      <td><div>.palm-visible</div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='4'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.lap-visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.small-visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.desk-visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.large-visible</div></td>
      <td colspan='4'><div class='responsive__block responsive__block--disabled'></div></span></td>
      <td><div class='responsive__block'>visible</div></td>
    </tr>
    <tr><td colspan='6'>&nbsp;</td></tr>
    <tr>
      <td>.tablet-visible</td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.portrait-visible</td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.landscape-visible</td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.touch-visible</td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.screen-visible</td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
  </table>

  <table class='responsive responsive--back responsive--title-col'>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </table>
</div>


## Ocultar elementos

```demo
<table class='responsive responsive--title-col'>
  <tr>
    <th>&nbsp;</th>
    <th><i class='icon-palm'></i> Palm</th>
    <th><i class='icon-lap'></i> Lap</th>
    <th><i class='icon-small'></i> Small</th>
    <th><i class='icon-desktop'></i> Desk</th>
    <th><i class='icon-large'></i> Large</th>
  </tr>
  <tr>
    <td>.hidden</td>
    <td colspan='5'><div class='responsive__block responsive__block--disabled'></div></td>
  </tr>
  <tr><td colspan='6'>&nbsp;</td></tr>
  <tr>
    <td>.palm-hidden</td>
    <td><div class='responsive__block responsive__block--disabled'></div></td>
    <td colspan='4'><div class='responsive__block'>visible</div></td>
  </tr>
  <tr>
    <td>.lap-hidden</td>
    <td><div class='responsive__block'>visible</div></td>
    <td><div class='responsive__block responsive__block--disabled'></div></td>
    <td colspan='3'><div class='responsive__block'>visible</div></td>
  </tr>
  <tr>
    <td>.small-hidden</td>
    <td colspan='2'><div class='responsive__block'>visible</div></td>
    <td><div class='responsive__block responsive__block--disabled'></div></td>
    <td colspan='2'><div class='responsive__block'>visible</div></td>
  </tr>
  <tr>
    <td>.desk-hidden</td>
    <td colspan='3'><div class='responsive__block'>visible</div></td>
    <td><div class='responsive__block responsive__block--disabled'></div></td>
    <td><div class='responsive__block'>visible</div></td>
  </tr>
  <tr>
    <td>.large-hidden</td>
    <td colspan='4'><div class='responsive__block'>visible</div></span></td>
    <td><div class='responsive__block responsive__block--disabled'></div></td>
  </tr>
  <tr><td colspan='6'>&nbsp;</td></tr>
  <tr>
    <td>.tablet-hidden</td>
    <td><div class='responsive__block'>visible</div></td>
    <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    <td colspan='2'><div class='responsive__block'>visible</div></td>
  </tr>
  <tr>
    <td>.portrait-hidden</td>
    <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    <td colspan='3'><div class='responsive__block'>visible</div></td>
  </tr>
  <tr>
    <td>.landscape-hidden</td>
    <td colspan='2'><div class='responsive__block'>visible</div></td>
    <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
  </tr>
  <tr>
    <td>.touch-hidden</td>
    <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    <td colspan='2'><div class='responsive__block'>visible</div></td>
  </tr>
  <tr>
    <td>.screen-hidden</td>
    <td colspan='3'><div class='responsive__block'>visible</div></td>
    <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
  </tr>
</table>

<table class='responsive responsive--back responsive--title-col'>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
```
