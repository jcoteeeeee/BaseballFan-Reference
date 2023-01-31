import Header from './Header.jsx'

const Homepage = ( {handleLogBtnClick, handleSignupClick} ) => {
    return(
        <div>
            <Header/>
            <button onClick={handleLogBtnClick}>Login</button>
            <p onClick={handleSignupClick}>or signup</p>
        </div>
    )
}  

export default Homepage