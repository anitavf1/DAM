import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import { useState } from 'react';

export default function App() {
  
const [check1, setCheck1] = useState(false);
const [check2, setCheck2] = useState(false);
const [check3, setCheck3] = useState(false);
const [check4, setCheck4] = useState(false);
  
const checkedHandler1 = () => {
  checked1 ? setChecked1(false): setChecked1(true);
}

const checkedHandler2 = () => {
  checked2 ? setChecked2(false): setChecked2(true);
}


  return (
    <View style={styles.container}>
      <View> <Text style={{fontSize: 28}}>Compras</Text></View>
      <StatusBar style="auto" />

      <View>
        <View style={styles.productContainer}>
          <Text>Escribe el producto que desees añadir</Text>
          <TextInput style={{opacity:.5}}>producto</TextInput>
        </View>
      </View>

      <ScrollView>
      <View style={styles.checkboxcontainer}> 
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>
        <CheckBox title="leche" checked={check1} onPress={checkedHandler1}/>
        <CheckBox title="leche" checked={check2} onPress={checkedHandler2}/>


        
      </View>
      </ScrollView>
      

    </View>
   

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 100,
    
  },
  productContainer: {
    backgroundColor: "#C28CAE",
    width: 250,
    height: 75,
    marginTop: 50,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 15

  },
  checkboxcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100 ,
    paddingRight: 200,
    fontSize:10
  }
});
