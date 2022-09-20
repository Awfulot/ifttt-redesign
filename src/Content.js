import React from 'react';
import SearchSection from "./SearchSection";
import DisplayGrid from "./DisplayGrid";

const Content = () => {
    return (
        <div className="w-1/2 mx-auto border-2">
            <h1 className="text-3xl text-center mt-6">Explore</h1>
            <SearchSection/>
            <DisplayGrid/>
        </div>
    );
};

export default Content;