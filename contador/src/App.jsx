import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  const [inputLimite, setInputLimite] = useState(''); // Valor do input
  const [limiteMaximo, setLimiteMaximo] = useState(null); // Valor aplicado

  const aumentarContador = () => {
    if (limiteMaximo !== null && contador >= limiteMaximo) {
      alert('Você atingiu o limite!');
      return; // Evita somar mais
    }

    setContador(contador + 1);
  };

  const zerarContador = () => {
    setContador(0);
  };

  const limiteContador = () => {
    const valorConvertido = parseInt(inputLimite);

    if (!isNaN(valorConvertido)) {
      setLimiteMaximo(valorConvertido);
      alert(`Limite definido para: ${valorConvertido}`);
      setInputLimite('');
    } else {
      alert('Por favor, insira um número válido.');
      setInputLimite('');
    }
  };

  const removerLimite = () => {
    setLimiteMaximo(null);
    setInputLimite('');
    alert('Limite removido com sucesso!');
  };

  return (
    <div className="container">
      <h1>🖱️ Contador de Cliques</h1>
      <p>
        Você clicou <strong>{contador}</strong> vezes
      </p>

      <div className="botoes">
        <button onClick={aumentarContador}>Clique aqui</button>
        <button onClick={zerarContador}>Zerar</button>
      </div>

      <div className="input">
        <label>Valor máximo do contador</label> <br />
        <input
          type="number"
          value={inputLimite}
          onChange={(e) => setInputLimite(e.target.value)}
        />
        <br />
        <button onClick={limiteContador}>Enviar</button>
        <button onClick={removerLimite}>Remover</button>
      </div>
    </div>
  );
}

export default App;
