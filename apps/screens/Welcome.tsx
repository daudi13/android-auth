import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';



const Welcome = ({navigation: {navigate}}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          resizeMode='contain'
          style={styles.backgroundImage}
          source={require("../assets/Workfromhome.png")} />
      </View>
      <View style={{width: 300, marginRight: "auto", marginLeft: "auto", marginBottom: 30, marginTop: 50}}>
        <Text style={styles.welcomeText}>Discover Your Dream Job here</Text>
      </View>
      <Text style={{ width: 300, marginRight: "auto", marginLeft: "auto", textAlign: "center", lineHeight: 23, fontWeight: "600", fontSize: 15 }}>Explore all the existing job roles based on your interest and study major</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigate("Login")} style={[styles.btn, {backgroundColor: "#1F41BB"}]} >
          <Text style={[styles.btnText, {color: "white",}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigate("Register")}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.47)",
    padding: 20,
  },
  backgroundImage: {
    height: 350,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 33,
    fontWeight: "600",
    color: "#1F41BB"
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 100,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center"
  },
  btnText: {
    fontWeight: "600",
    fontSize: 17
  }
})