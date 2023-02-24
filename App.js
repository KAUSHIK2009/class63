import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {

constructor(){
  super()
 this.state={
  text:'',
  displayText:''
 } 
}

  render() {
    return (

      <View style={styles.container}>
      <Header
      backgroundColor={'purple'}
      centerComponent={{text:'monkey-chunky',
      style:{color:'orange',fontSize:30},
    }}
      />

      <TextInput style={styles.inputBox}
    onChangeText={(text)=>{
      this.setState({
        text:text
      });
    }
    }
    value={this.state.text}
      />
      <TouchableOpacity style={styles.goButton}
      onPress={()=>{
        this.setState({
          displayText:this.state.text
        })
      }}
      >
    <Text styles={styles.buttonText}>
      go
    </Text>
      </TouchableOpacity>
      
    <Text>
      {this.state.displayText}
    </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox:{
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
    outline:'none'
  },
  goButton: { width: '50%', height: 55, alignSelf: 'center', padding: 10, margin: 10, }, buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold', }, displayText: { textAlign: 'center', fontSize: 30, },

});
