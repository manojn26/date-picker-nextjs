"use client";

import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { setStartDate, setEndDate } from "../redux/recurrenceSlice";

const DatePicker = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.recurrence);

  return (
    <>
      <div className='p-4 bg-white shadow-md'>
        <h3 className='text-lg font-bold'>Select Start and End Dates</h3>
        <div className='flex gap-4'>
          <div>
            <p>Start Date</p>
            <Calendar
              onChange={(date) => dispatch(setStartDate(date))}
              value={startDate}
            />
          </div>
          <div>
            <p>End Date</p>
            <Calendar
              onChange={(date) => dispatch(setEndDate(date))}
              value={endDate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
