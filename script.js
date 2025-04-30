let aud = new Audio('coin-flip-shimmer-85750.mp3')
let yes = prompt("How much pokemon")
let pokeDex = []
let favy = []
for (let i = 0; i < yes; i++) {
let red = fetch('https://pokeapi.co/api/v2/pokemon?limit=1302')

.then(response =>{
    if(!response.ok){throw new Error('Networknrespons was not ok' + response.statusText)}
    let blue = response.json()
    return blue

})

.then(data =>{
    let id = [i]
let yes = []        
console.log(i)

        console.log("Name: ", data.results[i][0])
        yes.push(data.results[i].name)
        data
    // console.log(data.charizard)
    // console.log("Ability: ", data.abilities)
let blue = fetch(data.results[i].url)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        let get = yes[0]
        yes = []
        yes.push(get, data.base_experience, data.sprites.front_default, data.abilities[0].ability.name, data.types[0].type.name)
        console.log(yes)
        make(yes, i + 1)
        return data
    })
    return data
    
})
}

function make(info, id){
    pokeDex.push([info[0], info[2]])
    let backo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    let template = `<div ondblclick="fav(this.id)" ondblclick="Stay(id)" id="${info[0]}" class="P ${info[4]}"> <h1 id="Phead" class="red content" >${info[0].charAt(0).toUpperCase() + info[0].slice(1)}</h1> <div class="disp"> <p class="content h">${info[3].charAt(0).toUpperCase() + info[3].slice(1)} Type<p/> <p class="content">1st Ability: ${info[4].charAt(0).toUpperCase() + info[4].slice(1)}</p> <p class="content">Base Exp ${info[1]}</p></div> </div>`
    let reg = document.createElement('div')
    reg.innerHTML = template
    document.getElementById("outp").appendChild(reg)
    background(backo, info[0])

}
function background(back, name){
    document.getElementById(name).style.backgroundImage = `url(${back})`
    console.log(pokeDex)
}

// function red(){
//     aud.play()}
// function Stay(event){
    
//     let red = document.getElementById(event)
//     let blue = red.children
//     if(red.getAttribute('name') != red.getAttribute('id')){
//         for (let i = 0; i < blue.length; i++) {
//         blue[i].style.opacity = 1
//         blue[i].style.transform = 'rotateY(-180deg)'

//     }
//     red.style.transform = "rotateY(180deg)"
    
//     console.log(red.getAttribute('name'))
//     red.setAttribute('name', red.getAttribute('id'))
//     console.log(red.getAttribute('name'))
//     console.log(red.getAttribute('id'))
//     }
//     else{
//         console.log('red blue')
//         red.style.transform = "rotateY(-180deg)"
//         red.setAttribute('name', '')
//         for (let i = 0; i < blue.length; i++) {
//             blue[i].style.opacity = 0
//             blue[i].style.transform = 'rotateY(180deg)'
    
//         }
//     }
    
// }

function ent(event, id){  
    let cont = document.getElementById('auto')
    while (cont.childElementCount > 2) {
        cont.removeChild(cont.lastChild)
    }
    try{
            document.getElementsByName('SR').innerHTML = ''

    }
    catch{
        console.log('empty')
    }
    let search = document.getElementById(id).value
    if(search == ''){
        return
    }
    let comp = ''
    let breako = ''
    let res = []
    let temp = ''
    let el = ''
    for (let i = 0; i < pokeDex.length; i++ || res == 6) {
        el = document.createElement('p')
         temp = `<p name="SR" id="${pokeDex[i][0]}SR">${pokeDex[i][0]} <img onclick="load(this)" class="${pokeDex[i][0]}" src="${pokeDex[i][1]}"></p>`
         el.innerHTML = temp
        comp = pokeDex[i][0]
        breako = search.length
        comp = comp.split('')
        comp = comp.slice(0, breako)
        console.log(comp.join(''))
        console.log(search)
        comp = comp.join('')
        console.log(comp)
        console.log(search)
        if(res.length == 6){
            return
        }
        if(search == comp){
            res.push(pokeDex[i])
            document.getElementById('auto').appendChild(el)
            document.getElementById(`${pokeDex[i][0]}SR`).setAttribute('class', 'animato')
        }
        
    }
    console.log(res)
    if(event.key === 'Enter'){
      
        console.log(search)
    }
}
function load(id){
    console.log('robert')
    let searched = document.getElementById(id.className)
    console.log(searched)
    let it = document.getElementById('outp')
    for (let i = 0; i < it.children.length; i++) {
            it.children[i].style.display = 'none'
            console.log(it.children[i])
            
    }
    console.log(searched)
    searched.parentElement.style.display = 'initial'
//     for (let i = 0; i < it.children.length; i++) {
//         it.children[i].style.display = 'initial'

// }
}
function back(){
    let ito = document.getElementById('outp')
    for (let i = 0; i < ito.children.length; i++) {
            ito.children[i].style.display = 'initial'
    }
}
function fav(ev){
    let dbl = document.getElementById(ev)
    if(dbl.style.backgroundColor != 'gold'){
        
    favy.push(dbl)
    dbl.style.backgroundColor = 'gold'
    dbl.style.boxShadow = '0 0 15px 5px gold'
    }
    else{
    dbl.style.backgroundColor = 'salmon'
        dbl.style.boxShadow = ''
        favy.splice(favy.indexOf(dbl), 1)
    }
    

    
}
function pFav(){
    if(favy.length == 0){
        return
    }
    let bo = document.getElementById('outp')
    for (let i = 0; i < bo.children.length; i++) {
        bo.children[i].style.display = 'none'
        console.log(bo.children[i])
}
    for (let i = 0; i < favy.length; i++) {
        favy[i].parentElement.style.display = 'initial'
        console.log(bo.children[i])
}
}
function blurry(){
    let cont = document.getElementById('auto')
    while (cont.childElementCount > 2) {
        cont.removeChild(cont.lastChild)
    }
}