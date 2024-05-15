const API = "https://pokeapi.co/api/v2/"

export const getAllData =(path)=>{
    return fetch(API+path)
    .then((results)=> results.json())
    .then((data)=> data.results)
    .then((data)=> data.map((pokemon)=> fetch(pokemon.url).then((results)=> results.json())))
    .then((data)=> Promise.all(data))
}

