import React, {useRef} from 'react';
import {createClient} from "@supabase/supabase-js";

const LogInPage = () => {


    const supabaseUrl = process.env["REACT_APP_SUPABASE_API_ENDPOINT"]
    const supabaseKey = process.env["REACT_APP_SUPABASE_API_SECRET_KEY"]
    const supabase = createClient(supabaseUrl, supabaseKey)
    const emailInput = useRef();
    const passInput = useRef()

    const handleLoginWithPass = async (e) => {
        e.preventDefault()
        let {data: user, error} = await supabase.auth.signInWithPassword({

            email : emailInput.current.value,
            password: passInput.current.value
        });
        console.log(user.user)
        console.log(user.session)
        console.log(error)


    }
    const handleLoginWithLinkedin = async () => {
        let {user,error} = await supabase.auth.signInWithOAuth({

            provider: "linkedin"
        })
//after log in save credentials and more
    }
    const handleLoginWithGoogle = async () => {
        let {user,error} = await supabase.auth.signInWithOAuth({

            provider: "google"
        })
//after log in save credentials and more
    }


    return (
        <div>
            <button className={"rounded-md bg-blue-400"}>Log in with Linkedin</button>
            <button className={"rounded-md bg-blue-400 ml-5"}>Log in with Google</button>
            <form onSubmit={handleLoginWithPass} className={"mt-3"}>
                <input type="email" className="border-2" placeholder="Email" ref={emailInput}/>
                <input type="text" className="border-2" placeholder="Password" ref={passInput}/>
                <input type="submit" value="Log in"/>
            </form>

        </div>
    );
};

export default LogInPage;