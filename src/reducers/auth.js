import { SIGN_IN, SIGN_UP } from "../actions/types";

const iniitalState = {
  user: {
    _id: "",
    username: ""
  },
  error: false
};

export default function(state = iniitalState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.user
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.user
      };
    default:
      return { ...state };
  }
}
