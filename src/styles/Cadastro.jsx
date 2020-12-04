import styled from 'styled-components'


export const Keyboard = styled.KeyboardAvoidingView`
    flex: 1;
    alignSelf: center;
`


export const StyledText = styled.Text`
    backgroundColor: rgb(160, 160, 100);
    fontSize: 20px;
    left: 7px;
    opacity: 0.7;
    borderRadius: 10px;
    width: 80px;
    textAlign: center;
    marginBottom: 8px;
    marginTop: 16px;
    color: #000;
    fontStyle: italic;
`

export const Date = styled.TextInput.attrs({
    plcaholderTextColor: "gray"
})`
    alignSelf: center;
    width: 260px;
    height: 35px;
    textAlign: center;
    backgroundColor: rgb(200, 200, 200);
    fontSize: 20px;
    marginTop: 12px;
    color: #989c96;
    fontStyle: italic;
    opacity: 0.7;
    borderRadius: 6px;
`