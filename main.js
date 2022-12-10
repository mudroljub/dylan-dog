import izdanja from './data/redovna.json' assert {type: 'json'}

const zaglavlje = izdanja.shift()

// console.log(zaglavlje)
// console.log(izdanja)

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