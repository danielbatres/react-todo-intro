import React, { useState } from 'react'

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    
    return (
      <WrappedComponent
       show={storageChange} 
       toggleShow={setStorageChange}
      />
    )
  }
}

export { withStorageListener }