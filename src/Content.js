import React from 'react';
import SearchSection from "./SearchSection";
//import DisplayGridCard from "./DisplayGridCard";
import AllCardData from "./AllCardData";
import StoriesCardData from "./StoriesCardData";
import ServicesCardData from "./ServicesCardData";
import AppletsCardData from "./AppletsCardData";

const Content = () => {

    const displayAllCards = true;
    const displayStoryCards =  false;
    const displayServicesCard = false;
    const displayAppletsCard = false;

    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-6">Explore</h1>
            <SearchSection/>
            {
                displayAllCards && <AllCardData/>
            }
            {
                displayStoryCards && <StoriesCardData/>
            }
            {
                displayServicesCard && <ServicesCardData/>
            }
            {
                displayAppletsCard && <AppletsCardData/>
            }




        </div>
    );
};

export default Content;