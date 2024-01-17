import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';



const Login = () => {
  const  [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.mainText}>Login Here</Text>
        <Text style={styles.followUpText}>Welcome back you've been missed!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          autoFocus={true}
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.forgotPassword}><Text style={styles.linkText}>Forgot your password?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signInBtn}><Text style={styles.btnTxt}>Sign in</Text></TouchableOpacity>
        <Text style={styles.newAccount}>Create new Account</Text>
        <Text style={styles.continue}>Or continue with</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconBox}>
            <AntDesign name="google" size={24} color="black" />
          </View>
          <View style={styles.iconBox}>
            <FontAwesome5 name="facebook" size={24} color="black" />
          </View>
          <View style={styles.iconBox}>
            <AntDesign name="apple1" size={24} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerText: {
    width: 200,
    marginRight: "auto",
    marginLeft: "auto",
    marginVertical: 40,
  },
  mainText: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "800",
    color: "#1F41BB"
  },
  followUpText: {
    fontWeight: "700",
    fontSize: 17,
    textAlign: "center",
    marginVertical: 20,
    lineHeight: 25
  },
  form: {
    gap:30
  },
  input: {
    padding: 20,
    backgroundColor: "#f1f4ff",
    fontSize: 18,
    borderRadius: 12,
    borderColor: "#1F41BB",
    borderWidth: 2
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#1F41BB",
  },
  linkText: {
    color: "#1F41BB",
    fontWeight: "700"
  },
  signInBtn: {
    paddingHorizontal: 20,
    paddingVertical: 17,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#1F41BB"
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },
  newAccount: {
    textAlign: "center",
    fontWeight: "600",
    color: "grey"
  },
  continue: {
    textAlign: "center",
    fontWeight: "600",
    color: "#1F41BB"
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#ececec",
    alignItems: "center",
    justifyContent: "center"
  }
})