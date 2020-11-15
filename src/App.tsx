import React from 'react';
import './App.scss';
import AppRouter from './AppRouter';
import AppHeader from './Components/Header/AppHeader';

function App() {
  return (
    <div className="App d-flex">
      <AppHeader/>
      <main className="content">
        <div className="toolbar" />
        <AppRouter/>
      </main>
    </div>
  );
}

export default App;
