import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Edge, Node } from "reactflow";
import { initialEdges, initialNodes } from "../../constants/initialNodes";

const newBot = {
  id: String(Date.now()),
  name: "New Bot",
  desc: "New Bot",
  flowchart: {
    nodes: initialNodes,
    edges: initialEdges,
  }
}

export interface Bot {
  id: string;
  name: string;
  desc: string;
  flowchart: {
    nodes: Node[];
    edges: Edge[];
  };
}

interface BotsState {
  list: Bot[];
  current: Bot | null,
}

const initialState: BotsState = {
  list: [],
  current: null,
};

const bots = createSlice({
  name: "bots",
  initialState,
  reducers: {
    /* LIST reducers */
    addNewBot: (state) => {
      state.list.push(newBot)
    },
    /* CURRENT reducers */
    selectBot: (state, action: PayloadAction<Bot>) => {
      state.current = action.payload
    },
    unselectBot: (state) => {
      state.current = null
    },
  }
});

export const {
  addNewBot,
  selectBot,
  unselectBot,
} = bots.actions;

export default bots.reducer;