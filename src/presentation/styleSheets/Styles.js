import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from './Color';

export const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 30,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 38,
        letterSpacing: -0.03,
    },

    description: {
        color: COLORS.textSecondary,
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
    },

    textButton: {
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.white,
        textAlign: 'center',
    },

    textButtonBack: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.white,
    },

    buttonOne: {
        marginStart: 18,
        marginEnd: 16,
        borderRadius: 6,
        paddingTop: 14,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    buttonTwo: {},
});
