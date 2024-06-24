import { createContext,useState } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [auth, setAuth] = useState({
        isLoggedin:false,
        token:null,
    })
    const login = (token)=>{
        setAuth({isLoggedin:true,token:token})
    }
    const logout = (token)=>{
        setAuth({isLoggedin:false,token:null})
    }
    return(
        <AuthContext.Provider value={{auth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
