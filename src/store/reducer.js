const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case 'DELETE_RESULT':
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
