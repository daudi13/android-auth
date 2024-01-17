import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './apps/screens/Home';
import Welcome from './apps/screens/Welcome';
import Login from './apps/screens/Login';
import Register from './apps/screens/Register';
import { AuthProvider, useAuth } from './apps/authContext/AuthContext';

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  )
}

export const Layout = () => {
  const { authState } = useAuth()
  console.log(authState?.authenticated)
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {
            authState?.authenticated ? (
              <Stack.Screen name="Home" component={Home}/>
            ) : (
                <>
              <Stack.Screen name='Welcome' component={Welcome}/>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='Register' component={Register}/>
                </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
  )
}
