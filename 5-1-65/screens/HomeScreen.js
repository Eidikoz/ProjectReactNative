import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Main page</Text>
      <Button
        title="Go to About Me"
        onPress={() =>
          navigation.navigate('About', {email: 'he.pongpanot_st@tni.ac.th'})
        }
      />
      <Button
        title="Go to First Page"
        onPress={() =>
          navigation.navigate('First')
        }
      />
      <Button
        title="Go to Second Page"
        onPress={() =>
          navigation.navigate('Second')
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});