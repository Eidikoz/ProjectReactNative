import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FirstPage = ({navigation}) => {
  const [name,setName] = useState('');

    return (
            <View style={styles.container}>
              <Text style={styles.heading}>
                React Native Pass Value From One Screen
              </Text>
              <Text style={styles.textStyle}>
                Please insert your name to pass it to second screen
              </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your name"
                    onChangeText={name=>{(setName(name))}}
                />
                <Button
                        onPress={() =>
                          navigation.navigate('Second',{name: name})
                        }
                        title="GO NEXT"
                        color= "#B983FF"
                />
            </View>
    )
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});