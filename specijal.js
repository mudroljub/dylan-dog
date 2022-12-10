import izdanja from './data/specijali.json' assert {type: 'json'}

const specijal = new Set(JSON.parse(localStorage.getItem('specijal')))

const zaglavlje = 
[
  "edicija",
  "br.",
  "originalni naziv",
  "godina",
  "br.",
  "scenario",
  "crtež",
  "naslovna",
  "boja",
  "edicija",
  "br.",
  "naziv",
  "godina",
  "edicija",
  "br.",
  "naziv",
  "godina",
  "edicija",
  "br.",
  "naziv",
  "godina",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
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
    <td><input type="checkbox" name="${red[0]}" ${specijal.has(red[0].toString()) ? 'checked' : ''} ></td>
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
  if (target.checked) specijal.add(target.name)
  else specijal.delete(target.name)
  localStorage.setItem('specijal', JSON.stringify([...specijal]))
})