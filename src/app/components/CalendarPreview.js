"use client";

import React from "react";
import { useSelector } from "react-redux";
import { addDays, format } from "date-fns";

const CalendarPreview = () => {
  const { startDate, endDate, recurrencePattern, interval } = useSelector(
    (state) => state.recurrence
  );

  // Logic for calculating recurring dates based on pattern, interval, etc.
  const recurringDates = [];

  if (startDate) {
    let currentDate = new Date(startDate);
    while (
      !endDate ||
      (isValid(new Date(endDate)) && currentDate <= new Date(endDate)) ||
      recurringDates.length < 10
    ) {
      recurringDates.push(format(currentDate, "yyyy-MM-dd"));
      currentDate = addDays(currentDate, interval); // Example for daily recurrence
      console.log(recurringDates);
    }
  }

  return (
    <div className='p-4 bg-white shadow-md'>
      <h3 className='text-lg font-bold'>Recurring Dates Preview</h3>
      <ul>
        {recurringDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
