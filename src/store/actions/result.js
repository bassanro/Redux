import * as actionTypes from './actionsTypes';

// Sync Action creator
export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

// Asnc function
export const storeResult = res => {
  // these are actions
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      //Asyn action creator.
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = id => {
  // these are actions
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  };
};
