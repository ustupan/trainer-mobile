import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator, createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import WelcomeScreen from "./src/screens/welcomeScreens/WelcomeScreen";
import SignIn from "./src/screens/welcomeScreens/SignInScreen";
import SignUp from "./src/screens/welcomeScreens/SignUpScreen";
import React from "react";
import { Ionicons } from '@expo/vector-icons'
import Dashboard from "./src/screens/DashboardScreen";
import AthleteListScreen from "./src/screens/trainerScreens/AthleteListScreen";
import LogoutComponent from "./src/components/Logout.component";
import AthleteProfileScreen from "./src/screens/trainerScreens/AthleteProfileScreen";
import {CustomTrainerDrawer} from "./src/components/drawerNavigator/CustomTrainerDrawer";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";


const DashboardStackNavigator = createStackNavigator(
    {
        Dashboard: {screen: Dashboard},
    },
    {
        navigationOptions: ({ navigation }) => {
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
                ),
                drawerIcon: ({ tintColor }) => (
                    <Ionicons
                        name="ios-home"
                        size={30}
                        color={tintColor}
                    />
                )
            };
        }
    }
);

// TRAINER
const AthleteProfileStackNavigator = createStackNavigator( {
    AthleteProfileScreen: {
        screen: AthleteProfileScreen
    },
    defaultNavigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state;
        return {
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
});

const AthleteListStackNavigator = createStackNavigator(
    {
        AthleteList: {screen: AthleteListScreen},
        TrainerAthleteProfile: {screen: AthleteProfileStackNavigator}
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

const TrainerDrawerNavigator = createDrawerNavigator({
    TrainerDashboard: {
        screen: DashboardStackNavigator,
    },
    AthleteList: {
        screen: AthleteListStackNavigator
    },
},
    {
        initialRouteName: 'TrainerDashboard',
        drawerPosition: 'left',
        contentComponent: CustomTrainerDrawer,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentOptions: {
            activeTintColor: '#ff5a66'
        }

});

// END TRAINER


const AppDrawerNavigator = createDrawerNavigator( {
    Dashboard: {
        screen: DashboardStackNavigator,
    },
    AthleteList: {
        screen: AthleteListStackNavigator
    },
    Wyloguj: {
        screen: LogoutComponent
    }
});



const WelcomeStackNavigator = createStackNavigator(
    {
        Welcome: {screen: WelcomeScreen},
        SignIn: {screen: SignIn},
        SignUp: {screen: SignUp},
    },
    {
        navigationOptions: ({ navigation }) => {
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

//Welcome -> zrobione
    // Welcome
    // Sign in
    // Sign up
//TrainerDrawerNavigator
    // Dashboard
    // AthleteListStackNavigator
        // AthleteProfile
            // Balance
                // Różne Switch navigatory
            // Calendar
                // Różne Switch navigatory
    // Dodawanie znajomych
    // Logout
//Athlete
    // Dashboard
    // TrainerList
    // Calendars
        // Rozne Switch navigatory
    // Balance
        // Rozne Switch navigatory
    // Dodawanie znajomych
    // Logout



const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeStackNavigator},
    TrainerDashboard: { screen: TrainerDrawerNavigator },
    // dodac athletedashoard ..
});


//ew dodac trainer, athlete...

export const TrainerContainer = createAppContainer(TrainerDrawerNavigator);
export const ProfileContainer = createAppContainer(AppSwitchNavigator);