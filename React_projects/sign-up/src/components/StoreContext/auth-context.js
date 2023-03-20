import React from "react";
const AuthContext = React.createContext({
    isLogedIn : false ,
    onLogout : ()=>{}
});

export default AuthContext ;
