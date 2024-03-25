import {Component} from React
import {View, Platform, NativeModules, Image, ImageBackground} from 'react-native';
import styles from styles;
import assets from "../../src/assets";

class Splash extends Component {
    render (){
        return(
            <View style={styles.body}>
                <Image style={styles.logo} source={assets.logoImage}/>
            </View>
        )
    }
}