import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

let historia
let ratkaisu

export default function App() {

  const [numero1, setNumero1] = useState ('');
  const [numero2, setNumero2] = useState ('');
  const [data, setData] = useState([]);

  const yhteenlasku = () => {
    ratkaisu = parseInt(numero1) + parseInt(numero2);
    historia = numero1 + " + " + numero2 + " = " + ratkaisu
    setData([...data, { key: historia}]);
  }
  const vahennyslasku = () => {
    ratkaisu = parseInt(numero1) - parseInt(numero2);
    historia = numero1 + " - " + numero2 + " = " + ratkaisu
    setData([...data, { key: historia}]);
  }

  return (
    <View style={styles.container}>
      <Text>Ratkaisu: {ratkaisu}</Text>
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={numero1 => setNumero1(numero1)} value={numero1}/>
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={numero2 => setNumero2(numero2)} value={numero2}/>
      <View style={styles.buttonrow}>
        <View style={styles.button}>
      <Button onPress={yhteenlasku} title="+" />
      </View>
      <View style={styles.button}>
      <Button onPress={vahennyslasku} title="-" />
      </View>
      </View>
      <Text>Historia</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
      />
     
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 100
  },
  input : {
    width: 75 ,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button : {
    padding: 20,
  },
  buttonrow : {
    flexDirection: 'row'
  }
});

