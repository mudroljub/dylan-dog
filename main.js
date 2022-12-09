import izdanja from './data/redovna.json' assert {type: 'json'}

const zaglavlje = izdanja.shift()

console.log(zaglavlje)
console.log(izdanja)