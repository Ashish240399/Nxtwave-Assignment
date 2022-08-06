import {
  DELETE,
  RESOURCE_DETAILS,
  RESOURCE_ITEM,
  SORT_ITEM,
} from "../Actions/ResourcePageAction";

const init = {
  resource_details: {},
  resource_item: [],
};
export const resourceDetailsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case RESOURCE_DETAILS: {
      return {
        ...state,
        resource_details: payload,
      };
    }
    case RESOURCE_ITEM: {
      console.log(payload);
      return {
        ...state,
        resource_item: payload,
      };
    }
    case SORT_ITEM: {
      return {
        ...state,
        resource_item: [...state.resource_item].sort((a, b) => {
          if (payload === "ascending") {
            if (a.title < b.title) {
              return -1;
            }
          } else if (payload === "descending") {
            if (a.title > b.title) {
              return -1;
            }
          }
        }),
      };
    }
    case DELETE: {
      let ids = [];
      for (let key in payload) {
        ids.push(key);
      }
      return {
        ...state,
        resource_item: [...state.resource_item].filter(function (item) {
          return ids.indexOf(item.id) === -1;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
