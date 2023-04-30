import React, { useState } from "react";
import { TextInput } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useDispatch } from "react-redux";
import { ADD_TO_TABLE } from "../services/taskSlice";

const Form = () => {
const [name,setName] = useState("")
const [time,setTime] = useState("")
const dispatch = useDispatch()

    const addHandler = (e) => {
        e.preventDefault()
        const data = {id:Date.now(),name,time}
        // console.log(data);
        dispatch(ADD_TO_TABLE(data))
        
    }

  return (
    <div className="bg-[#ffd23f]   h-[275px]">
      <form onSubmit={addHandler} className=" px-3 flex flex-col justify-evenly h-[100%]">
        <h1 className=" text-3xl mx-auto font-bold text-[#986841]">Plan</h1>
        <TextInput value={name} onChange={e => {setName(e.target.value)}}
          placeholder="Enter Task Name"
          label="Task Name"
          radius="xl"
        />
        <TimeInput value={time} onChange={e => {setTime(e.target.value)}} radius="xl" label="Time to do<3" />
        <div className=" flex justify-center">
          <button type="submit" className=" px-5 py-1 bg-[#986841] text-white rounded-lg">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
