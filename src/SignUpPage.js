import React from 'react';

const SignUpPage = () => {
    return (
        <div>
            <form>
                <input type="email" className="border-2" placeholder="Email"/>
                <input type="text" className="border-2" placeholder="Password"/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    );
};

export default SignUpPage;