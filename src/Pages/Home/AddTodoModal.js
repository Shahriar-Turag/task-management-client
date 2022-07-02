import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

const AddTodoModal = () => {
    const { register, handleSubmit, reset } = useForm();

    const [selectedDate, setSelectedDate] = useState(new Date());

    const onSubmit = (data) => {
        axios.post("http://localhost:5000/todos", data).then((res) => {
            if (res.data.insertedId) {
                alert("Task Added Successfully...!");
                reset();
                console.log(data);
            }
        });
    };
    console.log(selectedDate);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label for="my-modal-6" class="btn modal-button ml-3">
                Add
            </label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
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
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">description</span>
                        </label>
                        <textarea
                            {...register("description")}
                            class="textarea textarea-bordered h-24"
                            placeholder="Bio"
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p>priority</p>
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
                                    />{" "}
                                    <label htmlFor="high" class="">
                                        {" "}
                                        High
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p>Pick a date</p>
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
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Status</p>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <input
                                    {...register("status", { required: true })}
                                    id="new"
                                    type="radio"
                                    name="status"
                                    value="New"
                                    className="mt-1"
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
                                />{" "}
                                <label htmlFor="inProgress" class="">
                                    {" "}
                                    In Progress
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-outline">
                            Cancel
                        </label>
                        <input type="submit" value="Add" className="btn " />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddTodoModal;
