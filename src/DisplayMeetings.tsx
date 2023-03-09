import { DatetimepickerProps } from "react-datetime";
import s from "./DisplayMeetingsStyles";
import React from 'react';

interface Props {
    Date: string;
    StartTime: string;
    EndTime: string;
}

export const DisplayMeetings: React.FC<Props> = ({Date, StartTime, EndTime}) => {

    return (
        <s.Meeting>
            <s.Date>{Date}</s.Date>
            <s.StartTime>{StartTime}</s.StartTime>
            <s.EndTime>{EndTime}</s.EndTime>
        </s.Meeting>
    )

}