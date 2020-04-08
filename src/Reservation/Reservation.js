import React, { useState } from "react";

import { parse, differenceInDays, getMonth, isSameDay } from "date-fns";
import { useCollection } from "../firebase";

// Components
import Button, {LargerButton} from "../Components/Button";
import Input, { InputDate } from "../Components/Input";
import Select, { ColorStyles, monthStyle } from "../Components/Select";

import MakeReservation, {
  WrapperMakeReservation
} from "../Components/MakeReservation";
import Label from "../Components/Label";
import Header from "../Components/Header";
import Wrapper from "../Components/Wrapper";


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
  const [price, setPrice] = useState(500);
  
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


  async function addReservation() {
    const reservationData = {
      date: date,
      time: time,
      name: name,
      price: price
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

  function nrReservations(){
    //   if (props.quantity === 1) return <Button onClick={addReservation}>Reserver</Button>;
    //   if (props.quantity === 3) return <Button onClick={addReservation}>Tilføj {props.quantity} reservationer</Button>;

  }

  

  return (
    <WrapperMakeReservation>
        <div>
          <Header>Make Reservation</Header>
          {error && <p style={{ color: "red" }}>{error}</p>}
          
          <MakeReservation>
            <div>
                {props.quantity === "1" ? <p>Vælg {props.quantity} tid</p> : <p>Vælg {props.quantity} tider</p>}
                
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
            </div> </MakeReservation>
            <Wrapper>
                
               <Button onClick={addReservation}>
                   {props.quantity === "1" ? "Reserver" : "Tilføj " + props.quantity + " mere"}
                   
                </Button> 
            </Wrapper>
            
         
        </div>
      </WrapperMakeReservation>

  );
}

export default Reservation;
