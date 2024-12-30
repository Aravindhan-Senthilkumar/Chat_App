import { StyleSheet,View,Text } from 'react-native';
import React from 'react';
import ChatScreenHeader from '../Components/ChatScreenHeader';
import { useRoute } from '@react-navigation/native';
import MessageSection from '../Components/MessageSection';
import { colors } from '../Constants/colors';
import InputComponent from '../Components/InputComponent';


const ChatScreen = () => {
    const item = useRoute().params.item;

    return (
        <View style={styles.container}>
            <ChatScreenHeader item={item}/> 
            <MessageSection messages={item.messages}/>
            <InputComponent />
        </View>
    )
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
