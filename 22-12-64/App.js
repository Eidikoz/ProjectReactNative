/*import React from 'react';

import WebViewExample from './components/WebViewExample';
import WebViewLoading from './components/WebViewLoading';

const App = () => {
  return (
    //<WebViewExample/>
    <WebViewLoading/>
  );
};

export default App;*/
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#B983FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'หน้าหลัก'}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'เกี่ยวกับเรา'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});