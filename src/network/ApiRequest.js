import axios from "axios";
import { urlListRequest, urlDetailRequest } from '../utils/Const'

export const getPokemons = getAllPokemons
export const getDetailPokemon = getDetailPokemonPrivate

function getAllPokemons(callbackSuccess){
    axios.get(urlListRequest)
        .then((response) => {
            callbackSuccess(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

function getDetailPokemonPrivate(callbackSuccess, id){
    const uri = urlDetailRequest  + id
    axios.get(uri)
        .then((response) => {
            callbackSuccess(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}