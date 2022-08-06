import { USER_NAME } from "../Actions/UserAction";

const init = {
  user: "",
};
export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case USER_NAME: {
      return {
        ...state,
        user: payload,
      };
    }
    default: {
      return state;
    }
  }
};
