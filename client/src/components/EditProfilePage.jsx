import Header from './Header.jsx'      
import {useState} from 'react'  
import {useNavigate} from 'react-router-dom'

const EditProfilePage = () => {  
    const navigate = useNavigate() 

    const handleEditProSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')  
    }

    return(
        <div>
            <Header/> 
            <form id='edit-profile-form'> 
                <label>First name</label>
                <input type='text' name='edit-fn' /> 
                <br/> 
                <label>Last name</label>  
                <input type='text' id='edit-ln'/>
                <br/>
                <label>Favorite team</label>
                <input type='text' id='edit-favteam'/>    
                <br/>
                <label>Username</label>
                <input type='text' name='edit-usrname'/>
                <br/>
                <label>Email</label>
                <input type='email' name='edit-email'/>
                <br/>
                <label>Password</label>
                <input type='password' name='edit-password'/>  
                <br/> 
                <button type='submit'>Save changes</button>
            </form>
        </div>
    )
}

export default EditProfilePage  