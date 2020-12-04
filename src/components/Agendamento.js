import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native'

const Agendamento = () => {
    const [texto, novoTexto] = useState(" ")
    return(
        <View style = { {backgroundColor: "gray"} }>
            <TextInput 
            placeholder = "aperte" 
            placeholderTextColor = "green"
            onChangeText = {text => novoTexto(text)}>
            </TextInput>

            <Text>{texto}</Text>

        </View>
    )

} 


export default Agendamento
