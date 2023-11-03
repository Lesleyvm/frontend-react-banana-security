import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});
const AuthContextProvider = ({children}) => {
    const [isAuth, toggleIsAuth] = useState({
        isAuthenticated: false,
        user: null,
    });
    const navigate = useNavigate();
    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth({
            isAuthenticated: true,
            user: {
                username: '',
                email: '',
                id: '',
            }
        });
        navigate('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth({
            isAuthenticated: false,
            user: null,
        });
        navigate('/');
    }

    const data = {
        isAuth: isAuth.isAuthenticated,
        user: isAuth.user,
        logout: logout,
        login: login,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;