import { FETCH_ITEM, FILTER_ITEM } from "../Actions/AllResourceAction";

const init = {
  resources: [],
};

export const resourceReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH_ITEM: {
      return { ...state, resources: payload };
    }
    case FILTER_ITEM: {
      console.log(payload);
      return {
        ...state,
        resources: payload.data.filter((el) => el.tag.includes(payload.tag)),
      };
    }
    default:
      return { ...state };
  }
};
