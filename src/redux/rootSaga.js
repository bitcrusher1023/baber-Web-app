import { all } from "redux-saga/effects";

import auth from "./auth/authSagas";

export default function* rootSaga() {
  return yield all([auth]);
}
