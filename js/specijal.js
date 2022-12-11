import izdanja from '../data/specijali.json' assert {type: 'json'}

const kolekcija = new Set(JSON.parse(localStorage.getItem('kolekcija')))

const zaglavlje = 
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
  "edicija",
  "br.",
  "naslov",
  "godina",
  "edicija",
  "br.",
  "naslov",
  "godina"
]

const sakrij = [5, 6, 7, 11, 15, 19]

/* FILTER & MAP */

const zaglavljeHtml = zaglavlje
  .filter((x, i) => !sakrij.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = izdanja
.map(red => red.filter((col, i) => !sakrij.includes(i)))
.map(red => {
  const id = 'specijal-' + red[0]
  return `<tr>
  <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
  ${red.map(td => `<td>${td || ''}</td>`).join('')}
</tr>`
}).join('')

/* RENDER */

document.getElementById('specijal').innerHTML = `
<table id="specijal-tabla">
  <thead>
    <tr>
      <th><small>Speciale</small></th>
      ${zaglavljeHtml}
    </tr>
  </thead>
  <tbody>
    ${redoviHtml}
  </tbody>
</table>
`
