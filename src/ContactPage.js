import React, { useState } from "react";

import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import { LargerButton } from "./Components/Button";
import Input from "./Components/Form/Input.styled";
import Label from "./Components/Form/Label.styled";
import TextArea from "./Components/Form/TextArea.styled";
import EmailIcon from "./Components/SVG/Email.styled";
import { Page } from "./Components/Wrapper";

const mapToken =
  "pk.eyJ1IjoibHluZ2hlZGUiLCJhIjoiY2tteXA4ZXJsMDYyODJwcGYyYXA2N2JvbCJ9.IfxBVyM4pdnJjoUswiwRhw";

function ContactPage() {
  const [status, setStatus] = useState("");

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCES");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <Page>
      <NavBar title="Kontakt"></NavBar>
      <form
        method="POST"
        action="https://formspree.io/xdowbpov"
        onSubmit={submitForm}
      >
        <div>
          <EmailIcon />
          <h1>Kontakt</h1>
          <Seperator />
          <p>
            Kunne du tænkte dig yderligere informationer, eller få en
            uforpligtende snak? Så brug kontaktformularen nedenunder, eller ring
            til mig.
          </p>
        </div>
        <div>
          <Label>Navn</Label>
          <Input type="text" name="Navn" required />
          <Label>Telefon</Label>
          <Input type="telephone" name="Telefon nr" />
          <Label>E-mail</Label>
          <Input type="email" name="Email" required />
          <Label>Besked/Spørgsmål</Label>
          <TextArea type="text" name="Besked" required />
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <Wrapper>
              <LargerButton>Send</LargerButton>
            </Wrapper>
          )}
          {status === "ERROR" && <p color="red">Ooops! Der skete en fejl.</p>}
        </div>
      </form>
      <Seperator />
    </Page>
  );
}

export default ContactPage;
