import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../authContext/AuthContext";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";


const Stack = createNativeStackNavigator()

export default function Layout() {
  const { authState, onLogOut } = useAuth()
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
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