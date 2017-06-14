import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import BarCode from './bar-code/BarCode';

const StorybookUI = require('../storybook/storybook.js').default;

interface AppState {
  storybook: boolean;
}

class App extends React.Component<any, AppState> {
  state = {
    storybook: false
  };

  render() {
    if (__DEV__ && this.state.storybook) {
      return <StorybookUI/>;
    }

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>Hello</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <BarCode/>
        {__DEV__ ? <Button title="Storybook" onPress={() => this.setState({storybook: true})}/> : null}
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

export default App;
