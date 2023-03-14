import { DatetimepickerProps } from "react-datetime";
import s from "./DisplayMeetingsStyles";
import React from 'react';

interface Props {
    Date: string;
    StartTime: string | Date;
    EndTime: string | Date;
}

export const DisplayMeetings: React.FC<Props> = ({Date, StartTime, EndTime}) => {

    return (
        <s.Meeting>
            <s.MeetingInformation>
                <s.Date>{Date.toString()}</s.Date>
                <s.StartTime>{StartTime.toString()}</s.StartTime>
                <s.EndTime>{EndTime.toString()}</s.EndTime>
            </s.MeetingInformation>
        </s.Meeting>
    )

}