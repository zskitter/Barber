import styled from 'styled-components'


export const Keyboard = styled.KeyboardAvoidingView`
    position: relative;
`

export const StyledText = styled.Text`
    backgroundColor: rgb(160, 160, 168);
    fontSize: 20px;
    left: 7px;
    opacity: 0.7;
    borderRadius: 10px;
    width:90px;
    marginTop: 10px;
    marginBottom: 10px;
    textAlign: center;
    color: #000;
    fontStyle: italic;
    opacity: 2;
`

export const Date = styled.TextInput.attrs({
    placeholderTextColor: '#989c96'})`
    alignSelf: center;
    width: 290px;
    height: 35px;
    textAlign:center;
    backgroundColor: #000;
    fontSize: 20px;
    marginTop: 10px;
    marginBottom: 10px;
    color: #989c96;
    opacity: 1;
    borderRadius: 6px;
    `
