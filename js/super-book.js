import superbookIzdanja from '../data/super-book.json' assert {type: 'json'}

const kolekcija = new Set(JSON.parse(localStorage.getItem('kolekcija')))

const superbookZaglavlje = 
[
  "br.",
  "naslov originala",
  "godina",
  "str.",
  "scenario",
  "crtež",
  "naslovna",
  "boja",
  "edicija",
  "br.",
  "naslov",
  "godina",
  ''
]

const superbookSakrijKolone = [5, 6, 7, 11, 12]

/* FILTER & MAP */

const zaglavljeHtml = superbookZaglavlje
  .filter((x, i) => !superbookSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = superbookIzdanja
.map(red => red.filter((col, i) => !superbookSakrijKolone.includes(i)))
.map(red => {
  const id = 'super-book-' + red[0]
  return `<tr>
  <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
  ${red.map(td => `<td>${td || ''}</td>`).join('')}
</tr>`
}).join('')

/* RENDER */

document.getElementById('super-book').innerHTML = `
<table id="super-book-tabla">
  <thead>
    <tr>
      <th><small>Super Book</small></th>
      ${zaglavljeHtml}
    </tr>
  </thead>
  <tbody>
    ${redoviHtml}
  </tbody>
</table>
`
