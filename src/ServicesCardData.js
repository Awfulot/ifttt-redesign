import React from 'react';
import DisplayGridCard from "./DisplayGridCard";

const ServicesCardData = () => {

    const allServices = [{
        id: 4289,
        story: "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "ckgojgodj39"
    }, {
        id: 5892852,
        story: "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "skgodkok46"
    },
    ]


    return (
        <div>
            {allServices.map( serviceContent => <DisplayGridCard {...serviceContent}/>)}
        </div>
    );
};

export default ServicesCardData;