import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from "axios";

function SignUp() {
    const {register, handleSubmit} = useForm();

    async function handleFormSubmit(data) {
        const formData = {
            email: data.email,
            password: data.password,
            username: data.username,
        }

        try {
            const response = await axios.post("http://localhost:3000/register", formData);
            navigate('/signing');
            console.log(response);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="e-mail-field">E-mail adres</label>
                <input type="text"
                       id="e-mail-field"
                       {...register("email", {
                           required: {
                               value: true,
                               message: 'e-mail adres moet "@" bevatten'
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
                <label htmlFor="user-name-field">Gebruikersnaam</label>
                <input type="text"
                       id="user-name-field"
                       {...register("username", {
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
                <button type="submit">Verzenden</button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;