import {TabNavigator} from 'react-navigation';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tabs = TabNavigator({
  Tab1: {
    screen: Tab1
  },
  Tab2: {
    screen: Tab2
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63'
  },
  initialRouteName: 'Tab1'
});

export default Tabs;
