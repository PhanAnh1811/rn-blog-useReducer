import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
const IndexScreen = ({navigation}) => {
    return (
        <View>
            <Header iconName='plus' navigation={navigation} screenName='Show' />
        </View>
    )
}

export default IndexScreen
