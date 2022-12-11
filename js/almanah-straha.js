import izdanja from '../data/almanah-straha.json' assert {type: 'json'}

const almanahStraha = new Set(JSON.parse(localStorage.getItem('almanahStraha')))

const zaglavlje =
  [
    'br.',
    "originalni naslov",
    "godina",
    'str.',
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

const sakrij = [3, 5, 6, 7, 11, 15]

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

document.getElementById('almanah-straha').innerHTML = `
<table id="almanah-straha-tabla">
  <thead>
    <tr>
      <th><small>Almanacco della Paura</small></th>
      ${zaglavljeHtml}
    </tr>
  </thead>
  <tbody>
    ${redoviHtml}
  </tbody>
</table>
`

/* EVENTS */

document.getElementById('almanah-straha-tabla').addEventListener('click', ({ target }) => {
  if (!target.name) return
  if (target.checked) almanahStraha.add(target.name)
  else almanahStraha.delete(target.name)
  localStorage.setItem('almanahStraha', JSON.stringify([...almanahStraha]))
})