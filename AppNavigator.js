import {
    createAppContainer,
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
import TrainingPlanScreen from "./src/screens/trainerScreens/TrainingPlanScreen";
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
import BalanceScreen from "./src/screens/balanceScreens/BalanceScreen";


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
const TrainingPlanSwitchNavigator = createSwitchNavigator(
    {
        TrainingPlan: {
            screen: TrainingPlanScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: routeName,
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

const BalanceSwitchNavigator = createSwitchNavigator(
    {
        Balance: {
            screen: BalanceScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: routeName,
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


const AthleteProfileStackNavigator = createSwitchNavigator(
    {
        AthleteProfileScreen: {
            screen: AthleteProfileScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: routeName,
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
        TrainerAthleteProfile: {screen: AthleteProfileStackNavigator},
        TrainingPlanSwitch: {screen: TrainingPlanSwitchNavigator},
        BalanceSwitch: {screen: BalanceSwitchNavigator}
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
                        name="ios-list-box"
                        size={30}
                        color={tintColor}
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
    }
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


const TrainerSwitchNavigator = createSwitchNavigator({
    TrainerDashboard: { screen: TrainerDrawerNavigator },
    Welcome: { screen: WelcomeStackNavigator},
    // dodac athletedashoard ..
});

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeStackNavigator},
    TrainerDashboard: { screen: TrainerDrawerNavigator },
    // dodac athletedashoard ..
});


//ew dodac trainer, athlete...

export const TrainerContainer = createAppContainer(TrainerSwitchNavigator);
export const ProfileContainer = createAppContainer(AppSwitchNavigator);