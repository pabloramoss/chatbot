import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SidebarState {
  sidebarOpen: boolean;
}

const initialState: SidebarState = {
  sidebarOpen: false,
};

const sidebarRight = createSlice({
  name: "sidebarRight",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload
    }
  }
});

export const {
  setSidebarOpen,
} = sidebarRight.actions;

export default sidebarRight.reducer;