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
        </div>
    )
}

export default Header 