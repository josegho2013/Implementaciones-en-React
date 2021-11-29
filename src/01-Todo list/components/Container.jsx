import React, { useState } from "react";


import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
const Container = () => {


    const[list,setList]=useState([])
    const handleAddItem = addItem => {
        setList([...list, addItem]);
      };
  return (
    <div>
      container
      <FormTodo handleAddItem={handleAddItem}/>
      <TaskList  ist={list} setList={setList}/>
    </div>
  );
};

export default Container;
