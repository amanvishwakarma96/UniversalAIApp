import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/Onboarding';
import LoginScreen from '../screens/auth/Login';
import SignupScreen from '../screens/auth/SignUp';
import DashboardScreen from '../screens/Home/Dashboard';
import ProfileScreen from '../screens/Profile/Profile';
import SettingsScreen from '../screens/Settings/Settings';

// Routes enum
import { Routes } from './routes';

export type RootStackParamList = {
    [Routes.Splash]: undefined;
    [Routes.Onboarding]: undefined;
    [Routes.Login]: undefined;
    [Routes.Signup]: undefined;
    [Routes.Dashboard]: undefined;
    [Routes.Profile]: undefined;
    [Routes.Settings]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={Routes.Splash}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={Routes.Splash} component={SplashScreen} />
            <Stack.Screen name={Routes.Onboarding} component={OnboardingScreen} />
            <Stack.Screen name={Routes.Login} component={LoginScreen} />
            <Stack.Screen name={Routes.Signup} component={SignupScreen} />
            <Stack.Screen name={Routes.Dashboard} component={DashboardScreen} />
            <Stack.Screen name={Routes.Profile} component={ProfileScreen} />
            <Stack.Screen name={Routes.Settings} component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
