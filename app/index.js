/**
route:  C:/Users/AlonsoMorenasDiaz/Desktop/Comm_decks/proyecto/TickTicket
**/
import React, {Component} from 'react'
import { NavigationContainer, CommonActions, useRoute } from "@react-navigation/native"
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer"
import { SafeAreaProvider } from "react-native-safe-area-context";
import Splash from "./components/Splash/splash";
import Login from "./components/Login/login";
import Incidents from './components/Incidents/Incidents';
import IncidentDetail from './components/IncidentDetail/IncidentDetail'
import styles from "./styles"
import {Text, TouchableOpacity} from 'react-native';
import Users from './components/Users/Users';



const Drawer = createDrawerNavigator();
const getActiveRouteName = (state) => {
    const route = state.routes[state.index];
    if (route.state) {
      return getActiveRouteName(route.state);
    }
  
    return route.name;
  };

class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        };
    }

    componentDidMount(){
    }

    customDrawerContent(props){
        let actualRoute = ""
        if (props.state.routes[0].state) {
            actualRoute = props.state.routes[0].name;
        }

        let isIncidents = actualRoute === "incidents"
        //let isKnowledge = actualRoute === "knowledge"
        let isUsers = actualRoute === "users"
        return (
            <DrawerContentScrollView {...props} style={styles.drawer}>
                <TouchableOpacity
                    style={[styles.button, isIncidents ? styles.buttonIN : styles.buttonNIN]}
                    onPress={
                        () => {
                            const resetAction = CommonActions.reset({
                            index: 0,
                            routes: [{name: 'incidents'}],
                            });
                            props.navigation.dispatch(resetAction);
                            props.navigation.closeDrawer();
                        }
                    }
                >
                    <Text
                        styles={[styles.buttonText, isIncidents ? styles.textIN : styles.textNIN]}
                    >
                        {"incidents"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, isIncidents ? styles.buttonIN : styles.buttonNIN]}
                    onPress={
                        () => {
                            const resetAction = CommonActions.reset({
                            index: 0,
                            routes: [{name: 'users'}],
                            });
                            props.navigation.dispatch(resetAction);
                            props.navigation.closeDrawer();
                        }
                    }
                >
                    <Text
                        styles={[styles.buttonText, isIncidents ? styles.textIN : styles.textNIN]}
                    >
                        {"users"}
                    </Text>
                </TouchableOpacity>
                
            </DrawerContentScrollView>
        )
    }

    render(){
        return(
            <SafeAreaProvider>
                <NavigationContainer
                onStateChange={(state) => {
                    const currentRouteName = getActiveRouteName(state);
                }}>
                <Drawer.Navigator
                    drawerContent={(props) => this.customDrawerContent(props)}
                    initialRouteName="splash"
                    screenOptions={{
                        headerShown: false,
                        drawerType: "front"
                    }}
                    >
                    <Drawer.Screen name="splash" component={Splash} />
                    <Drawer.Screen name="login" component={Login} />
                    <Drawer.Screen name="incidents" component={Incidents}/>
                    <Drawer.Screen name="incidentDetail" component={IncidentDetail}/>
                    <Drawer.Screen name="users" component={Users}/>
                </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}

export default Main;