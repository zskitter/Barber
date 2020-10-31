import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { AppRegistry} from 'react-native'
import Login from './components/Login';
import Scheduling from './components/Scheduling'


const Stack = createStackNavigator()

class Main extends React.Component {
    render() {

        return(
            <NavigationContainer>
                
                <Stack.Navigator initialRouteName="Login">

                        <Stack.Screen name="Barber app" component={Login}/>
                        <Stack.Screen name="Scheduling" component={Scheduling}/>
                        
                   </Stack.Navigator>

               </NavigationContainer>
        )
    }
}



export default Main
AppRegistry.registerComponent("Main", () => Main) 