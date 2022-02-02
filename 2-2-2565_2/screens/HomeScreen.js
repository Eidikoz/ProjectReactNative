import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Component } from 'react/cjs/react.production.min';
import { styles } from '../components/styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={styles.container}>
        <Text style={styles.textCenterStyle}>Home Screen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <Text style={styles.buttonTextStyle}>Go to setting Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Text style={styles.buttonTextStyle}>Open News Screen</Text>
        </TouchableOpacity>
        
      </View>
      <Text style={styles.textBottomStyle}>
          www.tni.ac.th
        </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;