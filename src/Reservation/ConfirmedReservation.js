import React from "react";
// Components
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { theme } from "../theme";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Seperator from "../Components/Seperator";
import Header from "../Components/Header";
import Table from "../Components/Table/Table.styled";
import Wrapper from "../Components/Wrapper";
import { useLocation } from "react-router-dom";

function ConfirmedReservation(props) {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar title="Booking"></NavBar>
        <div>
          <Header>Bekræftigelse</Header>
          <Seperator />
          <h2>Reservationer</h2>
          <Wrapper>
            {location.state ? (
              <Table>
                <tr id="tableHeaders">
                  <th>Dato</th>
                  <th>Tid</th>
                  <th>Pris</th>
                </tr>
                {location.state.tempReservation.map((reservation) => (
                  <tr id="products">
                    <td>{reservation.date}</td>
                    <td>{reservation.time}</td>
                    <td>{reservation.price}</td>
                  </tr>
                ))}
              </Table>
            ) : (
              <p>Du har ingen reservationer</p>
            )}
          </Wrapper>
        </div>
      </>
      <Seperator />
      <Footer />
    </ThemeProvider>
  );
}

export default ConfirmedReservation;
