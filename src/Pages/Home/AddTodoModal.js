import React from "react";
import ReactDatePicker from "./ReactDatePicker";

const AddTodoModal = () => {
    return (
        <div>
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
                            type="text"
                            placeholder="Type here"
                            class="input input-sm input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea
                            class="textarea textarea-bordered h-24"
                            placeholder="Bio"
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p>priority</p>
                            <form className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <input
                                        id="low"
                                        type="radio"
                                        name="optradio"
                                        checked
                                        className="mt-1"
                                    />{" "}
                                    <label htmlFor="low" class="">
                                        {" "}
                                        Low
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="low"
                                        type="radio"
                                        name="optradio"
                                        className="mt-1"
                                    />{" "}
                                    <label htmlFor="low" class="">
                                        {" "}
                                        Medium
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="low"
                                        type="radio"
                                        name="optradio"
                                        className="mt-1"
                                    />{" "}
                                    <label htmlFor="low" class="">
                                        {" "}
                                        High
                                    </label>
                                </div>
                            </form>
                        </div>

                        <div>
                            <p>Pick a date</p>
                            <ReactDatePicker />
                        </div>
                    </div>
                    <div>
                        <p>Status</p>
                        <form className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <input
                                    id="new"
                                    type="radio"
                                    name="optradio"
                                    checked
                                    className="mt-1"
                                />{" "}
                                <label htmlFor="new" class="">
                                    {" "}
                                    New
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="inProgress"
                                    type="radio"
                                    name="optradio"
                                    className="mt-1"
                                />{" "}
                                <label htmlFor="inProgress" class="">
                                    {" "}
                                    In Progress
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="completed"
                                    type="radio"
                                    name="optradio"
                                    className="mt-1"
                                />{" "}
                                <label htmlFor="completed" class="">
                                    {" "}
                                    Completed
                                </label>
                            </div>
                        </form>
                    </div>

                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-outline">
                            Cancel
                        </label>
                        <label for="my-modal-6" class="btn">
                            Add
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTodoModal;
