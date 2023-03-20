import React, { useState , useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/StoreContext/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
     if (localStorage.getItem('loginInfo')==='1'){
      setIsLoggedIn(true);
     }else{
      setIsLoggedIn(false);
     }
  } , [])

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('loginInfo' , '1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem('loginInfo' , '0');
  };

  return (
      <AuthContext.Provider value={{
        isLogedIn : isLoggedIn ,
        onLogout : logoutHandler 
    }}>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
  }

export default App;
