import React from 'react';
import { TextInput, StyleSheet, View, TextInputProps } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface InputProps extends TextInputProps {
    placeholder: string;
}

const Input = ({ placeholder, ...props }: InputProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: fonts.size.md,
        color: colors.text,
    },
});

export default Input;
