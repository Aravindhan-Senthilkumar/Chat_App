import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth from '../services/firebaseAuth'
import { signOut } from 'firebase/auth'
import { fontFamily } from '../Constants/fonts'
import {colors} from '../Constants/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeFlatList from '../Components/HomeFlatList'
import { userDatas } from '../data/userData'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      navigation.navigate('LoginScreen')
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.forview}>
      <View style={styles.headerChat}>
        <View style={styles.TOcontainer1}>
          <AntDesign name='home' color={colors.background} size={30}/>
        </View>
        <Text style={styles.headerText}>Chat Lists</Text>
        <TouchableOpacity style={styles.TOcontainer2} onPress={handleLogout}> 
        <AntDesign name='logout' color={colors.background} size={28}/>
        </TouchableOpacity>
      </View>
      </View>
      <HomeFlatList item={userDatas}/>
      <TouchableOpacity style={styles.TOcontainer3} onPress={() => navigation.navigate('ContactScreen', { userDatas })}>
        <MaterialIcons name='chat' size={30} style={styles.iconMail}/>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  headerChat: {
    flexDirection: 'row',
    width: '99.9%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    color: colors.background,
    fontFamily: fontFamily.Bold,
    fontSize: 20
  },
  forview: {
    backgroundColor: colors.skyblue,
    height: '11%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  TOcontainer2: {
    marginRight: 20
  },
  TOcontainer1:{
    marginLeft: 20
  },
  TOcontainer3: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  iconMail: {
    backgroundColor: colors.skyblue,
    padding: 10,
    width: 50,
    borderRadius: 100,
    color: colors.background,
    
  }
})