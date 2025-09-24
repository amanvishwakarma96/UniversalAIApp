import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import colors from '../theme/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../app/navigations';
import { Routes } from '../app/routes';

type Props = NativeStackScreenProps<RootStackParamList, Routes.Splash>;

const SplashScreen = ({ navigation }: Props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // TODO: Check if token exists → redirect to Dashboard
            navigation.replace(Routes.Onboarding);
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>AI Personal Assistant</Text>
            <ActivityIndicator size="large" color={colors.white} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 22,
        marginBottom: 20,
    },
});

export default SplashScreen;
