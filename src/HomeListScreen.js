import { useState, useEffect } from "react"
import { StyleSheet, View, Text, FlatList, Image, TouchableHighlight } from "react-native"

import { getPokemons } from "./network/ApiRequest"
import { mapperPokemon } from "./utils/Mapper"

export default function HomeListScreen({navigation})
{
    const [data,setData] = useState([])

    useEffect(() => {
        getPokemons(apiData => {
            setData(mapperPokemon(apiData.results))
        })
    })    

    const onCardPress = (item) => {
        navigation.push('Detail', {
            dados:item
        })
    }

    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return (
                    <TouchableHighlight
                        onPress={() => onCardPress(item)}
                    >
                        <View style={styles.item}>
                            <Image style={{width: 200, height:200}} source={{uri:item.image}}/>
                            <Text>{item.id} - {item.name}</Text>
                        </View>
                    </TouchableHighlight>
                    
                )
            }}
        />
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    item: {
        padding: 20,
        alignItems:"center",
        flexGrow: 1,
        margin: 4,
        backgroundColor: "#FFEEAA"
    }
  });
  