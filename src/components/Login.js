import React, { useState } from 'react'
import server from './server'
import{ 
        View, 
        ImageBackground,
        TouchableOpacity,
                          }from 'react-native'
import { StyledText, Date,  Keyboard } from '../styles/dateStyles'



const Login = ( {navigation} ) => {
    const [ userEmail, setEmail ] = useState( "" )
    const [ userSenha, setSenha ] = useState( "" )
    const goToHom = () => {server.goToHome( userEmail,userSenha, { navigation } ) }
    const im = { uri:"https://i.pinimg.com/originals/8f/a2/05/8fa2059ff5647157dffc4396c9962b1c.jpg" }

    return (

        <Keyboard 
        keyboardVerticalOffset = { 75 } 
        behavior = "position">

        <ImageBackground style = {{ width: 300,height: 480 }} 
        source = { im }>

                <View style={{ marginTop: 300 }}>
                    <StyledText>
                        Login:
                    </StyledText>
                    
                
                    <Date
                    defaultValue = "Email: "
                    onChangeText = { text => setEmail(text) }
                    >
                    </Date>

                    <Date 
                    defaultValue = "Senha:"
                    onChangeText = { text => setSenha(text) }
                    >
                    </Date>
            
                    <TouchableOpacity style={{ width: 80} } onPress={ goToHom }>
                        
                        <StyledText>
                            Entrar
                            </StyledText>

                    </TouchableOpacity>
                </View>

            </ImageBackground>
                </Keyboard>

    )
        
    
}

export default Login