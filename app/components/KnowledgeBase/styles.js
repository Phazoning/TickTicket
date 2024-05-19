import {StyleSheet, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    body: {flex: 1},
    header: {
        height: 0.1*height, 
        backgroundColor: "#FF0000", 
        justifyContent: "space-evenly", 
        flexDirection: "row",
        paddingHorizontal: 0.03*width
    },
    button: {
        flex: 1,
        height: 0.1*height,
        alignSelf: "flex-end",
        marginRight: 0.2*width,
        padding: 0.05*width
    },
    refreshImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    articleList: {
        height: 0.9*height,
        marginHorizontal: 0.05*width,
        marginVertical: 0.01*height,
    },

    articleItem: {
        borderWidth: 3,
        marginVertical: 0.008*height
    },
    articleHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 0.009*width,
        borderBottomWidth: 3
    },
    articleItemTitle: {
        flex: 5,
        fontFamily: "arial",
        fontSize: 0.035*height,
        marginVertical: 0.002*height,
        alignSelf: "center",
        color: "#000000"
    },
    articleItemBody: {
        paddingHorizontal: 0.009*width,
        paddingVertical: 0.004*height
    },
    articleItemBodyText: {
        fontFamily: "arial",
        fontSize: 0.03*height,
        color: "#000000"
    },    
    articleToggleButton: {
        flex: 1,    
        borderLeftWidth: 3,
        marginLeft: 0.009*width
    },
    articleToggleButtonText: {
        fontFamily: "arial",
        fontSize: 0.06*height,
        alignSelf: "center",
        fontWeight: "bold",
        color: "#000000"
    }
})