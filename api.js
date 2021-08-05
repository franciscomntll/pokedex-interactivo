import axios from 'axios'
const instance = axios.create({baseURL: "https://pokeapi.co/api/v2/"})

export const api = {
    fetchPokemon : async () => {
        return await instance.get("pokemon")
    },
    searchForPokemon : async (value) => {
        return await instance.get(`pokemon/${value}`)
    }
}