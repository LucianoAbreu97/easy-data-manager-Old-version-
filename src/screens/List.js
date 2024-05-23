import {StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import {frutas} from '../data/tabelas'

export default function HomeAux() {
  return (
    <>
      <SafeAreaView style = {styles.container}>
        <ScrollView style = {styles.scrollView}>
          {frutas.map(fruta => {
            return(
              <View style = {styles.card} key = {fruta.id}>
                <Text style = {styles.cardText}>{fruta.nome}</Text>
                <Text style = {styles.cardText}>{fruta.quantidade}</Text>
                <Text style = {styles.cardText}>{fruta.preco}</Text>
                <Text style = {styles.cardText}>{fruta.lote}</Text>
              </View>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: '',
    flexDirection: '',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F5F5F5'
  },
  scrollView: {
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText :{
    fontSize: 20
  }
})