import React from 'react'
import  GuestContextProvider  from '../contexts/GuestContext'
import  GuestList from './GuestList'

const GuestPage = () => {
  return (
    <div className="container">
      <div className="table-responsive">
        <div className="table-wrapper">
          <GuestContextProvider>
            <GuestList />
          </GuestContextProvider>
        </div>
      </div>
    </div>
  )
}

export default GuestPage;