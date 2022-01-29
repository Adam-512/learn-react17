import React, { useState } from 'react';
import './App.css';
import { AppProvider } from './context/index'
import { TestForm } from './components/form'
function App() {
  return (
    <AppProvider >
      <div className="App">
        <TestForm />
      </div>
    </AppProvider>
  );
}

export default App;
