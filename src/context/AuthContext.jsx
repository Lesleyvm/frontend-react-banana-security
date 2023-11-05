import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({});
const AuthContextProvider = ({children}) => {
    const [isAuth, toggleIsAuth] = useState({
        isAuthenticated: false,
        user: null,
    });
    const navigate = useNavigate();

     async function login(token) {
         // de token opslaan in de LS
         localStorage.setItem('token', token);

         // informatie uit de token decoderen (niet vergeten te installeren)
         const userinfo = jwtDecode(token);
         const userId = userinfo.sub;

         try {
             const response = await axios.get(`http://localhost:3000/600/users/${userId}`, {
                //  headers moeten er in staan ter verificatie dat jij de gebruiker bent, precies deze syntax;
                headers: {
                   "Content-Type": 'application/json',
                   Authorization: `Bearer ${token}`,
                }
             });
             console.log(response)

             //  informatie + auth true in state zetten
             toggleIsAuth({
                 isAuthenticated: true,
                 user: {
                     username: response.data.username,
                     email: response.data.email,
                     id: response.data.id,
                 }
             });

         } catch (e) {
             console.error(e);
         }

        console.log('Gebruiker is ingelogd!');
        navigate('/profile');
    }

    function logout() {
        //  token uit de LS verwijderen
        localStorage.removeItem('token');

        toggleIsAuth({
            isAuthenticated: false,
            user: null,
        });
        console.log('Gebruiker is uitgelogd!');
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