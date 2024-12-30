import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {colors} from '../Constants/colors'
import LoginHeader from '../Components/LoginHeader'
import { TextInput } from 'react-native-gesture-handler'
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import { fontFamily } from '../Constants/fonts'
import auth, { db } from '../services/firebaseAuth.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'


const LoginScreen = ({ navigation }) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError]  = useState('');
    const [user,setUser] = useState('');

    const checkifLoggedin = () => {  
      onAuthStateChanged(auth,(user)=> {
        if(user){
          navigation.navigate('HomeScreen')
          setUser(user);
          updateUserData(user.uid);
        }
      })
    }

    useEffect(() => {
      checkifLoggedin();
    },[])

    const HandleLogin = () => {
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredentials)=> {
        const user = userCredentials.user;
        setUser(user);
        updateUserData(user.uid);
        navigation.navigate('HomeScreen')
      })
      .catch((error) => {
        setError(error.message)
      })
    }
    const updateUserData = async (userId)=> {
      const docRef = doc(db,'users', userId);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        let data = docSnap.data();
        setUser({ ...user,username: data.username,userId: data.userId })
      }
    }
  return (
    <View style={styles.ParentContainer}>
      <LoginHeader />
      <View style={styles.Container}>
          <View style={styles.RegisterHeaderContainer}>
        <Text style={styles.RegisterTopText1}>LOGIN</Text>
        <Text style={styles.RegisterTopText2}>In order to login your account please enter credentials</Text>
          </View>
  
        {/* TextInputContainer */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
          <Feather name='mail' size={20} color='white' />
          </View>
          <TextInput 
          value={email}
          onChangeText={setEmail}
          placeholder='Enter Email Id' 
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
          <TouchableOpacity style={styles.TOContainer} onPress={HandleLogin}>
              <Text style={styles.RegisterText}>LOGIN</Text>
          </TouchableOpacity>
           {
                    error ?
           <Text style={styles.errorMsg}>Invalid email or password</Text>
                    : null
           }
      </View>
  
      {/* NavLinkContainer */}
      <View style={styles.NavlinkContainer}>
          <Text style={styles.NavlinkText1}>New member?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.NavlinkText2}>Register here!</Text>
          </TouchableOpacity>
      </View>
      </View>
      </View>
    )
  }
  
  export default LoginScreen
  
  const styles = StyleSheet.create({
      Container: {
          borderColor: 'lightgray',
          borderWidth: 1,
          marginVertical: 20,
          marginHorizontal: 15,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          marginTop: 40
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
          paddingTop: 10,
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
          paddingVertical: 8,
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
          marginBottom: 20,
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
      RegisterHeaderContainer: {
        marginTop: 15
      },
      errorMsg: {
        color: 'red',
        textAlign: 'center'
      }
  })
