import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import DashboardScreen from './Screens/DashboardScreen';
import PasswordReset from './Screens/PasswordReset';
import NewPasswordScreen from './Screens/NewPasswordScreen';
import SavingsScreen from './Screens/SavingsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='SignUp' >
              {/* <Stack.Navigator style={styles.container} initialRouteName='SignUp'> */}
      {/* <View style={styles.container}>
        <Text>Open the shit</Text>
        <StatusBar style="auto" />
      </View> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="Saving" component={SavingsScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
