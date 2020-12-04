import React, { useState } from 'react'
import server from './server'
import{ 
        View, 
        ImageBackground,
        TouchableOpacity,
                          }from 'react-native'
import { StyledText, Date,  Keyboard } from '../styles/Login'



const Login = ( {navigation} ) => {

    const [ userEmail, setEmail ] = useState( "" )
    const [ userSenha, setSenha ] = useState( "" )
    const goToAgend = () => {server.Entrar( userEmail, userSenha, { navigation } ) }
    const goToCad = ( ) => {navigation.navigate( "Cadastro" )}
    const im = { uri:"https://i.pinimg.com/originals/8f/a2/05/8fa2059ff5647157dffc4396c9962b1c.jpg" }

    return (

        
        <Keyboard 
        keyboardVerticalOffset = {-170} 
        behavior = "position">
        <ImageBackground style = {{ width: "100%", height: '100%',
                                    opacity: 0.8}} 
            source = { im }>

            <View style={{bottom: "-40%"}}>

                <StyledText>
                    Login:
                </StyledText>
                    
                <Date
                placeholder = "Email:"
                onChangeText = { text => setEmail(text) }
                >
                </Date>

                <Date 
                placeholder = "Senha:"
                onChangeText = { text => setSenha(text) }
                >
                </Date>

                <View 
                    style = {{flexDirection: "row"}}>

                    <TouchableOpacity  style = { { maxWidth: 80 } } onPress = { goToCad }>
                        
                        <StyledText style={{width: 130}}>
                            Cadastre-se
                        </StyledText>

                    </TouchableOpacity>

                    <TouchableOpacity style={{left: 170}}
                         onPress = { goToAgend }>

                        <StyledText>
                            Entrar
                        </StyledText>

                    </TouchableOpacity>
                </View>
            </View>

            </ImageBackground>
                </Keyboard>

    )
        
    
}

export default Login