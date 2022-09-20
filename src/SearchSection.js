import React from 'react';

const SearchSection = () => {
    return (
        <div>
            <div>
                <div className="tabs flex space-x-10 justify-evenly">
                    <a className="tab tab-bordered">All</a>
                    <a className="tab tab-bordered tab-active">Applets</a>
                    <a className="tab tab-bordered">Services</a>
                    <a className="tab tab-bordered">Stories</a>
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

        </div>
    );
};

export default SearchSection;