import React, { Component } from 'react';
import { Text, View, Button, } from 'react-native';
import { Thumbnail } from "native-base";
class Satu extends Component {
render() {
return (
<View style={{ flex: 1, alignItems: 'center', backgroundColor: "greenyellow", 
justifyContent: 'center',  }}>
<Text style={{fontSize:20,fontFamily:'Oswald-Regular'}}> AYO MENGAJI </Text>
<Button title="GO"  onPress={
() => this.props.navigation.navigate('DrawerToggle') } 
color={"red"} 
 />

</View>


);}}
export default Satu;