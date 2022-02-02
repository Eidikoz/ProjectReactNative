import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Logo = () => {
    return (
        <View style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'}}
            >
            <Image 
            style={{width:40,height:40}}
            source={require('../assets/react_logo.png')}
            />
        </View>
    )
}

export default Logo;

const styles = StyleSheet.create({});