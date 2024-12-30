import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Constants/colors'
import { fontFamily } from '../Constants/fonts'

const LoginHeader = () => {
  return (
    <View style={styles.container}>
            <Text style={styles.titleText}>OUR'S CHAT</Text>
    </View>
  )
}

export default LoginHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.skyblue,
        borderBottomLeftRadius: 80,
        paddingBottom: 60
    },
    titleText: {
        textAlign: 'center',
        fontSize: 50,
        color: colors.background,
        marginTop: 100,
        fontFamily: fontFamily.Bold
    }
})