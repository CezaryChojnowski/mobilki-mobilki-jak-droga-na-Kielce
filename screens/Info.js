import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Info({navigation}){
    const pressHanlder = () => {
        navigation.goBack();
      }
    return(
        <View>
            <Text>
                {navigation.getParam('carName')}
            </Text>
            <Button
        title="Wróć"
        onPress={pressHanlder}
      />
        </View>
    )
}