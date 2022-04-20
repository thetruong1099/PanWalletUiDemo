import React, {useRef} from 'react';
import {
    Animated,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {styles} from '../styleSheets/Styles';
import {slideOnboardList} from '../../constants/constants';
import OnboardItem from '../component/onboard/OnboardItem';
import Paginator from '../component/onboard/Paginator';
import LinearGradient from 'react-native-linear-gradient';

const OnboardScreen = ({navigation}) => {

    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
                source={require('../assets/image/background_onboarding.png')}
                style={{flex: 1, height: '100%', width: '100%'}}
                resizeMode={'cover'}>
                <View style={{flex: 6}}>
                    <FlatList
                        style={{flex: 7}}
                        data={slideOnboardList}
                        renderItem={({item}) => <OnboardItem item={item}/>}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        bounces={false}
                        keyExtractor={(item) => item.id}
                        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],
                            {useNativeDriver: false})}
                    />
                    <Paginator data={slideOnboardList} scrollX={scrollX} style={{flex: 3}}/>
                </View>
                <View style={{flex: 2, paddingStart: 16, paddingEnd: 48, marginTop: 24}}>
                    <Text style={styles.title}>Home for your tokens and NFTs</Text>
                    <Text style={[styles.description, {marginTop: 12}]}>Its secure and support near about hundred crypto
                        currencies. We’ve
                        taken special care to make sure your NFTs look great!</Text>
                </View>
                <View style={{flex: 2, justifyContent: 'center'}}>
                    <LinearGradient
                        style={styles.buttonOne}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        colors={['#9D3CEA', '#9D3CEA', '#7E31D3', '#4F1CA4']}
                        locations={[0, 0, 0.54, 1]}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={() => navigation.navigate('setupWallet')}>
                            <Text style={[styles.textButton, {marginHorizontal: 14}]}>Get Started</Text>
                            <Image source={require('../assets/icon/ArrowRight.png')}/>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnboardScreen;
