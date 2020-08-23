import React, { useState } from "react";

import { parse, differenceInDays, getMonth, isSameDay } from "date-fns";
import { useCollection } from "./firebase";
import DayPicker, { DateUtils } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import format from "date-fns/format";


import "react-day-picker/lib/style.css";

// Components
import Button from "./Components/Button";
import Input from "./Components/Input";
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
import NavBar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";
import Authenticate from "./Components/Authenticate";

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

const StyledCalendar = `
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

function Admin() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(425);
  const [bookingMonthFilter, setBookingMonthFilter] = useState([
    monthOptions[0],
  ]);
  const [resolveMonthFilter, setResolveMonthFilter] = useState([]);
  //const [users, userOperations] = useCollection("Users");
  const [reservations, bookReservation] = useCollection("Reservations");
  const [resolved, resolveReservation] = useCollection("ResolvedReservations");
  const [error, setError] = useState("");
  const [selectedDay, setSelectedDay] = useState(getIntialState);
  const [blockDaysRaw, setBlockDays] = useCollection("Blocked");

  const blockDays = [];

  for (let { from, to } of blockDaysRaw) {
    blockDays.push({
      from: parseDate(from),
      to: parseDate(to),
    });
  }

  function getIntialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  function handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    // if (selected) {
    //   setSelectedDay(null);
    //   return;
    // }
    // setSelectedDay(day);
    const range = DateUtils.addDayToRange(day, selectedDay);
    setSelectedDay(range);
  }

  function handleClickBlockDays() {
    const blockedFromTo = {
      from: format(selectedDay.from, "yyyy-MM-dd"),
      to: format(selectedDay.to, "yyyy-MM-dd"),
    };

    setBlockDays.add(blockedFromTo);
    setSelectedDay(getIntialState);
  }

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

  const timeSlots = ["08:00", "09:30", "11:00", "13:00", "14:30", "16:15", "17:30", "19:00"];
  const timeSlotOptions = [];
  for (let i = 0; i < 8; i += 1){
    if (checkAvailability(date, timeSlots[i])){
      timeSlotOptions.push({label: timeSlots[i], value: timeSlots[i]});
    }

  }
  // const timeSlotOptions = [];
  // if (date !== "") {
  //   for (let i = 8; i < 20; i += 1) {
  //    let j = 0;
  //   if (i%2==1){j = 3; } 
      
  //     const time = i + ":" + j + "0";
  //     if (checkAvailability(date, time)) {
  //       timeSlotOptions.push({ label: time, value: time });
  //     }
  //     if (i%2==1) {
  //       i += 1;
  //       j = 0;}
  //   }
  // }

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

  // Blocked days
  const before = { before: new Date() };
  //const daysOfWeek = { daysOfWeek: [0] };

  const { from, to } = selectedDay;
  const modifiers = { start: from, end: to };

  //DayInputOverlay - props from DayPicker
  const dayPickProps = {
    selectedDays: selectedDay,
    disabledDays: [before, ...blockDays],
    StyledCalendar,
  };

  return (
    <Authenticate>
      <NavBar title="Admin" />

      <div>
        <Header>Admin</Header>
        <div>
          <h2>Bloker dage</h2>
          <Border>
            <Wrapper>
              {from &&
                to &&
                `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
            </Wrapper>
            <Wrapper>
              <style>{StyledCalendar}</style>
               
              <DayPicker
                className="Selectable"
                modifiers={modifiers}
                showWeekNumbers
                onDayClick={handleDayClick}
                selectedDays={[from, { from, to }]}
                disabledDays={[before, ...blockDays]}
              ></DayPicker>
            </Wrapper>

            <Wrapper>
              <Button onClick={handleClickBlockDays}>Bloker dage</Button>
            </Wrapper>
          </Border>
        </div>

        <h2>Bogførte Reservations</h2>
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
                  <ol>Dag: {resolve.date}</ol>
                  <ol>Session: {resolve.session}</ol>
                  <ol>Navn: {resolve.name}</ol>
                  <ol>Pris: {resolve.price}</ol>
                  <Button onClick={() => handleRemoveResolve(resolve.id)}>
                    Fjern
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
                  <ol>Dato: {reservation.date}</ol>
                  <ol>Tid: {reservation.time}</ol>
                  <ol>Navn: {reservation.name}</ol>
                  <ol>Pris: {reservation.price}</ol>
                  <Wrapper>
                    <Button onClick={() => handleRemove(reservation.id)}>
                      Cancel
                    </Button>
                    <Button onClick={() => addResolve(reservation)}>
                      Bogfør
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
          <h2>Book Reservation</h2>

          <MakeReservation>
            <div>
              {" "}
              {error && <p style={{ color: "red" }}>{error}</p>}{" "}
              <Label>Navn</Label>
              <Input
                type="text"
                value={name}
                placeholder="Navn"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Label>Dato</Label> <style>{StyledCalendar}</style>
              <DayPickerInput
                placeholder=""
                selectedDay={selectedDay}
                dayPickerProps={dayPickProps}
                type="date"
                value={date}
                onDayChange={(e) => setDate(format(e, "yyyy-MM-dd"))}
              />
              {/* <InputDate
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              /> */}
              <Label>Tid</Label>
              <Select
                type="time"
                value={{ label: time, value: time }}
                options={timeSlotOptions}
                onChange={(option) => setTime(option.value)}
                styles={ColorStyles}
              ></Select>
              <Wrapper>
                <Button onClick={addReservation}>Reserver</Button>
              </Wrapper>
            </div>{" "}
          </MakeReservation>
        </div>
      </WrapperMakeReservation>
    </Authenticate>
  );
}

export default Admin;
