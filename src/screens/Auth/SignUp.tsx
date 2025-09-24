import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import colors from '../../theme/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app/navigations';
import { Routes } from '../../app/routes';

type Props = NativeStackScreenProps<RootStackParamList, Routes.Signup>;

const SignupScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignup = () => {
        // TODO: integrate API
        navigation.replace(Routes.Dashboard);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
            <Button title="Sign Up" onPress={onSignup} />

            <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
                <Text style={styles.link}>Already have an account? Log in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    link: {
        color: colors.primary,
        marginTop: 20,
        textAlign: 'center',
    },
});

export default SignupScreen;
