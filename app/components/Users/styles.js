import { Dimensions, StyleSheet} from "react-native"

let width, height = Dimensions.get("window")

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
        fontFamily: "arial"
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

    core: {

    },

    dataRow: {
        justifyContent: "space-evenly",
        paddingHorizontal: 0.15*width,
        flex: 1,
        flexDirection: "row"
    },

    contentText: {
        fontFamily: "arial"
    },

    contentTitle: {
        fontSize: 0.1*height,
        fontWeight: "bold"
    },

    contentDetailText: {
        fontSize: 0.095*height
    },

    subordinatesText: {
        fontSize: 0.09*height,
        fontStyle: "italic"
    },

    dataScroll: {
        flex: 1
    }

})