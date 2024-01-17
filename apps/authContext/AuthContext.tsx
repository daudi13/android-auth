import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, Auth, getAuth, signOut } from "firebase/auth";
import * as SecureStore from "expo-secure-store";
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface AuthProps {
  authState?: { token: string | null, authenticated: boolean | null };
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogOut?: () => Promise<any>
}

const AuthContext = createContext<AuthProps>({})

const TOKEN_KEY: string = "user-data"
const auth: Auth = FIREBASE_AUTH

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {

  const [authState, setAuthState] = useState<{
    token: any | null,
    authenticated: boolean | null
  }>({
    token: null,
    authenticated: null
  })

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      console.log("stored:", token)

      if (token) {
        setAuthState({
          token: token,
          authenticated: true
        })
      }
    }
    loadToken()
  },[])

  const signIn = async (email: string, password: string) => {
    try {
      const response : any = await signInWithEmailAndPassword(auth, email, password);
      setAuthState({
        token: response,
        authenticated: true
      })
      await SecureStore.setItemAsync(TOKEN_KEY, JSON.stringify(response));
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

    const signUp = async (email: string, password: string) => {
    try {
      const res : any = await createUserWithEmailAndPassword(auth, email, password)
      setAuthState({
        token: res,
        authenticated: true
      });
      await SecureStore.setItemAsync(TOKEN_KEY, JSON.stringify(res.user))
      console.log("hello",res.user.stsTokenManager.accessToken)
    } catch (error) {
      console.log(error)
    }
    }
  
  const signOutFunc = async () => {
    
    const auth = getAuth();
    signOut(auth).then(() => {
      setAuthState({
        token: null,
        authenticated: false
      })
      SecureStore.deleteItemAsync(TOKEN_KEY)
      console.log("sign-out successfully")
    }).catch((error: any) => {
      console.log("An error happened", error)
    })
  }



  const value = {
    onRegister: signUp,
    onLogin: signIn,
    onLogOut: signOutFunc,
    authState,
  }

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
  
} 