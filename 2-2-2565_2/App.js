import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#FFBCBC'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Screen'}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: 'Detail Screen'}}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: {backgroundColor: '#FFBCBC'},
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{title: 'Setting Screen'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Screen'}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: 'Detail Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let srcimg;
            if (route.name === 'Home') {
              srcimg = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo2.png');
            } else if (route.name === 'Settings') {
              srcimg = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo3.png');
            }
            return <Image source={srcimg} style={{width: 20, height: 20}} />;
          },
        })}
        tabBarOptions={{
          style:{
            height:60,
            padding: 10,
          },
          labelStyle: {
            fontSize: 15,
            margin: 5,
          },
          activeTintColor: '#F38BA0',
          inactiveTintColor: 'black',
        }}
        >
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Settings" component={SettingScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({});