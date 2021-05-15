import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const Cars = [
  {
    color: 'orange',
    number: 'PB650001',
    type: 'Sudan',
    company: 'Mahindra',
    tyre: [
      {
        place: 'FrontRight',
        airPressure: 32,
        isPuncture: true,
      },
      {
        place: 'FrontLeft',
        airPressure: 34,
        isPuncture: false,
      },
      {
        place: 'RearRight',
        airPressure: 30,
        isPuncture: false,
      },
      {
        place: 'RearLeft',
        airPressure: 38,
        isPuncture: true,
      },
    ],
  },
  {
    color: 'blue',
    number: 'PB650002',
    type: 'sudan',
    company: 'Mahindra',
    tyre: [
      {
        place: 'FrontRight',
        airPressure: 32,
        isPuncture: true,
      },
      {
        place: 'FrontLeft',
        airPressure: 34,
        isPuncture: true,
      },
      {
        place: 'RearRight',
        airPressure: 30,
        isPuncture: false,
      },
      {
        place: 'RearLeft',
        airPressure: 38,
        isPuncture: true,
      },
    ],
  },
  {
    color: 'lightgreen',
    number: 'PB650003',
    type: 'sudan',
    company: 'Mahindra',
    tyre: [
      {
        place: 'FrontRight',
        airPressure: 32,
        isPuncture: true,
      },
      {
        place: 'FrontLeft',
        airPressure: 34,
        isPuncture: false,
      },
      {
        place: 'RearRight',
        airPressure: 30,
        isPuncture: true,
      },
      {
        place: 'RearLeft',
        airPressure: 38,
        isPuncture: true,
      },
    ],
  },
  {
    color: 'yellow',
    number: 'PB650004',
    type: 'sudan',
    company: 'Mahindra',
    tyre: [
      {
        place: 'FrontRight',
        airPressure: 32,
        isPuncture: false,
      },
      {
        place: 'FrontLeft',
        airPressure: 34,
        isPuncture: false,
      },
      {
        place: 'RearRight',
        airPressure: 30,
        isPuncture: true,
      },
      {
        place: 'RearLeft',
        airPressure: 38,
        isPuncture: true,
      },
    ],
  },
];

const Home = () => {
  const [obj, setObj] = useState();

  useEffect(() => {
    setObj(Cars);
  }, []);

  /*   const handler=(list, key, index)=>{
      let objarr = obj
      let indexobj = objarr[index]
      let 
      
      = indexobj.tyre
      let tyreIndex = tyrearr[key]
      let puncture = !tyreIndex.isPuncture;
      tyreIndex={...tyreIndex,isPuncture:puncture}

      console.log(tyreIndex ,'indexxxxx');

      setObj({
        ...obj,
        tyre: [...obj.tyre, {tyreIndex}],
      });
  } */

  const handler = (list, key, index) => {
    // console.log('list.......>', list, key, index);
    // console.log('obj', obj[index]);
    // let dummy = obj[index];
    // const tyre = dummy.tyre;
    // tyre[key].isPuncture = !tyre[key].isPuncture;
    // dummy.tyre = [...dummy.tyre];
    // obj[index] = dummy;
    // setObj([...obj])

    const dummy = [...obj];
    dummy[index].tyre[key].isPuncture = !dummy[index].tyre[key].isPuncture;
    setObj();
    //check kr
    //krda
  };
  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        {obj &&
          obj.map((item, index) => {
            return (
              <>
                <View
                  style={{...styles.mainWrapper, backgroundColor: item.color}}>
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      color:{item.color}
                    </Text>
                    <Text style={styles.text}>number:{item.number}</Text>
                    <Text style={styles.text}>type:{item.type}</Text>
                  </View>
                  <View style={styles.secondWrapper}>
                    {item.tyre.map((list, key) => {
                      return (
                        <TouchableOpacity
                          id={key}
                          onPress={() => handler(list, key, index)}
                          style={list.isPuncture ? styles.box : styles.box2}>
                          <Text>
                            {list.isPuncture}
                            {key}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </>
            );
          })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    height: 150,
    width: 250,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  secondWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  box: {
    height: 30,
    width: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  box2: {
    height: 30,
    width: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
export default Home;
