import React from 'react'
import  OwnerContextProvider  from '../contexts/OwnerContext'
import  OwnerList  from './OwnerList'

const OwnerPage = () => {
  return (
    <div className="container">
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

export default OwnerPage;