import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, DatePickerAndroid } from 'react-native';


export default function TopView() {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}><strong>I want it that way</strong> </Text>
        <StatusBar style="auto" />
        <Image
           source={{
             uri:'https://i.pinimg.com/564x/dc/34/6c/dc346cabf9becf56a1af34807f0d16b4.jpg',
           }}
           style={{width:200,height:200, borderColor:'white',borderWidth: '5px'}}
           />
           <TextInput placeholder='Input Backstreet Boys Songs...' style={styles.input}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      // fontSize: '100px',
    },
    input:{
      backgroundColor:'pink',
      width:'200px',
      borderWidth: '5px',
      borderColor:'red',
      textAlign:'center',
    },
  });