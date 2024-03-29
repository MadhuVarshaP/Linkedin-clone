import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <Sidebar />
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;
