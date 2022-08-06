export const USER_NAME = "USER_NAME";
export const userName = (name) => {
  return {
    type: USER_NAME,
    payload: name,
  };
};
