import React from 'react';
import SearchSection from "./SearchSection";
import DisplayGrid from "./DisplayGrid";

const Content = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-6">Explore</h1>
            <SearchSection/>
            <DisplayGrid text="Applets for your morning routine"/>
            <DisplayGrid text="Track your work hours in Google Calender"/>
            <DisplayGrid text="Park mower with a Google Calender event"/>
        </div>
    );
};

export default Content;