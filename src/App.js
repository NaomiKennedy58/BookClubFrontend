// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import s from './AppStyles.js';
import Meeting from './Types.tsx';
import DisplayMeetings from './DisplayMeetings';
// import NewMeeting from './NewMeeting';
// import Dropdown from 'react-dropdown';
// import {Dropdown, Element} from './TimeDropDown.js';

function App() {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(date.getHours());
  const [endTime, setEndTime] = useState(date.getHours());
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [showHours, setShowHours] = useState(false);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [newMeeting, setNewMeeting] = useState([]);

  // function CustomInput({ openCalendar, value, handleValueChange }) {
  //   return (
  //     <input
  //       onFocus={openCalendar}
  //       value={value}
  //       onChange={handleValueChange}
  //     />
  //   )
  // }

  // useEffect(() => {

  // }, [showHours])

  // const options = [
  //   'one', 'two', 'three'
  // ];

  // const defaultOption = options[0];

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [date])

  const determineTime = () => {
    // setDay(date.getDate());
    // setMonth(date.getMonth());
    // setYear(date.getFullYear());
    // console.log(date);
    // console.log(date.getDate());
    // console.log(date.getMonth());
    // console.log(date.getFullYear());
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(startTime);
    console.log(endTime);
    setNewMeeting([day.toString(), month.toString(), year.toString(), startTime.toString(), endTime.toString()]);
    if (showHours) {
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
      {/* <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={(input) => setDate(input)}> */}
        {/* render={<CustomInput />}> */}
      {/* </DatePicker> */}
      <p>Start Time</p>
      <TimePicker
        label="Start Time"
        selected={startTime}
        onChange={(sTime) => setStartTime(sTime)}>
      </TimePicker>
      <p>Finish Time</p>
      <TimePicker
        label="End Time"
        selected={endTime}
        onChange={(eTime) => setEndTime(eTime)}>
      </TimePicker>
      <button onClick={event => determineTime()}>Return to Main Calendar</button></>
    )
  }

  return (
    // <s.Main>
      <button onClick={(event) => setShowHours(true)}>Create New Meeting</button>
      /* <NewMeeting onNewMeeting={setMeetings} 
      /> */
      /* {meetings ? (
        meetings.map((meeting) => (
          <DisplayMeetings
            key={meeting.date}
            Date={meeting.date}
            StartTime={meeting.StartTime}
            EndTime={meeting.EndTime}
            />
        ))
      ) : (
        <p>No meetings planned</p>
      )} */
    /* </s.Main> */
  )

  // if (showHours) {
  //   return (
  //     <div>The time variable is changing.
  //       <button onClick={event => determineTime()}>Return to Main Calendar</button>
  //       {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
  //       {displayButtons ? (
  //         <ul className="menu">
  //           <li className="menu-item">
  //             <button onClick={event => setTime}>10:00am</button>
  //           </li>
  //           <li className="menu-item">
  //             <button>02:00pm</button>
  //           </li>
  //       </ul>
  //       ) : null}
            {/* <Dropdown>
            <Element/>
            </Dropdown> */}
      {/* </div>
    );
  } */}

  // return (
  //   <div className="App">
  //     <h1 className='text-center'>React Calendar</h1>
  //     <div className='calendar-container'>
  //       <Calendar onChange={setDate} value={date} />
  //     </div>
  //     <p className='text-center'>
  //       <span className='bold'>Selected Date:</span>{' '}
  //       {date.toDateString()}
  //     </p>
  //     <button onClick={setShowHours} value={true}>Choose Time</button>
  //   </div>
  // );
}

export default App;
