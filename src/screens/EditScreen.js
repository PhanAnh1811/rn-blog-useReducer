import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header'
const EditScreen = ({navigation}) => {
    return (
        <View>
            <Header iconName="close" navigation={navigation} screenName="Index"/>
        </View>
    )
}

export default EditScreen
