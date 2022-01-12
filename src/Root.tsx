import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackRoutes, RootStackParamList } from '@models/navigation';
import { navigationRef } from '@routes/RootNavigation';

import HomeScreen from '@view/home/HomeScreen';

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack(): ReactElement {
  return (
    <NavigationContainer ref={navigationRef}>
      <NativeStack.Navigator
        initialRouteName={RootStackRoutes.HomeScreen}
        screenOptions={{ headerShown: false, orientation: 'portrait' }}>
        <NativeStack.Screen name={RootStackRoutes.HomeScreen} component={HomeScreen} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
