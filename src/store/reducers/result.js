import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result // dipatched from onStore result.
        })
      });
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(result => {
        return result.id !== action.resultElId;
      });
      return updateObject(state, { results: updatedArray });
  }

  return state;
};

export default reducer;
