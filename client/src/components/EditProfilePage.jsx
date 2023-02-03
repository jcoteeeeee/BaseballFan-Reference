import Header from './Header.jsx'      

const EditProfilePage = () => {
    return(
        <div>
            <Header/> 
            <form id='edit-profile-form'>
                <label>Username</label>
                <input type='text' name='edit-usrname'/>
                <br/>
                <label>Email</label>
                <input type='email' name='edit-email'/>
                <br/>
                <label>Password</label>
                <input type='password' name='edit-password'/>  
                <br/>
                <label></label>
                <button type='submit'>Save changes</button>
            </form>
        </div>
    )
}

export default EditProfilePage  