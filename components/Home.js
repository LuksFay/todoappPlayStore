import React, { useState } from "react";
import { Text } from "react-native";
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";
const Home = () => {
  //initial todos
  const initialTodos = [
    {
      title: "Tirarse un Peo",
      date: "Mon, 01 Jan 2024 00:00:01 GMT",
      key: "1",
    },
    {
      title: "Ser un puto crack",
      date: "Mon, 01 Jan 2024 00:00:02 GMT",
      key: "2",
    },
    {
      title: "Decirle Te amo a pereichina",
      date: "Mon, 01 Jan 2024 00:00:03 GMT",
      key: "3",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  //clear all todos

  const handleClearTodos = () => {
    setTodos([]);
  };

  //Modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();


// FUNCITON TO ADD TODOS


  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems todos={todos} setTodos={setTodos} />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
      />
    </>
  );
};

export default Home;
