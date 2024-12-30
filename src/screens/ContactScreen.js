import { StyleSheet,View } from 'react-native'
import ContactScreenHeader from '../Components/ContactScreenHeader'
import ContactScreenFlatList from '../Components/ContactScreenFlatList'
import { userDatas } from '../data/userData'
import { colors } from '../Constants/colors'

const ContactScreen = () => {
  return (
    <View style={styles.container}>
    <ContactScreenHeader />
    <ContactScreenFlatList item={userDatas}/>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})