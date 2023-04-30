import React from "react";
import { Table } from "@mantine/core";

const TableS = () => {
  const ths = (
    <tr>
      <th>No.</th>
      <th>Task Name</th>
      <th>Time</th>
      <th>Done</th>
    </tr>
  );

  // const rows = elements.map((element) => (
  //   <tr key={element.name}>
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
    <div className=" bg-[#eeef20]   h-[275px]">
      <Table>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default TableS;
