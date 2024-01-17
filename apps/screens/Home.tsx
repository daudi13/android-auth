import { Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../authContext/AuthContext'

const Home = () => {
  const { onLogOut } = useAuth();
  const signOut = async () => {
    onLogOut!()
  }
  return (
      <SafeAreaView style={styles.container}>
        <Button title="Sign out" onPress={() => signOut()}/>
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})