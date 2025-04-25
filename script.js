for (let i = 0; i < 20; i++) {
let red = fetch('https://pokeapi.co/api/v2/pokemon?limit=250')
    
.then(response =>{
    if(!response.ok){throw new Error('Networknrespons was not ok' + response.statusText)}
    let blue = response.json()
    return blue

})

.then(data =>{
let yes = []
        console.log("Name: ", data.results[i].name)
        yes.push(data.results[i].name)
        data
    // console.log(data.charizard)
    // console.log("Ability: ", data.abilities)
let blue = fetch(data.results[i].url)
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data.base_experience)
        return data
    })
    return data
    
})

}

