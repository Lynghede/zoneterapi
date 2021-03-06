import React from "react";

import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Seperator from "./Components/Seperator";
import { Page } from "./Components/Wrapper";

import Image from "./Components/IMG/Img";
import TherapistIcon from "./Components/SVG/Therapist.styled";
import MotivationIcon from "./Components/SVG/Motivation.styled";
import EducationIcon from "./Components/SVG/Education.styled";
import Lissi from "./Components/IMG/Lissi.jpg";

function About() {
  return (
    <Page>
      <NavBar title="Om mig"></NavBar>
      <div>
        <h1>Om behandleren</h1>
        <TherapistIcon />
        <Seperator />
        <article>
          Lissi Lynghede, 57 år.
          <br></br>
          <br></br>
          Jeg har valgt at blive zoneterapeut, fordi jeg de sidste 7 år selv har
          modtaget zoneterapi og derfor ved, at det virker. Jeg modtager det
          stadig regelmæssigt, når min krop fortæller mig, at det er ved at være
          tid igen.
          <br></br>
          <br></br>
          Jeg har et holistisk menneskesyn, ønsker at hjælpe dig via
          zoneterapi-behandlinger og til selvhjælp for bedre balance i dit liv.
          <br></br>
          <br></br>
        </article>
        <Wrapper>
          <Image src={process.env.PUBLIC_URL + "/Lissi.jpg"} />
        </Wrapper>
      </div>
      <div>
        <MotivationIcon />
        <h2>Motivation</h2>
        <Seperator />

        <article>
          <h3>Forhistorie</h3>
          Min skønne mormor døde alt for tidligt, syntes jeg dengang. Hun blev
          64 år gammel. Jeg var 17 år gammel og elskede hende højt. Hun døde af
          kræft, dog levede hun mange flere år end lægerne først havde antaget.
          Hun nåede at leve 7 år med sygdommen, lægerne gav hende ½ år.
          <br></br>
          <br></br>
          Min mormor og morfar begyndte at dyrke deres egne økologiske
          grøntsager, hvilket ikke var meget brugt i 70’erne. Dette ledte til
          forbedringer hos min mormor, hvilket gjorde, at mine bedsteforældre
          gik all in på at læse om sund kost og ændrede deres livsstil. Dengang
          var det meget alternativt.
          <br></br>
          <br></br>
          Dengang var jeg ikke meget bevidst om, hvorfor de gjorde, som de
          gjorde. Det var mærkeligt; alt det der med økologi og sunde retter,
          som vi skulle smage på. Herunder brændenældesuppe, kefirmælk og
          urtete.
          <br></br>
          <br></br>
          Men tiderne skifter, og i dag vil jeg mene, at mine bedsteforældre
          lagde grundstenene til min interesse for feltet, via deres sunde
          levevis og deres måde at skabe balance i livet på.
          <br></br>
          <br></br>
          <h3>Skabe et liv med balance</h3>
          De sidste 25 år har jeg interesseret mig for sund kost, kosttilskud,
          motion og på at inddrage forskellige behandlingsformer, da jeg ikke
          accepterer at have det dårligt, hverken fysisk som psykisk.
          <br></br>
          <br></br>
          Jeg mener, vi selv kan og bør gøre noget for at få det bedre.
          <br></br>
          <br></br>
          Men det er svært at navigere rundt i det enorme udbud, der er i dagens
          verden. Og hvor starter man så? Jeg har gennem årene stillet mig selv
          spørgsmålene: Hvad er godt for mig? Hvordan ved jeg, at det virker?
          <br></br>
          <br></br>
          Det kan være en jungle at finde rundt i, hvilket har resulteret i, at
          jeg har prøvet en del forskelligt på egen krop. Derigennem har jeg
          opbygget en erfaringskompetence, som jeg ønsker at dele med jer. For
          hvad er godt til hvad, og hvornår er det godt til det?
          <br></br>
          <br></br>
          Der er mange dygtige behandlere derude, som jeg har haft og stadig har
          stor glæde af. Derfor ville jeg selv være behandler, så jeg kan hjælpe
          andre, ligesom jeg selv er blevet hjulpet. Jeg har en stor
          livserfaring, som jeg håber andre kan få glæde af.
          <br></br>
          <br></br>
          Jeg tror på, at intet er tilfældigt, og derfor er der helt sikkert
          også en grund til, at du er landet lige her på min side.
          <br></br>
          <br></br>
          Som tidligere underviser er jeg god til at formidle og forklare, så
          det er nemt at forstå.
          <br></br>
          <br></br>
          Jeg vil glæde mig til at hjælpe dig med at få balance i dit liv.
          <h3>personlig Erfaring</h3>
          Gennem årene har jeg gjort brug af:
          <ul>
            <li>Zoneterapi</li>
            <li>Terapi, forskellige terapeutiske tilgang</li>
            <li>Stressvejledning</li>
            <li>Mindfulness kursus</li>
            <li>Fysioterapi</li>
            <li>Kiropraktor</li>
            <li>Massage, forskellige slags</li>
            <li>Kinesiologi</li>
            <li>Akupunktur</li>
            <li>Kost vejledning</li>
            <li>Healing</li>
            <li>Clairvoyance</li>
            <li>Yoga i over 20 år</li>
            <li>Retreat, en hel weekend med yoga og meditation</li>
            <li>Senetensbehandling</li>
          </ul>
          Derudover har jeg læst MANGE bøger indenfor ovennævnte felter.
        </article>
      </div>
      <EducationIcon />
      <h2>Uddannelse</h2>
      <Seperator />
      <article>
        Jeg er Registreret Alternativ Behandler (RAB) og uddannet på
        Zoneterapeutskolen i Kolding, hvor jeg blev færdig i juni 2020. For at
        beholde certificeringen RAB, er jeg underlagt at holde min uddannelse
        ved lige med efteruddannelseskurser.
        <br />
        <br />
        Jeg er medlem af{" "}
        <a style={{ color: "white" }} href="\\www.fdz.dk">
          FDZ
        </a>
        <br />
        <br />
        Zoneterapeutuddannelsen indeholder følgende fag:
        <ul>
          <li>Teoretisk: Anatomi og fysiologi</li>
          <li>Sygdomslære</li>
        </ul>
        Begge afsluttet med eksamen.
        <br />
        <br />
        Yderligere fag:
        <ul>
          <li>Praktisk zoneterapi</li>
          <li>Medianlære / traditionelt kinesisk filosofi TKF</li>
          <li>Organrelaterede muskler</li>
          <li>Kost, vitamin og minerallære</li>
          <li>Biopati</li>
          <li>Psykologi</li>
          <li>Førstehjælp med hjertemassage</li>
          <li>Regnskab og markedsføring</li>
          <li>Dokumenterede behandlinger</li>
        </ul>
        <br />
        <br />
      </article>
      <Seperator />
    </Page>
  );
}

export default About;
