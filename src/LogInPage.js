import React from 'react';

const LogInPage = () => {
    return (
        <div>
            <form>
                <input type="email" className="border-2" placeholder="Email"/>
                <input type="text" className="border-2" placeholder="Password"/>
                <input type="submit" value="Log in"/>
            </form>

        </div>
    );
};

export default LogInPage;