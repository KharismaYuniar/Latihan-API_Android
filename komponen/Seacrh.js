import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {Container, Header,Body,Button,
Content, Item,Text,Thumbnail,Footer,Title, Tab,Separator,ListItem,List,Right,Left,Icon,Input } from 'native-base';
import axios from 'axios';

    
    class Search extends Component {
    constructor() {
    super();
    // this.state={member:[],active:true};
    // this.state={member:[]};
    this.state={member:[],nama:''};
    }

   klik(){
    var nm=this.state.nama;
    var url = 'http://api.alquran.cloud/surah/'+nm;
    axios.get(url).then((ambilData)=>{
    this.setState({
    //  member:ambilData.data.data.ayahs,
    // member1:Object.values(ambilData.data),
    member:Object.values(ambilData.data.data.ayahs),
    member2:ambilData.data.data.name,
    member3:ambilData.data.data.englishName,

    
    })
})
}


render() {
  
  const data =this.state.member.map((item,index)=>{
  let daftar = item.numberInSurah // pilihan yang kita mau panggil sesuai kemauan
  let Ename = item.text
  return <List  key={index}> 
          <ListItem >
         
            <Text style={{fontSize: 10, color: 'black'}}>  {daftar} </Text> 
           
           <Text style={{fontSize: 20, color: 'black'}}>  {Ename} </Text> 
          </ListItem>
          </List >
   
  })


return (
      <Container>
      <Header searchBar rounded>
      <Item>
      <Input placeholder="Masukan Nomor Surat..." onChangeText={(x)=>{this.setState({nama:x})}} />
      <Button transparent onPress={()=>this.klik()}><Icon name="search"/></Button>
    </Item>
        </Header>

        <ScrollView>
        <Separator bordered>
 {/* <Text style={{fontSize: 20,textAlign:'center', color: '#635DB7'}}>   {this.state.member2}</Text> */}
  
        <Text style={{fontSize: 20,textAlign:'center', color: '#635DB7'}}>   {this.state.member3}</Text>
        </Separator>
        {/* <Text style={{color: '#635DB7'}}>{data}</Text> */}
      <Right>
        {data}
       </Right>
        {/* {this.state.member} */}  
        </ScrollView>
        <Footer>
          <Left>
            <Button transparent
            onPress={() => this.props.navigation.goBack() }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style ={{alignSelf:'center'}}> Kembali</Title>
          </Body>
        
        </Footer>
      </Container>
    );
  }
}
    
export default Search;
