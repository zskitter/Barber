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
    const goToAgend = () => {server.Entrar( userEmail,userSenha, { navigation } ) }
    const goToCad = ( ) => {navigation.navigate( "Cadastro" )}
    const im = { uri:"https://i.pinimg.com/originals/8f/a2/05/8fa2059ff5647157dffc4396c9962b1c.jpg" }

    return (

        <Keyboard 
        keyboardVerticalOffset = { 16 } 
        behavior = "position">

        <ImageBackground style = {{ width: 300,height: 480 }} 
        source = { im }>

                <View style={{ marginTop: 300 }}>
                    <StyledText>
                        Login:
                    </StyledText>
                    
                
                    <Date
                    defaultValue = "Email:"
                    onChangeText = { text => setEmail(text) }
                    >
                    </Date>

                    <Date 
                    defaultValue = "Senha:"
                    onChangeText = { text => setSenha(text) }
                    >
                    </Date>
            
                    <TouchableOpacity  style = { { maxWidth: 80 } } onPress = { goToAgend }>
                        
                        <StyledText>
                            Entrar
                        </StyledText>

                    </TouchableOpacity>

                    <TouchableOpacity  
                        style = {{ left: 185,
                                    bottom: 45,
                                    maxWidth: 100, 
                                                }} 
                                                  onPress = { goToCad }>

                        <StyledText style = { { width: 100, height: 30, textAlign: "center"} }>
                            Cadastrar
                        </StyledText>

                    </TouchableOpacity>

                </View>

            </ImageBackground>
                </Keyboard>

    )
        
    
}

export default Login