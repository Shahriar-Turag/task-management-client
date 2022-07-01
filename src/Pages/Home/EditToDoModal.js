import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditToDoModal = ({ todo }) => {
    const { register, handleSubmit, reset } = useForm();

    const [selectedDate, setSelectedDate] = useState(new Date());
    let { _id } = todo;

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/todos/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                if (data.modifiedCount > 0) {
                    alert("Task Updated Successfully...!");
                    reset();
                }
            });
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label for={todo._id} class="btn modal-button ml-3">
                Edit
            </label>

            <input type="checkbox" id={todo._id} class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Add your task to the list</h3>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Title</span>
                        </label>
                        <input
                            {...register("title")}
                            type="text"
                            placeholder="Type here"
                            class="input input-sm input-bordered w-full max-w-xs"
                            defaultValue={todo.title}
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea
                            {...register("description")}
                            class="textarea textarea-bordered h-24"
                            placeholder="Bio"
                            defaultValue={todo.description}
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <label class="label">
                                <span class="label-text">Priority</span>
                            </label>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <input
                                        {...register("priority", {
                                            required: true,
                                        })}
                                        id="low"
                                        type="radio"
                                        name="priority"
                                        value="Low"
                                        className="mt-1"
                                        defaultChecked={todo.priority === "Low"}
                                    />{" "}
                                    <label htmlFor="low" class="">
                                        {" "}
                                        Low
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        {...register("priority", {
                                            required: true,
                                        })}
                                        id="medium"
                                        type="radio"
                                        name="priority"
                                        value="Medium"
                                        className="mt-1"
                                        defaultChecked={
                                            todo.priority === "Medium"
                                        }
                                    />{" "}
                                    <label htmlFor="medium" class="">
                                        {" "}
                                        Medium
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        {...register("priority", {
                                            required: true,
                                        })}
                                        id="high"
                                        type="radio"
                                        name="priority"
                                        value="High"
                                        className="mt-1"
                                        defaultChecked={
                                            todo.priority === "High"
                                        }
                                    />{" "}
                                    <label htmlFor="high" class="">
                                        {" "}
                                        High
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="label">
                                <span class="label-text">Pick a Date</span>
                            </label>
                            <div>
                                <input
                                    {...register("date", {
                                        required: true,
                                    })}
                                    type="date"
                                    onChange={(e) =>
                                        setSelectedDate(e.target.value)
                                    }
                                    value={selectedDate}
                                    className="input input-sm input-bordered w-full max-w-xs"
                                    dateFormat="dd-mm-yyyy"
                                    defaultValue={todo.date}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="label">
                            <span class="label-text">Status</span>
                        </label>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <input
                                    {...register("status", { required: true })}
                                    id="new"
                                    type="radio"
                                    name="status"
                                    value="New"
                                    className="mt-1"
                                    defaultChecked={todo.status === "New"}
                                />{" "}
                                <label htmlFor="new" class="">
                                    {" "}
                                    New
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    {...register("status")}
                                    id="inProgress"
                                    type="radio"
                                    name="status"
                                    value="In Progress"
                                    className="mt-1"
                                    defaultChecked={
                                        todo.status === "In Progress"
                                    }
                                />{" "}
                                <label htmlFor="inProgress" class="">
                                    {" "}
                                    In Progress
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    {...register("status")}
                                    id="completed"
                                    type="radio"
                                    name="status"
                                    value="Completed"
                                    className="mt-1"
                                    defaultChecked={todo.status === "Completed"}
                                />{" "}
                                <label htmlFor="completed" class="">
                                    {" "}
                                    Completed
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="modal-action">
                        <label for={todo._id} class="btn btn-outline">
                            Cancel
                        </label>
                        <input type="submit" value="Edit" className="btn " />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EditToDoModal;
