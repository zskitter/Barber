import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {StyledText, Keyboard, Date} from '../styles/Cadastro'
import {View} from 'react-native'
import server from './server'


const Cad = ( {navigation} ) => {
    const [ newUser, setNewUser ] = useState({})
    const Cadastro = () => {server.Cadastrar(newUser.nome, newUser.email, newUser.senha, { navigation })}

    return(
        
        <Keyboard 
            keyboardVerticalOffset = {0}
            behavior = "position"
        >
            <View style={{top: "20%"}}>
                 <StyledText> 
                    Dados:
                </StyledText>
                
                <Date
                placeholder = "Nome"
                onChangeText= { text => setNewUser( {nome: text} ) }>
                </Date>

                <Date
                placeholder = "Email"
                onChangeText = { text => setNewUser( {nome: newUser.nome,
                                                    email: text} ) }>
                </Date>

                <Date
                placeholder = "Senha"
                onChangeText = { text => setNewUser( {nome: newUser.nome,
                                                    email: newUser.email,
                                                    senha: text} )}>
                </Date>

                <TouchableOpacity
                onPress = { Cadastro }>

                <StyledText> Cadastrar </StyledText>

                </TouchableOpacity>
            </View>
        </Keyboard>
    )
}


export default Cad