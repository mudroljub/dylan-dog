import svaIzdanja from './data/redovna.json' assert {type: 'json'}

const sakrij = [3, 6, 16, 17, 18]

const svaZaglavlja = [
  "br.",
  "ORIGINALNI NAZIV",
  "GODINA",
  "str",
  "SCENARIO",
  "CRTEŽ",
  "NASLOVNA",
  "Dnevnik",
  "NAZIV",
  "GODINA",
  "Slobodna Dalmacija / Ludens",
  "NAZIV",
  "GODINA",
  "Veseli četvrtak",
  "NAZIV",
  "GODINA",
  "Libellus",
  "NAZIV",
  "GODINA",
]

const zaglavlje = svaZaglavlja.filter((x, i) => !sakrij.includes(i))
const izdanja = svaIzdanja.map(izdanje => izdanje.filter((x, i) => !sakrij.includes(i)))

const zaglavljeHtml = zaglavlje.map(th => `<th>${th}</th>`).join('')

const izdanjaHtml = izdanja.map(red => 
  `<tr>${red.map(td => `<td>${td}</td>`).join('')}</tr>`
).join('')

document.body.innerHTML = `
<table>
  <tr>
    ${zaglavljeHtml}
  </tr>
  ${izdanjaHtml}
</table>
`