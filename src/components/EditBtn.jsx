import React, { useState } from 'react'
import { BsPencilFill } from 'react-icons/bs';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { TextInput } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useDispatch } from 'react-redux';
import { EDIT_IN_TABLE } from '../services/taskSlice';

const EditBtn = ({id}) => {
  const dispatch =  useDispatch()
  const [name,setName] = useState("")
const [time,setTime] = useState("")
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const editHandler= (e) => {
    e.preventDefault()
    const newData = {id:id,name,time}
    dispatch(EDIT_IN_TABLE(newData))
    closeModal()
  }

  

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
        <button onClick={openModal} className=" w-6 h-6 flex align-middle justify-center items-center bg-teal-600 text-white  rounded-sm ">
          <BsPencilFill/>
        </button>
        <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Edit Your Plan</h1>
        <form  className=' flex flex-col gap-3' onSubmit={editHandler}>
        <TextInput value={name} onChange={e => {setName(e.target.value)}}
          placeholder="Enter Task Name"
          label="Task Name"
          radius="xl"
        />
        <TimeInput value={time} onChange={e => {setTime(e.target.value)}} radius="xl" label="Time to do<3" />
        <div className="flex justify-end gap-1">
          <button type='submit' className=' px-3 py-1 bg-teal-500 text-white rounded-sm'>Done</button>
          <button onClick={closeModal} className=' px-3 py-1 bg-gray-500 text-white rounded-sm'>Cancel</button>
        </div>
        </form>
      </Modal>
    </div>
  )
}

export default EditBtn