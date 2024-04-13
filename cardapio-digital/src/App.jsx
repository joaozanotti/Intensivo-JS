import React from 'react';
import './App.css';
import hashtauranteImg from './assets/hashtaurante.webp';
import Navegacao from './navegacao';
import ItemCardapio from './itemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);

  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];
  const nomeSecoes = ['Pratos Principais', 'Sobremesas', 'Bebidas'];

  return (
    <>
      <img src={hashtauranteImg} className='capa'/>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada}/>
      <h2 className='titulo'>{nomeSecoes[paginaSelecionada]}</h2>
      <div className='menu'>
        {secoesMenu[paginaSelecionada].map((prato) => (
          <ItemCardapio
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
      </div>
    </>
  );
}

export default App;