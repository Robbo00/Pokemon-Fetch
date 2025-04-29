
let yes = prompt("How much pokemon")
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
    let backo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    let template = `<div ondblclick="Stay(id)" id="${info[0]}" class="P ${info[4]}"> <h1 id="Phead" class="red content" >${info[0].charAt(0).toUpperCase() + info[0].slice(1)}</h1> <div class="disp"> <p class="content h">${info[3].charAt(0).toUpperCase() + info[3].slice(1)} Type<p/> <p class="content">1st Ability: ${info[4].charAt(0).toUpperCase() + info[4].slice(1)}</p> <p class="content">Base Exp ${info[1]}</p></div> </div>`
    let reg = document.createElement('div')
    reg.innerHTML = template
    document.getElementById("outp").appendChild(reg)
    background(backo, info[0])
}
function background(back, name){
    document.getElementById(name).style.backgroundImage = `url(${back})`
}

function Stay(event){
    
    let red = document.getElementById(event)
    let blue = red.children
    if(red.name != red.getAttribute('id')){
        for (let i = 0; i < blue.length; i++) {
        blue[i].style.opacity = 1
        blue[i].style.transform = 'rotateY(-180deg)'

    }
    red.style.transform = "rotateY(180deg)"
    
    console.log(red.getAttribute('name'))
    red.setAttribute('name', red.getAttribute('id'))
    }
    else{
        red.style.transform = "rotateY(-180deg)"
        red.setAttribute('name', '')
        for (let i = 0; i < blue.length; i++) {
            blue[i].style.opacity = 0
            blue[i].style.transform = 'rotateY(180deg)'
    
        }
    }
    
}