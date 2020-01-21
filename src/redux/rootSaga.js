import { all } from "redux-saga/effects";

import auth from "./auth/authSagas";
import user from "./user/userSagas";

export default function* rootSaga() {
  return yield all([auth, user]);
}
