export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  // these are actions
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  // these are actions
  return {
    type: DECREMENT
  };
};

export const add = value => {
  // these are actions
  return {
    type: ADD,
    value: value
  };
};

export const subtract = value => {
  // these are actions
  return {
    type: SUBTRACT,
    value: value
  };
};

// Sync Action creator
export const saveResult = res => {
  return {
    type: STORE_RESULT,
    result: res
  };
};

// Asnc function
export const storeResult = res => {
  // these are actions
  return dispatch => {
    setTimeout(() => {
      //Asyn action creator.
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = id => {
  // these are actions
  return {
    type: DELETE_RESULT,
    resultElId: id
  };
};
