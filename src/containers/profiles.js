import React from "react";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Header } from "../components/";
import { Profiles } from "../components";

export default function selectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Qui est-ce ?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
        <Profiles.ButtonLink to={ROUTES.MANAGEPROFILES}>Gérer les profils</Profiles.ButtonLink>
      </Profiles>
    </>
  );
}
