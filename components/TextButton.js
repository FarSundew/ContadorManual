import { Pressable,StyleSheet, Text, View } from "react-native";

export default function TextButton(props) {

  function onTabHandler(){
    props.onTab();  //Llama a la funcion que se le pasa como prop
  }
  return (
    <View>
      <Pressable onPress={onTabHandler}>
        <View style={styles.buttonContainer}> 
          <Text style={styles.textstyles}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'green',
    padding: 8,
    paddingHorizontal: 16,
    
  },
  textstyles: {
    color: 'white',
    fontSize: 24,
  }
});


