import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function BottomView() {
    return (
      <View style={styles.container}>
        <Text style={{color:'black'}}><strong>Bye bye bye!</strong> </Text>
        <StatusBar style="auto" />
        <Image
           source={{
             uri:'https://i.pinimg.com/564x/dc/34/6c/dc346cabf9becf56a1af34807f0d16b4.jpg',
           }}
           style={{width:200,height: 200,borderColor:'black',borderWidth: '5px'}}
           />
           <TextInput placeholder='Input NSYNC Songs...' style={styles.input}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      // fontSize: '100px',
    },
    input:{
      backgroundColor:'lavender',
      width:'200px',
      borderWidth: '5px',
      borderTopWidth: '0px',
      borderColor:'black',
      textAlign:'center',
    },
  });