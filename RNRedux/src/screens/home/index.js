import React,{useEffect} from 'react'
import { View, Text, ScrollView } from 'react-native'
// import {useSelector,useDispatch} from 'react-redux'
// import {getUsers} from '../../redux/actions/users'

/* const Home = (props) => {
  const dispatch =useDispatch();
  const users =useSelector(state=>state.users.users);

useEffect(() => {
 dispatch(getUsers([{
   id:1,
   name:"deepak",
   company:{
     name:"raj marbel",
     catchPhrase:"multi color marbel"
   }
 }]))
}, [])

  return (
    <ScrollView>
 { 
 users.length >0 && users.map((user)=>{
   return (
    <View style={{flex:1,width:"80%",height:100,backgroundColor:"grey"}}>
     <Text>{user.name}</Text>
      <Text>{user.company.name}</Text>
      <Text>{user.company.catchPhrase}</Text> 
    </View>
   )
 })
   
   
}
</ScrollView>
  )
} */

const Home=()=>{
  return(
    <View><Text>KEHFIHF</Text></View>
  )
}

export default Home
