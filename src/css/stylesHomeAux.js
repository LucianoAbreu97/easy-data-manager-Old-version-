import {StyleSheet} from 'react-native'
import config from '../../config'

const stylesHomeAux = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.colors.primary,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    width: '90%',
    justifyContent: 'space-between'
  },
  tableNameTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  editIc: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  headerInfo: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  leftArrowIc: {
    marginRight: 15,
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  tableBody: {
    flexDirection: 'column-reverse',
    width: '90%',
    borderRadius: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: config.colors.button,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 50
  },
  tableRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  columnHeaderTxt: {
    color: 'black',
    fontWeight: 'bold'
  },
  columnRowTxt: {
    width: '20%',
    textAlign: 'center'
  }
})

export {stylesHomeAux}