import React from "react";

const ToDoTable = () => {
    return (
        <div class="overflow-x-auto w-full">
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
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img
                                            src="/tailwind-css-component-profile-2@56w.png"
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Hart Hagerty</div>
                                    <div class="text-sm opacity-50">
                                        United States
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <span class="badge badge-ghost badge-sm">
                                Desktop Support Technician
                            </span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button class="btn btn-ghost btn-xs">
                                details
                            </button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ToDoTable;
