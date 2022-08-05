export const FETCH_ITEM = "FETCH_ITEM";
export const FILTER_ITEM = "FILTER_ITEM";
export const fetchItem = (item) => {
  return {
    type: FETCH_ITEM,
    payload: item,
  };
};

export const filterItem = ({ data, tag }) => {
  return {
    type: FILTER_ITEM,
    payload: { data, tag },
  };
};
