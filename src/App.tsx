// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import Dropdown from 'react-dropdown';
import React from 'react';
// import {Dropdown, Element} from './TimeDropDown.js';

function App() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(date.getHours());
  const [showHours, setShowHours] = useState<boolean>(false);

  // useEffect(() => {

  // }, [showHours])

  const options = [
    'one', 'two', 'three'
  ];

  const defaultOption = options[0];

  const determineTime = () => {
    if (showHours) {
      setShowHours(false);
    }
  }

  if (showHours) {
    return (
      <div>The time variable is changing.
        <button onClick={event => determineTime()}>Return to Main Calendar</button>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
        {/* <Dropdown />
        <Element /> */}
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <button onClick={setShowHours} value={true}>Choose Time</button>
    </div>
  );
}

export default App;
