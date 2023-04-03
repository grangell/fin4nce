import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { firebaseClient, persistenceMode } from './../../config/firebase/client'

const AuthContext = React.createContext([{}, () => {}])

export const logout = () => firebaseClient.auth().signOut()

export const login = async ({ email, password}) => {
  firebaseClient.auth().setPersistence(persistenceMode)

  try {
    await firebaseClient.auth().signInWithEmailAndPassword(email, password)
    return firebaseClient.auth().currentUser
  } catch (error) {
    window.alert('Conta inexistente!', error) // error login
  }
} 

export const signup = async ({ email, password }) => {
  try {
    await firebaseClient.auth().createUserWithEmailAndPassword(email, password)
    const user = await login({ email, password })
    const token = await user.getIdToken()

  } catch (error) {
    window.alert('E-mail informado já existente!', error) // error register
  }
}

export const useAuth = () => {
  const [auth] = useContext(AuthContext)
  return [auth, { login, logout, signup }]
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loading: true,
    user: false
  })

  useEffect(() => {
    const unsubscribe = firebaseClient.auth().onAuthStateChanged(user => {
      setAuth({
        loading: false,
        user
      })
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  )
}