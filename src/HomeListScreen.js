import { useState, useEffect } from "react"
import { StyleSheet, View, Text, FlatList } from "react-native"

import { getPokemons } from "./network/ApiRequest"

export default function HomeListScreen()
{
    const [data,setData] = useState([])

    useEffect(() => {
        getPokemons(apiData => {
            setData(apiData.results)
        })
    })    

    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
                return (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
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
  