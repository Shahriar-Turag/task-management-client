import React from "react";
import AddTodoModal from "./AddTodoModal";

const AddTodo = () => {
    return (
        <div className="flex px-5 pt-10">
            <input
                type="text"
                placeholder="Add Your Task"
                class="input  input-success w-[100%] "
            />
            <AddTodoModal />
        </div>
    );
};

export default AddTodo;
