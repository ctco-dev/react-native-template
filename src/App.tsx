import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import BarCode from './bar-code/BarCode';
import Page from './page/Page';
import I18n from './i18n/i18n';

const StorybookUI = require('../storybook/storybook.js').default;

interface AppState {
  storybook: boolean;
}

class App extends React.Component<any, AppState> {
  static navigationOptions = {
    title: 'Welcome'
  };

  state = {
    storybook: false
  };

  render() {
    if (__DEV__ && this.state.storybook) {
      return <StorybookUI/>;
    }

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 24}}>{I18n.t('greeting')}</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <BarCode/>
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={() => navigation.navigate('Page')}
            title="Go to the PAGE"
          />
          {__DEV__ ? this.renderStoryBookButton() : null}
        </View>
      </View>
    );
  }

  renderStoryBookButton = () => (
    <View style={{marginLeft: 10}}>
      <Button title="Storybook" onPress={() => this.setState({storybook: true})}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default StackNavigator({
  Home: {screen: App},
  Page: {screen: Page}
});
