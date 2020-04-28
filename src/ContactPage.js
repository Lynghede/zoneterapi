import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import Button, { BookingButton, LargerButton } from "./Components/Button";
import Input from "./Components/Form/Input.styled";
import Label from "./Components/Form/Label.styled";
import TextArea from "./Components/Form/TextArea.styled";
import EmailIcon from "./Components/SVG/Email.styled";

function ContactPage() {
  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const [error, setError] = useState("");
  // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  //  const node = useRef();
  // useOnClickOutside(node, () => setOpen(false));

  // function clearFormSubmit() {
  //   setName("");
  //   setPhoneNumber("");
  //   setEmail("");
  //   setMessage("");
  // }

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

  //     async function submitForm(e) {
  //       e.preventDefault();
  //       const sumbitData = {
  //         name: name,
  //         phoneNumber: phoneNumber,
  //         email: email,
  //         message: message
  //       }

  //     setError(null);
  //     if (!name){
  //       setError("Indtast navn");
  //       return;
  //     }
  //     if (!phoneNumber){
  //       setError("Indtast telefon nummer");
  //       return;
  //     }
  //     if (!email){
  //       setError("Indtast e-mail");
  //       return;
  //     }
  //     if (!message){
  //       setError("Hov! Du har ikke indtastet nogen besked, hvis det er svært at formulere, kan du ringe til en snak på 61609064");
  //       return;
  //     }

  //     try {
  //       // await sumbitData(); // ret til et eller andet her, så den ikke konstant loader.
  //       // Tilføj, så den sender e-mail "mortenlynghede@hotmail.com"
  //       setHasBeenSubmitted(true);
  //       clearFormSubmit();
  //     } catch (error) {
  //       const body = await error.response.text();
  //       setError(new Error(body));
  //     } finally {
  //       setError("Succes"); // Ret til noget andet
  //       // clearFormSubmit();

  //     }
  // };

  return (
    <>
      <NavBar title="Kontakt"></NavBar>
      <form
        method="POST"
        action="https://formspree.io/mvoqlvbn"
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
          <Input type="text" name="Navn" placeholder="Lars Larsen" required />
          <Label>Telefon</Label>
          <Input type="telephone" name="Telefon nr" placeholder="12345678" />
          <Label>E-mail</Label>
          <Input
            type="email"
            name="Email"
            placeholder="lars@gmail.dk"
            required
          />
          <Label>Besked/Spørgsmål</Label>
          <TextArea
            type="text"
            name="Besked"
            placeholder="Jeg vil gerne vide mere om din praksis .. "
            required
          />
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <Wrapper>
              <LargerButton>Submit</LargerButton>
            </Wrapper>
          )}
          {status === "ERROR" && <p color="red">Ooops! Der skete en fejl.</p>}
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          {/* <Label>Navn</Label>
          <Input type="name" value={name} onChange={setName}/>
          <Label>Telefon</Label>
          <Input type="phoneNumber" value={phoneNumber} onChange={setPhoneNumber}/>
          <Label>E-mail</Label>
          <Input type="email" value={email} onChange={setEmail}/>
          <Label>Besked/Spørgsmål</Label>
          <TextArea type="message" value={message} onChange={setMessage}/> */}

          {/* <Wrapper>
            <LargerButton  onClick={submitForm}>Send</LargerButton>
            </Wrapper>
            <div>
              {hasBeenSubmitted ? (<Label>Jeg vil kontakte dig hurtigst muligt</Label>) : (<p></p>)}
            </div> */}
        </div>
      </form>
      <Seperator />
    </>
  );
}

export default ContactPage;
