import izdanja from '../data/super-book.json' assert {type: 'json'}

const superbook = new Set(JSON.parse(localStorage.getItem('superbook')))

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
  ''
]

const sakrij = [5, 6, 7, 11, 12]

/* FILTER & MAP */

const zaglavljeHtml = zaglavlje
  .filter((x, i) => !sakrij.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = izdanja
.map(red => red.filter((col, i) => !sakrij.includes(i)))
.map(red => {
  const id = 'super-book-' + red[0]
  return `<tr>
  <td><input type="checkbox" name="${id}" ${superbook.has(id) ? 'checked' : ''} ></td>
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

/* EVENTS */

document.getElementById('super-book-tabla').addEventListener('click', ({ target }) => {
  if (!target.name) return
  if (target.checked) superbook.add(target.name)
  else superbook.delete(target.name)
  localStorage.setItem('superbook', JSON.stringify([...superbook]))
})