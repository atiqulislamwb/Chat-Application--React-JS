import React , {useState} from 'react'
import axios from 'axios'


const projectID= "b986e973-bc6f-4304-8d50-54648682f45a"



const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
 

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const authObj = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret':password} 
        

      try {
           await axios.get('https://api.chatengine.io/chats', { headers: authObj} )
            
           localStorage.setItem('username' , username)
           localStorage.setItem('password' , password)

           window.location.reload()
           setError('')
      
        } catch (error) {
           setError('OOps ! invalid credential' )
      }


     }
      
    return (
        <div className="wrapper"> 
          <div className="form">
          <h1 className="title">Chat Application</h1>
       
          <form onSubmit={handleSubmit}> 
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
         
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
          </form>
          <h1>{error}</h1>
          </div>
        </div>
    )
}

export default LoginForm
