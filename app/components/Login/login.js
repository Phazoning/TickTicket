import React, {Component} from 'react'
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from "./styles";
import assets from "../../src/assets";

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
        console.log("Hola")
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
                        onPress={this.click}
                    >
                        <Text>{"Hola"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Login