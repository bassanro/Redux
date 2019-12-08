export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues //Expect a JS object.
  };
};
