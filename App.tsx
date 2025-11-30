import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [name, setName] = useState("");
  const charLimit = 20;

  const isButtonDisabled = name.trim().length === 0;

  const handleNameChange = (name : string) => {
    setName(name);
  }
  const textInputStyle = [
    styles.input,
    {
      borderColor: name.length > charLimit ? '#f00' : 'gray'
    }
  ];


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.content}>
        <Text style={styles.title}>Saludador Expo</Text>
        <View style={styles.row}>
        <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#D2E6FF' : '#005DE9' },
          isButtonDisabled && styles.buttonDisabled
        ]}
        disabled={ isButtonDisabled}
        onPress={() => alert('¡Botón presionado!')}>
          <Text style={styles.buttonText}>Saludar</Text>
        </Pressable>
        <TextInput
          maxLength={charLimit}
          style={textInputStyle}
          value={name}
          onChangeText={handleNameChange}
          placeholder='Introduce Tu Nombre'
        />
      </View>
      <Text style={styles.counter}>
        {name.length} / {charLimit}
      </Text>
      </View>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
  },
  title: {
    color: '#000',
    fontSize: 25,
    justifyContent:'flex-start',
  },
  input:{
    width: 200,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  button:{
    backgroundColor: '#ffff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
  },
  message:{
    color: 'black',
    fontSize: 20
  },
  buttonDisabled:{
    backgroundColor: '#D2E6FF'
  },
  error:{
    borderColor: '#f00',
    color: '#f00'
  },
  counter:{
    fontSize: 12,
      color: '#64748b',
      textAlign: 'center',
      marginBottom: 16,
  }
});
