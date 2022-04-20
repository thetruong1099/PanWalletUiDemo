import React from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';

const OnboardItem = ({item}) => {
    const width = useWindowDimensions();

    return (
        <View style={[style.container, width]}>
            <Image source={item.image} style={[style.image]}/>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    image: {
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop: 78,
    },
});

export default OnboardItem;
