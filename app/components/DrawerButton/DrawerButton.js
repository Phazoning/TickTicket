import React, {Component} from "react";
import {View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles"
import assets from "../../src/assets";


class DrawerButton extends Component {
    onPress = () => {
        this.props.navigation.openDrawer()
    }

    render () {

        return (
            <View style={styles.core}>
                <TouchableOpacity 
                    style={styles.buttonImage}
                    onPress={this.onPress}
                >
                    <Image source={assets.drawerImage}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DrawerButton