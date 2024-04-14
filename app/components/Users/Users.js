import React, {Component} from 'react'
import {SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from "./styles";
import * as ReduxActions from '../../redux/actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import assets from '../../src/assets'
import DrawerButton from '../DrawerButton/DrawerButton';
import storage from '../../storage/storage';

class Users extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedUser: null
        };
    }

    async componentDidMount(){
        if (!this.props.user.oversees) {
            this.setState({
                selectedUser: this.props.user
            })
        }
    }

    refresh = async () => {
        let storedUser = null
        let storedPass = null
        await storage.load({
            key: "user"
        }).then(ret => {
            storedUser = ret
        }).catch(err => {
            console.log(err)
        })
        await storage.load({
            key: "pass"
        }).then(ret => {
            storedPass = ret
        }).catch(err => {
            console.log(err)
        })

        await this.props.getUser(storedUser, storedPass)
        if (this.state.selectedUser){
            let userName = this.state.user.user

            await this.setUserDetail(userName)
        }
    }

    backButton = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        selectedUser: null
                    })
                    this.props.cleanseUserDetail()
                }}
            >
                <Image source={assets.backImage}/>
            </TouchableOpacity>
        )
    }

    setSelfUserButton = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        selectedUser: this.props.user
                    })
                }}
            >
                <Image source={assets.userImage}/>
            </TouchableOpacity>
        )
    }

    userDetailRender = () => {
        return (
            <View style={styles.dataScroll}>
                <View style={styles.dataRow}>
                    <Text style={[styles.contentTitle, styles.contentText]}>{"Usuario:"}</Text>
                    <Text style={[styles.contentText, styles.contentDetailText]}>{this.state.user.user}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={[styles.contentTitle, styles.contentText]}>{"Nombre:"}</Text>
                    <Text style={[styles.contentText, styles.contentDetailText]}>{this.state.user.name}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={[styles.contentTitle, styles.contentText]}>{"Nota"}</Text>
                    <Text style={[styles.contentText, styles.contentDetailText]}>{this.state.user.mark}</Text>
                </View>
                {this.state.oversees && 
                    <View style={styles.dataRow}>
                        <Text style={[styles.contentTitle, styles.contentText]}>{"A cargo:"}</Text>
                        <Text style={[styles.contentText, styles.subordinatesText]}>{this.state.user.oversees.join(", ")}</Text>
                    </View>
                }
            </View>
        )
    }

    setUserDetail = async (user) => {
        await this.props.getUsersFromAuthUser(this.props.user, user)
        this.setState({
            selectedUser: this.props.detailUser
        })
    }

    render (){
        return(
            <SafeAreaView style={styles.body}>
                <View style = {styles.header}>
                    {!this.state.selectedUser && <DrawerButton {...this.props}/>}
                    {this.state.selectedUser && !this.state.selectedUser.oversees && <DrawerButton {...this.props}/>}
                    {this.state.selectedUser && this.state.selectedUser.oversees && this.backButton()}
                    {this.props.user.oversees && !this.state.selectedUser && this.setSelfUserButton()}
                    <TouchableOpacity
                        onPress={this.refresh}
                        style={styles.button}
                        >
                        <Image source={assets.cycleImage} style={styles.refreshImage}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.core}>
                    {!this.state.selectedUser && this.props.user.oversees &&
                        <FlatList
                            data={this.props.user.oversees}
                            keyExtractor={item => item}
                            renderItem={({item}) => (
                                <View style={styles.listItem}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setDetail(item)
                                        }
                                    }
                                    >
                                        <Text style={styles.listItemTitleText}>{item}</Text>
                                    </TouchableOpacity>
                                </View>
                        )}
                        />
                    }
                    {this.state.selectedUser && this.userDetailRender()}
                </View>
            </SafeAreaView>
        )
    }   
}


function mapStateToProps(state, props) {
    return {
        user: state.reducer.user,
        detailUser: state.reducer.user
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Users);