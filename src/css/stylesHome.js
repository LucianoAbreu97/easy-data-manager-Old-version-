import {StyleSheet} from 'react-native'
import config from '../../config'

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colors.primary,
    alignItems: 'center',
    paddingTop: 20
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    width: '90%',
    justifyContent: 'space-between'
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    width: '95%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  profileTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  profileIc: {
    width: 70,
    height: 70,
    marginRight: 15,
    marginLeft: 10,
    borderRadius: '50%'
  },
  headerInfo: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  editIc: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  searchIc: {
    width: 30,
    height: 30
  },
  searchArea: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  inputSearch: {
    width: '80%',
    height: 45,
    marginLeft: 10,
    fontSize: 20,
  },
  card : {
    margin: 5,
    width: 160,
    height: 200,
    borderRadius: 20,
    marginTop: 15
  }
})

export default stylesHome