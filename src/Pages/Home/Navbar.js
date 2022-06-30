import React from "react";

const Navbar = () => {
    return (
        <div class="navbar bg-gradient-to-r from-secondary to-primary">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Completed Task</a>
                        </li>
                        <li tabindex="0">
                            <a class="justify-between">To Do</a>
                        </li>
                        <li>
                            <a>Calender</a>
                        </li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Task Management</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li>
                        <a>Completed Task</a>
                    </li>
                    <li tabindex="0">
                        <a>To Do</a>
                    </li>
                    <li>
                        <a>Calender</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-end pr-5">
                <div class="avatar online ">
                    <div class="w-10 rounded-full ">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
