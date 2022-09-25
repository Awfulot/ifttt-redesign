import React from 'react';
import DisplayGridCard from "./DisplayGridCard";

const AllCardData = () => {

    const allStories = [{
        id: 1,
        story: "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "fhartmann0"
    }, {
        id: 2,
        story: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
        backgroundImage: "http://dummyimage.com/1200x600.png/cc0000/ffffff",
        username: "gbottoms1"
    }, {
        id: 3,
        story: "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        backgroundImage: "http://dummyimage.com/1200x600.png/ff4444/ffffff",
        username: "skimbling2"
    }, {
        id: 4,
        story: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "maland3"
    }, {
        id: 5,
        story: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        backgroundImage: "http://dummyimage.com/1200x600.png/cc0000/ffffff",
        username: "msilly4"
    }, {
        id: 6,
        story: "Nulla nisl. Nunc nisl.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "scoey5"
    }, {
        id: 7,
        story: "Duis mattis egestas metus.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "shardisty6"
    }, {
        id: 8,
        story: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "kidel7"
    }, {
        id: 9,
        story: "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "rkuller8"
    }, {
        id: 10,
        story: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
        backgroundImage: "http://dummyimage.com/1200x600.png/ff4444/ffffff",
        username: "savis9"
    }, {
        id: 11,
        story: "Vivamus vestibulum sagittis sapien.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "dbotemana"
    }, {
        id: 12,
        story: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "cverheijdenb"
    }, {
        id: 13,
        story: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "ghearnshawc"
    }, {
        id: 14,
        story: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "pmarzellod"
    }, {
        id: 15,
        story: "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        backgroundImage: "http://dummyimage.com/1200x600.png/ff4444/ffffff",
        username: "ogronwe"
    }, {
        id: 16,
        story: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "slongmaidf"
    }, {
        id: 17,
        story: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "kaggissg"
    }, {
        id: 18,
        story: "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
        backgroundImage: "http://dummyimage.com/1200x600.png/dddddd/000000",
        username: "jwhaitesh"
    }, {
        id: 19,
        story: "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "rblewitti"
    }, {
        id: 20,
        story: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
        backgroundImage: "http://dummyimage.com/1200x600.png/5fa2dd/ffffff",
        username: "ngouthierj"
    }];

    return (
        <div>
            {allStories.map( storyContent => <DisplayGridCard {...storyContent}/>)}
        </div>
    );
};

export default AllCardData;