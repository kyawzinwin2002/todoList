import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableTask: [],
  historyTask: [],
  doneList: [],
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    ADD_TO_TABLE: (state, { payload }) => {
      state.tableTask = [...state.tableTask, payload];
    },
    REMOVE_FROM_TABLE: (state, { payload }) => {
      state.tableTask = state.tableTask.filter(
        (item) => item.id !== payload.id
      );
      state.doneList = state.doneList.filter((item) => item.id !== payload.id);
    },
    ADD_TO_DONELIST: (state, { payload }) => {
      state.doneList = [...state.doneList, payload];
      // state.tableTask = state.tableTask.filter(
      //   (item) => item.id !== payload.id
      // );
    },
    REMOVE_FROM_DONELIST: (state, { payload }) => {
      state.doneList = state.doneList.filter((item) => item.id !== payload.id);
    },
  },
});

export const {
  ADD_TO_TABLE,
  REMOVE_FROM_TABLE,
  ADD_TO_DONELIST,
  REMOVE_FROM_DONELIST,
} = taskSlice.actions;
export default taskSlice.reducer;
