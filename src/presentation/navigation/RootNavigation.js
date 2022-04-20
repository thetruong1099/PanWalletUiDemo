import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardScreen from '../screens/OnboardScreen';
import SetupWalletScreen from '../screens/SetupWalletScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, animation: "slide_from_right",}} animationEnabled={true}>
                <Stack.Screen name="onboard" component={OnboardScreen}/>
                <Stack.Screen name="setupWallet" component={SetupWalletScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;
