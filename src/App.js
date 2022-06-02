import './App.css';
import bolso from './Assets/images/bolso.jpg';
import lula from './Assets/images/lula.jpg'
import logo from './Assets/images/logoEsquete.png'
import { FiAlignJustify } from 'react-icons/fi';

import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo}/>
        
        <FiAlignJustify className='icon-menu' size={30}/>
        
       
      </header>
        <p className="title">Em quem você votaria para presidente!?</p>
      <div className="imgVotos">
    
        <img className='img1' src={bolso} alt='Fotos dos candidatos' />
        <p className='apuracaoVoto1'>Bolsonaro 54%</p>
        <img className='img1' src={lula} alt='Fotos dos candidatos' />
        <p className='apuracaoVoto2'>Lula 46%</p>

        <button className="btn-share">
          <p className="txt-share" >Compartilhe essa pesquisa</p>
        </button>
      </div>
      <Chat/>
      
    </div>
  );
}

export default App;
