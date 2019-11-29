import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator, createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignIn from "./src/screens/SignInScreen";
import SignUp from "./src/screens/SignUpScreen";
import React from "react";
import { Ionicons } from '@expo/vector-icons'
import Dashboard from "./src/screens/DashboardScreen";



const DashboardStackNavigator = createStackNavigator(
    {
        Dashboard: {screen: Dashboard}
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: routeName,
                headerLeft: (
                    <Ionicons
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator( {
    Dashboard: {
        screen: DashboardStackNavigator
    }
});



const ProfileStackNavigator = createStackNavigator(
    {
        Welcome: {screen: WelcomeScreen},
        SignIn: {screen: SignIn},
        SignUp: {screen: SignUp},
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            if ( routeName === 'Welcome') return {

            };
            else return {
                title: routeName === 'SignUp' ? 'Rejestracja Konta': 'Zaloguj się do aplikacji',
                headerLeft: (
                    <Ionicons
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.goBack()}
                        name="md-arrow-back"
                        size={30}
                    />
                )
            };
        }
    }

);

const AppSwitchNavigator = createSwitchNavigator({

    Welcome: { screen: ProfileStackNavigator},
    Dashboard: { screen: AppDrawerNavigator }
});


export const AppContainer = createAppContainer(AppSwitchNavigator);