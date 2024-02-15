import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useForm} from 'react-hook-form';
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();

    // normale schrijfwijze; niet nodig bij hookform
    // function handleFormSubmit(e) {
    //     e.preventDefault();
    //     login();
    // }
 async function handleFormSubmit(data) {
     const formData = {
         email: data.email,
         password: data.password,
     }
        try {
            const response = await axios.post("http://localhost:3000/login", formData);
            console.log(response)
            login(response.data.accessToken);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="e-mail-field">E-mail adres</label>
                <input type="text"
                       id="e-mail-field"
                       {...register("email", {
                           required: {
                               value: true,
                               // validate: (value) => value.includes('@'),
                               message: 'e-mail adres moet "@" bevatten',
                           },
                       })}
                />
                <label htmlFor="password-field">Wachtwoord</label>
                <input type="text"
                       id="password-field"
                       {...register("password", {
                           required: {
                               value: true,
                               message: 'Dit veld is verplicht'
                           },
                           minLength: {
                               value: 7,
                               message: "Moet minstens 7 karakters bevatten"
                           },
                           maxLength: {
                               value: 12,
                               message: "Mag niet meer dan 12 karakters bevatten"
                           },
                       })}
                />
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;