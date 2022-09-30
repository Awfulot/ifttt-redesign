import React, {useState} from 'react';

const CreatePage = () => {

    const newAuthor = {
        id:6,
        created_at:"9/30/2022",
        username:"jifaj",
        email:"jifaj@gmail.com",

    }
    const [authorName, setAuthorName] = useState("")
    const [authorEmail, setAuthorEmail] = useState("")
    async function addNewAuthor () {
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


    return (
        <div>

                <input className="border" type="text"/>
                <input className="border" type="email"/>
                <button onClick={addNewAuthor}>Create Author</button>

        </div>

    );
};

export default CreatePage;