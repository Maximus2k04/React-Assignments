import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Switch, Platform } from 'react-native';

const backgroundImage = require('../assets/tower.jpg');

function Welcome() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Our Application!</Text>
        <Text style={styles.subtitle}>Please login or signup to continue.</Text>
        <Button title="Login" onPress={() => {/* Navigate to login */}} />
        <Text> </Text>
        <Button title="Signup" onPress={() => {/* Navigate to signup */}} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignContent: 'center',
    position: 'static'
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Welcome;
