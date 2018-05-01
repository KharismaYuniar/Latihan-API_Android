import React, { Component } from 'react';
// import { ScrollView } from 'react-native';
import {ScrollView,Container, Header,Body, Content, Text,Thumbnail, Tab,ListItem,List,Right,Left } from 'native-base';
import axios from 'axios';

    
    class App extends Component {
    constructor() {
    super();
    // this.state={member:[],active:true};
    this.state={member:[]};
     }

    componentDidMount(){
    var url = 'http://api.alquran.cloud/surah'
    axios.get(url).then((ambilData)=>{
    console.log(ambilData.data);

    this.setState({
  
    member:ambilData.data.data,
    })
})
}


render() {

const data = this.state.member.map((item,index)=>{

var daftar = item.name

return <Text key={index}>{daftar}</Text>


// return  <List >
//               <ListItem Avatar>
          
//                 <Thumbnail source={require('./img/kampus.jpg')} />
           
//                 <Text key={index}>{daftar}</Text>
//               </ListItem>
//           </List>

})

return (
      <Container>
        <Header />
        <Text style={{fontSize: 20,textAlign:'center', color: '#635DB7'}}> Kacang Hijau</Text>
        {/* <Text style={{color: '#635DB7'}}>{data}</Text> */}
        {data}
        {/* {this.state.member} */}

     
     
      </Container>
    );
  }
}
export default App;