import React, { useState } from "react";
import "./App.css";
import { parse, differenceInDays, getMonth } from "date-fns";
import { useCollection } from "./firebase";

// Components
import Button from "./Components/Button";
import Input, { InputDate } from "./Components/Input";
import Select, { ColorStyles, monthStyle } from "./Components/Select";
import ReservationTab, {
  ReservationContainer
} from "./Components/ReservationTab";
import MakeReservation from "./Components/MakeReservation";
import Label from "./Components/Label";
import Header from "./Components/Header";
import Border from "./Components/Border";

const monthOptions = [];
/* eslint-disable no-fallthrough */
switch (getMonth(new Date())) {
  case 0:
    monthOptions.push({ value: "Jan", label: "Januar" });
  case 1:
    monthOptions.push({ value: "Feb", label: "Februar" });
  case 2:
    monthOptions.push({ value: "Mar", label: "Marts" });
  case 3:
    monthOptions.push({ value: "Apr", label: "April" });
  case 4:
    monthOptions.push({ value: "Maj", label: "Maj" });
  case 5:
    monthOptions.push({ value: "Jun", label: "Juni" });
  case 6:
    monthOptions.push({ value: "Jul", label: "Juli" });
  case 7:
    monthOptions.push({ value: "Aug", label: "August" });
  case 8:
    monthOptions.push({ value: "Sep", label: "September" });
  case 9:
    monthOptions.push({ value: "Okt", label: "Oktober" });
  case 10:
    monthOptions.push({ value: "Nov", label: "November" });
  case 11:
    monthOptions.push({ value: "Dec", label: "December" });
}
/* eslint-enable no-fallthrough */

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(500);
  const [bookingMonthFilter, setBookingMonthFilter] = useState([
    monthOptions[0]
  ]);
  const [users, userOperations] = useCollection("Users");
  const [reservations, bookReservation] = useCollection("Reservations");
  const [resolved, resolveReservation] = useCollection("ResolvedReservations");

  // const session = [600, 500, 400, 350];

  const parsed1 = parse(date, "yyyy-MM-dd", new Date());
  console.log("Yolo:" + getMonth(parsed1));

  reservations.sort((a, b) => {
    return a.time > b.time;
  });

  const filteredReservations = reservations.filter(reservation => {
    for (reservation of reservations) {
      // const parsed2 = parse(reservation.date, "yyyy-MM-dd", new Date());
      // console.log("Hej" + getMonth(parsed2));
      // console.log("Booking:" + bookingMonthFilter.value);
      if (reservation.date === "2020-02-27") return true; // PAS!
    }
  });

  function shouldRemoveDate(date, d, y) {
    const parsed = parse(date, "yyyy-MM-dd", new Date());
    console.log("Parsed:" + parsed);
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

  function addUser() {
    userOperations.add({ name: name });
  }

  function handleRemove(id) {
    bookReservation.delete(id);
  }

  function handleRemoveResolve(id) {
    resolveReservation.delete(id);
  }

  function addReservation() {
    bookReservation.add({ date: date, time: time, name: name, price: price });
    setTime("");
  }

  function addResolve({ id, ...origReservation }) {
    bookReservation.delete(id);
    resolveReservation.add({
      session: origReservation.time,
      ...origReservation
    });
  }

  function totalPrice() {
    let total = 0;
    for (let prices of resolved) {
      total += prices.price;
    }
    return total;
  }

  function handleBookingMonthFilter(selectedItems) {
    setBookingMonthFilter(selectedItems);

    // bookingMonthFilter.filter(
    //   reservations => reservations.date === bookingMonthFilter
    // );
  }

  console.log(bookingMonthFilter);

  return (
    <div className="App">
      <header className="App-header">
        {/* <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Button onClick={addUser}>Sign up</Button> */}
        <Header>Resolved Reservations</Header>
        <Border>
          {resolved.map(resolve => (
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
          <p>Total: {totalPrice()}DKK</p>
        </Border>
        <div>------------------</div>
        <Header>Bookings</Header>{" "}
        <Border>
          <div style={{ margin: "auto", display: "inline-block" }}>
            <Select
              styles={monthStyle}
              value={bookingMonthFilter}
              isMulti
              options={monthOptions}
              onChange={handleBookingMonthFilter}
            ></Select>
          </div>
          <ReservationContainer>
            {" "}
            {filteredReservations.map(reservation => (
              <div>
                <ReservationTab>
                  <h1>Reservation</h1>
                  <ol>Date: {reservation.date}</ol>
                  <ol>Time: {reservation.time}</ol>
                  <ol>Name: {reservation.name}</ol>
                  <ol>Price: {reservation.price}</ol>
                  <Button onClick={() => handleRemove(reservation.id)}>
                    Cancel
                  </Button>
                  <Button onClick={() => addResolve(reservation)}>
                    Resolve
                  </Button>
                </ReservationTab>
              </div>
            ))}
          </ReservationContainer>
        </Border>
        <div>
          <Header>Make Reservation</Header>
        </div>
        <MakeReservation>
          <div>
            <Label>Name</Label>
            <Input
              type="text"
              value={name}
              placeholder="Name"
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <Label>Date</Label>
            <InputDate
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <Label>Time</Label>
            <Select
              type="time"
              value={{ label: time, value: time }}
              options={timeSlotOptions}
              onChange={option => setTime(option.value)}
              styles={ColorStyles}

              // color={isFocused ? "black" : "white"}
            ></Select>
          </div>

          <Button onClick={addReservation}>Reserve</Button>
        </MakeReservation>
      </header>
    </div>
  );
}

export default App;
