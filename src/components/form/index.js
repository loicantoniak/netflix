import React from "react";
import { Container, Input, Button, Text } from "../form/styles/Styled-form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="commencer" />
    </Button>
  );
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
