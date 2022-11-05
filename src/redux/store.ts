import {configureStore} from "@reduxjs/toolkit";

import flowchartReducer from "../redux/slices/flowChartSlice";
import sidebarRightReducer from "../redux/slices/sidebarRightSlice";
import botsReducer from "../redux/slices/botsSlice";

export const store = configureStore({
  reducer: {
    flowchart: flowchartReducer,
    sidebar: sidebarRightReducer,
    bots: botsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;