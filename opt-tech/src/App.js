import React, { useEffect} from 'react';

import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useEffect(false);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new</p>}
    </div>
  );
}

export default App;
