import React from 'react';
import Buttons from "./Buttons";
import {Link} from "react-router-dom";

const TopNav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 space-x-10">

                <Link to="/" className="text-2xl font-bold">IFTTT</Link>
                <div>
                    <Buttons buttonText="Welcome to IFTTT" buttonColorClass="bg-blue-500"/>

                </div>
            </div>

            <div className="flex space-x-10">
                <div className="flex space-x-10">
                    <Link to="/AppletsPage" className="text-2xl font-bold">Applets</Link>
                    <Link to="/ExplorePage" className="text-2xl font-bold">Explore</Link>
                    <Link to="/DevelopersPage" className="text-2xl font-bold">Explore</Link>

                </div>
                <div className="flex space-x-10">

                    <Buttons buttonText="Upgrade" buttonColorClass="bg-gray-700"/>
                    <Buttons buttonText="Create" buttonColorClass="bg-gray-700"/>


                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopNav;