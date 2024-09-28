"use client";

import React from "react";
import { Provider } from "react-redux";
import DatePicker from "../app/components/DatePicker";
import RecurrenceOptions from "../app/components/RecurrenceOptions";
import CalendarPreview from "../app/components/CalendarPreview";
import store from "../app/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className='container mx-auto p-8'>
        <DatePicker />
        <RecurrenceOptions />
        <CalendarPreview />
      </div>
    </Provider>
  );
}
