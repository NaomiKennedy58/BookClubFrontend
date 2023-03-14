import { useRef } from "react";
import s from "./NewMeetingStyles";
import Meeting from "./Types";
import React from 'react';

interface Props {
  onNewMeeting : () => void;
}

export const NewMeeting: React.FC<Props> = ({ onNewMeeting }) => {
  // const searchInput = useRef<HTMLInputElement>(null);

  const handleButtonPress = () => {
    // const query = searchInput.current?.value.trim();
    // if (query) {
    //   onNewMeeting(query);
    // }
  };

  return (
    <s.SearchContainer>
      {/* <input
        type="meeting" */}
        {/* // ref={searchInput} */}
        {/* placeholder="Schedule New Meeting"
      /> */}
      <button aria-label="New meeting" onClick={onNewMeeting}>
        <span className="material-symbols-outlined">Add New Meeting</span>
      </button>
    </s.SearchContainer>
  );
};