import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
import MapContent from "./Components/Map/Map";

// Hook
import { useDynamicHero } from "./hooks";

const Hero = styled.img`
  display: block;
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const HeroText = styled.div`
  color: white;
  //font-size: 80px;
  //margin-left: 25px;

  //text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  text-shadow: 0 1px 0 white, 0 2px 0 white, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
  p {
    text-align: center;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
`;

const HeroDiv = styled.div`
  position: absolute;
  top: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSpan = styled.span`
  color: #0d0c1d;
  //font-size: 80px;
  margin-left: 25px;
  text-shadow: -1px 0 #0d0c1d, 0 1px #0d0c1d, 1px 0 #0d0c1d, 0 -1px #0d0c1d;
`;

function FrontPage() {
  let history = useNavigate();
  return (
    <Page style={{ marginTop: "0" }}>
      <Hero src={useDynamicHero()} alt="Hero"></Hero>
      <NavBar style={{ zIndex: "0" }} isTransparent title=""></NavBar>
      <HeroDiv>
        <HeroText>
          <h1 style={{ fontSize: "3.5em", marginBottom: "0" }}>Zoneterapi</h1>
          <h2
            style={{
              fontSize: "3.5em",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            Lissi Lynghede
          </h2>
          {/* <p style={{ fontSize: "1.5em" }}>
                  Zoneterapi er en behandlingsform, som via tryk og massage p??
                  de forskellige reflekszoner under f??dderne s??tter skub i
                  kroppens egne energier. Blodgennemstr??mningen ??ges i omr??det
                  og der kommer ny energi til, s??ledes at affaldsstofferne
                  skaffes bort.
                </p> */}
        </HeroText>
        <ButtonWrapper size="1" style={{ justifyContent: "center" }}>
          <Button
            style={{ borderRadius: "0" }}
            onClick={() => history("/booking")}
          >
            Bestil Tid
          </Button>
          <Button
            style={{ borderRadius: "0" }}
            onClick={() => history("/zoneterapi")}
          >
            L??r mere
          </Button>
        </ButtonWrapper>
      </HeroDiv>

      <Container>
        <Block style={{ flexDirection: "column" }}>
          <TherapistIcon />
          <h2>Behandleren</h2>
          <Seperator />
          <article>
            Lissi Lynghede, 57 ??r.
            <br></br>
            <br></br>
            Jeg har valgt at blive zoneterapeut, fordi jeg de sidste 7 ??r selv
            har modtaget zoneterapi og derfor ved, at det virker. Jeg modtager
            det stadig regelm??ssigt, n??r min krop fort??ller mig, at det er ved
            at v??re tid igen.
            <br></br>
            <br></br>
            Jeg har klinik derhjemme i rolige omgivelser og med parkering lige
            ved d??ren. 10 min. gang fra togstation og 2 min. gang fra
            busholdepladsen i Storegade v/Netto.
            <br></br>
            Jeg har et holistisk menneskesyn, ??nsker at hj??lpe dig via
            zoneterapi-behandlinger og til selvhj??lp for bedre balance i dit
            liv.
            <br></br>
            <br></br>
            Jeg er Registreret Alternativ Behandler (RAB) og uddannet p??
            Zoneterapeutskolen i Kolding, hvor jeg blev f??rdig i juni 2020. For
            at beholde certificeringen RAB, er jeg underlagt at holde min
            uddannelse ved lige med efteruddannelseskurser.
            <br></br>
            <br></br>
            Jeg er medlem af{" "}
            <a style={{ color: "#FFFFFF" }} href="\\www.fdz.dk">
              FDZ
            </a>
            .
          </article>
          {/* <MapContent></MapContent> */}
        </Block>
      </Container>
      <Seperator />
    </Page>
  );
}
export default FrontPage;
