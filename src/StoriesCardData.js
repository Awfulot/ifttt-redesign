import React from 'react';
import DisplayGridCard from "./DisplayGridCard";

const StoriesCardData = () => {

    const allStoryInfo = [{
        id: 58395380,
        story: "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "jijiejlplpp99"
    }, {
        id: 599381,
        story: "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "pmfsygsyukeq012"
    },
    ]


    return (
        <div>
            {allStoryInfo.map( storyContent => <DisplayGridCard {...storyContent}/>)}
        </div>
    );
};

export default StoriesCardData;