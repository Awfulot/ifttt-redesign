import React, {useEffect, useState} from 'react';

const CreatePage = () => {


    async function addNewAuthor () {
        const newAuthor = {
            //id:6,
            created_at:"9/30/2022",
            username:username,
            email:email,

        }


        const response = await fetch("https://hdteznxiiggtdzpfsmkx.supabase.co/rest/v1/authors", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE"
            },
            body: JSON.stringify(newAuthor)
        });
        const result = response.text()
        console.log("hello")
        console.log(result)
    }

    async function addNewStory () {

        const newStory = {
            //id:29,
            created_at: "9/30/2022",
            title: title,
            description: description,
            text: text,
        }

        const response = await fetch("https://hdteznxiiggtdzpfsmkx.supabase.co/rest/v1/stories", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE"
            },
            body: JSON.stringify(newStory)
        });
        const result = response.text()
        //console.log("hello")
        //console.log(result)
    }




    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [description, setDescription] = useState("")
    const [apiStories, setApiStories] = useState([])

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleText = (event) => {
        setText(event.target.value)
    }
    const handleAuthorName = (event) => {
        setUsername(event.target.value)
    }
    const handleAuthorEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleAuthorClick = async () => {

        //await addNewAuthor(newAuthor)
        //const submittedNewAuthor = await addNewAuthor(newAuthor)
        //console.log(submittedNewAuthor)
        console.log("author click")
    }
    const handleStoryClick = async () => {


        //const submittedNewStory = await addNewStory(newStory)

        //console.log(submittedNewStory)
        console.log("story click")

    }

    async function fetchApiData () {
        const response = await fetch("https://hdteznxiiggtdzpfsmkx.supabase.co/rest/v1/stories", {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE"
            },

        });
        const result = await response.json()
        //console.log(result)
        //return result;
    }



    useEffect( ()  => {


        async function fetchApiData () {
            const response = await fetch("https://hdteznxiiggtdzpfsmkx.supabase.co/rest/v1/stories", {
                method:"GET",
                headers: {
                    "Content-Type":"application/json",
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkdGV6bnhpaWdndGR6cGZzbWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDk1NzcsImV4cCI6MTk4MDEyNTU3N30.WfqE-w-wiw1HD2y1taijIQBI6fHNnqHEbJY6OdPt5sE"
                },

            });
            const result = await response.json()
            setApiStories(result)
            //console.log(result)
            //return result;

        }
        fetchApiData()
        //const apiStoryData = await fetchApiData();

        // console.log(apiStoryData);
         //setApiStories(apiStoryData)


        console.log(apiStories);
    })



    return (
        <div>

                <input className="border" type="text" value={username} onChange={handleAuthorName}/>
                <input className="border" type="email" value={email} onChange={handleAuthorEmail}/>
                <button onClick={async () => {await addNewAuthor()}}>Create Author</button>

            <input className="border" type="text" value={title} onChange={handleTitle}/>
            <input className="border" type="text" value={description} onChange={handleDescription}/>
            <input className="border" type="text" value={text} onChange={handleText}/>
            <button onClick={async () => {await addNewStory()}}>Create Story</button>



        </div>

    );
};

export default CreatePage;