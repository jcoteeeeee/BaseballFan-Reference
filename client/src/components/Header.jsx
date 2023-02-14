import {useNavigate} from 'react-router-dom' 

const Header = () => {
    const navigate = useNavigate()           
    const handleLogoClick = () => {
        navigate('/')
    }
    return(
        <div id='header'>
            <img id='logo' onClick={handleLogoClick} src='./photos/bfr-logo.png'/>  
            <hr /> 
            <h2 id='to-about'>ABOUT</h2>
            <h2 id='to-follow'>FOLLOW</h2> 
        </div>
    )
}

export default Header 