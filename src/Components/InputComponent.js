import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../Constants/colors';
import { fontFamily } from '../Constants/fonts';

const InputComponent = () => {
    const [text,setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer1}>
        {/* Smile icon */}
        <TouchableOpacity>
        <Feather name="smile" size={28} color="gray" style={styles.icon1} />
        </TouchableOpacity>
        
        {/* Text input */}
        <TextInput 
          placeholder="Type a message"
          placeholderTextColor="gray"
          style={styles.inputText}
          multiline
          numberOfLines={4}
          value={text}
          onChangeText={(item) => setText(item)}
        />
        
        {/* Paperclip icon */}
        <TouchableOpacity>
        <FontAwesome name="paperclip" size={28} color="gray" style={styles.icon2} />
        </TouchableOpacity>
        
        {/* Camera icon */}
        <TouchableOpacity>
        <FontAwesome name="camera" size={28} color="gray" style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      {/* Microphone icon */}
      <TouchableOpacity>
      <View style={styles.iconContainer2}>
        {
            text 
            ? <Feather name="send" size={25} color="white" /> 
            : <Feather name="mic" size={25} color="white" />
        }
      </View>
      </TouchableOpacity>
    </View>
  );
}

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderColor: colors.background,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  inputText: {
    fontFamily: fontFamily.Regular,
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  icon1: {
    marginRight: 10,
  },
  icon2: {
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
  },
  iconContainer2: {
    backgroundColor: colors.skyblue,
    padding: 15,
    borderRadius: 100,
    marginRight: 10,
    marginLeft: 5
  },
});
