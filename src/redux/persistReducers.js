import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// receives all reducers as parameters
export default reducers => {
  const persistedReducer = persistReducer(
    {
      // key used by the url, usually the name of application
      key: "barberapp",
      storage,
      // which reducers to persist in storage
      whitelist: ["auth", "user"]
    },
    reducers
  );
  return persistedReducer;
};
