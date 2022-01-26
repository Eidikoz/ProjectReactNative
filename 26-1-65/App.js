import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Firstpage"
        screenOptions={{
          // Header Color
          headerStyle: {backgroundColor: '#5f9ea0'},
          // Header Text Color
          headerTintColor: '#fff',
          // Header Text Style
          headerTitleStyle: {fontWeight: 'bold', fontStyle: 'italic'},
        }}>
        <Stack.Screen
          name="First Page"
          component={FirstPage}
          options={{title: 'First Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});