import React, {Component} from 'react'
import {View, Image} from 'react-native';
import styles from "./styles";
import assets from "../../src/assets";
import {CommonActions} from '@react-navigation/native';
import * as ReduxActions from '../../redux/actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import storage from '../../storage/storage';

class Splash extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            user: null,
            pass: null
        };
    }

    async componentDidMount(){
        await storage.load({
            key: "user"
        }).then(ret => {
            this.setState({user: ret})
        }).catch(err => {
            console.log(err)
            this.setState({
                user:""
            })
        })
        await storage.load({
            key: "pass"
        }).then(ret => {
            this.setState({pass: ret})
        }).catch(err => {
            console.log(err)
            this.setState({
                pass:""
            })
        })
    }

    componentDidUpdate(){
        console.log(this.state)
        if (
            this.state.pass != null && this.state.user != null
        ){
            this.props.getUser(this.state.user, this.state.pass)
        } else if (this.state.pass == "" && this.state.user == ""){
            this.setState({
                loading: false
            })
        }
        if (this.props.articles != [] && this.props.incidents != [] && !this.state.loading){
            this.goToLogin();
        } else if (this.props.articles != [] && this.props.incidents != [] && this.props.user != null){
            this.gotoIncidents();
        }
    }

    goToLogin = () => {
        console.log("login")
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{name: 'login'}],
          });
          this.props.navigation.dispatch(resetAction);
    }

    gotoIncidents = () => {
        console.log("incidents")
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{name: 'incidents'}],
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
      articles: state.reducer.articles,
      user: state.reducer.user
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Splash);