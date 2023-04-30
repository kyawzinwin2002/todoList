import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableTask: [],
  historyTask: [],
  number: 0,
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    ADD_TO_TABLE: (state, { payload }) => {
      state.tableTask = [...state.tableTask, payload];
    },
    REMOVE_FROM_TABLE: (state, { payload }) => {
      state.tableTask = 
        state.tableTask.filter((item) => item.id !== payload.id)
      
    },
  },
});

export const { ADD_TO_TABLE, REMOVE_FROM_TABLE } = taskSlice.actions;
export default taskSlice.reducer;
