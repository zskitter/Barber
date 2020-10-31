import 'react-native-gesture-handler';
import React from 'react'
import {Alert} from 'react-native'
const axios = require('axios').default


const server = {

        async goToHome( userEmail, userSenha, { navigation } ) {
        const resp = await axios.post( 'http://192.168.0.19:3333/usuarios/val', 
        {
            Email: `${ userEmail }`,
            Senha: `${ userSenha }`

        }).then(response => { return response })
        .catch(error => { console.log(error) })

        if(typeof(resp) === "object") {
            resp.data === true ?
                navigation.navigate( "Agendamento" ) :
                    Alert.alert( "erro", "Email ou senha inválidos!" )
        }

        else{ Alert.alert( "erro", "insira um email válido" ) }
    }

}


module.exports = server