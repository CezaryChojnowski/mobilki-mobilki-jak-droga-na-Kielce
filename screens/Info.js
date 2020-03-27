import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Info({navigation}){
    const pressHanlder = () => {
        navigation.goBack();
      }

      const result = (navigation.getParam('fueledUp')*100)/navigation.getParam('kilometersDriven')

      function Round(n, k)
      {
          var factor = Math.pow(10, k);
          return Math.round(n*factor)/factor;
      }

    return(
        <View style={styles.container}>
            <Text style={[styles.container, styles.name]}>Typ pojazdu</Text>
            <Text style={styles.container}>{navigation.getParam('CarTypeString')}</Text>
            <Text style={[styles.container, styles.name]}>Nazwa pojazdu</Text>
            <Text style={styles.container}>{navigation.getParam('carName')}</Text>
            {navigation.getParam('type')==0 && <Text style={[styles.container, styles.name]}>Ilośc zatankowanego paliwa</Text>}
            {navigation.getParam('type')==1 && <Text style={[styles.container, styles.name]}>Ilość pobranej energii</Text>}
            <Text style={styles.container}>{navigation.getParam('fueledUp')}</Text>
            {navigation.getParam('type')==0 && <Text style={[styles.container, styles.name]}>Cena paliwa</Text>}
            {navigation.getParam('type')==1 && <Text style={[styles.container, styles.name]}>Cena energi</Text>}            
            <Text style={styles.container}>{navigation.getParam('fuelPrice')}</Text>
            <Text style={[styles.container, styles.name]}>Ilość przejechanych kilometrów</Text>
            <Text style={styles.container}>{navigation.getParam('kilometersDriven')}</Text>
            <Text style={[styles.container, styles.name]}>Data</Text>
            <Text style={styles.container}>{navigation.getParam('refuelingDate')}</Text>
            {navigation.getParam('type')==0 && <Text style={[styles.container, styles.name]}>Spalanie</Text>}
            {navigation.getParam('type')==0 && <Text>{Round(result, 2)} l / 100 Km</Text>}
            {navigation.getParam('type')==1 && <Text style={[styles.container, styles.name]}>Zużycie energii</Text>}
            {navigation.getParam('type')==1 && <Text>{Round(result, 2)} kWh / 100 Km</Text>}          
            <Button
                title="Wróć"
                onPress={pressHanlder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    name:{
        fontSize: 16,
        fontWeight: "bold",
      }
});