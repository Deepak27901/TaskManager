import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
/* import Routes from './src/navigation'
import {Provider} from "react-redux"
import store from './src/redux/store'
 */
const App = () => {
  const [errorMessagsObj, setErrorMessagesObj] = useState({})
  const [info, setInfo] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
  });


    const submit = async() => {
      let newObj = {}
      if (info) {
        if (!info.name || info.name === '') {
          newObj.name = "Please enter first name"
        }
        if (!info.email || info.email === '') {
          newObj.email = "Please enter last Name"
        }
        if (!info.number || info.number === '') {
          newObj.number = "Please enter email"
        }
        if (!info.password || infopassword === '') {
          newObj.message = "Please enter message"
        
      }
      if(Object.keys(newObj).length > 0){
        console.log("newObj====",newObj)
        setErrorMessagesObj(newObj);
        return
      }else {
        const data = {
        email: "msharma@innow8apps.com" ,
        firstname: "jhjhv" ,
        lastname: "fyfjhj" ,
        message: "hjhjghj",
        phone: "76767867878"}
    }

  }
}
  
  const handleChange = (text, type) => {
    setInfo({...info, [type]: text});
    if(errorMessagsObj[type] !=="")
    setErrorMessagesObj({ ...errorMessagsObj , [type]: ""})
  
    console.log('info....', info); 
    console.log('errorMessagsObj.name....', errorMessagsObj.name); 
  };
  return (
    /*   <Provider store={store}>
  <Routes />
  </Provider> */

    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={styles.text}
          placeholder="Enter name"
          onChangeText={text => handleChange(text, 'name')}
        />
   {/* {errorMessagsObj.name && <Text> {errorMessagsObj.name}</Text>}  */}
  
      {errorMessagsObj.name !==""  && errorMessagsObj.name &&

        <Text>
       
         {errorMessagsObj?.name }
        </Text>
      }
   
        <TextInput
          style={styles.text}
          placeholder="Enter email"
          onChangeText={text => handleChange(text, 'email')}
        />
        <TextInput
          style={styles.text}
          placeholder="Enter number"
          onChangeText={text => handleChange(text, 'number')}
        />
        <TextInput
          style={styles.text}
          placeholder="Enter password"
          onChangeText={text => handleChange(text, 'password')}
        />
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Text>{info.name}</Text>
        <Text>{info.email}</Text>
        <Text>{info.number}</Text>
        <Text>{info.password}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    width: '60%',
    height: 30,
    backgroundColor: 'lightgrey',
    padding: 10,
    marginTop: 10,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 54,
  },
});

export default App;
