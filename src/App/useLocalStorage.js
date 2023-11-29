import { useEffect, useReducer } from 'react';

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { 
    sincronizedItem,
    error,
    loading,
    item,
  } = state;

  const onError = error => dispatch({ types: actionTypes.error, payload: error });
  const onSuccess = item => {
    dispatch({ type: actionTypes.success, payload: item });
  }
  const onSave = item => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronizedItem]);

  const saveItems = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));

      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => onSincronize();

  return {
    item,
    saveItems,
    loading,
    error,
    sincronizeItem,
  };
};

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizeItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };
