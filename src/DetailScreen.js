import { View, Text } from "react-native"

export default function DetailScreen({route}){
    
    console.log(route.params.id)
    
    return(
        <View>
            <Text>Tela de detalhes</Text>
        </View>
    )
}