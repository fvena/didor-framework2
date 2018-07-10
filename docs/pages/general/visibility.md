# Visibilidad

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
```

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
