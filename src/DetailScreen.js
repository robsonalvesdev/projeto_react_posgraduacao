import { useState, useEffect } from "react"
import { View, Text, Image } from "react-native"

import { getDetailPokemon } from "./network/ApiRequest"
import { mapperDetail } from "./utils/Mapper"

export default function DetailScreen({route}){
    
    const [data,setData] = useState({name: 'Teste'})

    useEffect(() => {
        getDetailPokemon(apiData => {
            setData(mapperDetail(apiData))
        }, route.params.dados.id)
    }) 
    
    return(
        <View>
            <Text>Nome: {data.name}</Text>
            <Text>Habilidades: {data.habilidades}</Text>
            <Image style={{width: 200, height:200}} source={{uri:data.image}}/>

        </View>
    )
}