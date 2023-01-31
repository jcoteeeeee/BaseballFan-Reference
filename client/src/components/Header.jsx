import {useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()           
    const handleLogoClick = () => {
        navigate('/')
    }
    return(
        <div>
            <h2 onClick={handleLogoClick}>Logo</h2>
        </div>
    )
}

export default Header 