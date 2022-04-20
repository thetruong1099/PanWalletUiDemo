import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import RootNavigation from './src/presentation/navigation/RootNavigation';

const App = () => {
    SystemNavigationBar.navigationHide().done();
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0)" barStyle="light-content"/>
            <RootNavigation/>
        </SafeAreaView>

    );
};

export default App;
