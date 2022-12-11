import redovnaIzdanja from './data/redovna.json' assert {type: 'json'}
import specijalIzdanja from './data/specijali.json' assert {type: 'json'}
import superbookIzdanja from './data/super-book.json' assert {type: 'json'}
import almanahIzdanja from './data/almanah-straha.json' assert {type: 'json'}

const kolekcija = new Set(JSON.parse(localStorage.getItem('kolekcija')))

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

/* FILTER & MAP */

const redovnaZaglavljeHtml = redovnaZaglavlje
  .filter((x, i) => !redovnaSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const redovnaRedoviHtml = redovnaIzdanja
  .map(red => red.filter((col, i) => !redovnaSakrijKolone.includes(i)))
  .map(red => {
    const id = 'redovna-' + red[0]
    return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
  }).join('')

const specijalZaglavljeHtml = specijalZaglavlje
  .filter((x, i) => !specijalSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const specijalRedoviHtml = specijalIzdanja
  .map(red => red.filter((col, i) => !specijalSakrijKolone.includes(i)))
  .map(red => {
    const id = 'specijal-' + red[0]
    return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
  }).join('')

const superbookZaglavljeHtml = superbookZaglavlje
  .filter((x, i) => !superbookSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const superbookRedoviHtml = superbookIzdanja
  .map(red => red.filter((col, i) => !superbookSakrijKolone.includes(i)))
  .map(red => {
    const id = 'super-book-' + red[0]
    return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
  }).join('')

const almanahZaglavljeHtml = almanahZaglavlje
  .filter((x, i) => !almanahSakrijKolone.includes(i))
  .map(th => `<th>${th}</th>`).join('')

const almanahRedoviHtml = almanahIzdanja
  .map(red => red.filter((col, i) => !almanahSakrijKolone.includes(i)))
  .map(red => {
    const id = 'almanah-straha-' + red[0]
    return `<tr>
      <td><input type="checkbox" name="${id}" ${kolekcija.has(id) ? 'checked' : ''} ></td>
      ${red.map(td => `<td>${td || ''}</td>`).join('')}
    </tr>`
  }).join('')

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

renderTable('redovna', redovnaZaglavljeHtml, redovnaRedoviHtml, 'Sergio Bonelli Editore')
renderTable('specijal', specijalZaglavljeHtml, specijalRedoviHtml, 'Speciale')
renderTable('super-book', superbookZaglavljeHtml, superbookRedoviHtml, 'Super Book')
renderTable('almanah-straha', almanahZaglavljeHtml, almanahRedoviHtml, 'Almanacco della Paura')

/* EVENTS */

document.body.addEventListener('click', ({ target }) => {
  if (!target instanceof HTMLInputElement || !target.name) return
  if (target.checked) kolekcija.add(target.name)
  else kolekcija.delete(target.name)
  localStorage.setItem('kolekcija', JSON.stringify([...kolekcija]))
})