import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { fontFamily } from '../Constants/fonts'
import { useNavigation } from '@react-navigation/native'

const ContactScreenHeader = ({ userDatas }) => {
    const navigation = useNavigation();
  return (
      <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.parentContainer}>
        <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' color={colors.background} size={30}/>
        </TouchableOpacity>
        <Image style={styles.image}/>
        <Text style={styles.profileText}>Contact Lists</Text>
        </View>
        <View style={styles.iconContainer}>
        </View>
            <TouchableOpacity>
        <Feather name='search' color={colors.background} size={30} style={styles.searchIcon}/>
            </TouchableOpacity>
        </View>
        </View>
        </View>
  )
}

export default ContactScreenHeader

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
    },
    searchIcon: {
      marginTop: 7
    }
})