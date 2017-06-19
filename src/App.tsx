import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, Footer, FooterTab, Button, H1} from 'native-base';
import * as nativeBase from 'native-base';
import getTheme from './native-base-theme/components';
import {StackNavigator} from 'react-navigation';
import BarCode from './bar-code/BarCode';
import Page from './page/Page';
import I18n from './i18n/i18n';

const StorybookUI = require('../storybook/storybook.js').default;

interface AppState {
  storybook: boolean;
  locale: string;
}

class App extends React.Component<any, AppState> {
  static navigationOptions = {
    title: 'Welcome'
  };

  state = {
    storybook: false,
    locale: 'ru'
  };

  render() {
    if (__DEV__ && this.state.storybook) {
      return <StorybookUI/>;
    }

    const {StyleProvider} = nativeBase as any;

    I18n.locale = this.state.locale;

    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Content>
            <View style={styles.container}>
              <H1>{I18n.t('greeting')}</H1>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>
              <Button
                style={{alignSelf: 'center'}}
                onPress={this.changeLanguage}
              >
                <Text>Change language</Text>
              </Button>
              <BarCode/>
              <View style={{flexDirection: 'row'}}>
                <Button onPress={this.goToPage}>
                  <Text>Go to the PAGE</Text>
                </Button>
                {__DEV__ ? this.renderStoryBookButton() : null}
              </View>
            </View>
          </Content>
          <Footer>
            <FooterTab>
              <Button full={true}>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }

  renderStoryBookButton = () => (
    <View style={{marginLeft: 10}}>
      <Button onPress={this.showStoryBook}>
        <Text>Storybook</Text>
      </Button>
    </View>
  )

  showStoryBook = () => this.setState({storybook: true});
  changeLanguage = () => this.setState({locale: this.state.locale === 'en' ? 'ru' : 'en'});
  goToPage = () => this.props.navigation.navigate('Page');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default StackNavigator({
  Home: {screen: App},
  Page: {screen: Page}
});
