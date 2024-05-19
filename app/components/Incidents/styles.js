import {StyleSheet, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    body: {flex: 1, alignItems:"center", justifyContent:"center"},
    header: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: height*0.1,
        backgroundColor: '#FF0000',
        paddingVertical: 0.02*height,
        paddingHorizontal: 0.03*width
    },
    headerText: {
        fontSize: 0.001* height,
        fontFamily: "arial",
        color: "#000000"
    },
    button: {
        flex: 1,
        height: 0.1*height,
        left: 0,
        marginRight: 0.2*width,
        padding: 0.05*width
    },
    refreshImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    picker:{
        flex: 2,
        borderWidth: 5,
        marginLeft: 0.2*width,
        backgroundColor: "#FFFFFF",
        color: "#000000"
    },
    core: {
        height: height*0.9,
        padding: 2
    },
    listItem: {
        backgroundColor: "#BB0000",
        borderColor: "#FFFFFF",
        width: width,
        paddingHorizontal: 0.01*width,
        paddingVertical: 0.005*height
    },
    listItemTitleText: {
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 0.025*height
    },
    listItemContentText: {
        fontFamily: 'arial',
        fontStyle: 'italic',
        fontSize: 0.015*height
    },
    drawerButton: {
        alignSelf: "center",
        flex: 1,
        marginLeft: 0.02*width
    }
})
