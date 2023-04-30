import React from "react";
import { TextInput } from "@mantine/core";
import { TimeInput } from "@mantine/dates";

const Form = () => {
  return (
    <div className="bg-[#ffd23f]   h-[275px]">
      <form className=" px-3 flex flex-col justify-evenly h-[100%]">
        <h1 className=" text-3xl mx-auto font-bold text-[#986841]">Plan</h1>
        <TextInput
          placeholder="Enter Task Name"
          label="Task Name"
          radius="xl"
        />
        <TimeInput radius="xl" label="Time to do<3" />
        <div className=" flex justify-center">
          <button className=" px-5 py-1 bg-[#986841] text-white rounded-lg">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
