import React, {useEffect, useRef, useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import {useParams} from "react-router-dom";
import {data} from "autoprefixer";
//import {supabase} from "./utils/supabaseClient";

const supabaseUrl = process.env.REACT_APP_SUPABASE_API_ENDPOINT
const supabaseKey = process.env.REACT_APP_SUPABASE_API_SECRET_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const UserApplets = () => {
    const params = useParams()
    const [applets, setApplets] = useState([]);
    const [currentUser, setCurrentUser] = useState("No user found");
    const appletTitle = useRef()
    const appletDescription = useRef()
    const [successAdd, setSuccessAdd] = useState(false)
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const userId = user.id

    const showUsersApplets = async () => {

        let { data: applets2, error } = await supabase
            .from('applets2')
            .select('title,description')
            .eq('profile_id', userId)


        console.log(applets2)
    }


    useEffect(() => {
        const getLoggedInUser = () => {
            //console.log(user)
            //console.log(userId)
            //console.log(user.email)
           // console.log(params)
        }
        getLoggedInUser()
    },[])

    const handleAppletSubmit = async (event) => {
        event.preventDefault()


        const { data, error } = await supabase
            .from('applets2')
            .insert([
                { title: appletTitle.current.value, description: appletDescription.current.value, profile_id: userId},
            ])
            setSuccessAdd(true)

        event.target.reset();
    }

        if(successAdd){
            setTimeout(() => {
                setSuccessAdd(false)
            },2000)
        }


    return (
        <div>
            {successAdd ? <p className="text-xl font-bold text-green-500">APPLET ADDED SUCCESSFULLY</p> : <p></p>}

            <p>Welcome {user.email}</p>
            <p>Create new applet below</p>
            <form onSubmit={handleAppletSubmit}>
                <input type="text" placeholder="Title" ref={appletTitle}/>
                <input type="text" placeholder="Description" ref={appletDescription}/>
                <input type="submit" value="submit applet"/>
            </form>

            <button onClick={showUsersApplets}>Show all applets in console</button>
            {
                applets.map(applet => <p key={applet.id}>{applet.name}</p>)
            }

        </div>
    );
};

export default UserApplets;