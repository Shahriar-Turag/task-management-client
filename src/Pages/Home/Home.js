import React from "react";
import AddTodo from "./AddTodo";
import Navbar from "./Navbar";
import ToDoTable from "./ToDoTable";

const Home = () => {
    return (
        <div>
            <AddTodo />
            <ToDoTable />
        </div>
    );
};

export default Home;
