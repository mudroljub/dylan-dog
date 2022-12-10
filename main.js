import svaIzdanja from './data/redovna.json' assert {type: 'json'}

const sakrij = [3, 5, 6, 9, 12, 15, 16, 17, 18]

const svaZaglavlja = [
  "br.",    // 0
  "italijanski naslov",  // 1
  "god.",   // 2
  "str",    // 3
  "scenario", // 4
  "crtež",    // 5
  "naslovna", // 6
  "Dnevnik<small> / Abaton / ostali</small>", // 7
  "naslov", // 8
  "god.",   // 9 
  "Ludens<small> / Slobodna dalmacija</small>", // 10
  "naslov", // 11
  "god.",   // 12
  "Veseli četvrtak", // 13
  "naslov",   // 14
  "god.",     // 15
  "Libellus", // 16
  "naslov",   // 17
  "god.",     // 18
]

const zaglavlje = svaZaglavlja.filter((x, i) => !sakrij.includes(i))
const izdanja = svaIzdanja.map(izdanje => izdanje.filter((x, i) => !sakrij.includes(i)))

const zaglavljeHtml = zaglavlje.map(th => `<th>${th}</th>`).join('')

const redoviHtml = izdanja.map((red, i) => 
  `<tr><td><input type="checkbox" name="${i}"></td>${red.map(td => `<td>${td || ''}</td>`).join('')}</tr>`
).join('')

document.body.innerHTML = `
<table>
  <thead>
    <tr>
      <th></th>
      ${zaglavljeHtml}
    </tr>
  </thead>
  <tbody>
    ${redoviHtml}
  </tbody>
</table>
`