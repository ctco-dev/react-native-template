import React from 'react';
import Tabs from './tabs/Tabs';

class Page extends React.Component<any, any> {
  static navigationOptions = {
    title: 'Page'
  };

  render() {
    return (
      <Tabs/>
    );
  }
}

export default Page;
