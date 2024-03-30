import React, {Component} from 'react'
import {View, Image} from 'react-native';
import styles from "./styles";
import assets from "../../src/assets";
import {CommonActions} from '@react-navigation/native';
import * as ReduxActions from '../../redux/actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Splash extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: false
        };
    }

    componentDidMount(){
        if (!this.state.loading) {
            this.props.getArticles();
            this.props.getIncidents();
            this.sleep(2000).then(() => {
                this.setState({
                    loading: true
                })
            })
        }
    }

    componentDidUpdate(){
        if (this.state.loading && this.props.articles != [] && this.props.incidents != []){
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

function mapStateToProps(state, props) {
    return {
      incidents: state.reducer.incidents,
      articles: state.reducer.articles
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Splash);