import "./App.css";
import { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import CountdownTimer from "./Component/CountdownTimer";

export default function App() {
  const [eventDate, setEventDate] = useState(
    () => localStorage.getItem("eventDate") || null
  );
  const [submittedDate, setSubmittedDate] = useState(
    () => localStorage.getItem("submittedDate") || null
  );

  const onDateChange = (event) => {
    setEventDate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedDate(eventDate);
  };

  useEffect(() => {
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("submittedDate", submittedDate);
  }, [eventDate, submittedDate]);

  const dateStyle = {
    backgroundColor: "salmon",
    // width: "13.2rem",
    width: "55vb",
    height: "2rem",
    fontSize: "1.5rem",
  };

  return (
    <>
      <h1>CountDown Begins::</h1>
      <div className="frm">
        <form onSubmit={handleSubmit}>
          <input
            type="datetime-local"
            style={dateStyle}
            value={eventDate}
            onChange={onDateChange}
            required
          />
          <button type="submit">Start </button>
        </form>
      </div>
      {submittedDate && <CountdownTimer eventDate={submittedDate} />}
    </>
  );
}
