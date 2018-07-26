
import React from 'react';
import { StyleSheet, Text, View , YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import  {HeaderBackButton} from  'react-navigation';
import Camera from './src/screens/cameraFeed';
import frontScreen from './src/screens/Demo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Response from './src/screens/Response';
import Login from './src/screens/login';
import UserProfile from './src/screens/PersonDetail';
import NewsFeed from './src/screens/NewsFeed';

const activityIcon = ({ tintColor }) => <FeatherIcon name="activity" size={25} color={tintColor} />;
const cardsIcon = ({ tintColor }) => <MaterialIcon name="cards" size={25} color={tintColor} />;
const settingsIcon = ({ tintColor }) => <MaterialIcon name="account-settings-variant" size={25} color={tintColor} />;
import {updateFocus} from "react-navigation-is-focused-hoc";

const stack =  createStackNavigator({
    Home:{
        screen : frontScreen,
        navigationOptions:{
            title : 'ERA Offline'
        }
   },
    cameraScreen :{
        screen:Camera,
    },
    response:{
        screen:Response
    }
},
{
    initialRouteName: 'Home',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#5bc1df',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    })

});

const LoginNavigator = createStackNavigator({
    Home:{
        screen : Login,
        navigationOptions:{
            title : 'Details of Lost Person'
        }
    },
    cameraScreen :{
        screen:Camera,
        navigationOptions:{
            title : 'Capture Image'
        }
    },
    response:{
        screen:Response,
        navigationOptions:{
            title : 'Complete'
        }
    }
},
    {
        initialRouteName: 'Home',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'royalblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        })

    });

const NewsFeedNavigator = createStackNavigator({
    Feed : {
        screen : NewsFeed,
        navigationOptions:{
            title : 'Feed'
        }

    },
    Profile :{
        screen : UserProfile,
        navigationOptions:{
            title : 'Profile'
        }

    }
},
    {
        initialRouteName: 'Feed',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'royalblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        })

    });

const FoundNavigator = createStackNavigator({
        PhotoCam : {
            screen : Camera,
            navigationOptions:{
                title : 'Take a photo'
            }

        },
        Profile :{
            screen : UserProfile,
            navigationOptions:{
                title : 'Profile'
            }

        }
    },
    {
        initialRouteName: 'PhotoCam',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'royalblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        })

    });

const AppNavigator =  createBottomTabNavigator({
    Feed: {
        screen: NewsFeedNavigator,
        navigationOptions: {
            tabBarIcon: activityIcon,
        },
    },
    Lost: {
        screen: LoginNavigator,
        navigationOptions: {
            tabBarIcon: cardsIcon,
        },
    },
    Found: {
        screen: FoundNavigator,
        navigationOptions: {
            tabBarIcon: settingsIcon,
        },
    },
}, {
    tabBarOptions: {
        inactiveTintColor: 'grey',
    }

});


export default class App extends React.Component{
    render(){
        return (
            <AppNavigator
                onNavigationStateChange = {(prevState,currentState) =>{
                    updateFocus(currentState);
                    }
                }
            />

            )

    }
}