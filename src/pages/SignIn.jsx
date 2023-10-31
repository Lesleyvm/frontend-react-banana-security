import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const {login} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault(); // Dit voorkomt het standaardgedrag van een formulierindiening

        // Voer hier de inloglogica uit, bijvoorbeeld via een API-aanroep of andere relevante functies.
        // Veronderstel dat je een functie 'login' hebt in je context die inlogt.
        login();
    };

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form>
                <label htmlFor="e-mail-field">E-mail adres</label>
                <input type="text"
                       id="e-mail-field"/>
                <label htmlFor="password-field">Wachtwoord</label>
                <input type="text"
                       id="password-field"/>
                <button type="submit" onClick={handleLogin}>Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;