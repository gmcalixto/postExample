import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';


class App extends Component {
  
  executePost(){
    fetch(
      'https://fakerestapi.azurewebsites.net/api/Users', 
      {
          method: 'POST',
          headers: 
          {
             Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "ID": 0,
              "UserName": "calixto",
              "Password": "123"
            })
      }).then(response => {
          if (response.status === 200) {
            response.text()
            .then(result => {
              console.log(result);
            });
          } else {
            throw new Error('Something went wrong on api server!');
          }
      })
      .then(response => {
        console.debug(response);
      }).catch(error => {
        console.error(error);
      });

  }
  
  componentDidMount(){

  }
  
  
  render(){
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Teste do POST</Text>
      <TouchableOpacity
        onPress={()=>{
          console.log('teste');
          this.executePost()
        }}>

          <Text style={styles.button}>Executar</Text>

        </TouchableOpacity>
    </View>
  );
  }
  
} export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    borderColor:'black',
    borderWidth: 1,
    fontSize: 15,
    margin:30,
    backgroundColor: 'grey',
    textAlign: 'center',
    fontFamily: Platform.OS==='ios'?'AvenirNext-Regular':'Roboto'
  }
});
