import React from 'react'
import Form from '../components/Form'

import TableS from '../components/TableS';

const Body = () => {
  return (
    <div className=" flex ">
      <div className=" w-[30%]  ">
        <Form/>
      </div>
      <div className=" w-[70%] ">
        <TableS/>
      </div>
    </div>
  );
}

export default Body