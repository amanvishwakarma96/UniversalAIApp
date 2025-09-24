import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
}

const Button = ({ title, onPress, style }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: fonts.size.md,
        fontFamily: fonts.bold,
    },
});

export default Button;
