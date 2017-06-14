import React from 'react';
import {storiesOf} from '@storybook/react-native';

import BarCode from './BarCode';

storiesOf('BarCode', module)
  .add('basic', () => <BarCode/>);
