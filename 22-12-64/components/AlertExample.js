import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';

const AlertExample = () => {
    const simpleAlertHandler = () => {
      Alert.alert('Hello', 'I am Simple Alert');
  };
  
  const twoOptionHandler =() =>{
      Alert.alert(
          //title
          'Hello',
          //body
          'I am two option alert, do you wanna cancel?',
          //text and button 
          [
              {
                  text:'Yes',
                  onPress:()=>console.log('Yes was Pressed')
              },
              {
                  text:'No',
                  onPress:()=>console.log('No was Pressed')
              }
          ],
          {cancelable:true}
      )
  }
  
  const threeOptionHandler =() =>{
      Alert.alert(
          //title
          'Hello there',
          //body
          'I am three option alert, do you wanna cancel?',
          //text and button 
          [
              {
                  text:'maybe',
                  onPress:()=>console.log('maybe has Pressed')
              },
              {
                  text:'yes',
                  onPress:()=>console.log('yes was Pressed')
              },
              {
                  text:'no',
                  onPress:()=>console.log('no was Pressed')
              }
          ],{cancelable:true}
      )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button title="Simple Alert" onPress={simpleAlertHandler} />
        <Button title="Two Option Alert" onPress={twoOptionHandler} />
        <Button title="Three Option Alert" onPress={threeOptionHandler} />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});