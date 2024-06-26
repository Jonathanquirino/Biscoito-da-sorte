let B1 = window.document.getElementById('B1').textContent
let B2 = window.document.getElementById('B2').textContent
let B3 = window.document.getElementById('B3').textContent
let B4 = window.document.getElementById('B4').textContent
let B5 = window.document.getElementById('B5').textContent
let B6 = window.document.getElementById('B6').textContent
let B7 = window.document.getElementById('B7').textContent
let B8 = window.document.getElementById('B8').textContent
let B9 = window.document.getElementById('B9').textContent
let B10 = window.document.getElementById('B10').textContent

let Sorteio = [B1, B2, B3, B4, B5, B6, B7, B8, B9, B10]

let aleatório = Math.floor(Math.random() * Sorteio.length);

let PAletatório = Sorteio[aleatório]

window.alert(PAletatório);