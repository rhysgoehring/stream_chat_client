import { SIGN_IN } from "../actions/types";

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
        // user: {
        //   _id: action.data._id,
        //   username: action.data.username
        // }
        user: action.data
      };
    default:
      return { ...state };
  }
}
