import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BarCode from './bar-code/BarCode';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Hello!!!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <BarCode/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
