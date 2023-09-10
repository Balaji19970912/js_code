const div = document.createElement('div')

console.log(div)

div.className = 'main'
div.id = Math.round(Math.random() * 10 + 1)

div.setAttribute("title","Genereate through DOM")
div.style.backgroundColor = 'red'
div.style.color = 'black'
div.style.fontSize = '20px'
div.style.fontWeight = 'bold'
div.style.padding = '10px'

const addText = document.createTextNode('Through DOM Manipulation text inserted!')

div.appendChild(addText)

document.body.appendChild(div)