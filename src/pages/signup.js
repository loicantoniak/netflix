import React, { useState, useContext } from "react";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { SignForm } from "../components";

import { FirebaseContext } from "../context/firebase";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || email === "" || password === "";

  const handleSignup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoUrl: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
          setFirstName('');
          setEmail('');
          setPassword('');
          setError(error.message);
      })

  };
  return (
    <>
      <HeaderContainer>
        <SignForm>
          <SignForm.Title>S'enregistrer</SignForm.Title>
          {error && <SignForm.Error>{error}</SignForm.Error>}
          <SignForm.Base onSubmit={handleSignup} method="POST">
            <SignForm.Input
              placeholder="Votre prénom"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <SignForm.Input
              placeholder="E-mail ou numéro de téléphone"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <SignForm.Input
              placeholder="Mot de passe"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignForm.Submit disabled={isInvalid} type="submit">
              S'enregistrer
            </SignForm.Submit>
          </SignForm.Base>
          <SignForm.Text>
            Déjà inscrit ?{" "}
            <SignForm.Link to={ROUTES.SIGNIN}>Identifiez-vous.</SignForm.Link>
          </SignForm.Text>
          <SignForm.TextSmall>
            Cette page est protégée par Google reCAPTCHA pour nous assurer que
            vous n'êtes pas un robot.{" "}
          </SignForm.TextSmall>
        </SignForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
