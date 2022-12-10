import izdanja from './data/redovna.json' assert {type: 'json'}

const sacuvano = new Set(JSON.parse(localStorage.getItem('sacuvano')))

const zaglavlje = [
  "br.",      // 0
  "naslov",   // 1
  "god.",     // 2
  "str",      // 3
  "scenario", // 4
  "crtež",    // 5
  "naslovna", // 6
  "Dnevnik<small> / ostali</small>", // 7
  "",         // 8
  "god.",     // 9 
  "Ludens<small> / Slobodna<br>dalmacija</small>", // 10
  "",         // 11
  "god.",     // 12
  "Veseli četvrtak", // 13
  "",         // 14
  "god.",     // 15
  "Libellus", // 16
  "",         // 17
  "god.",     // 18
]
const sakrij = [3, 4, 5, 6, 9, 12, 15, 16, 17, 18]

const zaglavljeHtml = zaglavlje
  .filter((x, i) => !sakrij.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redoviHtml = izdanja
.map(red => red.filter((col, i) => !sakrij.includes(i)))
.map(red =>
  `<tr>
    <td><input type="checkbox" name="${red[0]}" ${sacuvano.has(red[0]) ? 'checked' : ''} ></td>
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
  if (target.checked) sacuvano.add(Number(target.name))
  else sacuvano.delete(Number(target.name))
  localStorage.setItem('sacuvano', JSON.stringify([...sacuvano]))
})