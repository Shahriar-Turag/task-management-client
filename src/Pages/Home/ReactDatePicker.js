import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                className="border border-black"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="Pp"
            />
        </div>
    );
};

export default ReactDatePicker;
