import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: null,
  endDate: null,
  recurrencePattern: "daily", // 'daily', 'weekly', 'monthly', 'yearly'
  intervalDates: 1, // Every X days/weeks/months/years
  selectedDays: [], // Specific days of the week
  nthDay: 1, // For monthly recurrence (e.g., first, second, etc.)
};

const recurrenceSlice = createSlice({
  name: "recurrence",
  initialState: initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setRecurrencePattern: (state, action) => {
      state.recurrencePattern = action.payload;
    },
    setSelectedDays: (state, action) => {
      state.selectedDays = action.payload;
    },
    setNthDay: (state, action) => {
      state.nthDay = action.payload;
    },
    setIntervalDates: (state, action) => {
      state.intervalDates = action.payload;
    },
  },
});

export const {
  setStartDate,
  setEndDate,
  setRecurrencePattern,
  setSelectedDays,
  setNthDay,
  setIntervalDates,
} = recurrenceSlice.actions;

export default recurrenceSlice.reducer;
