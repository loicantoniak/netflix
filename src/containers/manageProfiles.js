import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Header, Profiles, ManageProfiles } from "../components/";

export default function ManageProfilesContainer() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Gestion des profils :</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
        <ManageProfiles.ButtonLink to={ROUTES.BROWSE}>Terminé</ManageProfiles.ButtonLink>
      </Profiles>
    </>
  );
}
