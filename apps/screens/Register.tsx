import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../authContext/AuthContext';


const Register = ({navigation: {navigate}}: any) => {
  const  [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const { onRegister, authState } = useAuth();

  const signIn = async () => {
      const res = await onRegister!(email, password)
      console.log(res)
  }
  

  console.log(authState)
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerText}>
        <Text style={styles.mainText}>Create Account</Text>
        <Text style={styles.followUpText}>Create an account so you can explore all the existing job</Text>
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
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          secureTextEntry
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
          placeholder="Confirm Password"
        />
        <TouchableOpacity style={styles.signInBtn} onPress={() => signIn()}><Text style={styles.btnTxt}>Sign up</Text></TouchableOpacity>
        <Text style={styles.newAccount} onPress={() => navigate("Login")}>Already have an account?</Text>
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

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerText: {
    marginRight: "auto",
    marginLeft: "auto",
    marginVertical: 20,
  },
  mainText: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "800",
    color: "#1F41BB"
  },
  followUpText: {
    fontWeight: "500",
    fontSize: 15,
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