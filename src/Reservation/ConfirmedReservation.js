import React from "react";
// Components
import Seperator from "../Components/Seperator";
import Header from "../Components/Header";
import Table from "../Components/Table/Table.styled";
import Wrapper from "../Components/Wrapper";

function ConfirmedReservation(props) {
  return (
    <div>
      <Header>Complete</Header>
      <Seperator />
      <h2>Reservationer</h2>
      <Wrapper>
        <Table>
          <tr id="tableHeaders">
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
          {props.yourReservation.map((reservation) => (
            <tr id="products">
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.price}</td>
            </tr>
          ))}
        </Table>
      </Wrapper>
    </div>
  );
}

export default ConfirmedReservation;
