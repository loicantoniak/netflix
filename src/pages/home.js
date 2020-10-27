import React from "react";
import { Form, Feature } from "../components";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Films, séries TV et bien plus en illimité.
          </Feature.Title>
          <Feature.SubTitle>
            Où que vous soyez. Annulez à tout moment.
          </Feature.SubTitle>
          <Form>
            <Form.Text>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </Form.Text>
            <Form.Input placeholder="adresse e-mail" />
            <Form.Button>Commencer</Form.Button>
          </Form>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
