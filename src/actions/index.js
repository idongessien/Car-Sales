export const addFeature = newItem => {
  return { type: "ADD_FEATURE", payload: newItem };
};

export const deleteFeature = deleteItem => {
  return { type: "DELETE_FEATURE", payload: deleteItem };
};
