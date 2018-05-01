import React, { Component } from 'react';
// import { View,Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
// import { Header } from 'react-native-elements';

import Satu from './komponen/Satu';
import Search from './komponen/Seacrh';


export default DrawerNavigator ({


SATU: {
screen: Satu , 
},

SEARCH: {
    screen: Search , 
    
    },
});

//---------------------------------------

// import React, { Component } from 'react';
// // import { ScrollView } from 'react-native';
// import {ScrollView,Container,Button, Header,Icon, Body, Content, Text,Thumbnail, Tab,ListItem,List,Right,Left } from 'native-base';
// import axios from 'axios';

    
//     class App extends Component {
//     constructor() {
//     super();
//     // this.state={member:[],active:true};
//     this.state={karyawan:[], form:''};
//      }

//     klik=()=>{
//     var url = 'http://192.168.41.2:3500/data';
//     axios.get(url).then((ambilData)=>{
//     // console.log(ambilData.data);
//     this.setState({
//      karyawan:ambilData.data,
//     })
// })
// }
// render() {
// const data = this.state.karyawan.map((item,index)=>{
// var daftar = item.nama

// return<Text style={{textAlign:'center', float:'right',fontSize: 20, color: '#635DB7'}} key={index}>{daftar}</Text>
// // return <Text key={index}>{daftar} </Text>

// // return  <List >
// //               <ListItem Avatar>
          
// //                 <Thumbnail source={require('./img/kampus.jpg')} />
           
// //                 <Text key={index}>{daftar}</Text>
// //               </ListItem>
// //           </List>

// })

// return (
//       <Container>
      
//         <Text style={{fontSize: 20,textAlign:'center', color: '#635DB7'}}> Ambil Kacang</Text>
//         <Button block success onPress={()=>{this.klik()}}>
//         <Text>Ambil Kacang</Text>
       
//           </Button>

//         {/* <Text style={{color: '#635DB7'}}>{data}</Text> */}
//         {data} 
 

     
     
//       </Container>
//     );
//   }
// }
// export default App;




