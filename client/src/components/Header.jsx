import {useNavigate} from 'react-router-dom' 

const Header = () => {
    const navigate = useNavigate()           
    const handleLogoClick = () => {
        navigate('/')
    }
    return(
        <div>
            <img onClick={handleLogoClick} src='./photos/bfr-logo.png'/>
        </div>
    )
}

export default Header 