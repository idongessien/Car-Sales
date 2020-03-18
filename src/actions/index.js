export const addFeat = newItem => {
    return { type: "ADD_FEATURE", payload: newItem };
  };
  
  export const delFeat = deleteItem => {
    return { type: "DELETE_FEATURE", payload: deleteItem };
  };