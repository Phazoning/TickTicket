import {StyleSheet, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    body: {flex: 1, alignItems:"center", justifyContent:"center"},
    itemsView: {
        justifyContent: "space-between",
        paddingVertical: "30%",
        paddingHorizontal: "3%"
    },
    item: {
        flewidth: 1,
        textAlign: "center"
    },
    textItem: {
        marginVertical: "5%",
        marginHorizontal: "10%",
        fontWeight: "bold",
        color: "#000000",
        fontFamily: "arial",
        fontSize: height * 0.05   
    },
    textInputItem: {
        fontFamily: "arial",
        marginVertical: "5%",
        marginHorizontal: "10%",
        borderColor: "#000000",
        color: "#5A716B",
        borderWidth: 2,
        color: "#"
    },
    button: {
        alignContent: "center",
        borderColor: "#000000",
        borderLeftWidth: 0.006 * width,
        borderRightWidth: 0.006 * width,
        borderTopWidth: 0.0038 * height,
        borderBottomWidth: 0.0038 * height,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: "arial",
        alignSelf: "center",
        fontWeight: "bolder"   
    }
})