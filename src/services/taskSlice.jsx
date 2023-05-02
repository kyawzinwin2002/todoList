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
    EDIT_IN_TABLE:(state,{payload}) => {
      state.tableTask.map(item => {
        if(item.id == payload.id){
          
          
          item.name = payload.name
          item.time = payload.time
          
         
        }
      })
    }
  },
});

export const {
  ADD_TO_TABLE,
  REMOVE_FROM_TABLE,
  ADD_TO_DONELIST,
  REMOVE_FROM_DONELIST,
  EDIT_IN_TABLE
} = taskSlice.actions;
export default taskSlice.reducer;
