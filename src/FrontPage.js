import React from "react";
import { useHistory } from "react-router-dom";

// Components
import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import { LargerButton } from "./Components/Button";
import TherapistIcon from "./Components/SVG/Therapist.styled";

function FrontPage() {
  let history = useHistory();
  return (
    <>
      <NavBar title="Lissi Lynghede"></NavBar>

      <div>
        <h1>Zoneterapi</h1>
        <Seperator />
        <p>
          Zoneterapi er en behandlingsform, som via tryk og massage på de
          forskellige reflekszoner under fødderne, sætter skub i kroppens egne
          energier. Blodgennemstrømningen øges i området og der kommer ny energi
          til, således at affaldsstofferne skaffes bort. Alle kan have stor
          glæde af zoneterapi! Det er nemlig genvejen til større velvære,
          ligesom behandlingen er forebyggende, før eventuelle skavanker opstår.
          Det handler med andre ord om at bevare en krop i balance.
        </p>
        <Wrapper>
          <LargerButton onClick={() => history.push("/booking")}>
            Bestil Tid
          </LargerButton>
        </Wrapper>
        <Seperator />
      </div>
      <div>
        <TherapistIcon />
        <h2>Behandleren</h2>
        <Seperator />
        <article>
          Lissi Lynghede, 56 år.
          <br></br>
          <br></br>
          Jeg har valgt at blive zoneterapeut, da jeg de sidste 7 år, selv har
          modtaget zoneterapi og ved at det virker. Får det stadig regelmæssigt,
          da kroppen fortæller mig at det er ved at være tid igen.
          <br></br>
          <br></br>
          Jeg har klinik derhjemme i rolige omgivelser og parkering lige ved
          døren. 10 min gang fra togstation. 2 min. gang fra busholdepladsen i
          Storegade v/Netto
          <br></br>
          Jeg har et holistisk menneskesyn, ønsker at hjælpe dig via
          zoneterapi-behandlinger og til selvhjælp for bedre balance i dit liv.
          <br></br>
          <br></br>
          Jeg er Registreret Alternativ Behandler (RAB) og uddannet på
          Zoneterapeutskolen i Kolding, hvor jeg blev færdig i juni 2020. For at
          beholde certificeringen RAB, er jeg underlagt at holde min uddannelse
          ved lige med efteruddannelseskurser.
          <br></br>
          <br></br>
          Er medlem af{" "}
          <a style={{ color: "#FFFFFF" }} href="\\www.fdz.dk">
            FDZ
          </a>
          .
        </article>
      </div>
      <Seperator />
    </>
  );
}
export default FrontPage;
