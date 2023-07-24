import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReactScreen from '../screens/React';
import NodeScreen from '../screens/Node';
import ReactNativeScreen from '../screens/ReactNative';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'React') {
                            iconName = 'react';
                        } else if (route.name === 'React Native') {
                            iconName = 'react';
                        } else if (route.name === 'Node') {
                            iconName = 'node';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="React" component={ReactScreen} />
                <Tab.Screen name="React Native" component={ReactNativeScreen} />
                <Tab.Screen name="Node" component={NodeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// const AppNavigator = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator headerMode="none" initialRouteName="Splash">
//                 <Stack.Screen name="Splash" component={SplashScreen} />
//                 <Stack.Screen name="MainScreen" component={MainTabs} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };


export default AppNavigator;
