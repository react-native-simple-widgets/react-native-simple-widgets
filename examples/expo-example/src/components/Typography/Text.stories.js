import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { number, text } from '@storybook/addon-knobs';
import { LightTheme, Text } from 'react-native-simple-elements';

storiesOf('Text', module).add('Default', () => (
  <Text
    theme={LightTheme}
  >
      Text
  </Text>
));
