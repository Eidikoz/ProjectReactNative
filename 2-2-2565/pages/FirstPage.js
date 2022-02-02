import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../components/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from './logo';

const FirstPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:()=> <Logo/>,
      headerRight: () => (
        <Button color="#94B3FD" onPress={() => alert('Test')} title="Register" />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>This is the First Page</Text>
          <Button
            title="Go to Second Page"
            color="#94B3FD"
            onPress={() => {
              navigation.navigate('SecondPage');
            }}
          />
          <Button
            title="Go to Third Page"
            color="#94B3FD"
            onPress={() => {
              navigation.navigate('ThirdPage');
            }}
          />
        </View>
        <Text style={styles.textBottomStyle}>
          Thai-Nichi Institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;