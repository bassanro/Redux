import * as actionTypes from './actionsTypes';

export const increment = () => {
  // these are actions
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  // these are actions
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = value => {
  // these are actions
  return {
    type: actionTypes.ADD,
    value: value
  };
};

export const subtract = value => {
  // these are actions
  return {
    type: actionTypes.SUBTRACT,
    value: value
  };
};
