import React, {Component} from 'react'
import {SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from "./styles";
import * as ReduxActions from '../../redux/actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import assets from '../../src/assets';
import {Picker} from '@react-native-picker/picker';

class IncidentDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            assignedTo: this.props.incidentDetail["person in charge"],
            status: this.props.incidentDetail.status,
            comments: this.props.incidentDetail.comments,
            isButtonEnabled: false
        };
    }

    componentDidMount = () => {
    }

    componentWillUnmount(){
        this.props.cleanseIncidentDetail();
    }

    goBack = () => {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{name: 'incidents'}],
              });
            this.props.navigation.dispatch(resetAction);
    }

    ischanged = () => {
        let isStatusChanged = !(this.props.incidentDetail.status == this.state.status)
        let isCommentsChanged = !(this.props.incidentDetail.comments == this.state.comments)
        let isAsigneeChanged = !(this.props.incidentDetail["person in charge"] == this.state.assignedTo)

        return isAsigneeChanged || (isAsigneeChanged && isStatusChanged) ||
            isCommentsChanged || (isCommentsChanged && isAsigneeChanged) ||
            (isStatusChanged && this.state.status != "Closed")  || 
            (isStatusChanged && this.state.status == "Closed" && this.state.comments != "" && this.props.incidentDetail.comments != "") ||
            (isStatusChanged && isCommentsChanged && isAsigneeChanged)
        
    }

    componentDidUpdate(){
        if (this.ischanged() && !this.state.isButtonEnabled) {
            this.setState({
                isButtonEnabled: true
            })
        }
    }
    
    processAlterRequest = () => {
        let requestBody = {
            "incident": this.props.incidentDetail.incident,
            "status": this.state.status,
            "comments": this.state.comments
        }
        if (!this.state.assignedTo){
            requestBody.user = this.props.user.user
        }
        if (requestBody.status == "Closed" && requestBody.comments != ""){
            this.props.alterIncident(requestBody)
        } 
    }

    render (){
        return(
            <SafeAreaView style={styles.body}>
                <View style = {styles.header}>
                    <TouchableOpacity
                        onPress={this.goBack}
                        style={styles.button}
                        >
                        <Image source={assets.backImage} style={styles.backImage}/>
                    </TouchableOpacity>
                    <Text style={styles.incidentIdText}>{this.props.incidentDetail.incident}</Text>
                </View>
                <ScrollView style={styles.core}>
                    <View style={styles.statusView}>
                        <View style={styles.userColumn}>
                            <View style={styles.columnSection}>
                                <Text style={styles.sectionText}>{"Asignado a:  "}</Text>
                            </View>
                            <Text style={styles.contentText}>{this.props.incidentDetail["person in charge"]}</Text> 
                            {
                                this.state.assignedTo == "" &&
                                <TouchableOpacity
                                    style={styles.assignButton}
                                    onPress={() => {
                                        this.setState({
                                            assignedTo: this.props.user.user
                                        })    
                                    }}
                                >
                                    <Text style={styles.sectionText}>{"Asignármela"}</Text>
                                </TouchableOpacity>
                            }
                        </View>
                        <View style={styles.statusColumn}>
                            <View style={styles.columnSection}>
                                <Text style={styles.sectionText}>{"Status: "}</Text>
                                <Picker
                                    selectedValue={this.state.status}
                                    style={styles.pickerStyle}
                                    onValueChange={
                                        (itemValue, itemIndex) => {
                                            this.setState({status: itemValue})
                                        }
                                    }
                                >
                                    <Picker.Item label="Abierta" value="Open"/>
                                    <Picker.Item label="En pausa" value="Standby"/>
                                    <Picker.Item label="Cerrada" value="Closed"/>
                               </Picker>
                            </View>
                            <View style={styles.columnSection}>
                                <Text style={styles.sectionText}>{"Abierta: "}</Text>
                            <Text style={styles.contentText}>{this.props.incidentDetail.opened.split("T")[1]}</Text>
                            </View>
                            {
                                this.props.incidentDetail.status == "Closed" &&
                                <View style={styles.columnSection}>
                                    <Text style={styles.sectionText}>{"Cerrada: "}</Text>
                                    <Text style={styles.contentText}>{this.props.incidentDetail.closed.split("T")[1]}</Text>
                                </View>
                            }
                        </View>
                    </View>
                    <TextInput
                        multiline={true}
                        style={styles.textInput}
                        onChangeText={(text) => {
                            this.setState({
                                comments: text
                            })
                        }}
                        defaultValue={this.state.comments}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            if(this.state.isButtonEnabled){
                                this.processAlterRequest()
                            }   
                        }}
                        style={[styles.sendButton, this.ischanged() ? styles.sendButtonEnabled : styles.sendButtonDisabled]}
                    >
                        <Text style={styles.sendButtonText}>{"Modificar"}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }   
}


function mapStateToProps(state, props) {
    return {
      incidentDetail: state.reducer.incidentDetail,
      user: state.reducer.user
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(IncidentDetail);