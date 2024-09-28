"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedDays,
  setIntervalDates,
  setNthDay,
  setRecurrencePattern,
} from "../redux/recurrenceSlice";

const RecurrenceOptions = () => {
  const [intervalDates, setIntervalDatesState] = useState(1);
  const [pattern, setPattern] = useState("daily");
  const [daysOffWeek, setDaysOffWeek] = useState([]);
  const [nthDay, setNthDayState] = useState(1);

  const dispatch = useDispatch();

  const handlePatternChange = (e) => {
    setPattern(e.target.value);
    dispatch(setRecurrencePattern(e.target.value));
  };

  const handleIntervalChange = (e) => {
    setIntervalDatesState(e.target.value);
    dispatch(setIntervalDates(e.target.value));
  };

  return (
    <>
      <div className='p-4'>
        <h3 className='text-lg font-bold'>Recurrence Options</h3>
        <select
          value={pattern}
          onChange={handlePatternChange}
          className='border p-2'
        >
          <option value='daily'>Daily</option>
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </select>

        <div className='mt-4'>
          <label>Every</label>
          <input
            type='number'
            value={intervalDates}
            onChange={handleIntervalChange}
            className='border p-2'
          />
          <span>
            {pattern === "daily"
              ? "days"
              : pattern === "weekly"
              ? "weeks"
              : pattern === "monthly"
              ? "months"
              : "years"}
          </span>
        </div>

        {pattern === "weekly" && (
          <div className='mt-4'>
            <label>Select Days of the Week</label>
            {/* Checkbox logic for days of the week */}
          </div>
        )}

        {pattern === "monthly" && (
          <div className='mt-4'>
            <label>On the nth day of the month</label>
            <input
              type='number'
              value={nthDay}
              onChange={(e) => setNthDayState(e.target.value)}
              className='border p-2'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default RecurrenceOptions;
