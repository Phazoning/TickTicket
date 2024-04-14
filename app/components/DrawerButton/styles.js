import {StyleSheet, Dimensions} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    core: {
        flex: 1,
        height: 0.15*height,
        width: 0.15*height,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonImage: {
        flex: 1,
        padding: 0.01*height,
        resizeMode: "contain"
    }
})