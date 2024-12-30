import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {colors} from '../Constants/colors'
import LoginHeader from '../Components/LoginHeader'
import { TextInput } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import { fontFamily } from '../Constants/fonts'
import auth from '../services/firebaseAuth.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc,getDoc,setDoc } from 'firebase/firestore'
import { db } from '../services/firebaseAuth.js'

const RegisterScreen = ({ navigation }) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError]  = useState('');

  const HandleRegister = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      await setDoc(doc(db, 'users', user.uid), {
        username: name,
        profileUrl,
        userId: user.uid,
      });
      navigation.navigate('HomeScreen');
    } catch (e) {
      setError(e.message);
    }
  };


  return (
    <View style={styles.ParentContainer}>
      <LoginHeader />
      <View style={styles.Container}>
          <View style={styles.RegisterHeaderContainer}>
        <Text style={styles.RegisterTopText1}>REGISTER</Text>
        <Text style={styles.RegisterTopText2}>In order to Register your account please fill out all fields</Text>
          </View>
  
        {/* TextInputContainer */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
          <FontAwesome name='user' size={25} color='white'/>
          </View>
          <TextInput 
          placeholder='Enter Full Name' 
          value={name}
          onChangeText={setName}
          style={styles.textInputStyle}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
          <Feather name='mail' size={20} color='white' />
          </View>
          <TextInput 
          placeholder='Enter Email Id' 
          value={email}
          onChangeText={setEmail}
          style={styles.textInputStyle}/>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
          <Foundation name='key' size={23} color='white'/>
          </View>
          <TextInput 
          placeholder='Enter Password'
          value={password}
          onChangeText={setPassword}
          style={styles.textInputStyle}
          secureTextEntry
          />
        </View>
  
      {/* ButtonContainer */}
          <View>
          <TouchableOpacity style={styles.TOContainer} onPress={HandleRegister}>
              <Text style={styles.RegisterText}>REGISTER</Text>
          </TouchableOpacity>
          {
          error ?
          <Text style={styles.errorMsg}>You have already registered</Text>
          : null
          }
          </View>
  
      {/* NavLinkContainer */}
      <View style={styles.NavlinkContainer}>
          <Text style={styles.NavlinkText1}>Existing user?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.NavlinkText2}>Login now</Text>
          </TouchableOpacity>
      </View>
      </View>
      </View>
    )
  }
  
  export default RegisterScreen
  
  const styles = StyleSheet.create({
      Container: {
          borderColor: 'lightgray',
          borderWidth: 1,
          marginVertical: 20,
          marginHorizontal: 15,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20
      },
      inputContainer: {
          borderColor: colors.gray,
          borderWidth: 1,
          flexDirection: 'row',
          width: '99%',
          borderRadius: 30,
          marginVertical: 10,
      },
      RegisterTopText1:{
          fontFamily: fontFamily.Medium,
          textAlign: 'center',
          paddingTop: 20,
          fontSize: 20
      },RegisterTopText2:{
          fontFamily: fontFamily.Light,
          textAlign: 'center',
          paddingVertical: 10
      },
      iconContainer: {
          backgroundColor: colors.skyblue,
          borderTopLeftRadius:30,
          borderBottomLeftRadius:30,
          paddingVertical: 9,
          paddingRight: '5%',
          paddingLeft: 15,
          marginRight: 10
      },
      TOContainer: {
          borderColor: colors.skyblue,
          borderWidth: 1,
          backgroundColor: colors.skyblue,
          borderRadius: 30,
          width: '99%',
          paddingVertical: 10,
          marginTop: 10
      },
      RegisterText: {
          color: colors.background,
          textAlign: 'center',
          fontSize: 18,
          fontFamily: fontFamily.Bold
      },
      NavlinkContainer: {
          flexDirection: 'row',
          width: '99%',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 40,
          gap: 6
      },
      NavlinkText1: {
          fontFamily: fontFamily.Light,
          
      },
      NavlinkText2: {
          fontFamily: fontFamily.Medium
      },
      textInputStyle: {
          fontFamily: fontFamily.Light
      },
      ParentContainer: {
        backgroundColor: colors.background,
        flex: 1
      },
      errorMsg: {
        color: 'red',
        textAlign: 'center' 
      }
  })