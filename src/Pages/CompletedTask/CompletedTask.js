import React, { useEffect, useState } from "react";
import EditToDoModal from "../Home/EditToDoModal";

const CompletedTask = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/todos`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                const completedTodos = data.filter(
                    (todo) => todo.status === "completed"
                );
                setTodos(completedTodos);
                setLoading(false);
                console.log(data);
                console.log(completedTodos);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                setTodos(todos.filter((todo) => todo._id !== id));
                console.log(data);
            });
    };

    return (
        <div class="overflow-x-auto w-full p-10">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th> </th>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo._id}>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div>
                                        <div class="font-bold">
                                            {todo.title}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="badge">{todo.priority}</span>
                            </td>
                            <td>
                                <span class="badge">{todo.status}</span>
                            </td>
                            <td>{todo.date}</td>
                            <th className="space-x-8">
                                <button>
                                    <EditToDoModal
                                        todo={todo}
                                        className="fas fa-edit"
                                    />
                                </button>
                                <button
                                    onClick={() => handleDelete(todo._id)}
                                    className="fas fa-trash-alt text-red-600 "
                                ></button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompletedTask;
