import React from 'react';
import DisplayGridCard from "./DisplayGridCard";

const AppletsCardData = () => {

    const allApplets = [{
        id: 100,
        story: "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "chartbannd500"
    }, {
        id: 1000,
        story: "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "sobunson46"
    },
    ]

    return (
        <div>
            {allApplets.map( appletContent => <DisplayGridCard {...appletContent}/>)}
        </div>
    );
};

export default AppletsCardData;