import {StyleSheet} from 'react-native'
import config from '../../config'

const stylesCadastro = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30,
    backgroundColor: config.colors.primary
  },
  input:{
    width: '100%',
    padding: 8,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    color: 'black',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 273,
    backgroundColor: config.colors.button,
    paddingTop: 14,
    marginLeft: 2,
    margin: 15,
    borderRadius: 15
  },
  returnLogin:{
    color: config.colors.button,
    top: 50,
    left:7
  },
  buttonTxt: {
    color: 'black',
    marginBottom: 11,
    fontSize: 16,
    fontWeight: 'bolder'
  }
})

export {stylesCadastro}