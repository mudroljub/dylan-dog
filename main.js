import izdanja from './data/redovna.json' assert {type: 'json'}

const sacuvano = new Set(JSON.parse(localStorage.getItem('sacuvano')))

const zaglavlje = 
[
  "br.",      // 0
  "originalni naslov",   // 1
  "godina",   // 2
  "str",      // 3
  "scenario", // 4
  "crtež",    // 5
  "naslovna", // 6
  "boja",     // 7
  "edicija",  // 8
  "br.",      // 9
  "naslov",   // 10
  "godina",   // 11
  "edicija",  // 12
  "br.",      // 13
  "naslov",   // 14
  "godina",   // 15
  "edicija",  // 16
  "br.",      // 17
  "naslov",   // 18
  "godina",   // 19
  "edicija",  // 20
  "br.",      // 21
  "naslov",   // 22
  "godina",   // 23
  "edicija",  // 24
  "br.",      // 25
  "naslov",   // 26
  "godina"    // 27
]

const sakrij = [3, 5, 6, 7, 11, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]

/* FILTER & MAP */

const zaglavljeHtml = zaglavlje
  .filter((x, i) => !sakrij.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = izdanja
.map(red => red.filter((col, i) => !sakrij.includes(i)))
.map(red =>
  `<tr>
    <td><input type="checkbox" name="${red[0]}" ${sacuvano.has(red[0].toString()) ? 'checked' : ''} ></td>
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
  if (target.checked) sacuvano.add(target.name)
  else sacuvano.delete(target.name)
  localStorage.setItem('sacuvano', JSON.stringify([...sacuvano]))
})