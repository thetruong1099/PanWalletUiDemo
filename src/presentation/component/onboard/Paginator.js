import React from 'react';
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';
import {COLORS} from '../../styleSheets/Color';
import LinearGradient from 'react-native-linear-gradient';

const Paginator = ({data, scrollX}) => {

    const {width} = useWindowDimensions();

    return (
        <View style={style.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 32, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return <Animated.View style={[style.dot, {width: dotWidth, opacity}]} key={i.toString()}/>;
            })}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingStart: 16,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.purple1,
        marginHorizontal: 8,
    },
});

export default Paginator;
