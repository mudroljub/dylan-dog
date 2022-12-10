import izdanja from '../data/super-book.json' assert {type: 'json'}

const superbook = new Set(JSON.parse(localStorage.getItem('superbook')))

const res = izdanja.map(red => {
  return red
})
console.log(res)

const zaglavlje = 
[
  "br.",
  "originalni naslov",
  "godina",
  "br.",
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

const sakrij = [5, 6, 7, 11, 12]

/* FILTER & MAP */

const zaglavljeHtml = zaglavlje
  .filter((x, i) => !sakrij.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = izdanja
.map(red => red.filter((col, i) => !sakrij.includes(i)))
.map(red =>
  `<tr>
    <td><input type="checkbox" name="${red[0]}" ${superbook.has(red[0]?.toString()) ? 'checked' : ''} ></td>
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
  if (target.checked) superbook.add(target.name)
  else superbook.delete(target.name)
  localStorage.setItem('superbook', JSON.stringify([...superbook]))
})