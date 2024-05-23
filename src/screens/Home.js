import React, {useState} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, FlatList} from  'react-native'
import stylesHome from '../css/stylesHome'
import styleHomeList from '../css/styleHomeList'
import {frutas} from '../data/tabelas'


export default function Home({navigation}) {

  const username = 'Nome Sobrenome'

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <View style = {stylesHome.container}>
      <View style = {stylesHome.header}>
        <View style = {{flexDirection: 'row'}}>
            <Image style = {stylesHome.profileIc} source = {require('../../assets/img/profileIc.png')} />
          <View style = {stylesHome.headerInfo}>
            <Text style = {stylesHome.profileTxt}>Welcome</Text>
            <Text style = {stylesHome.profileTxt}>{username}</Text>
          </View>
        </View>
          <TouchableOpacity style = {stylesHome.headerInfo}>
            <Image style = {stylesHome.editIc} source = {require('../../assets/img/editIc.png')} />
          </TouchableOpacity>
      </View>
      <View style = {stylesHome.searchArea}> 
        <Image style = {stylesHome.searchIc} source = {require('../../assets/img/searchIc.png')} />
        {/*Logica de filtro aqui*/}
        <TextInput style = {stylesHome.inputSearch}
        onChangeText = {(query) => setSearchQuery(query)}
        placeholder = "Seach Here"
        autoCorrect = {false}
        underlineColorAndroid = 'transparent'
        showSoftInputOnFocus = {false}
        />
      </View>
        <View style = {stylesHome.body}>
          <FlatList style = {styleHomeList.scrollView}
            ItemSeparatorComponent = {<View style = {{height: 9}}></View>}
            data = {frutas}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => {
              return (
                <TouchableOpacity style = {styleHomeList.card} onPress = {() => navigation.navigate('Aux')}>
                  <Text style = {styleHomeList.cardText}>{item.nome}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
    </View>
  )
}