import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { parse, differenceInDays, getMonth, isSameDay } from "date-fns";
import { useCollection } from "../firebase";
import { Discount } from "@styled-icons/boxicons-solid";
import { MoneyBillAlt } from "@styled-icons/fa-regular";
import styled from "styled-components";

// Components
import Button from "../Components/Button";
import Input from "../Components/Input";
import Select, { ColorStyles } from "../Components/Select";
import ReservationTab, {
  ReservationContainer,
} from "../Components/ReservationTab";
import MakeReservation, {
  WrapperMakeReservation,
} from "../Components/MakeReservation";
import Label, { FlashyLabel } from "../Components/Label";
import Wrapper from "../Components/Wrapper";
import Seperator from "../Components/Seperator";
import DayPickerInput from "react-day-picker/DayPickerInput";
import format from "date-fns/format";

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

const StyledCalendar = `
 .DayPickerInput{
   width: auto;
  min-width: 19.2em
 }


 .DayPicker-Day.DayPicker-Day--outside:hover{
    background-color: transparent !important
 } 

 .DayPicker-Day.DayPicker-Day--disabled:hover {
      background-color: transparent !important
  }
  .DayPicker-Day:hover {
      background-color: palevioletred !important;
  }

  .DayPicker-Day.DayPicker-Day--today{
    color: #3b95b0;
  }
 
  .DayPickerInput-Overlay{
      background: #0d0c1d;
  }

  .DayPicker-Day--disabled{
    
    opacity: 30%
  }
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  
  `;

function parseDate(date) {
  return parse(date, "yyyy-MM-dd", new Date());
}

function Reservation(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(425);
  const [selectedDay, setSelectedDay] = useState(getIntialState);

  const [blockDaysRaw, setBlockDays] = useCollection("Blocked");
  const blockDays = [];
  for (let { from, to } of blockDaysRaw) {
    blockDays.push({
      from: parseDate(from),
      to: parseDate(to),
    });
  }

  const [tempReservation, setTempReservation] = useState([]);
  const bookTempReservation = {
    add(newReservation) {
      setTempReservation([...tempReservation, newReservation]);
    },
  };

  function getIntialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  const removeTempReservation = (i) => {
    let newArray = [...tempReservation];
    newArray.splice(i, 1);
    setTempReservation(newArray);
    props.setNumDone(tempReservation.length - 1);
  };

  const [reservations, bookReservation] = useCollection("Reservations");
  const [resolved, resolveReservation] = useCollection("ResolvedReservations");
  const [bookingMonthFilter, setBookingMonthFilter] = useState([
    monthOptions[0],
  ]);
  const [error, setError] = useState("");

  let history = useHistory();

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

  // Checks for valid dates and times, when the users is browsing through the options.
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

  const timeSlots = ["08:00", "09:30", "11:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00"];
  const timeSlotOptions = [];
  for (let i = 0; i < 9; i += 1){
    if (checkAvailability(date, timeSlots[i])){
      timeSlotOptions.push({label: timeSlots[i], value: timeSlots[i]});
    }

  }
  // const timeSlotOptions = [];
  // if (date !== "") {
  //   for (let i = 10; i < 18; i += 1) {
  //     for (let j = 0; j < 4; j += 3) {
  //       const time = i + ":" + j + "0";
  //       if (checkAvailability(date, time)) {
  //         timeSlotOptions.push({ label: time, value: time });
  //       }
  //     }
  //   }
  // }

  async function addReservation() {
    try {
      await tempReservation.forEach((reservation) =>
        bookReservation.add(reservation)
      );
      history.push("/confirmed", { tempReservation });
    } catch (error) {
      const body = await error.response.text();
      setError(new Error(body));
    } finally {
      setTempReservation([]);
    }
  }

  async function addTempReservation() {
    const reservationData = {
      date: date,
      phone: phone,
      time: time,
      name: name,
      price: price,
    };

    setError(null);
    if (!name) {
      setError("Du mangler at oplyse et navn");
      return;
    }
    if (!phone) {
      setError("Du mangler at oplyse et telefon nummer");
      return;
    }
    if (!date) {
      setError("Du mangler at vælge en dato");
      return;
    }
    if (!time) {
      setError("Du mangler at vælge et tidspunkt");
      return;
    }

    try {
      await bookTempReservation.add(reservationData);
    } catch (error) {
      console.log(error);
      const body = await error.response.text();
      setError(new Error(body));
    } finally {
      //percentageComplete();
      props.setNumDone(tempReservation.length + 1);
      setTime("");
    }
  }

  const tempFilteredReservations = tempReservation.filter((reservation) => {
    // let parsedMonth = parse(reservation.date, "yyyy-MM-dd", new Date());
    // parsedMonth = getMonth(parsedMonth);
    if (bookingMonthFilter === null || bookingMonthFilter.length === 0)
      return true;
    return bookingMonthFilter.some(() => {
      //if (parsedMonth === bookingMonth.value)
      return true;
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
  const before = { before: new Date() };
  const daysOfWeek = { daysOfWeek: [0] };

  const dayPickProps = {
    selectedDays: selectedDay,
    disabledDays: [before, daysOfWeek, ...blockDays],
    StyledCalendar,
  };

  const inputProps = {
    readOnly: true,
    style: {
      width: "307px",
      borderRadius: "4px",
      borderWidth: "1px",
      borderStyle: "solid",
      height: "29px",
      padding: "0 8px 0 8px",
    },
  };

  return (
    <WrapperMakeReservation>
      <div>
        <div>
          <h2>Make Reservation</h2>
          <Seperator />

          <MakeReservation>
            {" "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {currentQuantity() === 0 ? (
                <p style={{ textAlign: "center" }}>
                  Nu mangler du blot at confirm dine bookings
                </p>
              ) : (
                <p style={{ textAlign: "center" }}>
                  Vælg {currentQuantity()} tider
                </p>
              )}

              <Label>Navn</Label>
              <Input
                type="text"
                value={name}
                placeholder="Navn"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Label>Telefon nr.</Label>
              <Input
                type="text"
                value={phone}
                placeholder="21 32 43 54"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <Label>Dato</Label>
              <style>{StyledCalendar}</style>
              <DayPickerInput
                placeholder=""
                selectedDay={selectedDay}
                dayPickerProps={dayPickProps}
                type="date"
                inputProps={inputProps}
                placeholder="Klik for at vælge en dato"
                value={date}
                onDayChange={(e) => setDate(format(e, "yyyy-MM-dd"))}
              />

              <Label>Tid</Label>
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
              <Button onClick={addReservation}>Reserver</Button>
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
                  <ol>Dato: {reservation.date}</ol>
                  <ol>Tid: {reservation.time}</ol>
                  <ol>Navn: {reservation.name}</ol>
                  <ol>Telefon: {reservation.phone}</ol>
                  <Wrapper>
                    <Button onClick={() => removeTempReservation(i)}>
                      Fjern
                    </Button>
                  </Wrapper>
                </ReservationTab>
              </div>
            ))}
          </ReservationContainer>
        </div>
      </div>
    </WrapperMakeReservation>
  );
}

export default Reservation;
