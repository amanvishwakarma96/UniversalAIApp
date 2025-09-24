import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, User 👋</Text>
            <Text style={styles.subtitle}>This is your AI-powered dashboard.</Text>
            {/* TODO: Add cards for Mails, Docs, Meetings */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginTop: 8,
        color: '#666',
    },
});

export default DashboardScreen;
