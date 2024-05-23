import {StyleSheet, StatusBar} from 'react-native'

const styleHomeList = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: '',
    flexDirection: '',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F5F5F5'
  },
  scrollView: {
    paddingTop: 16,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    //marginBottom: 16
  },
  cardText :{
    fontSize: 20
  }
})

export default styleHomeList