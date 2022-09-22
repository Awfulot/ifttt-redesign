import React from 'react';
import SearchSection from "./SearchSection";
import DisplayGridCard from "./DisplayGridCard";

const Content = () => {

    const displayGridWords = [
        "Applets for your morning routine",
        "Track your work hours in Google Calender",
        "Park mower with a Google Calender event",
        "Additional text to see if map works 1",
        "Additional text to see if map works 2",
        "Additional text to see if map works 3",
        "Additional text to see if map works 4",

    ];

    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-6">Explore</h1>
            <SearchSection/>
            {
                displayGridWords.map((words) => <DisplayGridCard text={words}/>)
            }

        </div>
    );
};

export default Content;