import {createContext, useState} from "react";
export const AuthContext = createContext({});
const AuthContextProvider = ({children}) => {
    const [isAuth, toggleIsAuth] = useState(false);
    const data = {
        isAuth: isAuth,
        logout: logout,
        login: login,
    };

    function login() {
    toggleIsAuth(true);
    }

    function logout() {
        toggleIsAuth(false);
    }

return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
)

}

export default AuthContextProvider;