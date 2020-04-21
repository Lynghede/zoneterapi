import React from "react";
// Components

import NavBar from "../Components/Navbar/Navbar";

import Seperator from "../Components/Seperator";
import Header from "../Components/Header";
import Table from "../Components/Table/Table.styled";
import Wrapper from "../Components/Wrapper";
import { useLocation } from "react-router-dom";

function ConfirmedReservation(props) {
  const location = useLocation();

  return (
    <>
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
      <div>
        <h2>Reservations politik</h2>
        <Seperator />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <Seperator />
    </>
  );
}

export default ConfirmedReservation;
