import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputSection from './components/InputSection';
import CalculateSection from './components/CalculateSection';
import ResultSection from './components/ResultSection';

function App() {
  return (
    <div className="grid grid-cols-3 gap-6 p-5">
      <InputSection />
      <CalculateSection />
      <ResultSection />
    </div>
  );
}

export default App;
