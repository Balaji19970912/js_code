function addLang(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`

    const ulClass = document.querySelector('.language')
    ulClass.appendChild(li)
}

// addLang('python')
// addLang('typescript')

//optimized way of appending (since it will traverse through entire tree)

function addOptiLang(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    const ulClass = document.querySelector('.language')
    ulClass.appendChild(li)
}

addOptiLang('Python')
addOptiLang('Typescript')
addOptiLang('golang')

//Edit Values 1

const secondLang = document.querySelector('li:nth-child(2)')
// secondLang.innerHTML = 'MOJO' //not optimized

//optimized approach
const newLi = document.createElement('li')
newLi.textContent = 'Mojo'

secondLang.replaceWith(newLi)

//Edit Valies 2
const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>Typescript</li>'

//remove

const lastLang = document.querySelector('li:last-child')
lastLang.remove()