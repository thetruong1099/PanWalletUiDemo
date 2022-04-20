import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styleSheets/Styles';

const SetupWalletScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                    style={{flex: 1, marginTop: 100}}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Image source={require('../assets/icon/back.png')}/>
                    <Text style={styles.textButtonBack}>Back</Text>
                </TouchableOpacity>
                <View style={{flex: 2}}></View>
                <View style={{flex: 3}}></View>
                <View style={{flex: 4}}></View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default SetupWalletScreen;
