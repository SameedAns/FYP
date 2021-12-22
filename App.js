/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Cart, SignUp, SignIn, Transfer, Items } from './screens';

import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Transfer" component={Transfer} />
                <Stack.Screen name="Items" component={Items} />

                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;