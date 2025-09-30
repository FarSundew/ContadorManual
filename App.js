
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [conteo, setConteo] = useState(0);

  const Contar = () => setConteo(conteo + 1);
  const Reiniciar = () => setConteo(0);

  return (
    <View style={styles.juanitoabdul}>
      <Text style={styles.conteoStyle}>Conteo:</Text>
      <View style={styles.conteoContainer}>
        <Text style={styles.conteotext}>{conteo}</Text>
      </View>
      <View style={styles.controlcontainer}>
        <Button title='Contar' onPress={Contar} />
        <Button title='Reiniciar' onPress={Reiniciar} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  juanitoabdul: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical:40,
    marginHorizontal:16,
  },
  conteoContainer:{
    marginVertical:48,
    borderColor:'#000000ff',
    padding:24,
    borderWidth:2,
    alignItems:'center'

    },

  conteoStyle: {
    fontSize:24
  },
  conteotext:{
    fontSize:36
  },
  controlcontainer:{
    backgroundColor:'beige'
  }


});