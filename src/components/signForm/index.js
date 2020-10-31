import React from "react";
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Submit,
  Input,
} from "./styles/Styled-SignForm";

export default function SignForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignForm.Base = function SignFormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

SignForm.Error = function SignFormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

SignForm.Title = function SignFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SignForm.Text = function SignFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SignForm.TextSmall = function SignFormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

SignForm.Link = function SignFormTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

SignForm.Input = function SignFormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

SignForm.Submit = function SignFormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
