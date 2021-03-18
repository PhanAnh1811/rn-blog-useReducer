import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'
const ShowScreen = ({navigation}) => {
    return (
        <View>
            <Header iconName='pencil' navigation={navigation} screenName='Show'/>
        </View>
    )
}

export default ShowScreen
