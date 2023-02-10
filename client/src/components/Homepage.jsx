import Header from './Header.jsx' 
import {useEffect, useState} from 'react'

const Homepage = ( {handleLogBtnClick, handleSignupClick} ) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch("/me").then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user);
                    setIsAuthenticated(true);
                });
            }
        });
    }, []);


    return(
        <div>
            <Header/>
            <button onClick={handleLogBtnClick}>Login</button>
            <p onClick={handleSignupClick}>or signup</p> 

        </div>
    )
}  

export default Homepage