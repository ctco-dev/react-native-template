import React from 'react';
import {Button, Image, StyleSheet} from 'react-native';

class Tab1 extends React.Component<any, any> {
  static navigationOptions = {
    title: 'Tab 1',
    tabBarLabel: 'Tab 1',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../../assets/icons/tab1.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    const {navigation} = this.props;

    return (
      <Button
        onPress={() => navigation.navigate('Tab2')}
        title="Go to Tab 2"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default Tab1;
