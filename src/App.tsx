import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import AppHeader from './Components/Header/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppRouter/>
    </div>
  );
}

export default App;
