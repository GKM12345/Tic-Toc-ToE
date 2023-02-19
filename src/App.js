import React from 'react';
import './App.css';
import Board from './Components/Board';

function App() {
  return (
       <div className='Tic-Toc-Toe'>
          <div className='Game-Heading'>Tic-Toc-Toe</div>
          <Board />
       </div>
  );
}

export default App;
