import React, {useRef} from 'react';
import {createClient} from "@supabase/supabase-js";




const SignUpPage = () => {

const supabaseUrl = process.env["REACT_APP_SUPABASE_API_ENDPOINT"]
const supabaseKey = process.env["REACT_APP_SUPABASE_API_SECRET_KEY"]
const supabase = createClient(supabaseUrl, supabaseKey)

const emailInput = useRef();
const passInput = useRef()

const handleSignUp = async (e) => {
    e.preventDefault()

    let {user, error} = await supabase.auth.signUp({
        email: emailInput.current.value,
        password: passInput.current.value})


    console.log(user)
    console.log(error)
    //console.log(emailInput.current.value)
    //console.log(passInput.current.value)
    //console.log(supabase)
}


    const handleLSignInWithLinkedin = async () => {
        let {user,error} = await supabase.auth.signInWithOAuth({

            provider: "linkedin"
        })
//after log in save credentials and more
        console.log(user)
        console.log(error)
    }
    const handleSignInWithGoogle = async () => {
        let {user,error} = await supabase.auth.signInWithOAuth({

            provider: "google"
        })
//after log in save credentials and more
    }


    return (
        <div>
            <button onClick={handleLSignInWithLinkedin} className={"rounded-md bg-blue-400"}>Sign up with Linkedin</button>
            <button onClick={handleSignInWithGoogle} className={"rounded-md bg-blue-400 ml-5"}>Sign up with Google</button>
            <form onSubmit={handleSignUp} className={"mt-3"}>
                <input type="email" className="border-2" placeholder="Email" ref={emailInput}/>
                <input type="text" className="border-2" placeholder="Password" ref={passInput}/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    );
};

export default SignUpPage;