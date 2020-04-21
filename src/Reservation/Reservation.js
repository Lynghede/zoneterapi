import React, { useState } from "react";

import { parse, differenceInDays, getMonth, isSameDay } from "date-fns";
import { useCollection } from "../firebase";
import { Discount } from "@styled-icons/boxicons-solid";

import { MoneyBillAlt } from "@styled-icons/fa-regular";
import styled from "styled-components";

// Components
import Button, { BookingButton, LargerButton } from "../Components/Button";
import Input, { InputDate } from "../Components/Input";
import Select, { ColorStyles, monthStyle } from "../Components/Select";

import ReservationTab, {
  ReservationContainer,
} from "../Components/ReservationTab";
import MakeReservation, {
  WrapperMakeReservation,
} from "../Components/MakeReservation";
import Label, { FlashyLabel } from "../Components/Label";
import Header from "../Components/Header";
import Wrapper from "../Components/Wrapper";
import Seperator from "../Components/Seperator";

import ConfirmedReservation from "./ConfirmedReservation";

const StyledDiscount = styled(Discount)`
  height: 1.2em;
  margin-bottom: 10px;
  margin-right: 5px;
`;
const StyledMoneyBillAlt = styled(MoneyBillAlt)`
  height: 1em;
  margin-top: 2.1px;
  margin-right: 5px;
`;

const monthOptions = [];
/* eslint-disable no-fallthrough */
switch (getMonth(new Date())) {
  case 0:
    monthOptions.push({ value: 0, label: "Januar" });
  case 1:
    monthOptions.push({ value: 1, label: "Februar" });
  case 2:
    monthOptions.push({ value: 2, label: "Marts" });
  case 3:
    monthOptions.push({ value: 3, label: "April" });
  case 4:
    monthOptions.push({ value: 4, label: "Maj" });
  case 5:
    monthOptions.push({ value: 5, label: "Juni" });
  case 6:
    monthOptions.push({ value: 6, label: "Juli" });
  case 7:
    monthOptions.push({ value: 7, label: "August" });
  case 8:
    monthOptions.push({ value: 8, label: "September" });
  case 9:
    monthOptions.push({ value: 9, label: "Oktober" });
  case 10:
    monthOptions.push({ value: 10, label: "November" });
  case 11:
    monthOptions.push({ value: 11, label: "December" });
}
/* eslint-enable no-fallthrough */

function parseDate(date) {
  return parse(date, "yyyy-MM-dd", new Date());
}

function Reservation(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(425);
  const [isReserved, setReserved] = useState(false);
  const [yourReservation, setYourReservation] = useState([]);

  const [tempReservation, setTempReservation] = useState([]);
  const bookTempReservation = {
    add(newReservation) {
      setTempReservation([...tempReservation, newReservation]);
    },
  };

  const removeTempReservation = (i) => {
    let newArray = [...tempReservation];
    newArray.splice(i, 1);
    setTempReservation(newArray);
  };

  const [reservations, bookReservation] = useCollection("Reservations");
  const [resolved, resolveReservation] = useCollection("ResolvedReservations");
  const [bookingMonthFilter, setBookingMonthFilter] = useState([
    monthOptions[0],
  ]);
  const [error, setError] = useState("");

  tempReservation.sort((a, b) => {
    const parsedA = parseDate(a.date);
    const parsedB = parseDate(b.date);

    // if same day, order by time
    if (isSameDay(parsedA, parsedB)) {
      return a.time > b.time;
    }

    // if not order by day
    if (!isSameDay(parsedA, parsedB)) {
      return a.date > b.date;
    }
  });

  function shouldRemoveDate(date, d, y) {
    const parsed = parse(date, "yyyy-MM-dd", new Date());

    var result = differenceInDays(parsed, new Date());
    if (result < d || result > y) {
      return true;
    }
  }

  function checkAvailability(date, time) {
    let d = 0;
    let y = 365;
    if (shouldRemoveDate(date, d, y)) {
      return false;
    }
    for (let resolve of resolved) {
      if (resolve.date === date && resolve.time === time) {
        return false;
      }
    }
    for (let reservation of reservations) {
      if (reservation.date === date && reservation.time === time) {
        return false;
      }
    }
    for (let temp of tempReservation) {
      if (temp.date === date && temp.time === time) {
        return false;
      }
    }
    return true;
  }

  const timeSlotOptions = [];
  if (date !== "") {
    for (let i = 10; i < 18; i += 1) {
      for (let j = 0; j < 4; j += 3) {
        const time = i + ":" + j + "0";
        if (checkAvailability(date, time)) {
          timeSlotOptions.push({ label: time, value: time });
        }
      }
    }
  }

  async function addReservation() {
    try {
      await tempReservation.forEach((reservation) =>
        bookReservation.add(reservation)
      );
    } catch (error) {
      const body = await error.response.text();
      setError(new Error(body));
    } finally {
      setYourReservation(tempReservation);
      setTempReservation([]);
    }
  }

  function handleClick() {
    addReservation();
    setReserved(true);
  }

  async function addTempReservation() {
    const reservationData = {
      date: date,
      time: time,
      name: name,
      price: price,
    };

    setError(null);
    if (!name) {
      setError("Please enter a name");
      return;
    }
    if (!date) {
      setError("Please enter a date");
      return;
    }
    if (!time) {
      setError("Please enter a time");
      return;
    }

    try {
      await bookTempReservation.add(reservationData);
      // props.onComplete();
    } catch (error) {
      console.log(error);
      const body = await error.response.text();
      setError(new Error(body));
    } finally {
      setTime("");
    }
  }

  const tempFilteredReservations = tempReservation.filter((reservation) => {
    let parsedMonth = parse(reservation.date, "yyyy-MM-dd", new Date());
    parsedMonth = getMonth(parsedMonth);
    if (bookingMonthFilter === null || bookingMonthFilter.length === 0)
      return true;
    return bookingMonthFilter.some((bookingMonth) => {
      if (parsedMonth === bookingMonth.value) return true;
    });
  });

  function totalPrice() {
    let total = 0;
    let item = tempReservation.length;
    let discount3 = 50;
    let discount5 = 65;
    let discount10 = 85;
    for (let i = 0; i < tempReservation.length; i++) {
      total += tempReservation[i].price;
    }
    if (item >= 3 && item < 5) {
      return total - discount3 * item;
    }
    if (item >= 5 && item < 10) {
      return total - discount5 * item;
    }
    if (item === 10) {
      return total - discount10 * item;
    } else {
      return total;
    }
  }

  function totalDiscount() {
    let totalDiscount = 0;
    let discount3 = 50;
    let discount5 = 65;
    let discount10 = 85;
    let item = tempReservation.length;

    if (item >= 3 && item < 5) {
      return (totalDiscount = item * discount3);
    }
    if (item >= 5 && item < 10) {
      return (totalDiscount = item * discount5);
    }
    if (item === 10) {
      return (totalDiscount = item * discount10);
    } else {
      return totalDiscount;
    }
  }

  function currentQuantity() {
    let quantity = props.quantity - tempReservation.length;
    return quantity;
  }

  return (
    <WrapperMakeReservation>
      <div>
        {console.log(yourReservation)}
        {isReserved ? (
          <ConfirmedReservation yourReservation={yourReservation}>
            {console.log(yourReservation)}
          </ConfirmedReservation>
        ) : (
          <div>
            <Header>Make Reservation</Header>
            <Seperator />
            {error && <p style={{ color: "red" }}>{error}</p>}

            <MakeReservation>
              <div>
                {currentQuantity() === 0 ? (
                  <p>Nu mangler du blot at confirm dine bookings</p>
                ) : (
                  <p>Vælg {currentQuantity()} tider</p>
                )}

                <Label>Name</Label>
                <Input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Label>Date</Label>
                <InputDate
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Label>Time</Label>
                <Select
                  type="time"
                  value={{ label: time, value: time }}
                  options={timeSlotOptions}
                  onChange={(option) => setTime(option.value)}
                  styles={ColorStyles}
                ></Select>
              </div>{" "}
            </MakeReservation>
            <Wrapper>
              {currentQuantity() === 0 ? (
                <Button onClick={handleClick}>Reserver</Button>
              ) : (
                <Button onClick={addTempReservation}>
                  Tilføj {currentQuantity()} mere
                </Button>
              )}
            </Wrapper>
            <div>
              <Wrapper>
                <FlashyLabel>
                  <StyledMoneyBillAlt />
                  Total: {totalPrice()}
                </FlashyLabel>
              </Wrapper>
              <Wrapper>
                <FlashyLabel>
                  <StyledDiscount />
                  Discount: {totalDiscount()}
                </FlashyLabel>
              </Wrapper>{" "}
            </div>
            <ReservationContainer>
              {tempFilteredReservations.map((reservation, i) => (
                <div>
                  <ReservationTab>
                    <ol>Date: {reservation.date}</ol>
                    <ol>Time: {reservation.time}</ol>
                    <ol>Name: {reservation.name}</ol>
                    <Wrapper>
                      <Button onClick={() => removeTempReservation(i)}>
                        Remove
                      </Button>
                    </Wrapper>
                  </ReservationTab>
                </div>
              ))}
            </ReservationContainer>
          </div>
        )}
      </div>
    </WrapperMakeReservation>
  );
}

export default Reservation;
