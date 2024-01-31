import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './app/screens/Main';
import Screen from './app/components/Screen';
import Loading from './app/screens/Loading';
import Setup from './app/screens/Setup';
import Login from './app/screens/Login';
import Records from './app/screens/Records';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {isLoading ? (
          <Loading/>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login">
              {({ navigation }) => (
                <Screen>
                  <Login navigation={navigation} />
                </Screen>
              )}
            </Stack.Screen>
            <Stack.Screen name="Main">
              {props => (
                <Screen>
                  <Main {...props} />
                </Screen>
              )}
            </Stack.Screen>

            <Stack.Screen name="Setup">
              {props => (
                <Screen>
                  <Setup {...props}/>
                </Screen>
              )}
            </Stack.Screen>

            <Stack.Screen name="Records">
              {({ navigation }) => (
                <Screen>
                  <Records navigation= {navigation} />
                </Screen>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}
