import React from 'react'
import { Button, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { useState,useEffect } from 'react';

const Footer = () => {

    const users = [
        {id:1, name:'John'},
        {id:2, name:'Mary'}
    ]
    const [count, setCount] = useState(0);

    //always update while re-render
    useEffect(()=>{
        console.log('use effect1')
    })

    //once
    useEffect(()=>{
        console.log('use effect2')
    },[])

    return (
        <View>
            <Text style={styles.title}>Thai-nichi institute of Technology</Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1} {user.name}</Text>
                })
            }
            <Button 
            title='CLick Me'
            onPress={ ()=>{
                setCount(count+1) //update คำ Count
                useEffect
            }}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title: {
        fontSize:25,
    }
})