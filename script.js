for (let i = 1; i <= 1302; i++) {
let red = fetch('https://pokeapi.co/api/v2/pokemon?limit=250')
    
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
        make(yes, i)
        return data
    })
    return data
    
})
}

function make(info, id){
    let backo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    let template = `<div id="${info[0]}" class="P ${info[4]}"> <h1 id="Phead" class="red" >${info[0]}</h1> <div class="disp"><p>${info[3]}<p/> <p>${info[4]}<p/> </div> </div>`
    let reg = document.createElement('div')
    reg.innerHTML = template
    document.getElementById("outp").appendChild(reg)
    background(backo, info[0])
}
function background(back, name){
    document.getElementById(name).style.backgroundImage = `url(${back})`
}
