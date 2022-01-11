import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Hello World!', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
