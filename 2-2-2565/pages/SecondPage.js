import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../components/styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const SecondPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>This is the Second Page</Text>
          <Button
            title="Go to First Page"
            color="#94B3FD"
            onPress={() => {
              navigation.navigate('FirstPage');
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

export default SecondPage;