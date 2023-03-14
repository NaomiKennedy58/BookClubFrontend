import './App.css';
import {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import s from './AppStyles';
import Meeting from './Types';
import {DisplayMeetings} from './DisplayMeetings';
import {NewMeeting} from './NewMeeting';
import React from 'react';

function App() {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState<string | Date>(date);
  const [endTime, setEndTime] = useState<string | Date>(date);
  const [day, setDay] = useState<string>(date.getDate().toString());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [showHours, setShowHours] = useState(false);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [newMeeting, setNewMeeting] = useState<Meeting>();

  useEffect(() => {
    setDay(date.getDate().toString());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [date])

  const determineTime = () => {
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(startTime);
    console.log(endTime);
    setNewMeeting({Date: day, StartTime: startTime, EndTime: endTime});
    if (showHours && newMeeting) {
      meetings.push(newMeeting);
      setMeetings(meetings);
      setShowHours(false);
    }
  }

  if (displayCalendar) {
    return (
      <div className='app'>
        <h1 className='text-center'>React Calendar</h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
        <button onClick={event => setDisplayCalendar(false)}>Choose This Date</button>
      </div>
    );
  }

  if (showHours) {
    return (
      <><button onClick={event => setDisplayCalendar(true)}>Select Date</button>
      <p>Start Time</p>
      <TimePicker
        label="Start Time"
        value={startTime}
        onChange={(sTime) => setStartTime(sTime)}>
      </TimePicker>
      <p>Finish Time</p>
      <TimePicker
        label="End Time"
        value={endTime}
        onChange={(eTime) => setEndTime(eTime)}>
      </TimePicker>
      <button onClick={event => determineTime()}>Return to Main Calendar</button></>
    )
  }

  return (
    <s.Main>
      <button onClick={(event) => setShowHours(true)}>Create New Meeting</button>
      <NewMeeting onNewMeeting={determineTime} 
      />
      {meetings ? (
        meetings.map((meeting) => (
          <DisplayMeetings
            key={meeting.Date}
            Date={meeting.Date}
            StartTime={meeting.StartTime}
            EndTime={meeting.EndTime}
            />
        ))
      ) : (
        <p>No meetings planned</p>
      )}
    </s.Main>
  )
}

export default App;
