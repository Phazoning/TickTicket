import {StyleSheet, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    body: {flex: 1, alignItems:"center", justifyContent:"center", backgroundColor: ""},
    itemsView: {
        justifyContent: "center",
        paddingVertical: "30%",
        paddingHorizontal: "3%"
    },
    item: {
        flex: 1,
        textAlign: "center"
    },
    textItem: {
        marginVertical: "5%",
        marginHorizontal: "10%",
        fontWeight: "bold",
        fontFamily: "arial",
        fontSize: 0.08 * width,
        color: "#000000"
    },
    textInputItem: {
        marginVertical: "5%",
        marginHorizontal: "10%",
        borderColor: "#000000",
        borderWidth: 2,
        color: "#000000"
    },
    button: {
        alignContent: "center",
        borderColor: "black",
        borderLeftWidth: 0.006 * width,
        borderRightWidth: 0.006 * width,
        borderTopWidth: 0.0038 * height,
        borderBottomWidth: 0.0038 * height,
        borderRadius: 10
    },
    buttonText: {
        alignSelf: "center",
        fontWeight: "bold", 
        minHeight: 0.015*height, 
        color: "#000000"
    }
})