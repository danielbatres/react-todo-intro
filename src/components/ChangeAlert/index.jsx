import React from 'react'
import { useStorageListener } from '../../hooks/useStorageListener';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div>
        <p>Has changes</p>
        <button onClick={() => toggleShow(false)}>Reload information</button>
      </div>
    )
  } else {
    return null;
  }
}

export { ChangeAlert }
