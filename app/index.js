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

    render(){
        return(
            <SafeAreaProvider>
                <NavigationContainer
                onStateChange={(state) => {
                    const currentRouteName = getActiveRouteName(state);
                }}>
                <Drawer.Navigator
                    initialRouteName="splash"
                    screenOptions={{
                        headerShown: false
                    }}
                    >
                    <Drawer.Screen name="splash" component={Splash} />
                    <Drawer.Screen name="login" component={Login} />
                    <Drawer.Screen name="incidents" component={Incidents}/>
                    <Drawer.Screen name="incidentDetail" component={IncidentDetail}/>
                </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}

export default Main;