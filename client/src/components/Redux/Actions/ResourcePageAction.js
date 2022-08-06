export const RESOURCE_DETAILS = "RESOURCE_DETAILS";
export const RESOURCE_ITEM = "RESOURCE_ITEM";
export const SORT_ITEM = "SORT_ITEM";
export const DELETE = "DELETE";
export const resourceDetails = (item) => {
  return {
    type: RESOURCE_DETAILS,
    payload: item,
  };
};
export const resourceItem = (data) => {
  return {
    type: RESOURCE_ITEM,
    payload: data,
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
