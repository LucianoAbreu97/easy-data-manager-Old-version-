import React from 'react'
import {View, SafeAreaView, Text, FlatList, StyleSheet, StatusBar} from 'react-native'
import {frutas} from '../data/tabelas'

export default function Flist() {
  return (
    <>  
      <SafeAreaView style = {styles.container}>
          <FlatList style = {styles.scrollView}
            ItemSeparatorComponent = {<View style = {{height: 16}}></View>}
            data = {frutas}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => {
              return (
                <View style = {styles.card}>
                  <Text style = {styles.cardText}>{item.nome}</Text>
                  <Text style = {styles.cardText}>{item.quantidade}</Text>
                  <Text style = {styles.cardText}>{item.preco}</Text>
                  <Text style = {styles.cardText}>{item.lote}</Text>
                </View>
              )
            }}
          />
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
    //marginBottom: 16
  },
  cardText :{
    fontSize: 20
  }
})