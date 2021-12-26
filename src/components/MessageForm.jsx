import { useState } from 'react';

import { sendMessage, isTyping } from 'react-chat-engine';
import {AiOutlineSend , AiOutlinePicture} from 'react-icons/ai'


const MessageForm = (props) => {
         const [value, setValue] = useState('')
         const {chatId , creds }=props

         const handleChange=(e)=>{
             setValue({...value , [e.target.name] : e.target.value})
             isTyping(props , chatId)
         }

    const handleSubmit=(e)=>{
         e.preventDefault()

         const text = value.trim()
         if(text > 0 ){ 
             sendMessage(creds, chatId, {text})
            }

        setValue('')

    }

    const handleUpload=(e)=>{
          sendMessage(creds , chatId , {files: e.target.files , text : ''})
    }
    return (
     <form onSubmit={handleSubmit} className='message-form' >
     <input
           className="message-input"
           placeholder="Send a message..."
           value={value}
           onChange={handleChange}
           onSubmit={handleSubmit}

             />

        <label htmlFor="upload-button">
           <span className="image-button">
            <AiOutlinePicture className="picture-icon" />
           </span>
        </label>
        <input
        type="file"
        multiple
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />

        <button type="submit" className="send-button">
        <AiOutlineSend className="send-icon" />
      </button>
     </form>
    )
}

export default MessageForm
