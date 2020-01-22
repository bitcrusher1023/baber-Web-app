import { takeLatest, all, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./userActions";

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...otherProps } = payload.data;

    const profile = Object.assign(
      {
        name,
        email
      },
      otherProps.oldPassword ? otherProps : {}
    );

    const response = yield call(api.put, "/users", profile);
    console.log(response.data);
    toast.success("Perfil atualizado com sucesso");

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error("Erro ao atualizar perfil, confire seus dados");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
