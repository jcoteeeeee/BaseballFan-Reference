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
                <img id='home-photo' src='./photos/bfr-homepage.png' /> 
                <h2 id='slogan'>A place for baseball fans to record their own history </h2> 
            </div>
            <hr/>
            <div id='log-sig'>
                <button id='to-login' onClick={handleLogBtnClick}>Login</button>
                <p id='to-signup' onClick={handleSignupClick}>or signup</p> 
            </div>
        </div>
    )
}  

export default Homepage