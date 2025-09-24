import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import colors from '../../theme/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../app/navigations';
import { Routes } from '../../app/routes';
type Props = NativeStackScreenProps<RootStackParamList, Routes.Login>;

const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        // TODO: integrate API
        navigation.replace(Routes.Dashboard);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
            <Button title="Login" onPress={onLogin} />

            <TouchableOpacity onPress={() => navigation.navigate(Routes.Signup)}>
                <Text style={styles.link}>Don’t have an account? Sign up</Text>
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

export default LoginScreen;
