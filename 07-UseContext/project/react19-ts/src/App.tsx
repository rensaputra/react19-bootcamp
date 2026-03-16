import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import AppContext
 from './store/AppContext';
 
function App() {
  const str = "Hello world";
  return (
    <div>
      <AppContext.Provider value={str}>
        <ComponentA />
      </AppContext.Provider>
    </div>
  );
}

export default App;
