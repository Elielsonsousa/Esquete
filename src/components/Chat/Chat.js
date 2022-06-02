import './App.css';
import { FiCornerRightUp } from "react-icons/fi";



export default function Chat() {
  return (
    <div className='container'>
      <p className='txt-title'>Entre na discursão</p>
      <div className='chat'>
        <h5 className='name-person-chat'>Fulano de tal:</h5>
       
        
      </div>
      
      <input
       type='text'
       placeholder='Digite sua mensagem...'
       className='input'
      >
       
      </input>
      <button className='btn-msg'>
      <FiCornerRightUp size={18}/>
      </button>
      
    </div>
  )
}

