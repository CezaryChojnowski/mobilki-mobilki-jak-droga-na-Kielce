import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default function home({navigation}) {

  const [carName, setCarName] = useState(null);
  const [fueledUp, setFueledUp] = useState(null);
  const [fuelPrice, setFuelPrice] = useState(null);
  const [kilometersDriven, setKilometersDriven] = useState(null);
  const [refuelingDate, setRefuelingDate] = useState(null);
  const [type, setType] = useState(0);

  var radio_props = [
    {label: 'Benzyna/Diesel', value: 0 },
    {label: 'Energia', value: 1 }
  ];
  return (
    <View style={styles.container}>
    <Text>Wybierz typ pojazdu</Text>
    <RadioForm
          labelHorizontal={true}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => setType(value)}
          />
      <Text>Wprowadź nazwę pojazdu</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setCarName(val)}/>
        {type==0 && <Text>Wprowadź ilośc zatankowanego paliwa</Text>}
        {type==1 && <Text>Wprowadź ilość pobranej energii</Text>}
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setFueledUp(val)}
        keyboardType={'numeric'}
        />

      {type==0 && <Text>Wprowadź cenę paliwa</Text>}
      {type==1 && <Text>Wprowadź cenę energi</Text>}
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setFuelPrice(val)}
        keyboardType={'numeric'}
        />
      <Text>Wprowadź ilość przejechanych kilometrów</Text>
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
        placeholder="Wybierz datę"
        format="YYYY-MM-DD"
        confirmBtnText="Potwierdź"
        cancelBtnText="Anuluj"
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
        onPress={() => navigation.navigate('Info', {
          carName: carName, 
          fueledUp: fueledUp, 
          fuelPrice: fuelPrice,
          kilometersDriven: kilometersDriven,
          refuelingDate: refuelingDate,
          type: type,
          CarTypeString: radio_props.find(x=>x.value === type).label
        })}
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
