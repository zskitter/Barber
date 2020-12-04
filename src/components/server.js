import 'react-native-gesture-handler';
import React from 'react'
import {Alert} from 'react-native'
const axios = require('axios').default


const server = {

        async Entrar( userEmail, userSenha, { navigation } ) {
            const resp = await axios.post( 'http://192.168.0.21:3333/usuarios/val', 
            {
                Email: `${ userEmail }`,
                Senha: `${ userSenha }`

            })
                try{
                    resp.data === true ?
                    navigation.navigate( "Agendamento" ) :
                                                         Alert.alert( "erro", "Email ou senha inválidos!" )
             }
                catch{
                    Alert.alert( "erro", "erro de conexão!" ) 

                }
    },

        async Cadastrar( Nome, Email, Senha, { navigation } ) {
            const resp = await axios.post( 'http://192.168.0.21:3333/usuarios/create', 
            {
                Nome:  `${ Nome }`,
                Email: `${ Email }`.toLowerCase(),
                Senha: `${ Senha }`
            })
                try {
                    resp.data === true ?
                        navigation.push( "Barber app" ) :
                                                        Alert.alert( "erro", "Email já cadastrado!" )
                } catch (error) {
                     Alert.alert( "erro", "falha de conexão" )
            }
        }
}



module.exports = server