export const registerUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
        users: action.payload,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        success: false,
      };

    default:
      return state;
  }
};
