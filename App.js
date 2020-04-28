import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [country,setCountry] = useState("us")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  async function fetchData(){
    const res =await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=741f9880a09c4895b6a87559756e587c`)
    const response=await res.json()  
    .then(response=>setData(response))
    .then(response=>setLoading(false))
    .catch(err=>console.log(err))

  }
  
  
  useEffect(()=>
  {fetchData()}
    
  , [])
  
  
  return (


    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    {loading ? <Text>LOading</Text>:<Text>LOaded</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
