import React from 'react';

const Buttons = ({buttonText,buttonColorClass}) => {
    return (
        <div>
            <button className={`btn btn-primary border-0 ${buttonColorClass}`}>{buttonText}</button>
        </div>
    );
};

export default Buttons;