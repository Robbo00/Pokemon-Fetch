// Initializes Variables
// let aud = new Audio('coin-flip-shimmer-85750.mp3')
let yes = Number(prompt("How much pokemon"))
let pokeDex = []
let favy = []
let s  = 0
//Gets prompt and puts it in for loop to determine how many pokemon to get
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

        yes.push(data.results[i].name)
        data
let blue = fetch(data.results[i].url)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        let get = yes[0]
        yes = []
        yes.push(get, data.base_experience, data.sprites.front_default, data.abilities[0].ability.name, data.types[0].type.name)
        make(yes, i + 1, data.height, data.weight)
        return data
    })
    return data
    
})
}
// Function that gets called after every single iteration of the for loop above to crete the pokemon element in th output
function make(info, id, height, weight){
    pokeDex.push([info[0], info[2]])
    let backo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    let template = `<div ondblclick="fav(this.id)" ondblclick="Stay(id)" id="${info[0]}" class="P ${info[4]}"> <h1 id="Phead" class="red content" >${info[0].charAt(0).toUpperCase() + info[0].slice(1)}</h1> <div class="disp"> <p class="content h">${info[3].charAt(0).toUpperCase() + info[3].slice(1)} Type<p/> <p class="content">1st Ability: ${info[4].charAt(0).toUpperCase() + info[4].slice(1)}</p> <p class="content">Base Exp ${info[1]}</p> <p class="content">ID: ${id}</p> <p class="content">Height: ${height}</p> <p class="content">Weight ${weight}</p></div> </div>`
    let reg = document.createElement('div')
    reg.innerHTML = template
    document.getElementById("outp").appendChild(reg)
    background(backo, info[0])
    
}
// Sets background fro previously created cards to the image
function background(back, name){    

    document.getElementById(name).style.backgroundImage = `url(${back})`
   
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
    
//     red.setAttribute('name', red.getAttribute('id'))
//     }
//     else{
//         red.style.transform = "rotateY(-180deg)"
//         red.setAttribute('name', '')
//         for (let i = 0; i < blue.length; i++) {
//             blue[i].style.opacity = 0
//             blue[i].style.transform = 'rotateY(180deg)'
    
//         }
//     }
    
// }
// Gets the matching pokemon up to 6 search results by cutting the pokemon name to the search values length and comparing
function ent(event, id){  
    let cont = document.getElementById('auto')
    while (cont.childElementCount > 2) {
        cont.removeChild(cont.lastChild)
    }
    try{
            document.getElementsByName('SR').innerHTML = ''

    }
    catch{
    }
    let search = document.getElementById(id).value.toLowerCase()
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
         temp = `<p class="${pokeDex[i][0]}" id="${pokeDex[i][0]}SR">${pokeDex[i][0]} <img onclick="load(this)" class="${pokeDex[i][0]}" src="${pokeDex[i][1]}"></p>`
         el.innerHTML = temp
        comp = pokeDex[i][0]
        breako = search.length
        comp = comp.split('')
        comp = comp.slice(0, breako)
        comp = comp.join('')
        if(res.length == 6){
            return
        }
        if(search == comp){
            res.push(pokeDex[i])
            document.getElementById('auto').appendChild(el)
            document.getElementById(`${pokeDex[i][0]}SR`).setAttribute('class', `${pokeDex[i][0]}`)
        }
        
    }
    
}
// Checks if the enter button was pressed or inf] a sub image was clicked on 
function load(id){
    let searched = ''
    if(id == 'Enter'){
             searched = document.getElementById('auto').children[2]
             searched = searched.firstChild.getAttribute('class')
             searched = document.getElementById(searched)
    }
    else{
         searched = document.getElementById(id.className)
    }
    let it = document.getElementById('outp')
    for (let i = 0; i < it.children.length; i++) {
            it.children[i].style.display = 'none'
            
    }
    searched.parentElement.style.display = 'initial'
//     for (let i = 0; i < it.children.length; i++) {
//         it.children[i].style.display = 'initial'

// }
}
// brings back the pokeDex
function back(){
    let ito = document.getElementById('outp')
    for (let i = 0; i < ito.children.length; i++) {
            ito.children[i].style.display = 'initial'
    }
}
// on dbl click lights up the card gold and puts a gold glow
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
    
    localStorage.setItem('fav', favy)
    
}
// displays favorites hides everything else
function pFav(){
    if(favy.length == 0){
        return
    }
    let bo = document.getElementById('outp')
    for (let i = 0; i < bo.children.length; i++) {
        bo.children[i].style.display = 'none'
}
    for (let i = 0; i < favy.length; i++) {
        favy[i].parentElement.style.display = 'initial'
}
}
//gets rid of search results on blur
function blurry(){
    setTimeout(() => {
    }, 1000);
    let cont = document.getElementById('auto')
    while (cont.childElementCount > 2) {
        cont.removeChild(cont.lastChild)
    }
}
// clears the background color of the favorites and sets 
function cFav(){
    for (let i = 0; i < favy.length; i++) {
        favy[i].style.backgroundColor = 'salmon'
        favy[i].style.boxShadow = ''        
    }
    favy = []
}
// Sees every button press and checks if its enter if not jus go back and if it is call in the 
function checkEnt(event){
    if(event.key === 'Enter'){
        load(event.key)
    }
}

function time(){
    s+= 1
 
}