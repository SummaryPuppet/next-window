import { configureStore } from "@reduxjs/toolkit"
import windowReducer from "../features/windows/windowSlice"
import settingReducer from "../features/settings/settingSlice"

export default configureStore({
  reducer: {
    win: windowReducer,
    setting: settingReducer
  }
})
