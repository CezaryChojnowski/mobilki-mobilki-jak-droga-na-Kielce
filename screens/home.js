import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import DatePicker from 'react-native-datepicker'



export default function home({navigation}) {

  const [carName, setCarName] = useState(null);
  const [fueledUp, setFueledUp] = useState(null);
  const [fuelPrice, setFuelPrice] = useState(null);
  const [kilometersDriven, setKilometersDriven] = useState(null);
  const [refuelingDate, setRefuelingDate] = useState(null);

  const pressHanlder = () => {
    navigation.push('Info')
  }
  return (
    
    <View style={styles.container}>
      <Text>Wprowadź nazwę pojazdu</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setCarName(val)}/>
      <Text>Wprowadź ilośc zatankowanego paliwa</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setFueledUp(val)}
        keyboardType={'numeric'}
        />
      <Text>Wprowadź cenę paliwa</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setFuelPrice(val)}
        keyboardType={'numeric'}
        />
      <Text>Wprowadź ilość przejechanych kilometrówa</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setKilometersDriven(val)}
        keyboardType={'numeric'}
        />
        <Text>Wprowadź datę</Text>
        <DatePicker
        style={{width: 200}}
        date={refuelingDate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => setRefuelingDate(date)}
      />
      <Button
        title="Przelicz"
        onPress={() => navigation.navigate('Info', {carName: carName})}
      />
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
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding:8,
    margin: 10,
    width: 200
  }
});
