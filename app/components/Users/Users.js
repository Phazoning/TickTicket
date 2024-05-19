import React, {Component} from 'react'
import {SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
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
        this.props.navigation.closeDrawer()
        if (!this.props.user.oversees || this.props.user.oversees == []) {
            this.setState({
                selectedUser: this.props.user
            })
        }
    }

    refresh = async () => {
        this.props.getUser(this.props.user.user, this.props.user.pass)
        if (this.state.selectedUser){
            this.props.getUserFromAuthUser(this.props.user, this.state.selectedUser.user)
            this.setState({
                selectedUser: this.props.detailUser
            })
        }
    }

    isDetail = () => {
        return this.state.selectedUser != null && this.props.user.oversees && this.props.user.oversees != []
    }

    render (){
        return(
            <SafeAreaView style={styles.body}>
                <View style = {styles.header}>
                    {
                        !this.isDetail() &&
                        <DrawerButton {...this.props} style={styles.leftHeaderButton}/>
                    }
                    {
                        this.isDetail() &&
                        <TouchableOpacity
                            style={styles.leftHeaderButton}
                            onPress={() => {
                                this.setState({
                                    selectedUser: null
                                })
                                this.props.cleanseUserDetail();
                            }}
                        >
                            <Image source={assets.backImage} style={styles.buttonImage} />
                        </TouchableOpacity>
                    }
                    {
                        !this.isDetail() && this.props.user.oversees && this.props.user.oversees != [] &&
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({selectedUser: this.props.user})
                                }
                            }
                        >
                            <Image source={assets.userImage} style={styles.buttonImage}/>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        onPress={this.refresh}
                        style={styles.rightHeaderButtonHeaderButton}
                        >
                        <Image source={assets.cycleImage} style={styles.buttonImage}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.core}>
                    {   
                        !this.state.selectedUser &&
                        <FlatList
                            data={this.props.user.oversees}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.dataScroll}
                            renderItem={({item}) => (
                                <TouchableOpacity
                                    style={styles.subordinateDetailButton}
                                    onPress={
                                        () => {
                                            this.props.getUserFromAuthUser(this.props.user, item)
                                            this.setState({selectedUser: this.props.detailUser})
                                    }}
                                >
                                    <Text style={styles.subordinatesText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    }
                    {
                        this.state.selectedUser && 
                        <ScrollView style={styles.dataScroll}>
                            <View style={styles.dataSection}>
                                <Text style={styles.sectionDescriptorText}>{"Usuario: "}</Text>
                                <Text style={styles.sectionContentText}>{this.state.selectedUser.user}</Text>
                            </View>
                            <View style={styles.dataSection}>
                                <Text style={styles.sectionDescriptorText}>{"Nombre: "}</Text>
                                <Text style={styles.sectionContentText}>{this.state.selectedUser.name}</Text>
                            </View>
                            <View style={styles.dataSection}>
                                <Text style={styles.sectionDescriptorText}>{"Nota: "}</Text>
                                <Text style={styles.sectionContentText}>{this.state.selectedUser.mark}</Text>
                            </View>
                        </ScrollView>
                    }

                </View>
            </SafeAreaView>
        )
    }   
}


function mapStateToProps(state, props) {
    return {
        user: state.reducer.user,
        detailUser: state.reducer.userDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Users);