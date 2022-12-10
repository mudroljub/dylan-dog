import izdanja from './data/redovna.json' assert {type: 'json'}

const zaglavlje =   [
  "br.",
  "ORIGINALNI NAZIV",
  "GODINA",
  "str",
  "SCENARIO",
  "CRTEŽ",
  "NASLOVNA",
  "BOJA",
  "EDICIJA",
  null,
  "NAZIV",
  "GODINA",
  "EDICIJA",
  null,
  "NAZIV",
  "GODINA",
  "EDICIJA",
  null,
  "NAZIV",
  "GODINA",
  "EDICIJA",
  null,
  "NAZIV",
  "GODINA",
  "EDICIJA",
  null,
  "NAZIV",
  "GODINA"
]

// izdanja.forEach(red => red.shift())
console.log(izdanja)

const zaglavljeHtml = zaglavlje.map(th => `<th>${th}</th>`).join('')

const izdanjaHtml = izdanja.map(red => {
  const redHtml = red.map(td => `<td>${td}</td>`).join('')
  return `<tr>${redHtml}</tr>`
}).join('')


document.body.innerHTML = `
<table>
  <tr>
    ${zaglavljeHtml}
  </tr>
  ${izdanjaHtml}
</table>
`