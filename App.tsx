import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [name, setName] =("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>Saludador Expo</Text>
      

      <TextInput
        style={styles.input}
        placeholder='Escriba su nombre Aqui'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
  },
  input:{
    color: '#000'
  },
  button:{

  },
  buttonText:{

  },
  message:{

  },
});
