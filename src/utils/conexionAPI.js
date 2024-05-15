

const API = "https://pokeapi.co/api/v2/"

export const get =(path)=>{
    return fetch(API+path)
    .then((results)=> results.json())
    
    
}