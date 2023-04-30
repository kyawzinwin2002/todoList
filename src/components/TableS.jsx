import React from "react";
import { Table } from "@mantine/core";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { REMOVE_FROM_TABLE } from "../services/taskSlice";
import { useDispatch } from "react-redux";

const TableS = () => {
  const { tableTask } = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();
  const timeOne = Date.now();
  const timeTwo = Date.now();
  const timeThree = Date.now();

  console.log(tableTask);

  const ths = (
    <tr>
      <th>Task Name</th>
      <th>Time</th>
      <th>Done</th>
    </tr>
  );

  return (
    <div className=" flex flex-col gap-3 bg-[#abff4f]   h-[275px] p-5">
      <h1 className=" text-2xl mx-auto font-bold text-[#986841]">Plan List</h1>
      <Table>
        <thead>{ths}</thead>
        <tbody>
          {tableTask.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.time}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(REMOVE_FROM_TABLE(item));
                    }}
                    className=" w-6 h-6 flex align-middle justify-center items-center bg-red-600 text-white  rounded-sm "
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableS;
