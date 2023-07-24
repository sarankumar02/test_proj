import React from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/Splash';

const App = () => {
  const Stack = createStackNavigator();
  // 
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="MainTabNavigator" component={AppNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App
