export const RESOURCE_DETAILS = "RESOURCE_DETAILS";
export const SORT_ITEM = "SORT_ITEM";
export const DELETE = "DELETE";
export const resourceDetails = (item) => {
  return {
    type: RESOURCE_DETAILS,
    payload: item,
  };
};

export const sortItem = (by) => {
  return {
    type: SORT_ITEM,
    payload: by,
  };
};

export const deleteItem = (obj) => {
  return {
    type: DELETE,
    payload: obj,
  };
};
