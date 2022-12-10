import izdanja from '../data/almanah-straha.json' assert {type: 'json'}

const almanahStraha = new Set(JSON.parse(localStorage.getItem('almanahStraha')))

const res = izdanja.map(red => {
  return red
})
console.log(res)

const zaglavlje = 
[
  'br.',
  "originalni naslov",
  "godina",
  'br.',
  "scenario",
  "crtež",
  "naslovna",
  "boja",
  "edicija",
  'br.',
  "naslov",
  "godina",
  "edicija",
  'br.',
  "naslov",
  "godina"
]

const sakrij = []

/* FILTER & MAP */

const zaglavljeHtml = zaglavlje
  .filter((x, i) => !sakrij.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = izdanja
.map(red => red.filter((col, i) => !sakrij.includes(i)))
.map(red =>
  `<tr>
    <td><input type="checkbox" name="${red[0]}" ${almanahStraha.has(red[0]?.toString()) ? 'checked' : ''} ></td>
    ${red.map(td => `<td>${td || ''}</td>`).join('')}
  </tr>`
).join('')

/* RENDER */

document.body.innerHTML += `
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

/* EVENTS */

document.addEventListener('click', ({ target }) => {
  if (!target.name) return
  if (target.checked) almanahStraha.add(target.name)
  else almanahStraha.delete(target.name)
  localStorage.setItem('almanahStraha', JSON.stringify([...almanahStraha]))
})