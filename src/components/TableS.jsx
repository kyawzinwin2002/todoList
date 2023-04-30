import React from "react";
import { Table } from "@mantine/core";
import { useSelector } from "react-redux";

const TableS = () => {
  const { tableTask } = useSelector((state) => state.taskSlice);
  console.log(tableTask);
  const ths = (
    <tr>
      <th>No.</th>
      <th>Task Name</th>
      <th>Time</th>
      <th>Done</th>
    </tr>
  );

  // const rows = tableTask.map((task) => (
  //   <tr key={task.id}>
  //     <td>{element.position}</td>
  //     <td>{element.name}</td>
  //     <td>{element.symbol}</td>
  //     <td>{element.mass}</td>
  //   </tr>
  // ));

  const rows = (
    <tr>
      <td>1</td>
      <td>Fuck</td>
      <td>8:00</td>
      <td>done</td>
    </tr>
  );
  return (
    <div className=" bg-[#abff4f]   h-[275px]">
      <Table>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default TableS;
