// App.js

import React from 'react';
import QuickMarkPreviewer from './QuickMarkPreviewer'; // Import the QuickMark Previewer component
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>QuickMark Previewer</h1>
      <QuickMarkPreviewer /> {/* Render the QuickMark Previewer component */}
    </div>
  );
}

export default App;
