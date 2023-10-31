import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <label htmlFor="e-mail-field">E-mail adres</label>
          <input type="text"
                 id="e-mail-field"/>
          <label htmlFor="password-field">Wachtwoord</label>
          <input type="text"
                 id="password-field"/>
          <label htmlFor="user-name-field">Gebruikersnaam</label>
          <input type="text"
                 id="user-name-field"/>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;