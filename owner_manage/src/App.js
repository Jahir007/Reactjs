import React from 'react';
import OwnerList from './components/OwnerList';
import OwnerContextProvider from './contexts/OwnerContext';


function App() {
  return (
    <div className="container-x1">
      <div className="table-responsive">
        <div className="table-wrapper">
          <OwnerContextProvider>
            <OwnerList />
          </OwnerContextProvider>
        </div>
      </div>
    </div>
  )
}

export default App