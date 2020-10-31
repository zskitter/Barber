import styled from 'styled-components'


export const StyledText = styled.Text({
    backgroundColor: '#989c96',
    fontSize: 20,
    left: 7,
    opacity: 0.7,
    borderRadius: 10,
    width:80,
    textAlign: "center",
    marginBottom: 6,
    marginTop: 12,
    color: "#000",
    fontStyle: "italic"
})

export const Date = styled.TextInput({
    alignSelf:"center",
    width: 260,
    height: 35,
    textAlign:"center",
    backgroundColor: '#000',
    fontSize: 20,
    marginTop: 6,
    color: "#989c96",
    fontStyle: "italic",
    opacity: 0.7,
    borderRadius: 6,
})

export const Keyboard = styled.KeyboardAvoidingView({
    alignSelf: "center",
        opacity: 2,
        marginTop: 50,
})