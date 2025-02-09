import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Image, Pressable } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function App() {

  const [theme, setTheme] = useState("light");

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  function currentTheme() {
    if (theme === "light") return "#FFF";
    if (theme === "dark") return "#111111";
    if (theme === "blue") return "#E6FDFF";
  }

  function getTextColor() {
    if (theme === "dark") return "#FFF";
    return "#000"
  }

  return (



    <View style={{ ...styles.container, backgroundColor: currentTheme() }}>

      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => setTheme("dark")}>
          <Icon name='moon-waning-crescent' size={25} color={getTextColor()} />
        </Pressable>
        <Pressable onPress={() => setTheme("light")}>
          <Icon name='sun-wireless' size={25} color={getTextColor()} />
        </Pressable>
        <Pressable onPress={() => setTheme("blue")}>
          <Icon name='cloud' size={25} color={getTextColor()} />
        </Pressable>
      </View>

      <View>
        <Text style={{ fontSize: 48, fontWeight: "800", color: getTextColor() }}>Ternurin App</Text>
      </View>

      <View>
        <Image
          source={require('./assets/Ternurin-Photoroom.png')}
          style={styles.ternurin}
        />
      </View>

      <View style={styles.LogInContainer}>
        <Text style={{ ...styles.label, color: getTextColor() }}>Email</Text>
        <TextInput
          style={{ ...styles.fields, color: getTextColor() }}
          value={form.email}
          onChangeText={(updatedEmail) => setForm({ ...form, email: updatedEmail })}
          editable
          placeholderTextColor={getTextColor()}
          placeholder='Email'
        />

        <Text style={{ ...styles.label, color: getTextColor() }}>Password</Text>
        <TextInput
          style={{ ...styles.fields, color: getTextColor() }}
          value={form.password}
          onChangeText={(updatedPassword) => setForm({ ...form, password: updatedPassword })}
          editable
          placeholderTextColor={getTextColor()}
          placeholder='Password'
        />

        <Pressable style={{ width: "100%", backgroundColor: "#d7ebba", padding: 14, borderRadius: 8, marginTop: 15 }}>
          <Text style={{ textAlign: "center" }}>Inicia sesión</Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    gap: 40
  },
  title: {
    width: 300,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 2,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 20
  },
  pressableText: {
    width: 80,
    padding: 10,
    textAlign: "center",
    borderRadius: 8
  },
  LogIn: {
    width: 300,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 20,
  },
  LogInContainer: {
    display: "flex",
    gap: 5,
    width: 280,
    borderRadius: 15,
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column"
  },
  fields: {
    fontSize: 17,
    padding: 24,
    borderBottomColor: "#d7ebba",
    borderBottomWidth: 2
  },
  label: {
    fontSize: 16,
  },
  ternurin: {
    marginTop: 0,
    width: 80,
    height: 80,
  }
});
