import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Component } from 'react/cjs/react.production.min';
import { styles } from '../components/styles';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={styles.container}>
        <Text style={styles.textCenterStyle}>You are on Register Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;