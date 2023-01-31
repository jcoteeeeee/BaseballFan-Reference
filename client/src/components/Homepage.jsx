const Homepage = ( {handleLogBtnClick, handleSignupClick} ) => {
    return(
        <div>
            <button onClick={handleLogBtnClick}>Login</button>
            <p onClick={handleSignupClick}>or signup</p>
        </div>
    )
}  

export default Homepage