import {StyleSheet, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    body: {flex: 1, alignItems:"center", justifyContent:"center"},
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        height: height*0.1,
        backgroundColor: '#FF0000'
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
    backImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    core: {
        height: height*0.9,
        padding: 2
    },
    incidentIdText: {
        fontFamily: 'arial',
        fontSize: 0.045*height,
        fontWeight: 'bold',
        alignSelf: "center",
        paddingRight: 0.05*width
    },
    statusView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    sendButtonEnabled: {
        backgroundColor: "#4E4FD5"
    },
    sendButtonDisabled: {
        backgroundColor: "#8083C0"
    },
    sendButton: {
        paddingVertical: 0.05*height,
        paddingHorizontal: 0.08*width,
        borderRadius: 25
    },
    sendButtonText: {
        fontFamily: 'arial',
        fontSize: 0.08*height,
        color: "#000000"
    },
    textInput: {
        borderWidth: 5,
        borderColor: "#FFFFFF"
    },
    userColumn: {
        flex: 1,
        flexDirection: "column",
        paddingRight: 0.1*width,
        paddingLeft: 0.01*width,
        paddingVertical: 0.025*height
    },
    statusColumn: {
        flex: 1,
        flexDirection: "column",
        paddingRight: 0.01*width,
        paddingLeft: 0.1*width,
        paddingVertical: 0.025*height
    },

    sectionText: {
        fontFamily: 'bold',
        fontSize: 0.02*height,
        fontFamily: 'arial',
        alignSelf: "center"
    },
    contentText: {
        fontSize: 0.018*height,
        fontFamily: 'arial',
        alignSelf: "center"
    },
    columnSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    pickerStyle: {
        height: 0.02*height,
        fontSize: 0.13*height,
        fontFamily: 'arial',
        width: 0.15*width
    }
})