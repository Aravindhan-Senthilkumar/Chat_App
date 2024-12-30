import { StyleSheet, Text, View,Image, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'
import { fontFamily } from '../Constants/fonts'
import { useNavigation } from '@react-navigation/native'


const HomeFlatList = ({ item }) => {
    const navigation = useNavigation();
  return (
    <FlatList 
    data={item}
    renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { item })}>
        <View style={styles.Container}>
        <View style={styles.ImageContainer}>
        <Image source={{uri: item.profilePhoto}} style={styles.image}/>
        </View>
        <View style={styles.parentMsgContainer}>
        <View style={styles.MessageContainer}>
            <Text style={styles.MessagerText}>{item.name}</Text>
            <Text style={styles.MessageText}>{item.lastMessage}</Text>
        </View>
        <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{item.time}</Text>
        </View>
        </View>
    </View>
    </TouchableOpacity>
    )}
    showsVerticalScrollIndicator={false}
    />
    
  )
}

export default HomeFlatList

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    parentMsgContainer: {
    flexDirection: 'row',
    width: '78%',
    justifyContent: 'space-between',
    borderColor: colors.gray,
    borderBottomWidth: 1,
    marginTop: 12

    },
    Container: {
        flexDirection: 'row',
        width: '99%'
    },
    ImageContainer: {
        margin: 12
    },
    MessagerText: {
        fontFamily: fontFamily.SemilBold,
        fontSize: 20
    },
    MessageText: {
        fontFamily: fontFamily.Light
    },
    timeText: {
        fontFamily: fontFamily.Light
    }
})