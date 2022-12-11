import specijalIzdanja from '../data/specijali.json' assert {type: 'json'}

const kolekcija = new Set(JSON.parse(localStorage.getItem('kolekcija')))

const specijalZaglavlje = 
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

const specijalSakrijKolone = [5, 6, 7, 11, 15, 19]

/* FILTER & MAP */

const zaglavljeHtml = specijalZaglavlje
  .filter((x, i) => !specijalSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = specijalIzdanja
.map(red => red.filter((col, i) => !specijalSakrijKolone.includes(i)))
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
