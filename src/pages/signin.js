import React, { useState, useContext } from "react";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { SignForm } from "../components";

import { FirebaseContext } from "../context/firebase";

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = email === "" || password === "";

  const handleSignin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <SignForm>
          <SignForm.Title>S'identifier</SignForm.Title>
          {error && <SignForm.Error>{error}</SignForm.Error>}
          <SignForm.Base onSubmit={handleSignin} method="POST">
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
            <SignForm.Submit disabled={isInvalid} type="submit">S'identifier</SignForm.Submit>
          </SignForm.Base>
          <SignForm.Text>
            Première visite sur Netflix ?{" "}
            <SignForm.Link to={ROUTES.SIGNUP}>Inscrivez-vous.</SignForm.Link>
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
