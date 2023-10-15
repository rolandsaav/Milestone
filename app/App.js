import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './navigation/MainContainer';
import AuthContainer from './navigation/AuthContainer';
import React, { useState } from 'react';
import { AuthContext } from './Providers/Auth';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={[user, setUser]}>
    <NavigationContainer>
     {user == null ? <AuthContainer/> : <MainContainer/>}
    </NavigationContainer>
    </AuthContext.Provider>
  );
};
