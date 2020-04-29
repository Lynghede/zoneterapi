import React, { useState } from "react";

import { parse, differenceInDays, getMonth, isSameDay } from "date-fns";
import { useCollection } from "./firebase";

// Components
import Button from "./Components/Button";
import Input, { InputDate } from "./Components/Input";
import Select, { ColorStyles, monthStyle } from "./Components/Select";
import ReservationTab, {
  ReservationContainer,
} from "./Components/ReservationTab";
import MakeReservation, {
  WrapperMakeReservation,
} from "./Components/MakeReservation";
import Label from "./Components/Label";
import Header from "./Components/Header";
import Border from "./Components/Border";
import Page from "./Page";
import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";

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

const resolveMonthOptions = [
  { value: 0, label: "Januar" },
  { value: 1, label: "Februar" },
  { value: 2, label: "Marts" },
  { value: 3, label: "April" },
  { value: 4, label: "Maj" },
  { value: 5, label: "Juni" },
  { value: 6, label: "Juli" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "Oktober" },
  { value: 10, label: "November" },
  { value: 11, label: "December" },
];

function parseDate(date) {
  return parse(date, "yyyy-MM-dd", new Date());
}

function Admin() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(425);
  const [bookingMonthFilter, setBookingMonthFilter] = useState([
    monthOptions[0],
  ]);
  const [resolveMonthFilter, setResolveMonthFilter] = useState([]);
  const [users, userOperations] = useCollection("Users");
  const [reservations, bookReservation] = useCollection("Reservations");
  const [resolved, resolveReservation] = useCollection("ResolvedReservations");
  const [error, setError] = useState("");

  reservations.sort((a, b) => {
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

  const filteredReservations = reservations.filter((reservation) => {
    let parsedMonth = parse(reservation.date, "yyyy-MM-dd", new Date());
    parsedMonth = getMonth(parsedMonth);
    if (bookingMonthFilter === null || bookingMonthFilter.length === 0)
      return true;
    return bookingMonthFilter.some((bookingMonth) => {
      if (parsedMonth === bookingMonth.value) return true;
    });
  });

  const filteredResolved = resolved.filter((resolve) => {
    let parsedMonth = parse(resolve.date, "yyyy-MM-dd", new Date());
    parsedMonth = getMonth(parsedMonth);
    if (resolveMonthFilter === null || resolveMonthFilter.length === 0)
      return true;
    return resolveMonthFilter.some((bookingMonth) => {
      if (parsedMonth === bookingMonth.value) return true;
    });
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

  // function addUser() {
  //   userOperations.add({ name: name });
  // }

  function handleRemove(id) {
    bookReservation.delete(id);
  }

  function handleRemoveResolve(id) {
    resolveReservation.delete(id);
  }

  // function addReservation() {
  //   bookReservation.add({ date: date, time: time, name: name, price: price });
  //   setTime("");
  // }

  async function addReservation() {
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
      await bookReservation.add(reservationData);
    } catch (error) {
      const body = await error.response.text();
      setError(new Error(body));
    } finally {
      setTime("");
    }
  }

  function addResolve({ id, ...origReservation }) {
    bookReservation.delete(id);
    resolveReservation.add({
      session: origReservation.time,
      ...origReservation,
    });
  }

  function totalPrice() {
    let total = 0;
    for (let i = 0; i < filteredResolved.length; i++) {
      total += resolved[i].price;
    }
    return total;
  }

  function handleBookingMonthFilter(selectedItems) {
    setBookingMonthFilter(selectedItems);
  }

  function handleResolveMonthFilter(selectedItems) {
    setResolveMonthFilter(selectedItems);
  }

  return (
    <>
      <NavBar title="Admin" />

      <div>
        <Header>Admin</Header>
        <h2>Resolved Reservations</h2>
        <Border>
          <Wrapper>
            <Select
              styles={monthStyle}
              value={resolveMonthFilter}
              isMulti
              options={resolveMonthOptions}
              onChange={handleResolveMonthFilter}
              placeholder="Sorter efter måned..."
            ></Select>
          </Wrapper>

          <ReservationContainer>
            {filteredResolved.map((resolve) => (
              <div>
                <ReservationTab>
                  <h1>Completed</h1>
                  <ol>Date: {resolve.date}</ol>
                  <ol>Session: {resolve.session}</ol>
                  <ol>Name: {resolve.name}</ol>
                  <ol>Price: {resolve.price}</ol>
                  <Button onClick={() => handleRemoveResolve(resolve.id)}>
                    Remove
                  </Button>
                </ReservationTab>
              </div>
            ))}
          </ReservationContainer>
          <p>Total: {totalPrice()}DKK</p>
        </Border>
      </div>

      <div>
        <h2>Bookings</h2>{" "}
        <Border>
          <Wrapper>
            {" "}
            <Select
              styles={monthStyle}
              value={bookingMonthFilter}
              isMulti
              options={monthOptions}
              onChange={handleBookingMonthFilter}
              placeholder="Sorter efter måned..."
            ></Select>
          </Wrapper>

          <ReservationContainer>
            {" "}
            {filteredReservations.map((reservation) => (
              <div>
                <ReservationTab>
                  <h1>Reservation</h1>
                  <ol>Date: {reservation.date}</ol>
                  <ol>Time: {reservation.time}</ol>
                  <ol>Name: {reservation.name}</ol>
                  <ol>Price: {reservation.price}</ol>
                  <Wrapper>
                    <Button onClick={() => handleRemove(reservation.id)}>
                      Cancel
                    </Button>
                    <Button onClick={() => addResolve(reservation)}>
                      Resolve
                    </Button>
                  </Wrapper>
                </ReservationTab>
              </div>
            ))}
          </ReservationContainer>
        </Border>
      </div>
      <WrapperMakeReservation>
        <div>
          <h2>Make Reservation</h2>

          <MakeReservation>
            <div>
              {" "}
              {error && <p style={{ color: "red" }}>{error}</p>}{" "}
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
              <Wrapper>
                <Button onClick={addReservation}>Reserve</Button>
              </Wrapper>
            </div>{" "}
          </MakeReservation>
        </div>
      </WrapperMakeReservation>
    </>
  );
}

export default Admin;
