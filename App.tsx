import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MyStack} from './src/routes';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <MyStack />
    </NavigationContainer>
  );
}
