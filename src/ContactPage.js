import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import useOnClickOutside from "./hooks";



import Burger from "./Components/Burger/Burger";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import Button, { BookingButton, LargerButton} from "./Components/Button";
import Footer from "./Components/Footer/Footer";
import Input from "./Components/Form/Input";
import Label from "./Components/Form/Label.styled";
import TextArea from "./Components/Form/TextArea.styled";


function ContactPage () {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
     const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    function clearFormSubmit() {
      setName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
    }

    async function submitForm(e) {
      e.preventDefault();
      const sumbitData = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        message: message
      }
    
    setError(null);
    if (!name){
      setError("Indtast navn");
      return;
    }
    if (!phoneNumber){
      setError("Indtast telefon nummer");
      return;
    }
    if (!email){
      setError("Indtast e-mail");
      return;
    }
    if (!message){
      setError("Hov! Du har ikke indtastet nogen besked, hvis det er svært at formulere, kan du ringe til en snak på 61609064");
      return;
    }

    try {
      // await sumbitData(); // ret til et eller andet her, så den ikke konstant loader. 
      // Tilføj, så den sender e-mail "mortenlynghede@hotmail.com"
      setHasBeenSubmitted(true);
      clearFormSubmit();
    } catch (error) {
      const body = await error.response.text();
      setError(new Error(body));
    } finally {
      setError("Succes"); // Ret til noget andet 
      // clearFormSubmit();

    }
};

    return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
        <NavBar>
          <Home />
          <header>Kontakt</header>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </NavBar>
        <form method="POST" onSubmit={submitForm}>
        <div>
        
            <h1>Kontakt</h1>
            <Seperator/>
            <p>
            Kunne du tænkte dig yderligere informationer, eller få en uforpligtende snak? Så brug kontaktformularen nedenunder, eller ring til mig.
            </p>
            
            
        </div>
        <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
          <Label>Navn</Label>
          <Input type="name" value={name} onChange={setName}/>
          <Label>Telefon</Label>
          <Input type="phoneNumber" value={phoneNumber} onChange={setPhoneNumber}/>
          <Label>E-mail</Label>
          <Input type="email" value={email} onChange={setEmail}/>
          <Label>Besked/Spørgsmål</Label>
          <TextArea type="message" value={message} onChange={setMessage}/>
          
          <Wrapper>
            <LargerButton onClick={submitForm}>Send</LargerButton>
            </Wrapper>
            <div>
              {hasBeenSubmitted ? (<Label>Jeg vil kontakte dig hurtigst muligt</Label>) : (<p></p>)}
            </div>
          
          </div>
        </form>
        </>
        <Footer /> 
        </ThemeProvider>
 ); }

export default ContactPage;