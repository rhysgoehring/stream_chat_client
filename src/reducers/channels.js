import { CREATE_CHANNEL } from "../actions/types";

const initialState = {
  channels: [],
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.data]
      };
    default:
      return { ...state };
  }
}
