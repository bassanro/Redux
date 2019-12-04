import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      // const id =2 ;
      // Since items are thereself objects,it's still a referecnce to old state.
      // However delete worls fine.
      // const newArray =  [...state.results];
      // newArray.splice(id,1);
      const updatedArray = state.results.filter(result => {
        return result.id !== action.resultElId;
      });
      return {
        ...state,
        results: updatedArray
      };
  }

  return state;
};

export default reducer;
