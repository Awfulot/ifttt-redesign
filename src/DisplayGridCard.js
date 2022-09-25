import React from 'react';

const DisplayGridCard = ({id, story, backgroundImage, username}) => {


    return (
        <div className="mt-5">
            <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure><img src={backgroundImage} alt="Shoes" /></figure>
                <div className="card-body relative">

                    <p className="text-3xl absolute bottom-0 left-48 py-10">{story}</p>
                    <p>{username} {id}</p>

                </div>
            </div>

        </div>
    );
};

export default DisplayGridCard;