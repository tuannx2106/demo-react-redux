import React from 'react';
import './App.scss';
import StoreCard from './components/StoreCard'
import StoreEditModal from './components/StoreEditModal'

function App() {
  return (
    <div className="App">
      <div className="container">
        <StoreCard />
      </div>

      {/* <StoreEditModal /> */}
    </div>
  );
}

export default App;
