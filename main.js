import redovnaIzdanja from './data/redovna.json' with {type: 'json'}
import specijalIzdanja from './data/specijali.json' with {type: 'json'}
import superbookIzdanja from './data/super-book.json' with {type: 'json'}
import almanahIzdanja from './data/almanah-straha.json' with {type: 'json'}
import maxiIzdanja from './data/maxi.json' with {type: 'json'}
import gigantIzdanja from './data/gigant.json' with {type: 'json'}

let kolekcija = new Set(JSON.parse(localStorage.getItem('kolekcija')))

const redovnaZaglavlje =
  [
    "br.",      // 0
    "naslov originala",   // 1
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
const redovnaSakrijKolone = [3, 5, 6, 7, 11, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]

const specijalZaglavlje =
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
    "edicija",
    "br.",
    "naslov",
    "godina",
    "edicija",
    "br.",
    "naslov",
    "godina"
  ]
const specijalSakrijKolone = [5, 6, 7, 11, 15, 19]

const superbookZaglavlje =
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
const superbookSakrijKolone = [5, 6, 7, 11, 12]

const almanahZaglavlje =
  [
    'br.',
    "naslov originala",
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
const almanahSakrijKolone = [5, 6, 7, 11, 15]

const maxiZaglavlje = [
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
  "edicija",
  "br.",
  "naslov",
  "godina"
]
const maxiSakrijKolone = [5, 6, 7, 11, 15]

const gigantZaglavlje = [
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
  "edicija",
  "br.",
  "naslov",
  "godina",
  "edicija",
  "br.",
  "naslov",
  "godina",
  "edicija",
  "br.",
  "naslov",
  "godina",
]
const gigantSakrijKolone = [5, 6, 7, 11, 15, 19, 20, 21, 22, 23]

/* ZAGLAVLJA */

const redovnaZaglavljeHtml = redovnaZaglavlje
  .filter((x, i) => !redovnaSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const specijalZaglavljeHtml = specijalZaglavlje
  .filter((x, i) => !specijalSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const superbookZaglavljeHtml = superbookZaglavlje
  .filter((x, i) => !superbookSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const almanahZaglavljeHtml = almanahZaglavlje
  .filter((x, i) => !almanahSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const maxiZaglavljeHtml = maxiZaglavlje
  .filter((x, i) => !maxiSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const gigantZaglavljeHtml = gigantZaglavlje
  .filter((x, i) => !gigantSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

/* RENDER */

const renderTable = (id, zaglavljeHtml, redoviHtml, edicija) => {
  document.getElementById(id).innerHTML = `
  <table id="${id}-tabla">
    <thead>
      <tr>
        <th>${edicija}</th>
        ${zaglavljeHtml}
      </tr>
    </thead>
    <tbody>
      ${redoviHtml}
    </tbody>
  </table>
  `
}

const renderTables = () => {
  const redovnaRedoviHtml = redovnaIzdanja
    .map(red => red.filter((col, i) => !redovnaSakrijKolone.includes(i)))
    .map(red => {
      const id = 'redovna-' + red[0]
      return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
    }).join('')

  const specijalRedoviHtml = specijalIzdanja
    .map(red => red.filter((col, i) => !specijalSakrijKolone.includes(i)))
    .map(red => {
      const id = 'specijal-' + red[0]
      return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
    }).join('')

  const superbookRedoviHtml = superbookIzdanja
    .map(red => red.filter((col, i) => !superbookSakrijKolone.includes(i)))
    .map(red => {
      const id = 'super-book-' + red[0]
      return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
    }).join('')

  const almanahRedoviHtml = almanahIzdanja
    .map(red => red.filter((col, i) => !almanahSakrijKolone.includes(i)))
    .map(red => {
      const id = 'almanah-straha-' + red[0]
      return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
    }).join('')

  const maxiRedoviHtml = maxiIzdanja
    .map(red => red.filter((col, i) => !maxiSakrijKolone.includes(i)))
    .map(red => {
      const id = 'maxi-' + red[0]
      return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
    }).join('')

  const gigantRedoviHtml = gigantIzdanja
    .map(red => red.filter((col, i) => !gigantSakrijKolone.includes(i)))
    .map(red => {
      const id = 'gigant-' + red[0]
      return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
    }).join('')

  renderTable('redovna', redovnaZaglavljeHtml, redovnaRedoviHtml, 'Sergio Bonelli Editore')
  renderTable('specijal', specijalZaglavljeHtml, specijalRedoviHtml, 'Speciale')
  renderTable('super-book', superbookZaglavljeHtml, superbookRedoviHtml, 'Super Book')
  renderTable('almanah-straha', almanahZaglavljeHtml, almanahRedoviHtml, 'Almanacco della Paura')
  renderTable('maxi', maxiZaglavljeHtml, maxiRedoviHtml, 'Maxi')
  renderTable('gigant', gigantZaglavljeHtml, gigantRedoviHtml, 'Gigante')
}

renderTables()

/* EVENTS */

document.body.addEventListener('click', ({ target }) => {
  if (!target instanceof HTMLInputElement || !target.name) return

  if (target.checked) kolekcija.add(target.name)
  else kolekcija.delete(target.name)

  localStorage.setItem('kolekcija', JSON.stringify([...kolekcija]))
})

document.getElementById('sacuvaj').addEventListener('click', (e) => {
  const sortirano = [...kolekcija].sort((a, b) => a.localeCompare(b))
  const file = new Blob([JSON.stringify(sortirano, null, 2)], { type: 'text/plain' });
  e.target.href = URL.createObjectURL(file)
})

const inputElement = document.getElementById('upload')

inputElement.addEventListener('change', (e) => {
  if (!inputElement.files?.[0]) return

  const reader = new FileReader()
  reader.onload = (e) => {
    kolekcija = new Set(JSON.parse(e.target.result))
    localStorage.setItem('kolekcija', JSON.stringify([...kolekcija]))
    renderTables()
  }
  reader.readAsText(inputElement.files[0])
})
