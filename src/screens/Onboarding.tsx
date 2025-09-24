import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import Button from '../components/common/Button';
import colors from '../theme/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../app/navigations';
import { Routes } from '../app/routes';

type Props = NativeStackScreenProps<RootStackParamList, Routes.Onboarding>;

const { width } = Dimensions.get('window');

const slides = [
    { id: '1', title: 'Manage Your Mails', description: 'Organize, filter and act on emails smartly.' },
    { id: '2', title: 'Drive & Docs', description: 'AI powered document organization and reminders.' },
    { id: '3', title: 'Smart Scheduler', description: 'Reschedule or avoid unnecessary meetings easily.' },
];

const OnboardingScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={slides}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width }]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
            />
            <Button title="Get Started" onPress={() => navigation.replace(Routes.Login)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
});

export default OnboardingScreen;
