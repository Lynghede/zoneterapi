import React from "react";
import { theme } from "./theme";
import styled from "styled-components";
// Components
import NavBar from "./Components/Navbar/Navbar";
import Seperator from "./Components/Seperator";
import MassageIcon from "./Components/SVG/Massage.styled";

// Wrappers
import {
  Page,
  Container,
  Block,
  Content,
  ImageWrapper,
  GridContainer,
  GridItem,
} from "./Components/Wrapper";
import InfoBox from "./Components/InfoBox/InfoBox";

export const P = styled.p`
  flex-direction: column;
  margin-bottom: 0;
  :first-child {
    margin-top: 10px;
  }
`;

function Zoneterapi() {
  return (
    <Page>
      <NavBar title="Zoneterapi"></NavBar>
      <Container>
        <Block>
          <h1>zoneterapi</h1>
        </Block>
        <Seperator />
        <Block>
          <Content>
            <div>
              <article>
              Vi mennesker er en sammensat organisme. Hvis noget ikke fungerer, som det skal, bliver der ubalance. Resultatet er sygdom, smerter, træthed og utilpashed.
                <br />
                <br />
                Zoneterapi hjælper til genoprettelse af balancen.
                <br />
                <br />
                Under og på fødderne findes et fuldstændigt kort over menneskekroppen. Hver del af kroppen har en zone på fødderne, som kaldes reflekszoner. Hvis der er ømhed i en reflekszone, hænger det sammen med, at en del af kroppen ikke fungerer optimalt. Ved at behandle de ømme reflekszoner med specielle trykkombinationer, kan zoneterapeuten påvirke organerne til en bedre funktion og dermed genoprette kroppens balance.
              </article>
            </div>
          </Content>
          <Content>
            <ImageWrapper>
              <img
                style={{ width: "100%", height: "100%", maxWidth: "330px" }}
                src={process.env.PUBLIC_URL + "/zoneterapi.png"}
              ></img>
            </ImageWrapper>
          </Content>
        </Block>
      </Container>
      <Block>
        <Block>
          <GridContainer style={{ display: "flex" }}>
            <GridItem style={{ display: "flex" }}>
              <InfoBox
                color={theme.primaryTeal}
                title="Behandlingen"
                subtitle="Generel information"
              >
                <P>
                Behandlingen foregår ved trykmassage på føddernes under- og overside. Gennem de enkelte reflekszoners ømhedsgrad, hudens tilstand o.a. danner zoneterapeuten sig et billede af ubalancens karakter, placering og styrke. Behandlingen tilrettelægges herefter. Gennem behandlingen påvirkes hele kroppen til at søge efter optimal balance.
                <br/>
                <br/>
                Da jeg arbejder på dine fødder og op ad underbenene, bedes du have bukser på, som nemt kan trækkes op til knæerne. Du skal ikke medbringe noget, - lagen og håndklæde er der sørget for. Drik gerne godt med vand inden du kommer.
                </P>
              </InfoBox>
            </GridItem>
            <GridItem style={{ display: "flex" }}>
              <InfoBox
                color={theme.primaryBox}
                title="Behandlinger i praksis"
                subtitle="Første og efterfølgende gange"
              >
                <P>
                  Første behandling:
                  <br/>
                  Her har vi en samtale omkring de ”ting”, som du kommer med. Jeg er forpligtet ifølge lovgivningen til at lave en journal på dig. Jeg har tavshedspligt og udleverer info omkring GDPR Ud fra samtalen tilrettelægger jeg din behandling. Du får minimum 45 min. zoneterapibehandling, efterfulgt af vejledning omkring evt. reaktioner og hvad der kan fremme behandlingens effekt, når du kommer hjem.
                <br/>
                Efterfølgende behandling:
          
                Vi starter ud med at tale om, hvad er sket siden sidst. Behandlingen tilpasses derefter.
              

                </P>
              </InfoBox>
            </GridItem>
            <GridItem style={{ display: "flex" }}>
              <InfoBox
                color={theme.primaryBlue}
                title="Reaktioner"
                subtitle="Forskellige og unikke"
              >
                <P>
                Enhver reaktion hænger sammen med en bedre balance og almentilstand. Det er ikke muligt at forudsige kroppens måde at reagere på, de reaktionerne er individuelle. Reaktioner skal ses som positive, da de fortæller, at kroppen tager imod og arbejder med de forskellige ubalancer, og at bedring er på vej.
          <br />
          <br />
          Efter en behandling vil du få yderligere information omkring forventede reaktioner og vejledning i, hvad der vil være hensigtsmæssig at tage hensyn til for at opnå den bedste effekt af behandlingen.
                </P>
              </InfoBox>
            </GridItem>
          </GridContainer>
        </Block>
      </Block>
      {/* <div>
        <MassageIcon />
        <h2>behandling</h2>
        <Seperator />
        <article>
          Zoneterapi-behandlingen foregår ved trykmassage på føddernes under- 0g
          overside. Gennem de enkelte reflekszoners ømhedsgrad, hudens tilstand
          o.a., danner zoneterapeuten sig et billede af ubalancens karakter,
          placering og styrke. Behandlingen tilrettelægges herefter. Gennem
          behandlingen påvirkes hele kroppen til at søge efter optimal balance.
          <br />
          <br />
          Praktisk info:
          <br />
          Da jeg arbejder på dine fødder og op af underbenene, bedes du have
          bukser på som nemt kan trækkes op til knæerne.
          <br />
          Du skal ikke medbringe noget, - lagen og håndklæde er der sørget for.
          <br />
          Drik gerne godt med vand inden du kommer.
          <br />
          <br />
          Første behandling:
          <ul>
            <li>Her har vi en samtale omkring de ”ting” som du kommer med.</li>
            <li>
              Jeg er forpligtet ifølge lovgivningen at lave en journal på dig.
            </li>
            <li>Jeg har tavshedspligt og udlevere info omkring GDPR</li>
            <li>Ud fra samtalen, tilrette ligger jeg din behandling</li>
            <li>
              Du får min 45 min zoneterapi behandling, efterfulgt af vejledning
              omkring evt. reaktioner og hvad der vil fremme behandlingens
              effekt når du kommer hjem.
            </li>
          </ul>
          Efterfølgende behandling:
          <ul>
            <li>Vil altid starte med, hvad er sket siden sidst.</li>
            <li>Tilpasse behandlingen derefter.</li>
            <li>Behandling </li>
          </ul>
        </article>
      </div>
      <div>
        <h2>Reaktioner</h2>
        <Seperator />
        <article>
          Reaktionerne kan være forskellige. Enhver reaktion hænger sammen med
          en bedre balance og almentilstand. Det er ikke muligt helt at
          forudsige kroppens måde at reagere på, de reaktionerne er
          individuelle. Reaktioner skal ses som positive, da det fortæller at
          kroppen tager imod og og arbejder med de forskellige ubalancer, og at
          bedring er på vej.
          <br />
          <br />
          Efter en behandling vil du få yderligere info omkring forventede
          reaktioner og vejledning i hvad der vil være hensigtsmæssig at tage
          hensyn til, for at opnå den bedste effekt af behandlingen.
        </article>
      </div> */}
      <Seperator />
    </Page>
  );
}
export default Zoneterapi;
