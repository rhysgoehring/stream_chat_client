import { SIGN_IN } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return state;
    default:
      return { ...state };
  }
}
