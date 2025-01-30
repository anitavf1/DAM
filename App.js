import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { ListItem } from '@rneui/themed';
import { CheckBox } from '@rneui/base';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.title}>
          To-Do-List
        </Text>
        
      </View>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleTextBody}>Lista de compras:</Text>
        </View >
        <ScrollView style={styles.bodyContent}>
          <CheckBox title="Leche" containerStyle={styles.checkbox}/>
          <CheckBox title="Pan" containerStyle={styles.checkbox}/>
          <CheckBox title="Huevos" containerStyle={styles.checkbox}/>
          <CheckBox title="Mantequilla" containerStyle={styles.checkbox}/>
          <CheckBox title="Azúcar" containerStyle={styles.checkbox}/>
          <CheckBox title="Sal" containerStyle={styles.checkbox}/>
          <CheckBox title="Pimienta" containerStyle={styles.checkbox}/>
          <CheckBox title="Pasta" containerStyle={styles.checkbox}/>
          <CheckBox title="Jitomate" containerStyle={styles.checkbox}/>
          <CheckBox title="Queso" containerStyle={styles.checkbox}/>
          <CheckBox title="Jamón" containerStyle={styles.checkbox}/>
          <CheckBox title="Queso" containerStyle={styles.checkbox}/>
          <CheckBox title="Jamón"containerStyle={styles.checkbox}/>
          <CheckBox title="Queso" containerStyle={styles.checkbox}/>
          <CheckBox title="Jamón" containerStyle={styles.checkbox}/>
          <CheckBox title="Queso"containerStyle={styles.checkbox}/>
          <CheckBox title="Jamón"containerStyle={styles.checkbox}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  navbar: {
    backgroundColor: '#16a085',
    height:'10%',
    width:'100%',
    marginTop: 0,
    textAlign: 'justify',
    justifyContent:'center',

   
  }, 

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 20,
  }, 
  body:{
    height: '90%', 
    maxHeight: '100%',
    backgroundColor: '#ecf0f1'
  }, 
  titleContainer: {
   
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextBody:{
    color: '#000',
    fontSize:30,
    fontWeight: 'bold'
  },
  bodyContent:{
    width:'100%',
    marginBottom: '10%',
   
  }, 
  checkbox: {
    backgroundColor:'#ecf0f1',
    width:'50%',
    fontSize:15,
    marginLeft: '20%'
  }

  
});
