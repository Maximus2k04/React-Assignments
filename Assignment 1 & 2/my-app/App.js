import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Welcome from './components/Welcome.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

export default function App() {
  return (
    // <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Signup />
      </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignContent: 'center'
  },
});
