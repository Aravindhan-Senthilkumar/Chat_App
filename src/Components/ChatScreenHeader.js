import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { fontFamily } from '../Constants/fonts'
import { useNavigation } from '@react-navigation/native'

const ChatScreenHeader = ({ item }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.parentContainer}>
        <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' color={colors.background} size={30}/>
        </TouchableOpacity>
        <Image source={{ uri: item.profilePhoto  }} style={styles.image}/>
        <Text style={styles.profileText}>{item.name}</Text>
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
        <Feather name='video' color={colors.background} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
        <Ionicons name='call-outline' color={colors.background} size={30}/>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

export default ChatScreenHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.skyblue,
        padding:10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    parentContainer: {
        flexDirection: 'row',
        width: '99%',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 28
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    profileText: {
        fontFamily: fontFamily.SemilBold,
        fontSize: 20,
        color: colors.background
    }
})