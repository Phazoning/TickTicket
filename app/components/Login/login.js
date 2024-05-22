import React, {Component} from 'react'
import {SafeAreaView ,View, Image, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import styles from "./styles";
import * as ReduxActions from '../../redux/actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import storage from '../../storage/storage';

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user: "",
            pass: "",
            keyboardUp: false
        };
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this._keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this._keyboardDidHide)
    }

    componentWillUnmount(){
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }
    _keyboardDidShow = () => {
        this.setState({
            keyboardUp: true
        })
    }

    _keyboardDidHide = () => {
        this.setState({
            keyboardUp: false
        })
    }

    componentDidUpdate(){
        if (this.props.user) {
            this.saveData().then(ret => {
                const resetAction = CommonActions.reset({
                    index: 0,
                    routes: [{name: 'incidents'}],
                  });
                this.props.navigation.dispatch(resetAction);
            })
        }
    }

    click = () => {
        this.props.getUser(this.state.user, this.state.pass)
    }

    saveData = async () => {
        await storage.save({
            key: "user",
            id: "name",
            data: this.state.user
        }).then(ret => {console.log("user saved!")}).catch(err => {console.log(err)})

        await storage.save({
            key: "user",
            id: "pass",
            data: this.state.pass
        }).then(ret => {console.log("pass saved!")}).catch(err => {console.log(err)})
    }


    render (){
        return(
            <SafeAreaView style={styles.body}>
                <View style={styles.itemsView}>
                    <View style={styles.item}>
                        <Text style={styles.textItem}>{"Usuario:"}</Text>
                        <TextInput
                            style={styles.textInputItem}
                            placeholder="Usuario"
                            placeholderTextColor="grey"
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
                            secureTextEntry={true}
                            style={styles.textInputItem}
                            placeholder="Contraseña"
                            placeholderTextColor="grey"
                            onChangeText={(text) => {
                                this.setState({
                                   pass: text 
                                })
                            }}
                        />
                    </View>
                    {
                        !this.state.keyboardUp && 
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.click}
                        >
                            <Text style={styles.buttonText }>{"Login"}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </SafeAreaView>
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