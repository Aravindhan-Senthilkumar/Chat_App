import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'
import { fontFamily } from '../Constants/fonts'

const MessageSection = ({ messages }) => {
    
  return (
    <FlatList 
    data={messages}
    renderItem={({ item }) => (
        <View style={styles.parentContainer}>
            <View style={[styles.container,
                item.sender === 'You' 
                ? { backgroundColor: colors.green,marginRight: 0,marginLeft: 50 } 
                : { backgroundColor: colors.lightgray,marginRight: 50,marginLeft: 0 }]}>
                <View style={styles.userMessageContainer}>
                <Text style={styles.sender}>{item.sender}</Text>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.times}>{item.time}</Text>
                </View>
            </View>
            </View>
          )}
        showsVerticalScrollIndicator={false}
        />
  )
}

export default MessageSection

const styles = StyleSheet.create({
    parentContainer: {
        padding: 10,
    },
    container: {
        borderRadius: 5,
        padding: 10
    },
    sender:{
        marginBottom: 2,
        fontFamily: fontFamily.Bold,
        color: colors.skyblue
    },
    times: {
        alignSelf: 'flex-end',
        fontFamily: fontFamily.Light
    },
    messageText: {
        fontFamily: fontFamily.Regular
    },

})