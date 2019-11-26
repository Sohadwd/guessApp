import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!🎉</Text>
      {/* <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
