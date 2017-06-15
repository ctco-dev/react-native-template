import React from 'react';
import {Button, Image, StyleSheet} from 'react-native';

class Tab2 extends React.Component<any, any> {
  static navigationOptions = {
    title: 'Tab 2',
    tabBarLabel: 'Tab 2',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./../../../assets/icons/tab2.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    const {navigation} = this.props;

    return (
      <Button
        onPress={() => navigation.navigate('Tab1')}
        title="Go to Tab 1"
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

export default Tab2;
