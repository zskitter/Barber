import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { AppRegistry} from 'react-native'
import Login from './components/Login';
import Cadastro from './components/Cadastro'
import Agendamento from './components/Agendamento'


const Stack = createStackNavigator()

class Main extends React.Component {
    render() {

        return(
            <NavigationContainer>
                
                <Stack.Navigator initialRouteName="Login">

                        <Stack.Screen name= "Barber app" component={Login}/>
                        <Stack.Screen name = "Agendamento" component={Agendamento}/>
                        <Stack.Screen name= "Cadastro" component={Cadastro}/>
                        
                   </Stack.Navigator>

               </NavigationContainer>
        )
    }
}



export default Main
AppRegistry.registerComponent("Main", () => Main) 