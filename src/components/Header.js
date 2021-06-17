import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Header = ({iconName,navigation,screenName}) => {
    return (
        <View style={styles.header}>
            <View></View>
            <Text style={styles.label}>Blog List</Text>
            <TouchableOpacity onPress={()=>navigation.navigate(screenName)}>
                <FontAwesome name={iconName} size={55}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    label:{
        fontSize:40,
        fontWeight:'bold',
    },
    
    header:{
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'#dfe6e9',
        flexDirection:'row',
        fontWeight:'bold',
        justifyContent:'space-between',
    }
})
