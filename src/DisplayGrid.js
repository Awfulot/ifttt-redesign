import React from 'react';

const DisplayGrid = ({text}) => {
    return (
        <div className="mt-5">
            <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body relative">

                    <p className="text-3xl absolute bottom-0 left-48 py-10">{text}</p>

                </div>
            </div>

        </div>
    );
};

export default DisplayGrid;