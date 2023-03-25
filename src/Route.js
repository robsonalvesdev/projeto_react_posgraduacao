import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from './DetailScreen'
import HomeListScreen from './HomeListScreen'


const appStackNavigation = createStackNavigator()

function AppStack(){
    return(
        <appStackNavigation.Navigator>
            <appStackNavigation.Screen name="Home" component={HomeListScreen}/>
            <appStackNavigation.Screen name="Detail" component={DetailScreen}/>
        </appStackNavigation.Navigator>
    )


}

export default () => {
    return(
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}