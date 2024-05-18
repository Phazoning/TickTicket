import { Dimensions, StyleSheet} from "react-native"

let {width, height} = Dimensions.get("window")

export default StyleSheet.create({
    body: {flex: 1},
    header: {
        flex: 1,
        flexDirection: "row",
        height: height*0.1,
        width: width,
        backgroundColor: '#FF0000',
        paddingVertical: 0.02*height,
        paddingHorizontal: 0.03*width,
        justifyContent: "space-between"
    },
    rightHeaderButton: {
        alignSelf: "flex-end",
        right: 0
    },
    leftHeaderButton: {
        alignSelf: "flex-start",
        left: 0
    },
    headerText: {
        fontSize: 0.001* height,
        fontFamily: "arial"
    },
    buttonImage: {
        flex: 1,
        resizeMode: 'contain'
    },

    core: {
        flex: 9
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
        fontSize: 0.03*height,
        fontStyle: "italic",
        fontWeight: "bold",
        fontFamily: "arial",
        marginVertical: 0.001*height,
        marginHorizontal: 0.002*width
    },

    dataScroll: {
        flex: 1
    },
    subordinateDetailButton: {
        flex: 1,
        borderColor: "#000000",
        borderTopWidth: 0.005*height,
        borderBottomWidth: 0.005*height,
        borderLeftWidth: 0.006*width,
        borderRightWidth: 0.006*width,
        marginHorizontal: 0.02*width,
        marginVertical: 0.015*height,
        borderRadius: 4,
        backgroundColor: "#CC6358"
    },
    dataSection: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 0.02*height,
        marginHorizontal: 0.015*width
    },
    sectionDescriptorText: {
        fontFamily: "arial",
        fontSize: 0.03*height,
        fontWeight: "bold"
    },
    sectionContentText: {
        fontFamily: "arial",
        fontSize: 0.025*height,
        alignSelf: "flex-end"
    }

})