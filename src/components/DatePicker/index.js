import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from "material-ui-pickers";

export default function DatePickerComponent() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="pickers">
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </div>
    </MuiPickersUtilsProvider>
  );
}
