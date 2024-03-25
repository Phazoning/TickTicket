import {Component} from React
import { NavigationContainer, CommonActions, useRoute } from "@react-navigation/native"
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer"
import { SafeAreaProvider } from "react-native-safe-area-context";
import Splash from "components/Splash/splash";

const Drawer = createDrawerNavigator();


class Main extends Component {

    render(){
        return(
            <SafeAreaProvider>
                <NavigationContainer
                onStateChange={(state) => {
                    const currentRouteName = getActiveRouteName(state);
                }}>
                <Drawer.Navigator
                    initialRouteName="splash">
                    <Drawer.Screen name="splash" component={Splash} />
                </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}