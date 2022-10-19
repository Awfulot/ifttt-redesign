import React, {useEffect, useRef} from 'react';
import {createClient} from "@supabase/supabase-js";
import {useNavigate} from "react-router-dom";



const LogInPage = () => {


    const supabaseUrl = process.env["REACT_APP_SUPABASE_API_ENDPOINT"]
    const supabaseKey = process.env["REACT_APP_SUPABASE_API_SECRET_KEY"]
    const supabase = createClient(supabaseUrl, supabaseKey)
    const emailInput = useRef();
    const passInput = useRef();

    const navigate = useNavigate()


    const cacheCurrentUser = (data) => {
        localStorage.setItem("currentUserId", data.user.id)
        localStorage.setItem("currentUser", JSON.stringify(data.user))
        localStorage.setItem("currentSession", JSON.stringify(data.session))

    }

    const handleLoginWithPass = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email: emailInput.current.value,
            password: passInput.current.value,

        })
        console.log(data)

        navigate(`/applet-hub/:${data.user.id}`)


        cacheCurrentUser(data)


    }
    const handleLoginWithLinkedin = async () => {
        let {data,user,error} = await supabase.auth.signInWithOAuth({

            provider: "linkedin"
        })
//after log in save credentials and more
        cacheCurrentUser(data)
    }
    const handleLoginWithGoogle = async () => {
        let {data, user,error} = await supabase.auth.signInWithOAuth({

            provider: "google"
        })
//after log in save credentials and more
        cacheCurrentUser(data)
    }
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        console.log("Signed Out")
    }

    return (
        <div>
            <button onClick={handleLoginWithLinkedin} className={"rounded-md bg-blue-400"}>Log in with Linkedin</button>
            <button onClick={handleLoginWithGoogle} className={"rounded-md bg-blue-400 ml-5"}>Log in with Google</button>
            <form onSubmit={handleLoginWithPass} className={"mt-3"}>
                <input type="email" className="border-2" placeholder="Email" ref={emailInput}/>
                <input type="text" className="border-2" placeholder="Password" ref={passInput}/>
                <input type="submit" value="Log in"/>
            </form>
            <button onClick={signOut}>LOG OUT</button>

        </div>
    );
};

export default LogInPage;