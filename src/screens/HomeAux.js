import React, {useState, useEffect} from 'react'
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import _ from 'lodash'
import {pets} from '../data/tabelas'
import {stylesHomeAux} from '../css/stylesHomeAux'
import config from '../../config'

export default function HomeAux({navigation}) {

  const [tableData, setTableData] = useState(pets)
  const [columns, setColumns] = useState([
    'Name', 'Gender', 'Breed', 'Weight', 'Age'
  ])
  const [direction, setDirection] = useState(null)
  const [selectedColumn, setSelectedColumn] = useState(null)

  const tablename = 'Petshop'

  const sortTable = (column) => {
    const newDirection = direction === 'desc' ? 'asc' : 'desc'
    const sortedData = _.orderBy(pets, [column], [newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setTableData(sortedData)
  }

  const tableHeader = () => (
  <View style={stylesHomeAux.tableHeader}>
    {
      columns.map((column, index) => {
        {
          return (
            <TouchableOpacity 
              key={index}
              style={stylesHomeAux.columnHeader} 
              onPress={()=> sortTable(column)}>
              <Text style={stylesHomeAux.columnHeaderTxt}>{column + " "} 
                { selectedColumn === column && <MaterialCommunityIcons 
                    name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"} 
                  />
                }
              </Text>
            </TouchableOpacity>
          )
        }
      })
    }
  </View>
  )

  return (
    <>
      <View style = {stylesHomeAux.container}>
        <View style = {stylesHomeAux.header}>
          <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
              <Image style = {stylesHomeAux.leftArrowIc} source = {require('../../assets/img/leftArrowIc.png')} />
            </TouchableOpacity>
            <View style = {stylesHomeAux.headerInfo}>
              <Text style = {stylesHomeAux.tableNameTxt}>{tablename}</Text>
            </View>
          </View>
            <TouchableOpacity style = {stylesHomeAux.headerInfo}>
              <Image style = {stylesHomeAux.editIc} source = {require('../../assets/img/editIc.png')} />
            </TouchableOpacity>
        </View>
        <FlatList style = {stylesHomeAux.tableBody}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent = {tableHeader}
            stickyHeaderIndices = {[0]}
            data = {tableData}
            keyExtractor = {(item, index) => index+""}
            renderItem = {({item, index}) => {
              return (
                <View style = {{...stylesHomeAux.tableRow, backgroundColor: index % 2 == 1 ? '#F0FBFC' : 'white'}}>
                  <Text style = {stylesHomeAux.columnRowTxt}>{item.Name}</Text>
                  <Text style = {stylesHomeAux.columnRowTxt}>{item.Gender}</Text>
                  <Text style = {stylesHomeAux.columnRowTxt}>{item.Breed}</Text>
                  <Text style = {stylesHomeAux.columnRowTxt}>{item.Weight}</Text>
                  <Text style = {stylesHomeAux.columnRowTxt}>{item.Age}</Text>
                </View>
              )
            }}
          />
      </View>
    </>
  )
}