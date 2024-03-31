import React, {Component} from 'react'
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from "./styles";
import * as ReduxActions from '../../redux/actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user: "",
            pass: "",
        };
    }

    componentDidMount(){

    }

    click = () => {
        this.props.getUser(this.state.user, this.state.pass)
        this.goToIncidents()
    }

    goToIncidents = () => {
        if (this.props.user) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{name: 'incidents'}],
              });
            this.props.navigation.dispatch(resetAction);
        }
    }

    render (){
        return(
            <View style={styles.body}>
                <View style={styles.itemsView}>
                    <View style={styles.item}>
                        <Text style={styles.textItem}>{"Usuario:"}</Text>
                        <TextInput
                            style={styles.textInputItem}
                            placeholder="Usuario"
                            onChangeText={(text) => {
                                this.setState({
                                    user: text
                                })
                            }}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.textItem}>{"Contraseña:"}</Text>
                        <TextInput
                            style={styles.textInputItem}
                            placeholder="Contraseña"
                            onChangeText={(text) => {
                                this.setState({
                                   pass: text 
                                })
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.click}
                    >
                        <Text style={styles.buttonText  }>{"Login"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state, props) {
    return {
      user: state.reducer.user
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);