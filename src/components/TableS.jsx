import React, { useState } from "react";
import { Table } from "@mantine/core";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { ADD_TO_DONELIST, REMOVE_FROM_DONELIST, REMOVE_FROM_TABLE } from "../services/taskSlice";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import EditBtn from "./EditBtn";

const TableS = () => {
  const { tableTask, doneList } = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();
  // console.log(doneList);

  if(tableTask.length){
    return (
      <div className=" flex flex-col gap-3 bg-[#abff4f]   h-[275px] p-5">
        <h1 className=" text-2xl mx-auto font-bold text-[#986841]">Plan List</h1>
  
        <Table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Time</th>
              <th>{doneList.length}/{tableTask.length}</th>
            </tr>
          </thead>
          <tbody>
            {tableTask.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                  <td>
                    <input
                      onChange={(e) => {
                        if (e.target.checked) {
                          dispatch(ADD_TO_DONELIST(item));
                          const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                              );
                              toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                              );
                            },
                          });
                          Toast.fire({
                            icon: "success",
                            title: "Congratulations,You have done a great job!",
                          });
                        }else{
                          dispatch(REMOVE_FROM_DONELIST(item))
                          const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                              );
                              toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                              );
                            },
                          });
                          Toast.fire({
                            icon: "warning",
                            title: "Why Honey? TT",
                          });
                        }
                      }}
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <div className=" flex gap-2">
                    <EditBtn id={item.id}/>
                    <button
                      onClick={() => {
                        dispatch(REMOVE_FROM_TABLE(item));
                      }}
                      className=" w-6 h-6 flex align-middle justify-center items-center bg-red-600 text-white  rounded-sm "
                    >
                      <BsTrash />
                    </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }

  return(
    <div className="flex flex-col gap-3 bg-[#abff4f]   h-[275px] p-5">
        <h1 className=" text-2xl mx-auto font-bold text-[#986841]">Plan List</h1>
        <h1 className=" text-3xl mx-auto font-bold text-[#986841]">Do Something Honey</h1>
    </div>
  )
  
  
};

export default TableS;
