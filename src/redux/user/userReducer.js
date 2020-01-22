import produce from "immer";

const INITIAL_STATE = {
  user: null
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      // draft is a copy of state
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    case "@user/UPDATE_PROFILE_SUCCESS":
      return produce(state, draft => {
        draft.user = action.payload.user;
      });

    default:
      return state;
  }
}
