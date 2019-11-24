import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Our components
import Header from './components/Header';
//Our screens
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.main}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  }
});
