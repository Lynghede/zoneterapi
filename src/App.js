import React, { useState } from "react";
import "./App.css";

import { useCollection } from "./firebase";

// Components
import Button from "./Components/Button";
import Input, { InputDate } from "./Components/Input";
import Select, { ColorStyles } from "./Components/Select";
import ReservationTab from "./Components/ReservationTab";
import MakeReservation from "./Components/MakeReservation";
// import Select from "react-select";

// const colorStyles = {
//   control: styles => ({ ...styles, backgroundColor: "black" })
// };

function App() {
  const [name, setName] = useState("hej");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [users, userOperations] = useCollection("Users");
  const [reservations, bookReservation] = useCollection("Reservations");

  // const options = [
  //   { value: "One", label: "1" },
  //   { value: "Two", label: "2" },
  //   { value: "Three", label: "3" }
  // ];

  reservations.sort((a, b) => {
    return a.time > b.time;
  });

  console.log(users, userOperations);
  console.log(reservations, bookReservation);

  function checkAvailability(date, time) {
    for (let reservation of reservations) {
      if (reservation.date === date && reservation.time === time) {
        return false;
      }
    }
    return true;
  }

  const TimeSlots = [];
  const timeSlotOptions = [];
  if (date !== "") {
    for (let i = 10; i < 18; i += 1) {
      for (let j = 0; j < 4; j += 3) {
        const time = i + ":" + j + "0";
        if (checkAvailability(date, time)) {
          TimeSlots.push(<option>{time}</option>);
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
  function addReservation() {
    // const isAvailable = checkAvailability(date, time);
    // if (!isAvailable) return alert("NOPE");

    bookReservation.add({ date: date, time: time, name: name });
    setTime("");
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Button onClick={addUser}>Sign up</Button> */}
        <div>------------------</div>
        {reservations.map(reservation => (
          <div>
            <ReservationTab>
              <h1>Reservation</h1>
              <ol>Date: {reservation.date}</ol>
              <ol>Time: {reservation.time}</ol>
              <ol>Name: {reservation.name}</ol>

              <Button onClick={() => handleRemove(reservation.id)}>
                Remove
              </Button>
            </ReservationTab>
          </div>
        ))}

        <MakeReservation>
          <label>Name:</label>
          <Input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <label>Date:</label>
          <InputDate
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <label>Time:</label>
          <Select
            type="time"
            value={{ label: time, value: time }}
            options={timeSlotOptions}
            onChange={option => setTime(option.value)}
            styles={ColorStyles}
          ></Select>
          {/* <select
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        >
          <option value="">Please select</option>
          {TimeSlots}
        </select> */}
          {/* <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        /> */}
          <Button onClick={addReservation}>Reserve</Button>
        </MakeReservation>
      </header>
    </div>
  );
}

export default App;
