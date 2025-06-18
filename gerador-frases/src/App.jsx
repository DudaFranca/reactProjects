import { useState } from 'react';
import './App.css';

function App() {
  const [frases, setFrases] = useState([
    'Você é capaz de coisas incríveis!',
    'Acredite no seu potencial!',
    'O sucesso é a soma de pequenos esforços repetidos todos os dias.',
    'Nunca desista dos seus sonhos.',
    'Hoje é um bom dia para começar algo novo!',
  ]);
  const [fraseAtual, setFraseAtual] = useState('');
  const [novaFrase, setNovaFrase] = useState('');

  const gerarFrase = () => {
    const indice = Math.floor(Math.random() * frases.length);
    setFraseAtual(frases[indice]);
  };

  const copiarFrase = () => {
    if (fraseAtual) {
      navigator.clipboard.writeText(fraseAtual);
      alert('Frase copiada!');
    } else {
      alert('Por favor, gere uma frase primeiro!');
    }
  };

  return (
    <div className="container">
      <h1>💡 Frase Motivacional</h1>
      <p className="frase">{fraseAtual}</p>
      <button onClick={gerarFrase}>Gerar Frase</button>
      <button onClick={copiarFrase} style={{ margin: '0px 10px' }}>
        Copiar Frase
      </button>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Digite uma nova frase"
          value={novaFrase}
          onChange={(e) => setNovaFrase(e.target.value)}
          style={{ padding: '10px', width: '80%' }}
        />
        <button
          onClick={() => {
            if (novaFrase.trim() === '') {
              alert('Digite uma frase válida.');
              return;
            }

            setFrases([...frases, novaFrase.trim()]);
            setNovaFrase('');
            alert('Frase adicionada com sucesso!');
          }}
          style={{ marginTop: '10px' }}
        >
          Adicionar Frase
        </button>
      </div>
    </div>
  );
}

export default App;
