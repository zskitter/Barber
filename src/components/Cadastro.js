import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {StyledText, Keyboard, Date} from '../styles/Login'
import server from './server'


const Cad = ( {navigation} ) => {
    const [ newUser, setNewUser ] = useState({})
    const Cadastro = () => {server.Cadastrar(newUser.nome, newUser.email, newUser.senha, { navigation })}

    return(
        <Keyboard>
            <StyledText> 
                Dados:
            </StyledText>
            
            <Date
            defaultValue = "Nome"
            onChangeText= { text => setNewUser( {nome: text} ) }>
            </Date>

            <Date
            defaultValue = "Email"
            onChangeText = { text => setNewUser( {nome: newUser.nome,
                                                  email: text} ) }>
            </Date>

            <Date
            defaultValue = "Senha"
            onChangeText = { text => setNewUser( {nome: newUser.nome,
                                                  email: newUser.email,
                                                  senha: text} )}>
            </Date>

            <TouchableOpacity
            onPress = { Cadastro }>

            <StyledText style = { { width: 100} } > Cadastrar </StyledText>

            </TouchableOpacity>
        
        </Keyboard>
    )
}


export default Cad