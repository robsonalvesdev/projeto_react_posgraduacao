import axios from "axios";
import { urlListRequest, urlDetailRequest } from '../utils/Const'

export const getPokemons = getAllPokemons

function getAllPokemons(callbackSuccess){
    axios.get(urlListRequest)
        .then((response) => {
            callbackSuccess(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}