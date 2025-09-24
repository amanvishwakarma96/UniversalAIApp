import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

const SettingsScreen = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Notifications</Text>
                <Switch value={notifications} onValueChange={setNotifications} />
            </View>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.link}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.link}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
                <Text style={styles.link}>Terms of Service</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    label: {
        fontSize: 16,
    },
    option: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    link: {
        fontSize: 16,
        color: colors.primary,
    },
});

export default SettingsScreen;
