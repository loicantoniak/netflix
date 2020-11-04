import React from "react";
import { Container, ButtonLink } from "./styles/Styled-manageProfiles";

export default function ManageProfiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ManageProfiles.ButtonLink = function ManageProfilesButtonLink({
  children,
  ...restProps
}) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
