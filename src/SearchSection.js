import React from 'react';
import {useState} from "react";
import AllCardData from "./AllCardData";
import StoriesCardData from "./StoriesCardData";
import ServicesCardData from "./ServicesCardData";
import AppletsCardData from "./AppletsCardData";

const SearchSection = () => {
    const [displayAllCards, setDisplayAllCards] = useState(true);
    const [displayStoryCards, setDisplayStoryCards] =  useState(false);
    const [displayServicesCard, setDisplayServicesCard] = useState(false);
    const [displayAppletsCard, setDisplayAppletsCard] = useState(false);

    const [allCardTabStatus, setAllCardTabStatus] = useState("tab-active")
    const [storyCardTabStatus, setStoryCardTabStatus] = useState("")
    const [servicesCardTabStatus, setServicesCardTabStatus] = useState("")
    const [appletsCardTabStatus, setAppletsCardTabStatus] = useState("")

    const allCardsClick = () => {
        setDisplayAllCards(true)
        setDisplayStoryCards(false)
        setDisplayServicesCard(false)
        setDisplayAppletsCard(false)

        setAppletsCardTabStatus("")
        setAllCardTabStatus("tab-active")
        setStoryCardTabStatus("")
        setServicesCardTabStatus("")
    };
    const storyCardsClick = () => {
        setDisplayAllCards(false)
        setDisplayStoryCards(true)
        setDisplayServicesCard(false)
        setDisplayAppletsCard(false)

        setAppletsCardTabStatus("")
        setAllCardTabStatus("")
        setStoryCardTabStatus("tab-active")
        setServicesCardTabStatus("")
    };
    const servicesCardsClick = () => {
        setDisplayAllCards(false)
        setDisplayStoryCards(false)
        setDisplayServicesCard(true)
        setDisplayAppletsCard(false)

        setAppletsCardTabStatus("")
        setAllCardTabStatus("")
        setStoryCardTabStatus("")
        setServicesCardTabStatus("tab-active")
    };
    const appletsCardsClick = () => {
        setDisplayAllCards(false)
        setDisplayStoryCards(false)
        setDisplayServicesCard(false)
        setDisplayAppletsCard(true)

        setAppletsCardTabStatus("tab-active")
        setAllCardTabStatus("")
        setStoryCardTabStatus("")
        setServicesCardTabStatus("")
    };




    return (
        <div>
            <div>
                <div className="tabs flex space-x-10 justify-evenly">
                    <a onClick={() => allCardsClick()} className={`tab tab-bordered ${allCardTabStatus}`}>All</a>
                    <a onClick={() => appletsCardsClick()} className={`tab tab-bordered ${appletsCardTabStatus}`}>Applets</a>
                    <a onClick={() => servicesCardsClick()} className={`tab tab-bordered ${servicesCardTabStatus}`}>Services</a>
                    <a onClick={() => storyCardsClick()} className={`tab tab-bordered ${storyCardTabStatus}`}>Stories</a>
                </div>
            </div>
            <div className="form-control">
                <div className="input-group">
                    <button className="btn btn-square bg-gray-300 border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <input type="text" placeholder="Search Applets or Services" className="input input-bordered w-full bg-gray-300 border-0 focus:outline-none" />

                </div>
            </div>
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

export default SearchSection;