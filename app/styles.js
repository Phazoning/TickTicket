import {StyleSheet, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    button: {
        flex: 1,
        borderTopWidth: 0.008*width,
        borderBottomWidth: 0.008*width,
        paddingVertical: 0.01*width,
        paddingHorizontal: 0.03*width,
        backgroundColor: "#FF0000",
        width: "100%"
    },
    buttonText: {
        fontFamily: 'arial',
        color: "#000000",
        fontSize: 0.05*height,
    },
    buttonIN: {
        backgroundColor: "#808080"
    },
    buttonNIN: {
        backgroundColor: "#FFFFFF"
    },
    textIN: {
        fontWeight: "bold",
    },
    textNIN: {
        fontWeight: "normal"
    },
    drawer: {
        flex: 1,
    }

})