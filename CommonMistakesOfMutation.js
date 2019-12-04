/* Immutable Update Patterns on reduxjs.org:

http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html

Common Mistake #1: New variables that point to the same objects


*/

function updateNestedState(state, action) {
  let nestedState = state.nestedState;
  // ERROR: this directly modifies the existing object reference - don't do this!
  nestedState.nestedField = action.data;

  return {
    ...state,
    nestedState
  };
}

/* 

Common Mistake #2: Only making a shallow copy of one level
Another common version of this error looks like this:
*/

function updateNestedState(state, action) {
  // Problem: this only does a shallow copy!
  let newState = { ...state };

  // ERROR: nestedState is still the same object!
  newState.nestedState.nestedField = action.data;

  return newState;
}

//Correct Approach: Copying All Levels of Nested Data
function updateVeryNestedField(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  };
}

//This is one of several reasons why you are encouraged to keep your state flattened, and compose reducers as much as possible.

/*
Inserting and Removing Items in Arrays
======================================
Normally, a Javascript array's contents are modified using mutative functions like push, 
unshift, and splice. Since we don't want to mutate state directly in reducers, 
those should normally be avoided. Because of that, you might see "insert" or "remove" 
behavior written like this:
*/

function insertItem(array, action) {
  return [
    ...array.slice(0, action.index),
    action.item,
    ...array.slice(action.index)
  ];
}

function removeItem(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
}

//This means that we could also write the insert and remove functions like this:

function insertItem(array, action) {
  let newArray = array.slice();
  newArray.splice(action.index, 0, action.item);
  return newArray;
}

function removeItem(array, action) {
  let newArray = array.slice();
  newArray.splice(action.index, 1);
  return newArray;
}

//The remove function could also be implemented as:
function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index);
}

// Updating an Item in an Array.
// Updating one item in an array can be accomplished by using Array.map, returning a new value for the item we want to update, and returning the existing values for all other items:

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item
    };
  });
}

// Immutable Update Utility Libraries
state = dotProp.set(state, `todos.${index}.complete`, true);

//Others, like immutability-helper (a fork of the now-deprecated React Immutability Helpers addon), use nested values and helper functions:

var collection = [1, 2, { a: [12, 17, 15] }];
var newCollection = update(collection, {
  2: { a: { $splice: [[1, 1, 13, 14]] } }
});
