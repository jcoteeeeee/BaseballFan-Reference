import Header from './Header.jsx'      
import {useState} from 'react'  
import {useNavigate} from 'react-router-dom'

// for future use 

const EditProfilePage = () => {  
    const navigate = useNavigate()  
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('') 
    const [favTeam, setFavTeam] = useState('')
    const [username, setUsername] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEditProSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')  
        navigate('/profilepage')
        const editProfile = async (e, user) => {
            let req = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PATCH', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({
                    first_name: firstName, 
                    last_name: lastName,  
                    fav_team: favTeam, 
                    username: username, 
                    email: email, 
                    password: password 
                })
            }) 
            editProfile() 
        }
    }

    return(
        <div>
            <Header/> 
            <form id='edit-profile-form' onSubmit={handleEditProSubmit}> 
                <label>First name</label>
                <input value={firstName} type='text' name='edit-fn' onChange={(e) => setFirstName(e.target.value)}/> 
                <br/> 
                <label>Last name</label>  
                <input value={lastName} type='text' id='edit-ln' onChange={(e) => setLastName(e.target.value)}></input>
                <br/>
                <label>Favorite team</label>
                <input value={favTeam} type='text' id='edit-favteam' onChange={(e) => setFavTeam(e.target.value)}/>    
                <br/>
                <label>Username</label>
                <input value={username} type='text' name='edit-usrname' onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label>Email</label>
                <input value={email} type='email' name='edit-email' onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <label>Password</label>
                <input value={password} type='password' name='edit-password' onChange={(e) => setPassword(e.target.value)}/>  
                <br/> 
                <button type='submit'>Save changes</button>
            </form>
        </div>
    )
}

export default EditProfilePage  