import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} />
        <Header.ButtonLink to={ROUTES.SIGNIN}>S'identifier</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
