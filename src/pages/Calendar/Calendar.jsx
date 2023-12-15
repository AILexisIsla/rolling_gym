import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

const StyledCalendar = styled(Calendar)`
    .react-calendar {
        width: 350px;
        max-width: 100%;
        background: white;
        border: 1px solid #a0a096;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.125em;
    }
    .react-calendar__month-view__days__day--weekend {
        color: #d10000;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
    }
`;

const MyCalendar = () => {
    const [value, setValue] = useState(new Date());

    return (
        <div>
            <StyledCalendar onChange={setValue} value={value} />
        </div>
    );
}

export default MyCalendar;