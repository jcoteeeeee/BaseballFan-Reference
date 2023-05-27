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
        <div id='homepage'>
            <div id='home-top'> 
                <Header/>
            </div>
            <div id='home-photo-container'>
                <img id='home-photo' src='./photos/bfref-homepage.png' /> 
            </div>
            <div id='log-sig'>
                <button id='to-login' onClick={handleLogBtnClick}>Login</button>
                <p id='to-signup' onClick={handleSignupClick}>or <b>signup</b></p> 
            </div>
        </div>
    )
}  

export default Homepage