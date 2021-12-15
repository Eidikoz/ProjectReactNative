import React, { useState } from 'react'
import {Text,StyleSheet,View,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'

const TextInputPractice1 = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            onChangeText={email => setEmail(email)}
            placeholder="E-mail"
            placeholderTextColor="#7A42F4"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            placeholder="Password"
            placeholderTextColor="#7A42F4"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          onPress={_=>
            alert('email: ' + email + '\npassword: ' + password)
          }
          activeOpacity={0.5}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default TextInputPractice1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
      },
      buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
      },
      textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 1,
        marginTop: 30,
        borderColor: '#7A42F4',
      },
      buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7A42F4',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        marginTop: 30,
        borderRadius: 5,
      },
    })