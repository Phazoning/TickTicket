import {StyleSheet, Dimensions} from 'react-native';


export default StyleSheet.create({
    body: {flex: 1, alignItems:"center"},
    itemsView: {
        justifyContent: "space-evenly",
        paddingVertical: "30%",
        paddingHorizontal: "3%",
    },
    item: {
        flex: 1,
        textAlign: "center"
    },
    textItem: {
        marginVertical: "5%",
        marginHorizontal: "10%",
        fontWeight: "bold",
        fontFamily: "arial"
    },
    textInputItem: {
        marginVertical: "5%",
        marginHorizontal: "10%",
        borderColor: "#000000",
        borderWidth: 2
    },
    button: {
        borderColor: "black",
        borderWidth: "3%"
    }
})