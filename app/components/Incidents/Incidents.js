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

class Incidents extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            status: "Open",
            selectedIncident: null
        };
    }

    async componentDidMount(){
        this.props.getIncidents(this.state.status)
    }

    setDetail = (incident) => {
        
        this.props.setIncidentForDetail(incident)
        this.setState({
            selectedIncident: incident
        })
        
    }

    componentDidUpdate(){
        if (this.state.selectedIncident && this.props.incidentDetail) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{name: 'incidentDetail'}],
              });
            this.props.navigation.dispatch(resetAction);
        }
    }

    refresh = () => {
        this.props.getIncidents(this.state.status)
    }
    render (){
        return(
            <SafeAreaView style={styles.body}>
                <View style = {styles.header}>
                    <DrawerButton {...this.props}/>
                    <TouchableOpacity
                        onPress={this.refresh}
                        style={styles.button}
                        >
                        <Image source={assets.cycleImage} style={styles.refreshImage}/>
                    </TouchableOpacity>
                    <Picker
                        selectedValue={this.state.status}
                        onValueChange={
                            (itemValue, itemIndex) => {
                                this.setState({status: itemValue})
                                this.props.getIncidents(itemValue)
                            }
                        }
                        style={styles.picker}
                    >
                        <Picker.Item label="Abierta" value="Open"/>
                        <Picker.Item label="En pausa" value="Standby"/>
                        <Picker.Item label="Cerrada" value="Closed"/>
                    </Picker>
                </View>
                <View style={styles.core}>
                    <FlatList
                        data={this.props.incidents}
                        keyExtractor={item => item.incident}
                        renderItem={({item}) => (
                            <View style={styles.listItem}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setDetail(item)
                                    }
                                }
                                >
                                    <Text style={styles.listItemTitleText}>{item.incident}</Text>
                                    <Text>{item.content.slice(0, 15) + "... "}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        )
    }   
}


function mapStateToProps(state, props) {
    return {
      incidents: state.reducer.incidents,
      incidentDetail: state.reducer.incidentDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Incidents);