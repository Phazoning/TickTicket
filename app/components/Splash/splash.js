import React, {Component} from 'react'
import {View, Image} from 'react-native';
import styles from "./styles";
import assets from "../../src/assets";
import {CommonActions} from '@react-navigation/native';

class Splash extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: false
        };
    }

    componentDidMount(){
        if (!this.state.loading) {
            this.sleep(2000).then(() => {
                this.setState({
                    loading: true
                })
            })
        }
    }

    componentDidUpdate(){
        if (this.state.loading){
            this.goToLogin();
        }
    }

    /**delete this and calls when redux is set */
    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    goToLogin = () => {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{name: 'login'}],
          });
          this.props.navigation.dispatch(resetAction);
    }
    render (){
        return(
            <View style={styles.body}>
                <Image style={styles.logo} source={assets.logoImage}/>
            </View>
        )
    }
}

export default Splash