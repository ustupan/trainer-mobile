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
import AddTrainingDayScreen from "./src/screens/trainerScreens/AddTrainingDayScreen";
import EditTrainingDayScreen from "./src/screens/trainerScreens/EditTrainingDayScreen";
import InvitationScreen from "./src/screens/InvitationScreen";
import TrainerListScreen from "./src/screens/athleteScreens/TrainerListScreen";
import AddCalendarScreen from "./src/screens/trainerScreens/AddCalendarScreen";
import CalendarListScreen from "./src/screens/athleteScreens/CalendarListScreen";
import ResultListScreen from "./src/screens/athleteScreens/ResultListScreen";
import EditResultScreen from "./src/screens/athleteScreens/EditResultScreen";
import AddResultScreen from "./src/screens/athleteScreens/AddResultScreen";
import AthleteResultListScreen from "./src/screens/trainerScreens/AthleteResultListScreen";


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



const InvitationStackNavigator = createStackNavigator(
    {
        Invitation: {
            screen: InvitationScreen
        },
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
                        name="ios-person-add"
                        size={30}
                        color={tintColor}
                    />
                )
            };
        }
    }
);

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

// ATHLETE

const AddResultSwitchNavigator = createSwitchNavigator(
    {
        AddResult: {
            screen: AddResultScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: 'Dodaj rezultat',
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

const EditResultSwitchNavigator = createSwitchNavigator(
    {
        EditResult: {
            screen: EditResultScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: 'Edytuj rezultat',
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

const ResultListStackNavigator = createStackNavigator(
    {
        ResultList: {screen: ResultListScreen},
        EditResultSwitch: {screen: EditResultSwitchNavigator},
        AddResultSwitch: {screen: AddResultSwitchNavigator},
        BalanceSwitch: {screen: BalanceSwitchNavigator},
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

const CalendarListStackNavigator = createStackNavigator(
    {
        CalendarList: {screen: CalendarListScreen},
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

const TrainerListStackNavigator = createStackNavigator(
    {
        TrainerList: {screen: TrainerListScreen},
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

const AthleteDrawerNavigator = createDrawerNavigator({
        AthleteDashboard: {
            screen: DashboardStackNavigator,
        },
        TrainerList: {
            screen: TrainerListStackNavigator
        },
        Invitation: {
            screen: InvitationStackNavigator
        },
        CalendarList: {
            screen: CalendarListStackNavigator
        },
        ResultList: {
            screen: ResultListStackNavigator
        },

    },
    {
        initialRouteName: 'AthleteDashboard',
        drawerPosition: 'left',
        contentComponent: CustomTrainerDrawer,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentOptions: {
            activeTintColor: '#ff5a66'
        }

    });



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

const AthleteResultListSwitchNavigator = createSwitchNavigator(
    {
        AthleteResultList: {
            screen: AthleteResultListScreen
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


const AddCalendarStackNavigator = createStackNavigator(
    {
        AddCalendar: {
            screen: AddCalendarScreen
        },
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
                        name="md-calendar"
                        size={30}
                        color={tintColor}
                    />
                )
            };
        }
    }
);

const EditTrainingDaySwitchNavigator = createSwitchNavigator(
    {
        EditTrainingDay: {
            screen: EditTrainingDayScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: 'Dzień treningowy',
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

const AddTrainingDaySwitchNavigator = createSwitchNavigator(
    {
        TrainingDay: {
            screen: AddTrainingDayScreen
        }
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return {
                title: 'Dzień treningowy',
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
        ResultList: {screen: AthleteResultListSwitchNavigator},
        AddTrainingDaySwitch: {screen: AddTrainingDaySwitchNavigator},
        EditTrainingDaySwitch: {screen: EditTrainingDaySwitchNavigator},
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
    },
    Invitation: {
        screen: InvitationStackNavigator
    },
    AddCalendar: {
        screen: AddCalendarStackNavigator
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
});

const AthleteSwitchNavigator = createSwitchNavigator({
    AthleteDashboard: { screen: AthleteDrawerNavigator },
    Welcome: { screen: WelcomeStackNavigator},
});

const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: WelcomeStackNavigator},
    TrainerDashboard: { screen: TrainerDrawerNavigator },
    AthleteDashboard: { screen: AthleteDrawerNavigator },
});


//ew dodac trainer, athlete...

export const TrainerContainer = createAppContainer(TrainerSwitchNavigator);
export const AthleteContainer = createAppContainer(AthleteSwitchNavigator);
export const ProfileContainer = createAppContainer(AppSwitchNavigator);