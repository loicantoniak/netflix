import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Foire aux questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
    </Accordion>
  );
}
