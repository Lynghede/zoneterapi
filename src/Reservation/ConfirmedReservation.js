import React from "react";
// Components

import NavBar from "../Components/Navbar/Navbar";

import Seperator from "../Components/Seperator";
import Header from "../Components/Header";
import Table from "../Components/Table/Table.styled";
import Wrapper from "../Components/Wrapper";
import { useLocation } from "react-router-dom";
import Progress, { Filler } from "../Components/ProgressBar/Progress.styled";
import  {
  TickNegative,
  TickConfirmed,
} from "../Components/SVG/Tick.styled";

function ConfirmedReservation(props) {
  const location = useLocation();

  let percentage = 100;

  return (
    <>
      <NavBar title="Booking"></NavBar>
      <div>
        <Header>Bekræftigelse</Header>
        <Seperator />
        <Wrapper>
          <Progress>
            {percentage >= 33 ? <TickConfirmed /> : <TickNegative />}
            {percentage >= 66 ? <TickConfirmed /> : <TickNegative />}
            {percentage >= 100 ? <TickConfirmed /> : <TickNegative />}
            <Filler width={percentage}></Filler>
          </Progress>
        </Wrapper>
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
        Ved afbud, skriv en sms, eller ring på: mobil 61 60 90 64
        <br></br>
        Giv besked senest dagen før den aftalte tid.
        <br></br>
        Ved udeblivelse, uden afbud, kr. 250,-

        </p>
      </div>
      <Seperator />
    </>
  );
}

export default ConfirmedReservation;
