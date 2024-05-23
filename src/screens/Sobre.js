import {View, Text} from 'react-native'
import stylesSobre from '../css/stylesSobre'

export default function Sobre () {
  return (
    <>
      <View style = {stylesSobre.container}>
        <Text style = {stylesSobre.txtSobre}>Versão: beta 0.7</Text>
      </View>
    </>
  )
}