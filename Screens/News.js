import { View,Text, FlatList,ScrollView } from 'react-native'
import Details from './Details'
import {getHeadLines} from '../API/news'
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { Component } from 'react'
import Article from '../Components/Article';

export default class News extends Component {
  
  constructor(props){
    super(props)
    this.state={
      articles:[],
      loading:true,
      refreshing:true
    }
    this.fetchNews=this.fetchNews.bind(this)
  }

  componentDidMount(){
    this.fetchNews()  
  }

  fetchNews(){
    getHeadLines()
      .then(articles=>this.setState({
        articles,
        loading:false,
        refreshing:false
      }))
      .catch(err=>console.log(err))
      
  }
  handleRefresh(){
    this.setState({
      refreshing:true
    },()=>this.fetchNews())
  }
  
  render() {
    return (
      <View>          
          <FlatList
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
            
          
          
<Text>
</Text>
      </View>)
  }
}
