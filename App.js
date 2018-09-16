import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './components/home/navigator'

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
