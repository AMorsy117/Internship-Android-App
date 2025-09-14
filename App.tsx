import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "C:/Users/Morsy/internapp/android/app/src/screens/SplashScreen.tsx";
import LoginScreen from "C:/Users/Morsy/internapp/android/app/src/screens/LoginScreen.tsx";
import HomeScreen from "C:/Users/Morsy/internapp/android/app/src/screens/HomeScreen.tsx";;

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
