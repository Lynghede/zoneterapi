import React from "react";
import { useHistory } from "react-router-dom";

// Components
import NavBar from "./Components/Navbar/Navbar";
import Wrapper, {
  Page,
  Container,
  Content,
  Block,
  ButtonWrapper,
} from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import Button, { TransparentButton, LargerButton } from "./Components/Button";
import TherapistIcon from "./Components/SVG/Therapist.styled";

function FrontPage() {
  let history = useHistory();
  return (
    <Page>
      <NavBar title="Lissi Lynghede"></NavBar>
      <Container>
        <Block size="">
          <Content align="center">
            <h1>Zoneterapi</h1>
            <Seperator />
            <p style={{ fontSize: "1.5em" }}>
            Zoneterapi er en behandlingsform, som via tryk og massage på de forskellige reflekszoner under fødderne sætter skub i kroppens egne energier. Blodgennemstrømningen øges i området og der kommer ny energi til, således at affaldsstofferne skaffes bort.
            </p>
            <ButtonWrapper size="1" style={{ justifyContent: "center" }}>
              <Button onClick={() => history.push("/booking")}>
                Bestil Tid
              </Button>
              <TransparentButton onClick={() => history.push("/zoneterapi")}>
                Lær mere
              </TransparentButton>
            </ButtonWrapper>

            <Seperator />
          </Content>
        </Block>
      </Container>
      <div>
        <TherapistIcon />
        <h2>Behandleren</h2>
        <Seperator />
        <article>
          Lissi Lynghede, 56 år.
          <br></br>
          <br></br>
          Jeg har valgt at blive zoneterapeut, fordi jeg de sidste 7 år selv har modtaget zoneterapi og derfor ved, at det virker. Jeg modtager det stadig regelmæssigt, når min krop fortæller mig, at det er ved at være tid igen.
          <br></br>
          <br></br>
          Jeg har klinik derhjemme i rolige omgivelser og med parkering lige ved døren. 10 min. gang fra togstation og 2 min. gang fra busholdepladsen i Storegade v/Netto.
          <br></br>
          Jeg har et holistisk menneskesyn, ønsker at hjælpe dig via zoneterapi-behandlinger og til selvhjælp for bedre balance i dit liv.

          <br></br>
          <br></br>
          Jeg er Registreret Alternativ Behandler (RAB) og uddannet på Zoneterapeutskolen i Kolding, hvor jeg blev færdig i juni 2020. For at beholde certificeringen RAB, er jeg underlagt at holde min uddannelse ved lige med efteruddannelseskurser.
          <br></br>
          <br></br>
          Jeg er medlem af{" "}
          <a style={{ color: "#FFFFFF" }} href="\\www.fdz.dk">
            FDZ
          </a>
          .
        </article>
      </div>
      <Seperator />
    </Page>
  );
}
export default FrontPage;
