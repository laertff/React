import './App.css';
import Button from './componentes/Button';
import Imagem from './componentes/Imagem/Meme.jpg';

function App() {
  return (
    <div >

      <h1 id="text"> Apresentação Git & GitHub </h1>

      <div className='img'>
        <img src={Imagem} width="350px" height="350px"/>
      </div>

      < Button />
           
    </div>
  );
}

export default App;
