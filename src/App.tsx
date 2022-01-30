import React, { useState } from 'react';
import './App.css';
import { AppProvider } from './context/index'
import { LoginPage } from './pages/login';
function App() {
  return (
    <AppProvider >
      <div className="App">
      <LoginPage />
      </div>
    </AppProvider>
  );
}

export default App;
