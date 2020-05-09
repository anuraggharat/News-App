import { View,Text, FlatList,ScrollView } from 'react-native'
import Details from './Details'
import {getHeadLines} from '../API/news'
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { Component } from 'react'

export default class News extends Component {
  
  constructor(props){
    super(props)
    this.state={
      articles:[],
      loading:true
    }
    this.fetchNews=this.fetchNews.bind(this)
  }

  componentDidMount(){
    this.fetchNews()  
  }

  fetchNews(){
    getHeadLines()
      .then(articles=>this.setState({
        articles:articles,
        loading:false
      }))
      .catch(err=>console.log(err))
      .finally(()=>console.log(this.state.articles))
  }
  
  render() {
    return (
      <View>
          <Text> This is news section </Text>
          <SafeAreaView>
            <ScrollView>
            
            <Text></Text>
            
            </ScrollView>
          </SafeAreaView>
<Text>
</Text>
      </View>)
  }
}
