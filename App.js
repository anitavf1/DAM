import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const myName = 'Anita';
export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.navbar} >
        <Icon name='arrow-left' size={23} color={"#FFF"} />
        <Text style={styles.title}>Perfil</Text>
      </View>

      <View style={{position:"relative"}}>
        <Image
          source={require('./assets/ternurin_pic.jpg')}
          style={styles.profile_image}
        />

        <Pressable 
         style={{position:"absolute", backgroundColor:"#FFF", width:50, height:50, bottom:0, right:100, backgroundColor:'#25D366', borderRadius:40, display:"flex",
         justifyContent:"center", alignItems:"center"
         }}>
         <Icon name='camera-outline' size={23} color={"#000000"} />
        </Pressable>
      </View>

      <View style={{ ...styles.verticalContainer, gap:30, marginTop: 30 }}>

        <View style={styles.view_style}>
          <Icon name='account-outline' size={24} color={"#939196"} />
          <View style={styles.verticalContainer}>
            <Text style={styles.title_info}> Nombre </Text>
            <Text style={styles.text_info}> Ana María ❤️‍🩹 </Text>
          </View>
        </View>

        <View style={styles.view_style}>
          <Icon name='information-outline' size={24} color={"#939196"} />
          <View style={styles.verticalContainer}>
            <Text style={styles.title_info}>Info. </Text>
            <Text style={styles.text_info}>Ich bin Schnappi, das kleine krokodil</Text>
          </View>
        </View>

        <View style={styles.view_style}>
          <Icon name='phone-outline' size={24} color={"#939196"} />
          <View style={styles.verticalContainer}>
            <Text style={styles.title_info}>Teléfono</Text>
            <Text style={styles.text_info}>+52 448 169 1353</Text>
          </View>
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1014',

  },
  title: {
    width: "100%",
    color: '#fff',
    fontSize: 22
  },
  navbar: {
    
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'start',
    paddingLeft: 20,
    alignItems: 'center',
    marginTop: 40,
    gap: 12
  },
  title_info: {
    color: '#fff',
    fontSize: 15
  },
  profile_image: {
    width: 160,
    height: 160,
    marginTop: 40,
    borderRadius: 130,
    marginHorizontal: "auto"
  },

  text_info: {
    color: '#939196',
    fontSize: 15,
    width: "100%",
  },
  view_style: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    gap: 20,
    alignItems: "center"
  },
  icons_style: {
    widtd: 60,
    height: 60,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 20
  },
  verticalContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",

  }


});

