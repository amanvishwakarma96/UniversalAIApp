import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import Button from '../../components/common/Button';

const ProfileScreen = () => {
    // TODO: Fetch user from store (e.g., useUserStore or context)
    const user = {
        name: 'Aman Vishwakarma',
        email: 'aman@example.com',
        avatar: 'https://i.pravatar.cc/150?img=5',
    };

    const handleEdit = () => {
        // TODO: Navigate to EditProfile screen
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>

            <Button title="Edit Profile" onPress={handleEdit} />

            <TouchableOpacity style={styles.logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    logout: {
        marginTop: 30,
    },
    logoutText: {
        color: colors.error,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
